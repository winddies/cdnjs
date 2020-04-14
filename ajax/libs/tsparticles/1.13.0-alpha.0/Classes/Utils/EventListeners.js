import { ClickMode } from "../../Enums/Modes/ClickMode";
import { InteractivityDetect } from "../../Enums/InteractivityDetect";
import { PolygonMaskType } from "../../Enums/PolygonMaskType";
import { Constants } from "./Constants";
import { Emitter } from "../Emitter";
import { Utils } from "./Utils";
export class EventListeners {
    constructor(container) {
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchStartHandler = (e) => this.mouseTouchMove(e);
        this.touchMoveHandler = (e) => this.mouseTouchMove(e);
        this.touchEndHandler = () => this.mouseTouchFinish();
        this.mouseLeaveHandler = () => this.mouseTouchFinish();
        this.touchCancelHandler = () => this.mouseTouchFinish();
        this.touchEndClickHandler = (e) => this.mouseTouchClick(e);
        this.mouseUpHandler = (e) => this.mouseTouchClick(e);
        this.visibilityChangeHandler = () => this.handleVisibilityChange();
        this.resizeHandler = () => this.handleWindowResize();
    }
    static manageListener(element, event, handler, add, options) {
        if (add) {
            EventListeners.addListener(element, event, handler, options);
        }
        else {
            EventListeners.removeListener(element, event, handler, options);
        }
    }
    static addListener(element, event, handler, options) {
        element.addEventListener(event, handler, options);
    }
    static removeListener(element, event, handler, options) {
        element.removeEventListener(event, handler, options);
    }
    addListeners() {
        this.manageListeners(true);
    }
    removeListeners() {
        this.manageListeners(false);
    }
    manageListeners(add) {
        const container = this.container;
        const options = container.options;
        if (options.interactivity.detectsOn === InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (options.interactivity.detectsOn === InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        const interactivityEl = container.interactivity.element;
        if (interactivityEl && (options.interactivity.events.onHover.enable ||
            options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    }
    handleWindowResize() {
        const container = this.container;
        const options = container.options;
        if (!container.canvas.element) {
            return;
        }
        container.canvas.dimension.width = container.canvas.element.offsetWidth;
        container.canvas.dimension.height = container.canvas.element.offsetHeight;
        if (container.retina.isRetina) {
            container.canvas.dimension.width *= container.retina.pixelRatio;
            container.canvas.dimension.height *= container.retina.pixelRatio;
        }
        container.canvas.element.width = container.canvas.dimension.width;
        container.canvas.element.height = container.canvas.dimension.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (const emitter of container.emitters) {
            emitter.resize();
        }
        container.polygon.redraw();
    }
    handleVisibilityChange() {
        const container = this.container;
        const options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            container.play();
        }
    }
    mouseTouchMove(e) {
        var _a, _b, _c;
        const container = this.container;
        const options = container.options;
        let pos;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            const mouseEvent = e;
            if (container.interactivity.element === window && container.canvas.element) {
                const clientRect = container.canvas.element.getBoundingClientRect();
                pos = {
                    x: mouseEvent.clientX - clientRect.left,
                    y: mouseEvent.clientY - clientRect.top,
                };
            }
            else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
                const source = mouseEvent.target;
                const target = mouseEvent.currentTarget;
                if (source && target) {
                    const sourceRect = source.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                pos = {
                    x: mouseEvent.offsetX || mouseEvent.clientX,
                    y: mouseEvent.offsetY || mouseEvent.clientY,
                };
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            const touchEvent = e;
            const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            const canvasRect = (_a = container.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
            };
        }
        container.interactivity.mouse.position = pos;
        if (container.retina.isRetina) {
            container.interactivity.mouse.position.x *= container.retina.pixelRatio;
            container.interactivity.mouse.position.y *= container.retina.pixelRatio;
        }
        container.interactivity.status = Constants.mouseMoveEvent;
    }
    mouseTouchFinish() {
        const container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants.mouseLeaveEvent;
    }
    mouseTouchClick(e) {
        const container = this.container;
        const options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType.inline) {
            if (container.polygon.checkInsidePolygon(container.interactivity.mouse.position)) {
                this.doMouseTouchClick(e);
            }
        }
        else {
            this.doMouseTouchClick(e);
        }
    }
    doMouseTouchClick(e) {
        const container = this.container;
        const options = container.options;
        if (this.canPush) {
            if (container.interactivity.mouse.position) {
                container.interactivity.mouse.clickPosition = {
                    x: container.interactivity.mouse.position.x,
                    y: container.interactivity.mouse.position.y,
                };
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            const pushNb = options.interactivity.modes.push.quantity;
            const removeNb = options.interactivity.modes.remove.quantity;
            switch (options.interactivity.events.onClick.mode) {
                case ClickMode.push:
                    if (options.particles.move.enable) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else {
                        if (options.interactivity.modes.push.quantity === 1) {
                            container.particles.push(pushNb, container.interactivity.mouse);
                        }
                        else if (options.interactivity.modes.push.quantity > 1) {
                            container.particles.push(pushNb);
                        }
                    }
                    break;
                case ClickMode.remove:
                    container.particles.removeQuantity(removeNb);
                    break;
                case ClickMode.bubble:
                    container.bubble.clicking = true;
                    break;
                case ClickMode.repulse:
                    container.repulse.clicking = true;
                    container.repulse.count = 0;
                    container.repulse.finish = false;
                    setTimeout(() => {
                        if (!container.destroyed) {
                            container.repulse.clicking = false;
                        }
                    }, options.interactivity.modes.repulse.duration * 1000);
                    break;
                case ClickMode.emitter:
                    let emitterModeOptions;
                    const modeEmitters = options.interactivity.modes.emitters;
                    if (modeEmitters instanceof Array) {
                        if (modeEmitters.length > 0) {
                            emitterModeOptions = Utils.itemFromArray(modeEmitters);
                        }
                    }
                    else {
                        emitterModeOptions = modeEmitters;
                    }
                    const emitterOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (options.emitters instanceof Array ?
                        Utils.itemFromArray(options.emitters) :
                        options.emitters);
                    const position = container.interactivity.mouse.clickPosition;
                    const emitter = new Emitter(container, emitterOptions, position);
                    container.emitters.push(emitter);
            }
        }
        e.preventDefault();
        if (e.type === "touchend") {
            setTimeout(() => this.mouseTouchFinish(), 500);
        }
        e.preventDefault();
    }
}
