export class Slow {
    constructor() {
        this.factor = 1;
        this.radius = 0;
    }
    get active() {
        return false;
    }
    set active(value) {
    }
    load(data) {
        if (data !== undefined) {
            if (data.factor !== undefined) {
                this.factor = data.factor;
            }
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    }
}
