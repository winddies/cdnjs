"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../Utils/Utils");
var Constants_1 = require("../Utils/Constants");
var Grabber = (function () {
    function Grabber(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Grabber.prototype.grab = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var distMouse = Utils_1.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
            if (distMouse <= container.retina.grabModeDistance) {
                var lineOpacity = interactivity.modes.grab.lineLinked.opacity;
                var grabDistance = container.retina.grabModeDistance;
                var opacityLine = lineOpacity - (distMouse * lineOpacity) / grabDistance;
                if (opacityLine > 0) {
                    container.canvas.drawGrabLine(particle, opacityLine, mousePos);
                }
            }
        }
    };
    return Grabber;
}());
exports.Grabber = Grabber;
