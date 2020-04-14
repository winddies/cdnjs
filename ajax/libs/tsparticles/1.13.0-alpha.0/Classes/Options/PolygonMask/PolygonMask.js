import { PolygonMaskType } from "../../../Enums/PolygonMaskType";
import { Draw } from "./Draw";
import { Move } from "./Move";
import { PolygonInline } from "./PolygonInline";
export class PolygonMask {
    constructor() {
        this.draw = new Draw();
        this.enable = false;
        this.inline = new PolygonInline();
        this.move = new Move();
        this.scale = 1;
        this.type = PolygonMaskType.none;
        this.url = "";
    }
    get inlineArrangement() {
        return this.inline.arrangement;
    }
    set inlineArrangement(value) {
        this.inline.arrangement = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            this.draw.load(data.draw);
            const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
                arrangement: data.inlineArrangement,
            };
            if (inline !== undefined) {
                this.inline.load(inline);
            }
            this.move.load(data.move);
            if (data.scale !== undefined) {
                this.scale = data.scale;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            else {
                this.enable = this.type !== PolygonMaskType.none;
            }
            if (data.url !== undefined) {
                this.url = data.url;
            }
            if (data.position !== undefined) {
                this.position = {
                    x: data.position.x,
                    y: data.position.y,
                };
            }
        }
    }
}
