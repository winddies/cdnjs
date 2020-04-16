"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterShape = (function () {
    function CharacterShape() {
        this.fill = false;
        this.font = "Verdana";
        this.style = "";
        this.value = "*";
        this.weight = "400";
        this.fill = true;
        this.close = true;
    }
    CharacterShape.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.fill !== undefined) {
                this.fill = data.fill;
            }
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    };
    return CharacterShape;
}());
exports.CharacterShape = CharacterShape;
