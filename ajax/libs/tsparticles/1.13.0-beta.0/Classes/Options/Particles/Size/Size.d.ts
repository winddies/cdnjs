import type { ISize } from "../../../../Interfaces/Options/Particles/Size/ISize";
import type { ISizeAnimation } from "../../../../Interfaces/Options/Particles/Size/ISizeAnimation";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { ISizeRandom } from "../../../../Interfaces/Options/Particles/Size/ISizeRandom";
export declare class Size implements ISize {
    get anim(): ISizeAnimation;
    set anim(value: ISizeAnimation);
    animation: ISizeAnimation;
    random: ISizeRandom;
    value: number;
    constructor();
    load(data?: RecursivePartial<ISize>): void;
}
