import type { IParticles } from "../../../Interfaces/Options/Particles/IParticles";
import type { IColor } from "../../../Interfaces/Options/Particles/IColor";
import type { ILineLinked } from "../../../Interfaces/Options/Particles/ILineLinked";
import type { IMove } from "../../../Interfaces/Options/Particles/IMove";
import type { IParticlesNumber } from "../../../Interfaces/Options/Particles/IParticlesNumber";
import type { IOpacity } from "../../../Interfaces/Options/Particles/IOpacity";
import type { ISize } from "../../../Interfaces/Options/Particles/ISize";
import type { IRotate } from "../../../Interfaces/Options/Particles/IRotate";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IShadow } from "../../../Interfaces/Options/Particles/IShadow";
import type { SingleOrMultiple } from "../../../Types/SingleOrMultiple";
import type { IStroke } from "../../../Interfaces/Options/Particles/IStroke";
import type { IShape } from "../../../Interfaces/Options/Particles/Shape/IShape";
export declare class Particles implements IParticles {
    get line_linked(): ILineLinked;
    set line_linked(value: ILineLinked);
    color: SingleOrMultiple<IColor>;
    lineLinked: ILineLinked;
    move: IMove;
    number: IParticlesNumber;
    opacity: IOpacity;
    rotate: IRotate;
    shape: IShape;
    size: ISize;
    shadow: IShadow;
    stroke: SingleOrMultiple<IStroke>;
    constructor();
    load(data?: RecursivePartial<IParticles>): void;
}
