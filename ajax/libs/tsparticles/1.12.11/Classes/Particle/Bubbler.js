"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType_1 = require("../../Enums/ProcessBubbleType");
var Utils_1 = require("../Utils/Utils");
var HoverMode_1 = require("../../Enums/Modes/HoverMode");
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var Constants_1 = require("../Utils/Constants");
var Bubbler = (function () {
    function Bubbler(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Bubbler.prototype.bubble = function () {
        var container = this.container;
        var options = container.options;
        var hoverEnabled = options.interactivity.events.onHover.enable;
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickEnabled = options.interactivity.events.onClick.enable;
        var clickMode = options.interactivity.events.onClick.mode;
        if (hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode)) {
            this.hoverBubble();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.clickBubble();
        }
    };
    Bubbler.prototype.init = function () {
        var particle = this.particle;
        this.opacity = particle.opacity.value;
        this.radius = particle.radius;
    };
    Bubbler.prototype.process = function (distMouse, timeSpent, data) {
        var container = this.container;
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
        var bubbleParam = data.bubbleObj.optValue;
        var bubbleDistance = container.retina.bubbleModeDistance;
        var particlesParam = data.particlesObj.optValue;
        var pObjBubble = data.bubbleObj.value;
        var pObj = data.particlesObj.value || 0;
        var type = data.type;
        if (bubbleParam !== particlesParam) {
            if (!container.bubble.durationEnd) {
                if (distMouse <= bubbleDistance) {
                    var obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;
                    if (obj !== bubbleParam) {
                        var value = pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                        if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                            this.radius = value;
                        }
                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                            this.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                        this.radius = undefined;
                    }
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                        this.opacity = undefined;
                    }
                }
            }
            else if (pObjBubble) {
                var value = bubbleParam * 2 - pObj - (timeSpent * (pObj - bubbleParam) / bubbleDuration);
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    this.radius = value;
                }
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    this.opacity = value;
                }
            }
        }
    };
    Bubbler.prototype.clickBubble = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var mouseClickPos = container.interactivity.mouse.clickPosition || { x: 0, y: 0 };
        var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(particle.position, mouseClickPos);
        var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;
        if (container.bubble.clicking) {
            if (timeSpent > options.interactivity.modes.bubble.duration) {
                container.bubble.durationEnd = true;
            }
            if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
                container.bubble.clicking = false;
                container.bubble.durationEnd = false;
            }
            var sizeData = {
                bubbleObj: {
                    optValue: container.retina.bubbleModeSize,
                    value: this.radius,
                },
                particlesObj: {
                    optValue: container.retina.sizeValue,
                    value: this.particle.radius,
                },
                type: ProcessBubbleType_1.ProcessBubbleType.size,
            };
            this.process(distMouse, timeSpent, sizeData);
            var opacityData = {
                bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: this.opacity,
                },
                particlesObj: {
                    optValue: options.particles.opacity.value,
                    value: this.particle.opacity.value,
                },
                type: ProcessBubbleType_1.ProcessBubbleType.opacity,
            };
            this.process(distMouse, timeSpent, opacityData);
        }
    };
    Bubbler.prototype.hoverBubble = function () {
        var container = this.container;
        var particle = this.particle;
        var mousePos = container.interactivity.mouse.position || {
            x: 0,
            y: 0,
        };
        var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
        var ratio = 1 - distMouse / container.retina.bubbleModeDistance;
        if (distMouse <= container.retina.bubbleModeDistance) {
            if (ratio >= 0 && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
                this.hoverBubbleSize(ratio);
                this.hoverBubbleOpacity(ratio);
            }
        }
        else {
            this.init();
        }
        if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
            this.init();
        }
    };
    Bubbler.prototype.hoverBubbleSize = function (ratio) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var modeSize = options.interactivity.modes.bubble.size;
        var optSize = options.particles.size.value;
        var pSize = particle.radius;
        if (container.retina.bubbleModeSize > container.retina.sizeValue) {
            var size = pSize + modeSize * ratio;
            if (size > pSize && size <= modeSize) {
                this.radius = size;
            }
        }
        else if (container.retina.bubbleModeSize < container.retina.sizeValue) {
            var size = pSize - (optSize - modeSize) * ratio;
            if (size < pSize && size >= modeSize) {
                this.radius = size;
            }
        }
    };
    Bubbler.prototype.hoverBubbleOpacity = function (ratio) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        var optOpacity = options.particles.opacity.value;
        var pOpacity = particle.opacity.value;
        if (modeOpacity > optOpacity) {
            var opacity = pOpacity + modeOpacity * ratio;
            if (opacity > pOpacity && opacity <= modeOpacity) {
                this.opacity = opacity;
            }
        }
        else if (modeOpacity < optOpacity) {
            var opacity = pOpacity - (optOpacity - modeOpacity) * ratio;
            if (opacity < pOpacity && opacity >= modeOpacity) {
                this.opacity = opacity;
            }
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;
