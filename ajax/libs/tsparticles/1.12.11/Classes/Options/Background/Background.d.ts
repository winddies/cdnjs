import type { IBackground } from "../../../Interfaces/Options/Background/IBackground";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
export declare class Background implements IBackground {
    color?: IColor;
    image?: string;
    position?: string;
    repeat?: string;
    size?: string;
    opacity?: number;
    load(data?: RecursivePartial<IBackground>): void;
}
