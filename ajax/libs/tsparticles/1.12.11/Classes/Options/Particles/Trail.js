"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Trail = (function () {
    function Trail() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new Color_1.Color();
        this.fillColor.value = "#000000";
    }
    Trail.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.fillColor !== undefined) {
                if (typeof data.fillColor === "string") {
                    this.fillColor.value = data.fillColor;
                }
                else {
                    this.fillColor.load(data.fillColor);
                }
            }
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    };
    return Trail;
}());
exports.Trail = Trail;
