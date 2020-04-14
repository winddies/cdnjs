import type { IPolygonMaskDrawStroke } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class PolygonMaskDrawStroke implements IPolygonMaskDrawStroke {
    color: IColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDrawStroke>): void;
}
