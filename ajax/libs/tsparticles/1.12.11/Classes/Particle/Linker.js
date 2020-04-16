"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = require("../Utils/ColorUtils");
var Utils_1 = require("../Utils/Utils");
var Constants_1 = require("../Utils/Constants");
var Linker = (function () {
    function Linker(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Linker.prototype.link = function (p2) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var pos1 = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        var pos2 = {
            x: p2.position.x + p2.offset.x,
            y: p2.position.y + p2.offset.y,
        };
        var dist = Utils_1.Utils.getDistanceBetweenCoordinates(pos1, pos2);
        var optOpacity = options.particles.lineLinked.opacity;
        var optDistance = container.retina.lineLinkedDistance;
        if (dist <= optDistance) {
            var opacityLine = optOpacity - (dist * optOpacity) / optDistance;
            if (opacityLine > 0) {
                if (!container.particles.lineLinkedColor) {
                    var color = options.particles.lineLinked.color;
                    if (color === Constants_1.Constants.randomColorValue) {
                        if (options.particles.lineLinked.consent) {
                            container.particles.lineLinkedColor = ColorUtils_1.ColorUtils.stringToRgb(color);
                        }
                        else if (options.particles.lineLinked.blink) {
                            container.particles.lineLinkedColor = Constants_1.Constants.randomColorValue;
                        }
                        else {
                            container.particles.lineLinkedColor = "mid";
                        }
                    }
                    else {
                        container.particles.lineLinkedColor = typeof color === "string" ?
                            ColorUtils_1.ColorUtils.stringToRgb(color) :
                            ColorUtils_1.ColorUtils.colorToRgb(color);
                    }
                }
                container.canvas.drawLinkedLine(particle, p2, pos1, pos2, opacityLine);
            }
        }
    };
    return Linker;
}());
exports.Linker = Linker;
