import { Color } from "./Color";
export class Trail {
    constructor() {
        this.enable = false;
        this.length = 10;
        this.fillColor = new Color();
        this.fillColor.value = "#000000";
    }
    load(data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            this.fillColor.load(typeof data.fillColor === "string" ? { value: data.fillColor } : data.fillColor);
            if (data.length !== undefined) {
                this.length = data.length;
            }
        }
    }
}
