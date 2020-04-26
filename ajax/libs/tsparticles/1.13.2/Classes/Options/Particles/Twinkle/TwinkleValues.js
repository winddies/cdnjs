"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("../OptionsColor");
var TwinkleValues = (function () {
    function TwinkleValues() {
        this.enable = false;
        this.frequency = 0.05;
        this.opacity = 1;
    }
    TwinkleValues.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (this.color === undefined) {
                    this.color = new OptionsColor_1.OptionsColor();
                }
                this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.frequency !== undefined) {
                this.frequency = data.frequency;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return TwinkleValues;
}());
exports.TwinkleValues = TwinkleValues;
