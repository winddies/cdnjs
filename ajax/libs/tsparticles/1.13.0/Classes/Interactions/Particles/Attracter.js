"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attracter = (function () {
    function Attracter() {
    }
    Attracter.attract = function (p1, container) {
        var _a;
        var options = container.options;
        var distance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
        for (var _i = 0, _b = container.particles.spatialGrid.queryRadius(p1.position, distance); _i < _b.length; _i++) {
            var p2 = _b[_i];
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            var dx = p1.position.x - p2.position.x;
            var dy = p1.position.y - p2.position.y;
            var rotate = options.particles.move.attract.rotate;
            var ax = dx / (rotate.x * 1000);
            var ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attracter;
}());
exports.Attracter = Attracter;
