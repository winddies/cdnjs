import { ProcessBubbleType } from "../../Enums/ProcessBubbleType";
import { Utils } from "../Utils/Utils";
import { HoverMode } from "../../Enums/Modes/HoverMode";
import { ClickMode } from "../../Enums/Modes/ClickMode";
import { Constants } from "../Utils/Constants";
export class Bubbler {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    static reset(particle) {
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
    }
    bubble() {
        const container = this.container;
        const options = container.options;
        const hoverEnabled = options.interactivity.events.onHover.enable;
        const hoverMode = options.interactivity.events.onHover.mode;
        const clickEnabled = options.interactivity.events.onClick.enable;
        const clickMode = options.interactivity.events.onClick.mode;
        if (hoverEnabled && Utils.isInArray(HoverMode.bubble, hoverMode)) {
            this.hoverBubble();
        }
        else if (clickEnabled && Utils.isInArray(ClickMode.bubble, clickMode)) {
            this.clickBubble();
        }
    }
    process(distMouse, timeSpent, data) {
        const container = this.container;
        const particle = this.particle;
        const options = container.options;
        const bubbleDuration = options.interactivity.modes.bubble.duration;
        const bubbleParam = data.bubbleObj.optValue;
        const bubbleDistance = container.retina.bubbleModeDistance;
        const particlesParam = data.particlesObj.optValue;
        const pObjBubble = data.bubbleObj.value;
        const pObj = data.particlesObj.value || 0;
        const type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        const value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                        if (type === ProcessBubbleType.size) {
                            particle.bubble.radius = value;
                        }
                        if (type === ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType.size) {
                        particle.bubble.radius = undefined;
                    }
                    if (type === ProcessBubbleType.opacity) {
                        particle.bubble.opacity = undefined;
                    }
                }
            }
            else if (pObjBubble) {
                const value = bubbleParam * 2 - pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                if (type === ProcessBubbleType.size) {
                    particle.bubble.radius = value;
                }
                if (type === ProcessBubbleType.opacity) {
                    particle.bubble.opacity = value;
                }
            }
        }
    }
    clickBubble() {
        var _a;
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        const mouseClickPos = container.interactivity.mouse.clickPosition || { x: 0, y: 0 };
        const distMouse = Utils.getDistanceBetweenCoordinates(particle.position, mouseClickPos);
        const timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
        if (container.bubble.clicking) {
            if (timeSpent > options.interactivity.modes.bubble.duration) {
                container.bubble.durationEnd = true;
            }
            if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                container.bubble.clicking = false;
                container.bubble.durationEnd = false;
            }
            const sizeData = {
                bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: particle.bubble.radius,
                },
                particlesObj: {
                    optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                    value: particle.size.value,
                },
                type: ProcessBubbleType.size,
            };
            this.process(distMouse, timeSpent, sizeData);
            const opacityData = {
                bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: particle.bubble.opacity,
                },
                particlesObj: {
                    optValue: particle.particlesOptions.opacity.value,
                    value: particle.opacity.value,
                },
                type: ProcessBubbleType.opacity,
            };
            this.process(distMouse, timeSpent, opacityData);
        }
    }
    hoverBubble() {
        const container = this.container;
        const particle = this.particle;
        const mousePos = container.interactivity.mouse.position || {
            x: 0,
            y: 0,
        };
        const distMouse = Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
        const ratio = 1 - distMouse / container.retina.bubbleModeDistance;
        if (distMouse <= container.retina.bubbleModeDistance) {
            if (ratio >= 0 && container.interactivity.status === Constants.mouseMoveEvent) {
                this.hoverBubbleSize(ratio);
                this.hoverBubbleOpacity(ratio);
            }
        }
        else {
            Bubbler.reset(particle);
        }
        if (container.interactivity.status === Constants.mouseLeaveEvent) {
            Bubbler.reset(particle);
        }
    }
    hoverBubbleSize(ratio) {
        var _a, _b;
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        const modeSize = options.interactivity.modes.bubble.size;
        const optSize = particle.particlesOptions.size.value;
        const pSize = particle.size.value;
        if (container.retina.bubbleModeSize > ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
            const size = pSize + modeSize * ratio;
            if (size > pSize && size <= modeSize) {
                particle.bubble.radius = size;
            }
        }
        else if (container.retina.bubbleModeSize < ((_b = particle.sizeValue) !== null && _b !== void 0 ? _b : container.retina.sizeValue)) {
            const size = pSize - (optSize - modeSize) * ratio;
            if (size < pSize && size >= modeSize) {
                particle.bubble.radius = size;
            }
        }
    }
    hoverBubbleOpacity(ratio) {
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        const modeOpacity = options.interactivity.modes.bubble.opacity;
        const optOpacity = particle.particlesOptions.opacity.value;
        const pOpacity = particle.opacity.value;
        if (modeOpacity > optOpacity) {
            const opacity = pOpacity + modeOpacity * ratio;
            if (opacity > pOpacity && opacity <= modeOpacity) {
                particle.bubble.opacity = opacity;
            }
        }
        else if (modeOpacity < optOpacity) {
            const opacity = pOpacity - (optOpacity - modeOpacity) * ratio;
            if (opacity < pOpacity && opacity >= modeOpacity) {
                particle.bubble.opacity = opacity;
            }
        }
    }
}
