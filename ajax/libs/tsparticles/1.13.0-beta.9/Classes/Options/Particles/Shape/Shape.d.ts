import type { IShape } from "../../../../Interfaces/Options/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums/ShapeType";
import type { IImageShape } from "../../../../Interfaces/Options/Particles/Shape/IImageShape";
import type { ICharacterShape } from "../../../../Interfaces/Options/Particles/Shape/ICharacterShape";
import type { IPolygonShape } from "../../../../Interfaces/Options/Particles/Shape/IPolygonShape";
import type { IStroke } from "../../../../Interfaces/Options/Particles/IStroke";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import { ShapeData } from "../../../../Types/ShapeData";
export declare class Shape implements IShape {
    get custom(): ShapeData;
    set custom(value: ShapeData);
    get images(): IImageShape[];
    set images(value: IImageShape[]);
    get stroke(): SingleOrMultiple<IStroke>;
    set stroke(value: SingleOrMultiple<IStroke>);
    get character(): SingleOrMultiple<ICharacterShape>;
    set character(value: SingleOrMultiple<ICharacterShape>);
    get polygon(): SingleOrMultiple<IPolygonShape>;
    set polygon(value: SingleOrMultiple<IPolygonShape>);
    image: SingleOrMultiple<IImageShape>;
    type: SingleOrMultiple<ShapeType | string>;
    options: ShapeData;
    constructor();
    load(data?: RecursivePartial<IShape>): void;
}
