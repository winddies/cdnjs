"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomOpacity = (function () {
    function RandomOpacity() {
        this.enable = false;
        this.minimumValue = 1;
    }
    RandomOpacity.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return RandomOpacity;
}());
exports.RandomOpacity = RandomOpacity;
