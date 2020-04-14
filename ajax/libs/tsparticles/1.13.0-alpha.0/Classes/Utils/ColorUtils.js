import { Utils } from "./Utils";
import { Constants } from "./Constants";
export class ColorUtils {
    static colorToRgb(color) {
        let res;
        if (typeof (color.value) === "string") {
            if (color.value === Constants.randomColorValue) {
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
                const colorSelected = Utils.itemFromArray(color.value);
                res = ColorUtils.stringToRgb(colorSelected);
            }
            else {
                const rgbColor = color.value;
                if (rgbColor.r !== undefined) {
                    res = rgbColor;
                }
                const hslColor = color.value;
                if (hslColor.h !== undefined) {
                    res = ColorUtils.hslToRgb(hslColor);
                }
            }
        }
        return res;
    }
    static stringToAlpha(input) {
        var _a;
        return (_a = ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
    }
    static stringToRgb(input) {
        return ColorUtils.stringToRgba(input);
    }
    static hslToRgb(hsl) {
        const result = { b: 0, g: 0, r: 0 };
        if (hsl.s === 0) {
            result.b = hsl.l;
            result.g = hsl.l;
            result.r = hsl.l;
        }
        else {
            const q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s;
            const p = 2 * hsl.l - q;
            result.r = ColorUtils.hue2rgb(p, q, hsl.h + 1 / 3);
            result.g = ColorUtils.hue2rgb(p, q, hsl.h);
            result.b = ColorUtils.hue2rgb(p, q, hsl.h - 1 / 3);
        }
        result.r = Math.round(result.r * 255);
        result.g = Math.round(result.g * 255);
        result.b = Math.round(result.b * 255);
        return result;
    }
    static hslaToRgba(hsla) {
        const rgbResult = ColorUtils.hslToRgb(hsla);
        return {
            a: hsla.a,
            b: rgbResult.b,
            g: rgbResult.g,
            r: rgbResult.r,
        };
    }
    static getRandomRgbColor(min) {
        var _a;
        const fixedMin = min || 0;
        const minColor = fixedMin + (fixedMin * Math.pow(16, 2)) + (fixedMin * Math.pow(16, 4));
        const maxColor = minColor ^ 0xFFFFFF;
        const randomColor = (Math.random() * maxColor + minColor).toString(16);
        return (_a = this.stringToRgb(`#${randomColor}`)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
    }
    static getStyleFromColor(color, opacity) {
        const opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
        return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${opacityValue})`;
    }
    static hue2rgb(p, q, t) {
        let tCalc = t;
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
    }
    static stringToRgba(input) {
        if (input.startsWith('rgb')) {
            const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i;
            const result = regex.exec(input);
            return result ? {
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                b: parseInt(result[3]),
                g: parseInt(result[2]),
                r: parseInt(result[1]),
            } : undefined;
        }
        else if (input.startsWith('hsl')) {
            const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i;
            const result = regex.exec(input);
            return result ? ColorUtils.hslaToRgba({
                a: result.length > 4 ? parseFloat(result[5]) : 1,
                h: parseInt(result[1]),
                l: parseInt(result[3]),
                s: parseInt(result[2]),
            }) : undefined;
        }
        else {
            const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
            const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
                return r + r + g + g + b + b + (a ? a + a : "");
            });
            const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
            const result = regex.exec(hexFixed);
            return result ? {
                a: parseInt(result[4], 16) / 0xFF,
                b: parseInt(result[3], 16),
                g: parseInt(result[2], 16),
                r: parseInt(result[1], 16),
            } : undefined;
        }
    }
}
