"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OptionsColor = (function () {
    function OptionsColor() {
        this.value = "#fff";
    }
    OptionsColor.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return OptionsColor;
}());
exports.OptionsColor = OptionsColor;
