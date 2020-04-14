import { Color } from "../Particles/Color";
export class BackgroundMaskCover {
    constructor() {
        this.color = new Color();
        this.opacity = 1;
    }
    load(data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color.load(data.color);
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    }
}
