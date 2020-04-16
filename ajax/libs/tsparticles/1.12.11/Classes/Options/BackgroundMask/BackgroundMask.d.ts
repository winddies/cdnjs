import type { IBackgroundMask } from "../../../Interfaces/Options/BackgroundMask/IBackgroundMask";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IBackgroundMaskCover } from "../../../Interfaces/Options/BackgroundMask/IBackgroundMaskCover";
export declare class BackgroundMask implements IBackgroundMask {
    cover: IBackgroundMaskCover | IColor;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
