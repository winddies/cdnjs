import type { IBlackHoleSize } from "../../../Interfaces/Options/BlackHoles/IBlackHoleSize";
import type { IBlackHoleRandomSize } from "../../../Interfaces/Options/BlackHoles/IBlackHoleRandomSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class BlackHoleSize implements IBlackHoleSize {
    random: IBlackHoleRandomSize;
    value: number;
    limit?: number;
    constructor();
    load(data?: RecursivePartial<IBlackHoleSize>): void;
}
