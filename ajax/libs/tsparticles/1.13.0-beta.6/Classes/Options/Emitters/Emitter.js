"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoveDirection_1 = require("../../../Enums/MoveDirection");
var Particles_1 = require("../Particles/Particles");
var EmitterRate_1 = require("./EmitterRate");
var EmitterLife_1 = require("./EmitterLife");
var Emitter = (function () {
    function Emitter() {
        this.direction = MoveDirection_1.MoveDirection.none;
        this.life = new EmitterLife_1.EmitterLife();
        this.rate = new EmitterRate_1.EmitterRate();
    }
    Emitter.prototype.load = function (data, particlesOptions) {
        if (data !== undefined) {
            if (data.size !== undefined) {
                this.size = {
                    height: data.size.height,
                    width: data.size.width,
                };
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            this.life.load(data.life);
            if (data.particles !== undefined) {
                this.particles = new Particles_1.Particles();
                this.particles.load(data.particles);
            }
            this.rate.load(data.rate);
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    };
    return Emitter;
}());
exports.Emitter = Emitter;
