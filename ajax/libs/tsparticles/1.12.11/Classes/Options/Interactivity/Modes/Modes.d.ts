import type { IModes } from "../../../../Interfaces/Options/Interactivity/Modes/IModes";
import type { IBubble } from "../../../../Interfaces/Options/Interactivity/Modes/IBubble";
import type { IConnect } from "../../../../Interfaces/Options/Interactivity/Modes/IConnect";
import type { IGrab } from "../../../../Interfaces/Options/Interactivity/Modes/IGrab";
import type { IPush } from "../../../../Interfaces/Options/Interactivity/Modes/IPush";
import type { IRemove } from "../../../../Interfaces/Options/Interactivity/Modes/IRemove";
import type { IRepulse } from "../../../../Interfaces/Options/Interactivity/Modes/IRepulse";
import type { ISlow } from "../../../../Interfaces/Options/Interactivity/Modes/ISlow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Modes implements IModes {
    bubble: IBubble;
    connect: IConnect;
    grab: IGrab;
    push: IPush;
    remove: IRemove;
    repulse: IRepulse;
    slow: ISlow;
    constructor();
    load(data?: RecursivePartial<IModes>): void;
}
