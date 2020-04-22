"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Particle_1 = require("./Particle");
var Emitter = (function () {
    function Emitter(container, emitterOptions, position) {
        var _a, _b, _c;
        this.container = container;
        this.initialPosition = position;
        this.emitterOptions = emitterOptions;
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
        this.size = (_b = this.emitterOptions.size) !== null && _b !== void 0 ? _b : {
            height: 0,
            width: 0,
        };
        this.lifeCount = (_c = this.emitterOptions.life.count) !== null && _c !== void 0 ? _c : -1;
        this.start();
    }
    Emitter.prototype.emit = function () {
        var container = this.container;
        var position = {
            x: this.position.x,
            y: this.position.y,
        };
        var offset = {
            x: container.canvas.dimension.height * this.size.width / 100,
            y: container.canvas.dimension.height * this.size.height / 100,
        };
        position.x += offset.x * (Math.random() - 0.5);
        position.y += offset.y * (Math.random() - 0.5);
        var particle = new Particle_1.Particle(container, position, this);
        for (var i = 0; i < this.emitterOptions.rate.quantity; i++) {
            container.particles.addParticle(particle);
        }
    };
    Emitter.prototype.start = function () {
        var _this = this;
        if (this.lifeCount > 0 || !this.emitterOptions.life.count) {
            if (this.startInterval === undefined) {
                this.startInterval = window.setInterval(function () {
                    _this.emit();
                }, 1000 * this.emitterOptions.rate.delay);
            }
            if (this.lifeCount > 0) {
                this.prepareToDie();
            }
        }
    };
    Emitter.prototype.stop = function () {
        var interval = this.startInterval;
        if (interval !== undefined) {
            clearInterval(interval);
            delete this.startInterval;
        }
    };
    Emitter.prototype.resize = function () {
        var _a;
        this.position = (_a = this.initialPosition) !== null && _a !== void 0 ? _a : this.calcPosition();
    };
    Emitter.prototype.prepareToDie = function () {
        var _this = this;
        var _a;
        if (this.lifeCount > 0 && ((_a = this.emitterOptions.life) === null || _a === void 0 ? void 0 : _a.duration) !== undefined) {
            window.setTimeout(function () {
                var _a;
                _this.stop();
                _this.lifeCount--;
                if (_this.lifeCount > 0) {
                    _this.position = _this.calcPosition();
                    window.setTimeout(function () {
                        _this.start();
                    }, (_a = _this.emitterOptions.life.delay) !== null && _a !== void 0 ? _a : 0);
                }
                else {
                    _this.destroy();
                }
            }, this.emitterOptions.life.duration * 1000);
        }
    };
    Emitter.prototype.destroy = function () {
        var container = this.container;
        var index = container.emitters.indexOf(this);
        if (index >= 0) {
            container.emitters.splice(index, 1);
        }
    };
    Emitter.prototype.calcPosition = function () {
        var _a;
        var container = this.container;
        var percentPosition = (_a = this.emitterOptions.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: percentPosition.x / 100 * container.canvas.dimension.width,
            y: percentPosition.y / 100 * container.canvas.dimension.height,
        };
    };
    return Emitter;
}());
exports.Emitter = Emitter;
