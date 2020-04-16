import type { IOpacity } from "../../../Interfaces/Options/Particles/IOpacity";
import type { IOpacityAnimation } from "../../../Interfaces/Options/Particles/IOpacityAnimation";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IRandomOpacity } from "../../../Interfaces/Options/Particles/IRandomOpacity";
export declare class Opacity implements IOpacity {
    get anim(): IOpacityAnimation;
    set anim(value: IOpacityAnimation);
    animation: IOpacityAnimation;
    random: IRandomOpacity;
    value: number;
    constructor();
    load(data?: RecursivePartial<IOpacity>): void;
}
