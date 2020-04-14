import { Color } from "./Color";
import { LineLinked } from "./LineLinked/LineLinked";
import { Move } from "./Move";
import { ParticlesNumber } from "./ParticlesNumber";
import { Opacity } from "./Opacity/Opacity";
import { Shape } from "./Shape/Shape";
import { Size } from "./Size/Size";
import { Rotate } from "./Rotate/Rotate";
import { Shadow } from "./Shadow";
import { Stroke } from "./Stroke";
export class Particles {
    constructor() {
        this.color = new Color();
        this.lineLinked = new LineLinked();
        this.move = new Move();
        this.number = new ParticlesNumber();
        this.opacity = new Opacity();
        this.rotate = new Rotate();
        this.shape = new Shape();
        this.size = new Size();
        this.shadow = new Shadow();
        this.stroke = new Stroke();
    }
    get line_linked() {
        return this.lineLinked;
    }
    set line_linked(value) {
        this.lineLinked = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map((s) => {
                        const tmp = new Color();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new Color();
                    }
                    this.color.load(data.color);
                }
            }
            const lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            const strokeToLoad = (_b = data.stroke) !== null && _b !== void 0 ? _b : (_c = data.shape) === null || _c === void 0 ? void 0 : _c.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map((s) => {
                        const tmp = new Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    }
}
