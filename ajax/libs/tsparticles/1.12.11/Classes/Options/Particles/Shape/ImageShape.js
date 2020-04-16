"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageShape = (function () {
    function ImageShape() {
        this.height = 100;
        this.replaceColor = true;
        this.src = "";
        this.width = 100;
        this.fill = true;
        this.close = true;
    }
    Object.defineProperty(ImageShape.prototype, "replace_color", {
        get: function () {
            return this.replaceColor;
        },
        set: function (value) {
            this.replaceColor = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageShape.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.height !== undefined) {
                this.height = data.height;
            }
            var replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;
            if (replaceColor !== undefined) {
                this.replaceColor = replaceColor;
            }
            if (data.src !== undefined) {
                this.src = data.src;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return ImageShape;
}());
exports.ImageShape = ImageShape;
