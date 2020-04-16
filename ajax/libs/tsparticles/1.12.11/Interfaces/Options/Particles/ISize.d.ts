import type { ISizeAnimation } from "./ISizeAnimation";
import type { IOptionLoader } from "../IOptionLoader";
import { IRandomSize } from "./IRandomSize";
export interface ISize extends IOptionLoader<ISize> {
    anim: ISizeAnimation;
    animation: ISizeAnimation;
    random: boolean | IRandomSize;
    value: number;
}
