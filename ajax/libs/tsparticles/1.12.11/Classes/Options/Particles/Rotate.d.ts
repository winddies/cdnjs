import type { IRotate } from "../../../Interfaces/Options/Particles/IRotate";
import type { IRotateAnimation } from "../../../Interfaces/Options/Particles/IRotateAnimation";
import { RotateDirection } from "../../../Enums/RotateDirection";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class Rotate implements IRotate {
    animation: IRotateAnimation;
    direction: RotateDirection;
    random: boolean;
    value: number;
    constructor();
    load(data?: RecursivePartial<IRotate>): void;
}
