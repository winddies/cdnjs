import { ShapeBase } from "./ShapeBase";
export class CharacterShape extends ShapeBase {
    constructor() {
        super();
        this.font = "Verdana";
        this.style = "";
        this.value = "*";
        this.weight = "400";
    }
    load(data) {
        super.load(data);
        if (data !== undefined) {
            if (data.font !== undefined) {
                this.font = data.font;
            }
            if (data.style !== undefined) {
                this.style = data.style;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.weight !== undefined) {
                this.weight = data.weight;
            }
        }
    }
}
