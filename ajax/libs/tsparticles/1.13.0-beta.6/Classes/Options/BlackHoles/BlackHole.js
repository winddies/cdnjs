"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackHoleSize_1 = require("./BlackHoleSize");
var OptionsColor_1 = require("../Particles/OptionsColor");
var BlackHole = (function () {
    function BlackHole() {
        this.color = new OptionsColor_1.OptionsColor();
        this.color.value = "#000000";
        this.size = new BlackHoleSize_1.BlackHoleSize();
    }
    BlackHole.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (this.color === undefined) {
                    this.color = new OptionsColor_1.OptionsColor();
                }
                this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
            if (data.size !== undefined) {
                this.size.load(data.size);
            }
        }
    };
    return BlackHole;
}());
exports.BlackHole = BlackHole;
