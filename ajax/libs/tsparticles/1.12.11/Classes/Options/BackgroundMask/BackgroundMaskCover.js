"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("../Particles/Color");
var BackgroundMaskCover = (function () {
    function BackgroundMaskCover() {
        this.color = new Color_1.Color();
        this.opacity = 1;
    }
    BackgroundMaskCover.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color.load(data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return BackgroundMaskCover;
}());
exports.BackgroundMaskCover = BackgroundMaskCover;
