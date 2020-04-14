import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
export class Draw {
    constructor() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke();
    }
    get lineWidth() {
        return this.stroke.width;
    }
    set lineWidth(value) {
        this.stroke.width = value;
    }
    get lineColor() {
        return this.stroke.color;
    }
    set lineColor(value) {
        const destColor = this.stroke.color;
        if (typeof value === "string") {
            destColor.value = value;
        }
        else {
            destColor.load(value);
        }
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
                color: data.lineColor,
                width: data.lineWidth,
            };
            this.stroke.load(stroke);
        }
    }
}
