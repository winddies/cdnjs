import { LineLinkedShadow } from "./LineLinkedShadow";
import { Color } from "../Color";
export class LineLinked {
    constructor() {
        this.blink = false;
        this.color = new Color();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LineLinkedShadow();
        this.width = 1;
    }
    load(data) {
        if (data !== undefined) {
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
