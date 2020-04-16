"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomSize = (function () {
    function RandomSize() {
        this.enable = false;
        this.minimumValue = 1;
    }
    RandomSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    };
    return RandomSize;
}());
exports.RandomSize = RandomSize;
