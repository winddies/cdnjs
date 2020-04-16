import type { PolygonMaskType } from "../../../Enums/PolygonMaskType";
import type { IPolygonMaskDraw } from "./IPolygonMaskDraw";
import type { IPolygonMaskMove } from "./IPolygonMaskMove";
import type { PolygonMaskInlineArrangement } from "../../../Enums/PolygonMaskInlineArrangement";
import type { IOptionLoader } from "../IOptionLoader";
import type { IPolygonInline } from "./IPolygonInline";
export interface IPolygonMask extends IOptionLoader<IPolygonMask> {
    draw: IPolygonMaskDraw;
    enable: boolean;
    inline: IPolygonInline;
    inlineArrangement: PolygonMaskInlineArrangement;
    move: IPolygonMaskMove;
    scale: number;
    type: PolygonMaskType;
    url: string;
}
