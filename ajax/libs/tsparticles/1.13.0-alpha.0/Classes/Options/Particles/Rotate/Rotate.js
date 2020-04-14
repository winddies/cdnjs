import { RotateAnimation } from "./RotateAnimation";
import { RotateDirection } from "../../../../Enums/RotateDirection";
export class Rotate {
    constructor() {
        this.animation = new RotateAnimation();
        this.direction = RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    load(data) {
        if (data !== undefined) {
            this.animation.load(data.animation);
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    }
}
