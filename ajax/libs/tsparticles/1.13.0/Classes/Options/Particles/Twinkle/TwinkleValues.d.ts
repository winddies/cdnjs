import type { ITwinkleValues } from "../../../../Interfaces/Options/Particles/Twinkle/ITwinkleValues";
import type { IOptionsColor } from "../../../../Interfaces/Options/Particles/IOptionsColor";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class TwinkleValues implements ITwinkleValues {
    color?: IOptionsColor;
    enable: boolean;
    frequency: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<ITwinkleValues>): void;
}
