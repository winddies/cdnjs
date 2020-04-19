import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IBackgroundMaskCover } from "../../../Interfaces/Options/BackgroundMask/IBackgroundMaskCover";
export declare class BackgroundMaskCover implements IBackgroundMaskCover {
    color: IOptionsColor;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IBackgroundMaskCover> | undefined): void;
}
