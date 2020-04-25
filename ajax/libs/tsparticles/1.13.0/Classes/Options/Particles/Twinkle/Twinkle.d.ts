import type { ITwinkle } from "../../../../Interfaces/Options/Particles/Twinkle/ITwinkle";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { ITwinkleValues } from "../../../../Interfaces/Options/Particles/Twinkle/ITwinkleValues";
export declare class Twinkle implements ITwinkle {
    lines: ITwinkleValues;
    particles: ITwinkleValues;
    constructor();
    load(data?: RecursivePartial<ITwinkle>): void;
}
