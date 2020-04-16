import type { ILineLinked } from "../../../Interfaces/Options/Particles/ILineLinked";
import type { ILineLinkedShadow } from "../../../Interfaces/Options/Particles/ILineLinkedShadow";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class LineLinked implements ILineLinked {
    blink: boolean;
    color: IColor;
    consent: boolean;
    distance: number;
    enable: boolean;
    opacity: number;
    shadow: ILineLinkedShadow;
    width: number;
    constructor();
    load(data?: RecursivePartial<ILineLinked>): void;
}
