import { BackgroundMaskCover } from "./BackgroundMaskCover";
export class BackgroundMask {
    constructor() {
        this.cover = new BackgroundMaskCover();
        this.enable = false;
    }
    load(data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                const cover = data.cover;
                this.cover.load(cover.color !== undefined ? data.cover : { color: data.cover });
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    }
}
