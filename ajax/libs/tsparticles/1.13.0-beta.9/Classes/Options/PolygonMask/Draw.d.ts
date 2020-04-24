import type { IPolygonMaskDraw } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDraw";
import type { IPolygonMaskDrawStroke } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDrawStroke";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class Draw implements IPolygonMaskDraw {
    get lineWidth(): number;
    set lineWidth(value: number);
    get lineColor(): string | IOptionsColor;
    set lineColor(value: string | IOptionsColor);
    enable: boolean;
    stroke: IPolygonMaskDrawStroke;
    constructor();
    load(data?: RecursivePartial<IPolygonMaskDraw>): void;
}
