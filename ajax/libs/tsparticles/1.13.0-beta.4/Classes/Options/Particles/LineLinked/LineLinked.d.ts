import type { ILineLinked } from "../../../../Interfaces/Options/Particles/LineLinked/ILineLinked";
import type { ILineLinkedShadow } from "../../../../Interfaces/Options/Particles/LineLinked/ILineLinkedShadow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../../Interfaces/Options/Particles/IOptionsColor";
export declare class LineLinked implements ILineLinked {
    blink: boolean;
    color: IOptionsColor;
    consent: boolean;
    distance: number;
    enable: boolean;
    opacity: number;
    shadow: ILineLinkedShadow;
    width: number;
    constructor();
    load(data?: RecursivePartial<ILineLinked>): void;
}
