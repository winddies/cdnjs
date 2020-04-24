import type { IBlackHole } from "../../../Interfaces/Options/BlackHoles/IBlackHole";
import type { ICoordinates } from "../../../Interfaces/ICoordinates";
import type { IBlackHoleSize } from "../../../Interfaces/Options/BlackHoles/IBlackHoleSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class BlackHole implements IBlackHole {
    color: IOptionsColor;
    position?: ICoordinates;
    size: IBlackHoleSize;
    constructor();
    load(data?: RecursivePartial<IBlackHole>): void;
}
