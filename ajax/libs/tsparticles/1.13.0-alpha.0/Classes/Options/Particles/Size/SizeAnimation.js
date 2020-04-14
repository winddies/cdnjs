export class SizeAnimation {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
        this.speed = 5;
        this.sync = false;
    }
    get size_min() {
        return this.minimumValue;
    }
    set size_min(value) {
        this.minimumValue = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;
            if (minimumValue !== undefined) {
                this.minimumValue = minimumValue;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    }
}
