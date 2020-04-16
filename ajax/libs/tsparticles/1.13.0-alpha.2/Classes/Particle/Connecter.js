"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connecter = (function () {
    function Connecter() {
    }
    Connecter.connect = function (p1, p2, container) {
        var options = container.options;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var xDiff = Math.abs(p1.position.x - p2.position.x);
            var yDiff = Math.abs(p1.position.y - p2.position.y);
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var xCoreDiff = Math.abs(p1.position.x - mousePos.x);
            var yCoreDiff = Math.abs(p1.position.y - mousePos.y);
            var distMax = Math.abs(container.retina.connectModeDistance);
            var connectAreaRadius = Math.abs(container.retina.connectModeRadius);
            if (xDiff < distMax && yDiff < distMax && xCoreDiff < connectAreaRadius && yCoreDiff < connectAreaRadius) {
                container.canvas.drawConnectLine(p1, p2);
            }
        }
    };
    return Connecter;
}());
exports.Connecter = Connecter;
