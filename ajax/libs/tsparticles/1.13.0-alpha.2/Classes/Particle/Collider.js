"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../Utils/Utils");
var Collider = (function () {
    function Collider() {
    }
    Collider.collide = function (p1, container) {
        var _a;
        for (var _i = 0, _b = container.particles.spatialGrid.queryRadius(p1.position, ((_a = p1.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue) * 2); _i < _b.length; _i++) {
            var p2 = _b[_i];
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
        return particle.bubble.radius || particle.sizeValue || fallback;
    };
    return Collider;
}());
exports.Collider = Collider;
