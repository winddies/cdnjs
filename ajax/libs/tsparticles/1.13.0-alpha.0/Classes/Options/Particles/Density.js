export class Density {
    constructor() {
        this.enable = false;
        this.area = 800;
    }
    get value_area() {
        return this.area;
    }
    set value_area(value) {
        this.area = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;
            if (area !== undefined) {
                this.area = area;
            }
        }
    }
}
