import { Attract } from "./Attract";
import { MoveDirection } from "../../../Enums/MoveDirection";
import { OutMode } from "../../../Enums/OutMode";
import { Trail } from "./Trail";
export class Move {
    constructor() {
        this.attract = new Attract();
        this.collisions = false;
        this.direction = MoveDirection.none;
        this.enable = false;
        this.outMode = OutMode.out;
        this.random = false;
        this.speed = 2;
        this.straight = false;
        this.trail = new Trail();
    }
    get bounce() {
        return this.collisions;
    }
    set bounce(value) {
        this.collisions = value;
    }
    get out_mode() {
        return this.outMode;
    }
    set out_mode(value) {
        this.outMode = value;
    }
    load(data) {
        var _a, _b;
        if (data !== undefined) {
            this.attract.load(data.attract);
            const collisions = (_a = data.collisions) !== null && _a !== void 0 ? _a : data.bounce;
            if (collisions !== undefined) {
                this.collisions = collisions;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            const outMode = (_b = data.outMode) !== null && _b !== void 0 ? _b : data.out_mode;
            if (outMode !== undefined) {
                this.outMode = outMode;
            }
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.straight !== undefined) {
                this.straight = data.straight;
            }
            this.trail.load(data.trail);
        }
    }
}
