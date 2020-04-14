export class GrabLineLinked {
    constructor() {
        this.opacity = 1;
    }
    load(data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    }
}
