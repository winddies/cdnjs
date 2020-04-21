"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Particles_1 = require("../Particles");
var ShapeBase = (function () {
    function ShapeBase() {
        this.fill = true;
        this.close = true;
    }
    ShapeBase.prototype.load = function (data, particlesOptions) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.particles !== undefined) {
                this.particles = new Particles_1.Particles();
                this.particles.load(data.particles);
            }
        }
    };
    return ShapeBase;
}());
exports.ShapeBase = ShapeBase;
