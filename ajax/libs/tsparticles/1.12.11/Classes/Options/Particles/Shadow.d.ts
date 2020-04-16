import type { IShadow } from "../../../Interfaces/Options/Particles/IShadow";
import type { ICoordinates } from "../../../Interfaces/ICoordinates";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class Shadow implements IShadow {
    blur: number;
    color: IColor;
    enable: boolean;
    offset: ICoordinates;
    constructor();
    load(data?: RecursivePartial<IShadow>): void;
}
