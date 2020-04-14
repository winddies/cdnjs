import { OpacityAnimation } from "./OpacityAnimation";
import { OpacityRandom } from "./OpacityRandom";
export class Opacity {
    constructor() {
        this.animation = new OpacityAnimation();
        this.random = new OpacityRandom();
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    }
}
