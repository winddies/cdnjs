import { Color } from "../Particles/Color";
import { ColorUtils } from "../../Utils/ColorUtils";
export class PolygonMaskDrawStroke {
    constructor() {
        this.color = new Color();
        this.width = 0.5;
        this.opacity = 1;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
