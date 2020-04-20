import type { IBackground } from "../../../Interfaces/Options/Background/IBackground";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class Background implements IBackground {
    color?: IOptionsColor;
    image?: string;
    position?: string;
    repeat?: string;
    size?: string;
    opacity?: number;
    load(data?: RecursivePartial<IBackground>): void;
}
