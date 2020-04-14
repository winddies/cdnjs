import { Color } from "../Color";
export class LineLinkedShadow {
    constructor() {
        this.blur = 5;
        this.color = new Color();
        this.enable = false;
        this.color.value = "lime";
    }
    load(data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    }
}
