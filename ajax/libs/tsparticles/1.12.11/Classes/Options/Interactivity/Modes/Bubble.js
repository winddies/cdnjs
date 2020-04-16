"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bubble = (function () {
    function Bubble() {
        this.distance = 200;
        this.duration = 0.4;
        this.opacity = 1;
        this.size = 80;
    }
    Bubble.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
        }
    };
    return Bubble;
}());
exports.Bubble = Bubble;
