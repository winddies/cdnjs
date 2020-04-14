import { Color } from "../Particles/Color";
export class Background {
    load(data) {
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (this.color === undefined) {
                    this.color = new Color();
                }
                this.color.load(typeof data.color === "string" ? { value: data.color } : data.color);
            }
            if (data.image !== undefined) {
                this.image = data.image;
            }
            if (data.position !== undefined) {
                this.position = data.position;
            }
            if (data.repeat !== undefined) {
                this.repeat = data.repeat;
            }
            if (data.size !== undefined) {
                this.size = data.size;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    }
}
