import type { IStroke } from "../../../Interfaces/Options/Particles/IStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class Stroke implements IStroke {
    color: IOptionsColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IStroke>): void;
}
