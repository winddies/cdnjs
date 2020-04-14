import { GrabLineLinked } from "./GrabLineLinked";
export class Grab {
    constructor() {
        this.distance = 100;
        this.lineLinked = new GrabLineLinked();
    }
    get line_linked() {
        return this.lineLinked;
    }
    set line_linked(value) {
        this.lineLinked = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.lineLinked.load((_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked);
        }
    }
}
