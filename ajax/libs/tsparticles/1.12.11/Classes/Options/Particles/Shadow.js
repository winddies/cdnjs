"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Shadow = (function () {
    function Shadow() {
        this.blur = 0;
        this.color = new Color_1.Color();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
    }
    Shadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.offset !== undefined) {
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    };
    return Shadow;
}());
exports.Shadow = Shadow;
