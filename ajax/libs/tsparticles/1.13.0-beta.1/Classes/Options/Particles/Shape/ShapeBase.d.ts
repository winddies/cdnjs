import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IShapeValues } from "../../../../Interfaces/Options/Particles/Shape/IShapeValues";
import type { IParticles } from "../../../../Interfaces/Options/Particles/IParticles";
export declare class ShapeBase implements IShapeValues {
    close?: boolean;
    fill?: boolean;
    particles?: IParticles;
    constructor();
    load(data?: RecursivePartial<IShapeValues>, particlesOptions?: IParticles): void;
}
