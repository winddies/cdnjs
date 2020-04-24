"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorUtils_1 = require("./Utils/ColorUtils");
var BlackHole = (function () {
    function BlackHole(container, options, position) {
        var _a, _b;
        this.container = container;
        var size = options.size.value;
        var random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        var minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Math.random() * size + minSize;
        }
        this.size = size;
        this.mass = size * 5;
        this.limit = options.size.limit;
        var color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = ColorUtils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        var offset = (_b = options.position) !== null && _b !== void 0 ? _b : {
            x: 50,
            y: 50,
        };
        this.position = position !== null && position !== void 0 ? position : {
            x: offset.x * container.canvas.dimension.width / 100 - this.size / 2,
            y: offset.y * container.canvas.dimension.height / 100 - this.size / 2,
        };
    }
    BlackHole.prototype.attract = function (particle) {
        var container = this.container;
        var dx = this.position.x - particle.position.x;
        var dy = this.position.y - particle.position.y;
        var distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
        var angle = Math.atan2(dx, dy) * (180 / Math.PI);
        var acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size) {
            var remove = false;
            var sizeFactor = particle.size.value * 0.033;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                container.particles.remove(particle);
                remove = true;
            }
            else {
                particle.size.value -= sizeFactor;
                particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
                particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
                console.log(particle.velocity);
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor;
            return !remove;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle * (Math.PI / 180)) * acceleration;
            particle.velocity.vertical += Math.cos(angle * (Math.PI / 180)) * acceleration;
            return true;
        }
    };
    BlackHole.prototype.draw = function () {
        var container = this.container;
        container.canvas.drawBlackHole(this);
    };
    return BlackHole;
}());
exports.BlackHole = BlackHole;
