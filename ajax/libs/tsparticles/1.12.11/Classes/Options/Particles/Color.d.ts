import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
import type { IValueColor } from "../../../Interfaces/IValueColor";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IRgb } from "../../../Interfaces/IRgb";
import type { IHsl } from "../../../Interfaces/IHsl";
export declare class Color implements IColor {
    value: string | IValueColor | IRgb | IHsl | string[];
    constructor();
    load(data?: RecursivePartial<IColor>): void;
}
