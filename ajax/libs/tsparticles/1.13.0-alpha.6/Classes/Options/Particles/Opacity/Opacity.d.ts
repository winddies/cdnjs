import type { IOpacity } from "../../../../Interfaces/Options/Particles/Opacity/IOpacity";
import type { IOpacityAnimation } from "../../../../Interfaces/Options/Particles/Opacity/IOpacityAnimation";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOpacityRandom } from "../../../../Interfaces/Options/Particles/Opacity/IOpacityRandom";
export declare class Opacity implements IOpacity {
    get anim(): IOpacityAnimation;
    set anim(value: IOpacityAnimation);
    animation: IOpacityAnimation;
    random: IOpacityRandom;
    value: number;
    constructor();
    load(data?: RecursivePartial<IOpacity>): void;
}
