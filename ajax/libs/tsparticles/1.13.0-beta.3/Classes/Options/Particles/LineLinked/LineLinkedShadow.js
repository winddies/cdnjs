"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor_1 = require("../OptionsColor");
var LineLinkedShadow = (function () {
    function LineLinkedShadow() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "lime";
    }
    LineLinkedShadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return LineLinkedShadow;
}());
exports.LineLinkedShadow = LineLinkedShadow;
