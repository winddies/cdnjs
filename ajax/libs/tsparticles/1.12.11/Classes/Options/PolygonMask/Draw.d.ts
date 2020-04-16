import type { IPolygonMaskDraw } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDraw";
import type { IPolygonMaskDrawStroke } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class Draw implements IPolygonMaskDraw {
    get lineWidth(): number;
    set lineWidth(value: number);
    get lineColor(): string | IColor;
    set lineColor(value: string | IColor);
    enable: boolean;
    stroke: IPolygonMaskDrawStroke;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDraw>): void;
}
