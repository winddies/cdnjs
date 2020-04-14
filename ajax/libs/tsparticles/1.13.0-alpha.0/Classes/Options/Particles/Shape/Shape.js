import { ShapeType } from "../../../../Enums/ShapeType";
import { ImageShape } from "./ImageShape";
import { PolygonShape } from "./PolygonShape";
import { CharacterShape } from "./CharacterShape";
export class Shape {
    constructor() {
        this.options = {};
        this.character = new CharacterShape();
        this.image = new ImageShape();
        this.polygon = new PolygonShape();
        this.type = ShapeType.circle;
    }
    get custom() {
        return this.options;
    }
    set custom(value) {
        this.options = value;
    }
    get images() {
        return this.image instanceof Array ? this.image : [this.image];
    }
    set images(value) {
        this.image = value;
    }
    get stroke() {
        return [];
    }
    set stroke(value) {
    }
    get character() {
        var _a;
        return ((_a = this.options[ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[ShapeType.char]);
    }
    set character(value) {
        this.options[ShapeType.character] = value;
        this.options[ShapeType.char] = value;
    }
    get polygon() {
        var _a;
        return ((_a = this.options[ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType.star]);
    }
    set polygon(value) {
        this.options[ShapeType.polygon] = value;
        this.options[ShapeType.star] = value;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            const options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
            if (options !== undefined) {
                for (const shape in options) {
                    const item = options[shape];
                    if (item !== undefined) {
                        if (item instanceof Array) {
                            this.options[shape] = item.filter((t) => t !== undefined).map((t) => {
                                return t;
                            });
                        }
                        else {
                            this.options[shape] = item;
                        }
                    }
                }
            }
            if (data.character !== undefined) {
                const item = data.character;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        this.options[ShapeType.character] = item.filter(t => t !== undefined).map((s) => {
                            return s;
                        });
                        this.options[ShapeType.char] = item.filter(t => t !== undefined).map((s) => {
                            return s;
                        });
                    }
                    else {
                        this.options[ShapeType.character] = item;
                        this.options[ShapeType.char] = item;
                    }
                }
            }
            if (data.polygon !== undefined) {
                const item = data.polygon;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        this.options[ShapeType.polygon] = item.filter(t => t !== undefined).map((s) => {
                            return s;
                        });
                        this.options[ShapeType.star] = item.filter(t => t !== undefined).map((s) => {
                            return s;
                        });
                    }
                    else {
                        this.options[ShapeType.polygon] = item;
                        this.options[ShapeType.star] = item;
                    }
                }
            }
            if (data.image !== undefined) {
                if (data.image instanceof Array) {
                    this.image = data.image.map((s) => {
                        const tmp = new ImageShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.image instanceof Array) {
                        this.image = new ImageShape();
                    }
                    this.image.load(data.image);
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    }
}
