"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("../../Utils/Constants");
var Grabber = (function () {
    function Grabber() {
    }
    Grabber.grab = function (container) {
        var options = container.options;
        var interactivity = options.interactivity;
        if (interactivity.events.onHover.enable && container.interactivity.status === Constants_1.Constants.mouseMoveEvent) {
            var mousePos = container.interactivity.mouse.position;
            if (mousePos === undefined) {
                return;
            }
            for (var _i = 0, _a = container.particles.spatialGrid.queryRadiusWithDistance(mousePos, container.retina.grabModeDistance); _i < _a.length; _i++) {
                var _b = _a[_i], distance = _b.distance, particle = _b.particle;
                if ((particle === null || particle === void 0 ? void 0 : particle.position) === undefined) {
                    continue;
                }
                if (distance <= container.retina.grabModeDistance) {
                    var lineOpacity = interactivity.modes.grab.lineLinked.opacity;
                    var grabDistance = container.retina.grabModeDistance;
                    var opacityLine = lineOpacity - (distance * lineOpacity) / grabDistance;
                    if (opacityLine > 0) {
                        container.canvas.drawGrabLine(particle, opacityLine, mousePos);
                    }
                }
            }
        }
    };
    return Grabber;
}());
exports.Grabber = Grabber;
