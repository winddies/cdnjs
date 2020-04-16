"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attracter = (function () {
    function Attracter(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Attracter.prototype.attract = function (p2) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var dx = particle.position.x - p2.position.x;
        var dy = particle.position.y - p2.position.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= container.retina.lineLinkedDistance) {
            var ax = dx / (options.particles.move.attract.rotate.x * 1000);
            var ay = dy / (options.particles.move.attract.rotate.y * 1000);
            particle.velocity.horizontal -= ax;
            particle.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attracter;
}());
exports.Attracter = Attracter;
