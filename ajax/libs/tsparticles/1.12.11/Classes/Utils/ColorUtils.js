"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var Constants_1 = require("./Constants");
var ColorUtils = (function () {
    function ColorUtils() {
    }
    ColorUtils.colorToRgb = function (color) {
        var res;
        if (typeof (color.value) === "string") {
            if (color.value === Constants_1.Constants.randomColorValue) {
                res = {
                    b: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    r: Math.floor(Math.random() * 256),
                };
            }
            else {
                res = ColorUtils.stringToRgb(color.value);
            }
        }
        else {
            if (color.value instanceof Array) {
                var colorSelected = Utils_1.Utils.itemFromArray(color.value);
                res = ColorUtils.stringToRgb(colorSelected);
            }
            else {
                var rgbColor = color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                var hslColor = color.value;
                if (hslColor.h !== undefined) {
                    res = ColorUtils.hslToRgb(hslColor);
                }
            }
        }
        return res;
    };
    ColorUtils.stringToAlpha = function (input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    };
    ColorUtils.stringToRgb = function (input) {
        return ColorUtils.stringToRgba(input);
    };
    ColorUtils.hslToRgb = function (hsl) {
        var result = { b: 0, g: 0, r: 0 };
        if (hsl.s === 0) {
            result.b = hsl.l;
            result.g = hsl.l;
            result.r = hsl.l;
        }
        else {
            var q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s;
            var p = 2 * hsl.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hsl.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hsl.h);
            result.b = ColorUtils.hue2rgb(p, q, hsl.h - 1 / 3);
        }
        result.r = Math.round(result.r * 255);
        result.g = Math.round(result.g * 255);
        result.b = Math.round(result.b * 255);
        return result;
    };
    ColorUtils.hslaToRgba = function (hsla) {
        var rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    };
    ColorUtils.getRandomRgbColor = function (min) {
        var _a;
        var fixedMin = min || 0;
        var minColor = fixedMin + (fixedMin * Math.pow(16, 2)) + (fixedMin * Math.pow(16, 4));
        var maxColor = minColor ^ 0xFFFFFF;
        var randomColor = (Math.random() * maxColor + minColor).toString(16);
        return (_a = this.stringToRgb("#" + randomColor)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
    };
    ColorUtils.getStyleFromColor = function (color, opacity) {
        var opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
        return "rgba(" + Math.round(color.r) + ", " + Math.round(color.g) + ", " + Math.round(color.b) + ", " + opacityValue + ")";
    };
    ColorUtils.hue2rgb = function (p, q, t) {
        var tCalc = t;
        if (tCalc < 0) {
            tCalc += 1;
        }
        if (tCalc > 1) {
            tCalc -= 1;
        }
        if (tCalc < 1 / 6) {
            return p + (q - p) * 6 * tCalc;
        }
        if (tCalc < 1 / 2) {
            return q;
        }
        if (tCalc < 2 / 3) {
            return p + (q - p) * (2 / 3 - tCalc) * 6;
        }
        return p;
    };
    ColorUtils.stringToRgba = function (input) {
        if (input.startsWith('rgb')) {
            var regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d\.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? {
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                b: parseInt(result[3]),
                g: parseInt(result[2]),
                r: parseInt(result[1]),
            } : undefined;
        }
        else if (input.startsWith('hsl')) {
            var regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([\d\.]+)\s*)?\)/i;
            var result = regex.exec(input);
            return result ? ColorUtils.hslaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1]),
                l: parseInt(result[3]),
                s: parseInt(result[2]),
            }) : undefined;
        }
        else {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            var hexFixed = input.replace(shorthandRegex, function (_m, r, g, b, a) {
                return r + r + g + g + b + b + (a ? a + a : "");
            });
            var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            var result = regex.exec(hexFixed);
            return result ? {
                a: parseInt(result[4], 16) / 0xFF,
                b: parseInt(result[3], 16),
                g: parseInt(result[2], 16),
                r: parseInt(result[1], 16),
            } : undefined;
        }
    };
    return ColorUtils;
}());
exports.ColorUtils = ColorUtils;
