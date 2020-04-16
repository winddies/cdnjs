import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IBackgroundMaskCover } from "../../../Interfaces/Options/BackgroundMask/IBackgroundMaskCover";
export declare class BackgroundMaskCover implements IBackgroundMaskCover {
    color: IColor;
    opacity: number;
    constructor();
    load(data?: RecursivePartial<IBackgroundMaskCover> | undefined): void;
}
