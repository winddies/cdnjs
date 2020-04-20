"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../../Utils/Utils");
var Collider = (function () {
    function Collider() {
    }
    Collider.collide = function (p1, container) {
        for (var _i = 0, _a = container.particles.spatialGrid.queryRadius(p1.position, p1.size.value * 2); _i < _a.length; _i++) {
            var p2 = _a[_i];
            if (!p2 || p1 === p2 || !p2.particlesOptions.move.collisions)
                continue;
            var dist = Utils_1.Utils.getDistanceBetweenCoordinates(p1.position, p2.position);
            var defaultSize = container.retina.sizeValue;
            var radius1 = this.getRadius(p1, defaultSize);
            var radius2 = this.getRadius(p2, defaultSize);
            var distP = radius1 + radius2;
            if (dist <= distP) {
                p1.resetVelocity();
                p2.resetVelocity();
            }
        }
    };
    Collider.getRadius = function (particle, fallback) {
        return particle.bubble.radius || particle.size.value || fallback;
    };
    return Collider;
}());
exports.Collider = Collider;
