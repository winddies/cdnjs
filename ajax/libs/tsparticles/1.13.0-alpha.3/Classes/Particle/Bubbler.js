"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessBubbleType_1 = require("../../Enums/ProcessBubbleType");
var Utils_1 = require("../Utils/Utils");
var HoverMode_1 = require("../../Enums/Modes/HoverMode");
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var Constants_1 = require("../Utils/Constants");
var ColorUtils_1 = require("../Utils/ColorUtils");
var Bubbler = (function () {
    function Bubbler(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Bubbler.reset = function (particle) {
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    };
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
    Bubbler.prototype.process = function (distMouse, timeSpent, data) {
        var bubbleParam = data.bubbleObj.optValue;
        if (bubbleParam === undefined) {
            return;
        }
        var container = this.container;
        var particle = this.particle;
        var options = container.options;
        var bubbleDuration = options.interactivity.modes.bubble.duration;
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
                            particle.bubble.radius = value;
                        }
                        if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                            particle.bubble.opacity = value;
                        }
                    }
                }
                else {
                    if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                        delete particle.bubble.radius;
                    }
                    if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                        delete particle.bubble.opacity;
                    }
                }
            }
            else if (pObjBubble) {
                if (type === ProcessBubbleType_1.ProcessBubbleType.size) {
                    delete particle.bubble.radius;
                }
                if (type === ProcessBubbleType_1.ProcessBubbleType.opacity) {
                    delete particle.bubble.opacity;
                }
            }
        }
    };
    Bubbler.prototype.clickBubble = function () {
        var _a;
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
                    value: particle.bubble.radius,
                },
                particlesObj: {
                    optValue: (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue,
                    value: particle.size.value,
                },
                type: ProcessBubbleType_1.ProcessBubbleType.size,
            };
            this.process(distMouse, timeSpent, sizeData);
            var opacityData = {
                bubbleObj: {
                    optValue: options.interactivity.modes.bubble.opacity,
                    value: particle.bubble.opacity,
                },
                particlesObj: {
                    optValue: particle.particlesOptions.opacity.value,
                    value: particle.opacity.value,
                },
                type: ProcessBubbleType_1.ProcessBubbleType.opacity,
            };
            this.process(distMouse, timeSpent, opacityData);
            if (!container.bubble.durationEnd) {
                if (distMouse <= container.retina.bubbleModeDistance) {
                    this.hoverBubbleColor();
                }
                else {
                    delete particle.bubble.color;
                }
            }
            else {
                delete particle.bubble.color;
            }
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
                this.hoverBubbleColor();
            }
        }
        else {
            Bubbler.reset(particle);
        }
        if (container.interactivity.status === Constants_1.Constants.mouseLeaveEvent) {
            Bubbler.reset(particle);
        }
    };
    Bubbler.prototype.hoverBubbleSize = function (ratio) {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var modeSize = options.interactivity.modes.bubble.size;
        if (modeSize === undefined) {
            return;
        }
        var optSize = particle.particlesOptions.size.value;
        var pSize = particle.size.value;
        if (container.retina.bubbleModeSize > ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
            var size = pSize + modeSize * ratio;
            if (size > pSize && size <= modeSize) {
                particle.bubble.radius = size;
            }
        }
        else if (container.retina.bubbleModeSize < ((_b = particle.sizeValue) !== null && _b !== void 0 ? _b : container.retina.sizeValue)) {
            var size = pSize - (optSize - modeSize) * ratio;
            if (size < pSize && size >= modeSize) {
                particle.bubble.radius = size;
            }
        }
    };
    Bubbler.prototype.hoverBubbleOpacity = function (ratio) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var modeOpacity = options.interactivity.modes.bubble.opacity;
        if (modeOpacity === undefined) {
            return;
        }
        var optOpacity = particle.particlesOptions.opacity.value;
        var pOpacity = particle.opacity.value;
        if (modeOpacity > optOpacity) {
            var opacity = pOpacity + modeOpacity * ratio;
            if (opacity > pOpacity && opacity <= modeOpacity) {
                particle.bubble.opacity = opacity;
            }
        }
        else if (modeOpacity < optOpacity) {
            var opacity = pOpacity - (optOpacity - modeOpacity) * ratio;
            if (opacity < pOpacity && opacity >= modeOpacity) {
                particle.bubble.opacity = opacity;
            }
        }
    };
    Bubbler.prototype.hoverBubbleColor = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (particle.bubble.color === undefined) {
            var modeColor = options.interactivity.modes.bubble.color;
            if (modeColor === undefined) {
                return;
            }
            var color = void 0;
            if (modeColor instanceof Array) {
                var item = Utils_1.Utils.itemFromArray(modeColor);
                color = typeof item === "string" ? { value: item } : item;
            }
            else {
                color = typeof modeColor === "string" ? { value: modeColor } : modeColor;
            }
            particle.bubble.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
    };
    return Bubbler;
}());
exports.Bubbler = Bubbler;
