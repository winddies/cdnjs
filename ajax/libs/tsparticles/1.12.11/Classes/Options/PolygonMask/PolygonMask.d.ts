import type { IPolygonMask } from "../../../Interfaces/Options/PolygonMask/IPolygonMask";
import { PolygonMaskType } from "../../../Enums/PolygonMaskType";
import type { IPolygonMaskDraw } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDraw";
import type { IPolygonMaskMove } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskMove";
import { PolygonMaskInlineArrangement } from "../../../Enums/PolygonMaskInlineArrangement";
import type { IPolygonInline } from "../../../Interfaces/Options/PolygonMask/IPolygonInline";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class PolygonMask implements IPolygonMask {
    get inlineArrangement(): PolygonMaskInlineArrangement;
    set inlineArrangement(value: PolygonMaskInlineArrangement);
    draw: IPolygonMaskDraw;
    enable: boolean;
    inline: IPolygonInline;
    move: IPolygonMaskMove;
    scale: number;
    type: PolygonMaskType;
    url: string;
    constructor();
    load(data?: RecursivePartial<IPolygonMask>): void;
}
