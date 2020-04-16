import type { IOpacityAnimation } from "./IOpacityAnimation";
import type { IOptionLoader } from "../IOptionLoader";
import type { IRandomOpacity } from "./IRandomOpacity";
export interface IOpacity extends IOptionLoader<IOpacity> {
    value: number;
    random: boolean | IRandomOpacity;
    anim: IOpacityAnimation;
    animation: IOpacityAnimation;
}
