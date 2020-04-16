"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var InteractivityDetect_1 = require("../../Enums/InteractivityDetect");
var PolygonMaskType_1 = require("../../Enums/PolygonMaskType");
var Constants_1 = require("./Constants");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl && (options.interactivity.events.onHover.enable ||
            options.interactivity.events.onClick.enable)) {
            this.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                this.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            this.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            this.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            this.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            this.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            this.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.manageListener = function (element, event, handler, add, options) {
        if (add) {
            this.addListener(element, event, handler, options);
        }
        else {
            this.removeListener(element, event, handler, options);
        }
    };
    EventListeners.prototype.addListener = function (element, event, handler, options) {
        element.addEventListener(event, handler, options);
    };
    EventListeners.prototype.removeListener = function (element, event, handler, options) {
        element.removeEventListener(event, handler, options);
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        if (!container.canvas.element) {
            return;
        }
        container.canvas.dimension.width = container.canvas.element.offsetWidth;
        container.canvas.dimension.height = container.canvas.element.offsetHeight;
        if (container.retina.isRetina) {
            container.canvas.dimension.width *= container.retina.pxRatio;
            container.canvas.dimension.height *= container.retina.pxRatio;
        }
        container.canvas.element.width = container.canvas.dimension.width;
        container.canvas.element.height = container.canvas.dimension.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        container.polygon.redraw();
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
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
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var pos;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (container.interactivity.element === window && container.canvas.element) {
                var clientRect = container.canvas.element.getBoundingClientRect();
                pos = {
                    x: mouseEvent.clientX - clientRect.left,
                    y: mouseEvent.clientY - clientRect.top,
                };
            }
            else if (options.interactivity.detectsOn === InteractivityDetect_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
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
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = (_a = container.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
            };
        }
        container.interactivity.mouse.position = pos;
        if (container.retina.isRetina) {
            container.interactivity.mouse.position.x *= container.retina.pxRatio;
            container.interactivity.mouse.position.y *= container.retina.pxRatio;
        }
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (container.polygon.checkInsidePolygon(container.interactivity.mouse.position)) {
                this.doMouseTouchClick(e);
            }
        }
        else {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            if (container.interactivity.mouse.position) {
                container.interactivity.mouse.clickPosition = {
                    x: container.interactivity.mouse.position.x,
                    y: container.interactivity.mouse.position.y,
                };
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            var pushNb = options.interactivity.modes.push.quantity;
            var removeNb = options.interactivity.modes.remove.quantity;
            switch (options.interactivity.events.onClick.mode) {
                case ClickMode_1.ClickMode.push:
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
                case ClickMode_1.ClickMode.remove:
                    container.particles.removeQuantity(removeNb);
                    break;
                case ClickMode_1.ClickMode.bubble:
                    container.bubble.clicking = true;
                    break;
                case ClickMode_1.ClickMode.repulse:
                    container.repulse.clicking = true;
                    container.repulse.count = 0;
                    container.repulse.finish = false;
                    setTimeout(function () {
                        if (!container.destroyed) {
                            container.repulse.clicking = false;
                        }
                    }, options.interactivity.modes.repulse.duration * 1000);
                    break;
            }
        }
        e.preventDefault();
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
        e.preventDefault();
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;
