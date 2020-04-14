export class Repulse {
    constructor() {
        this.distance = 200;
        this.duration = 0.4;
    }
    load(data) {
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    }
}
