import { ClickEvent } from "./ClickEvent";
import { DivEvent } from "./DivEvent";
import { HoverEvent } from "./HoverEvent";
export class Events {
    constructor() {
        this.onClick = new ClickEvent();
        this.onDiv = new DivEvent();
        this.onHover = new HoverEvent();
        this.resize = true;
    }
    get onclick() {
        return this.onClick;
    }
    set onclick(value) {
        this.onClick = value;
    }
    get ondiv() {
        return this.onDiv;
    }
    set ondiv(value) {
        this.onDiv = value;
    }
    get onhover() {
        return this.onHover;
    }
    set onhover(value) {
        this.onHover = value;
    }
    load(data) {
        var _a, _b, _c;
        if (data !== undefined) {
            this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
            this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
            this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);
            if (data.resize !== undefined) {
                this.resize = data.resize;
            }
        }
    }
}
