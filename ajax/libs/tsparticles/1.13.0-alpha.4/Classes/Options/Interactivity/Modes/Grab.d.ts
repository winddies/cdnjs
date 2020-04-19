import type { IGrab } from "../../../../Interfaces/Options/Interactivity/Modes/IGrab";
import type { IGrabLineLinked } from "../../../../Interfaces/Options/Interactivity/Modes/IGrabLineLinked";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Grab implements IGrab {
    get line_linked(): IGrabLineLinked;
    set line_linked(value: IGrabLineLinked);
    distance: number;
    lineLinked: IGrabLineLinked;
    constructor();
    load(data?: RecursivePartial<IGrab>): void;
}
