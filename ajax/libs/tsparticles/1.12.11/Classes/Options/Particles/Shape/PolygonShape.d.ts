import type { IPolygonShape } from "../../../../Interfaces/Options/Particles/Shape/IPolygonShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class PolygonShape implements IPolygonShape {
    get nb_sides(): number;
    set nb_sides(value: number);
    close?: boolean;
    fill?: boolean;
    sides: number;
    constructor();
    load(data?: RecursivePartial<IPolygonShape>): void;
}
