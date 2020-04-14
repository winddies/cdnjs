import { PolygonMaskInlineArrangement } from "../../../Enums/PolygonMaskInlineArrangement";
export class PolygonInline {
    constructor() {
        this.arrangement = PolygonMaskInlineArrangement.onePerPoint;
    }
    load(data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    }
}
