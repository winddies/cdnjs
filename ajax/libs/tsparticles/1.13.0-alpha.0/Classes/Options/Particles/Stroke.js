import { Color } from "./Color";
export class Stroke {
    constructor() {
        this.color = new Color();
        this.width = 0;
        this.opacity = 1;
        this.color.value = "#ff0000";
    }
    load(data) {
        if (data !== undefined) {
            this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
