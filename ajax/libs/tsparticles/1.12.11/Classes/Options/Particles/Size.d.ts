import type { ISize } from "../../../Interfaces/Options/Particles/ISize";
import type { ISizeAnimation } from "../../../Interfaces/Options/Particles/ISizeAnimation";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IRandomSize } from "../../../Interfaces/Options/Particles/IRandomSize";
export declare class Size implements ISize {
    get anim(): ISizeAnimation;
    set anim(value: ISizeAnimation);
    animation: ISizeAnimation;
    random: IRandomSize;
    value: number;
    constructor();
    load(data?: RecursivePartial<ISize>): void;
}
