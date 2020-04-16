"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Drawer = (function () {
    function Drawer(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Drawer.prototype.draw = function () {
        var container = this.container;
        var particle = this.particle;
        container.canvas.drawParticle(particle);
    };
    return Drawer;
}());
exports.Drawer = Drawer;
