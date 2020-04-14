export class DivEvent {
    constructor() {
        this.elementId = "repulse-div";
        this.enable = false;
        this.mode = [];
    }
    get el() {
        return this.elementId;
    }
    set el(value) {
        this.elementId = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            const elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;
            if (elementId !== undefined) {
                this.elementId = elementId;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    }
}
