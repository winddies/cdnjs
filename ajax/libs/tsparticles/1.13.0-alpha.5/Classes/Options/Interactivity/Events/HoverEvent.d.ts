import type { IHoverEvent } from "../../../../Interfaces/Options/Interactivity/Events/IHoverEvent";
import { HoverMode } from "../../../../Enums/Modes/HoverMode";
import type { IParallax } from "../../../../Interfaces/Options/Interactivity/Events/IParallax";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class HoverEvent implements IHoverEvent {
    enable: boolean;
    mode: HoverMode | HoverMode[];
    parallax: IParallax;
    constructor();
    load(data?: RecursivePartial<IHoverEvent>): void;
}
