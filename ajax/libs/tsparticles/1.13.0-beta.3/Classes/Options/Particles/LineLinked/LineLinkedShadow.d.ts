import type { ILineLinkedShadow } from "../../../../Interfaces/Options/Particles/LineLinked/ILineLinkedShadow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../../Interfaces/Options/Particles/IOptionsColor";
export declare class LineLinkedShadow implements ILineLinkedShadow {
    blur: number;
    color: IOptionsColor;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ILineLinkedShadow>): void;
}
