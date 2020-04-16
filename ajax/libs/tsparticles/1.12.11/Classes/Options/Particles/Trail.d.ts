import type { ITrail } from "../../../Interfaces/Options/Particles/ITrail";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class Trail implements ITrail {
    enable: boolean;
    length: number;
    fillColor: IColor;
    constructor();
    load(data?: RecursivePartial<ITrail>): void;
}
