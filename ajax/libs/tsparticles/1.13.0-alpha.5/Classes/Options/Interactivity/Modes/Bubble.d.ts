import type { IBubble } from "../../../../Interfaces/Options/Interactivity/Modes/IBubble";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { IOptionsColor } from "../../../../Interfaces/Options/Particles/IOptionsColor";
import { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export declare class Bubble implements IBubble {
    distance: number;
    duration: number;
    opacity?: number;
    size?: number;
    color?: SingleOrMultiple<IOptionsColor>;
    constructor();
    load(data?: RecursivePartial<IBubble>): void;
}
