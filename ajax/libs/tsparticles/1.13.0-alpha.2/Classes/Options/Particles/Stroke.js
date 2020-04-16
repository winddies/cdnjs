"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("./OptionsColor");
var Stroke = (function () {
    function Stroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    Stroke.prototype.load = function (data) {
        if (data !== undefined) {
            this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return Stroke;
}());
exports.Stroke = Stroke;
