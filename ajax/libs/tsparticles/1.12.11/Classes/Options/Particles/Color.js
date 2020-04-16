"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color = (function () {
    function Color() {
        this.value = "#fff";
    }
    Color.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Color;
}());
exports.Color = Color;
