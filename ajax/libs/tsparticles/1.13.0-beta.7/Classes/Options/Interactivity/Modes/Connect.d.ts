import type { IConnect } from "../../../../Interfaces/Options/Interactivity/Modes/IConnect";
import type { IConnectLineLinked } from "../../../../Interfaces/Options/Interactivity/Modes/IConnectLineLinked";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Connect implements IConnect {
    get line_linked(): IConnectLineLinked;
    set line_linked(value: IConnectLineLinked);
    distance: number;
    lineLinked: IConnectLineLinked;
    radius: number;
    constructor();
    load(data?: RecursivePartial<IConnect>): void;
}
