import { ConnectLineLinked } from "./ConnectLineLinked";
export class Connect {
    constructor() {
        this.distance = 80;
        this.lineLinked = new ConnectLineLinked();
        this.radius = 60;
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
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    }
}
