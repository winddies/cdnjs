import type { ILineLinkedShadow } from "../../../Interfaces/Options/Particles/ILineLinkedShadow";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class LineLinkedShadow implements ILineLinkedShadow {
    blur: number;
    color: IColor;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<ILineLinkedShadow>): void;
}
