import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IRandomSize } from "../../../Interfaces/Options/Particles/IRandomSize";
export declare class RandomSize implements IRandomSize {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IRandomSize> | undefined): void;
}
