"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connecter = (function () {
    function Connecter(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Connecter.prototype.connect = function (destParticle) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            var xDiff = Math.abs(particle.position.x - destParticle.position.x);
            var yDiff = Math.abs(particle.position.y - destParticle.position.y);
            var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            var xCoreDiff = Math.abs(particle.position.x - mousePos.x);
            var yCoreDiff = Math.abs(particle.position.y - mousePos.y);
            var distMax = Math.abs(container.retina.connectModeDistance);
            var connectAreaRadius = Math.abs(container.retina.connectModeRadius);
            if (xDiff < distMax && yDiff < distMax && xCoreDiff < connectAreaRadius && yCoreDiff < connectAreaRadius) {
                container.canvas.drawConnectLine(particle, destParticle);
            }
        }
    };
    return Connecter;
}());
exports.Connecter = Connecter;
