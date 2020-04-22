import type { IPolygonMaskDrawStroke } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class PolygonMaskDrawStroke implements IPolygonMaskDrawStroke {
    color: IOptionsColor;
    width: number;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDrawStroke>): void;
}
