import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IRandomOpacity } from "../../../Interfaces/Options/Particles/IRandomOpacity";
export declare class RandomOpacity implements IRandomOpacity {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IRandomOpacity> | undefined): void;
}
