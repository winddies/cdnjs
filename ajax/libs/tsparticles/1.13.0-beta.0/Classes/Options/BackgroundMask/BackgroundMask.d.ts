import type { IBackgroundMask } from "../../../Interfaces/Options/BackgroundMask/IBackgroundMask";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IBackgroundMaskCover } from "../../../Interfaces/Options/BackgroundMask/IBackgroundMaskCover";
export declare class BackgroundMask implements IBackgroundMask {
    cover: IBackgroundMaskCover;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
