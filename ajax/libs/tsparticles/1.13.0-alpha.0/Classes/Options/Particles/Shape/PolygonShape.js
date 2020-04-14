import { ShapeBase } from "./ShapeBase";
export class PolygonShape extends ShapeBase {
    constructor() {
        super();
        this.sides = 5;
    }
    get nb_sides() {
        return this.sides;
    }
    set nb_sides(value) {
        this.sides = value;
    }
    load(data) {
        var _a;
        super.load(data);
        if (data !== undefined) {
            const sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    }
}
