"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connecter = (function () {
    function Connecter() {
    }
    Connecter.connect = function (container) {
        var options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var distance = Math.abs(container.retina.connectModeRadius);
            var query = container.particles.spatialGrid.queryRadius(mousePos, distance);
            var i = 0;
            for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
                var p1 = query_1[_i];
                for (var _a = 0, _b = query.slice(i + 1); _a < _b.length; _a++) {
                    var p2 = _b[_a];
                    var distMax = Math.abs(container.retina.connectModeDistance);
                    var xDiff = Math.abs(p1.position.x - p2.position.x);
                    var yDiff = Math.abs(p1.position.y - p2.position.y);
                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }
                ++i;
            }
        }
    };
    return Connecter;
}());
exports.Connecter = Connecter;
