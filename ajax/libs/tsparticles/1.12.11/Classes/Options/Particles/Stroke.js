"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Stroke = (function () {
    function Stroke() {
        this.color = new Color_1.Color();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    Stroke.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return Stroke;
}());
exports.Stroke = Stroke;
