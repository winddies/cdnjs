import { Color } from "./Color";
export class Shadow {
    constructor() {
        this.blur = 0;
        this.color = new Color();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0,
        };
        this.color.value = "#000000";
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
            if (data.offset !== undefined) {
                if (data.offset.x !== undefined) {
                    this.offset.x = data.offset.x;
                }
                if (data.offset.y !== undefined) {
                    this.offset.y = data.offset.y;
                }
            }
        }
    }
}
