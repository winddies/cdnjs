"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("../Particles/Color");
var ColorUtils_1 = require("../../Utils/ColorUtils");
var PolygonMaskDrawStroke = (function () {
    function PolygonMaskDrawStroke() {
        this.color = new Color_1.Color();
        this.width = 0.5;
        this.opacity = 1;
    }
    PolygonMaskDrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
                if (typeof this.color.value === "string") {
                    this.opacity = (_a = ColorUtils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
                }
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return PolygonMaskDrawStroke;
}());
exports.PolygonMaskDrawStroke = PolygonMaskDrawStroke;
