import type { IBlackHoleRandomSize } from "../../../Interfaces/Options/BlackHoles/IBlackHoleRandomSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class BlackHoleRandomSize implements IBlackHoleRandomSize {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IBlackHoleRandomSize>): void;
}
