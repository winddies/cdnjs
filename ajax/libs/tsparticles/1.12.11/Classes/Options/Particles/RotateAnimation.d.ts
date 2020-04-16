import type { IRotateAnimation } from "../../../Interfaces/Options/Particles/IRotateAnimation";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class RotateAnimation implements IRotateAnimation {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IRotateAnimation>): void;
}
