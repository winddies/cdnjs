import type { IEvents } from "../../../../Interfaces/Options/Interactivity/Events/IEvents";
import type { IDivEvent } from "../../../../Interfaces/Options/Interactivity/Events/IDivEvent";
import type { IHoverEvent } from "../../../../Interfaces/Options/Interactivity/Events/IHoverEvent";
import type { IClickEvent } from "../../../../Interfaces/Options/Interactivity/Events/IClickEvent";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Events implements IEvents {
    get onclick(): IClickEvent;
    set onclick(value: IClickEvent);
    get ondiv(): IDivEvent;
    set ondiv(value: IDivEvent);
    get onhover(): IHoverEvent;
    set onhover(value: IHoverEvent);
    onClick: IClickEvent;
    onDiv: IDivEvent;
    onHover: IHoverEvent;
    resize: boolean;
    constructor();
    load(data?: RecursivePartial<IEvents>): void;
}
