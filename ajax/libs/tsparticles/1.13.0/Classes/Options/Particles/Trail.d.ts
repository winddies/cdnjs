import type { ITrail } from "../../../Interfaces/Options/Particles/ITrail";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class Trail implements ITrail {
    enable: boolean;
    length: number;
    fillColor: IOptionsColor;
    constructor();
    load(data?: RecursivePartial<ITrail>): void;
}
