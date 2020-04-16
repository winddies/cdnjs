import type { IStroke } from "../../../Interfaces/Options/Particles/IStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class Stroke implements IStroke {
    color: IColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IStroke>): void;
}
