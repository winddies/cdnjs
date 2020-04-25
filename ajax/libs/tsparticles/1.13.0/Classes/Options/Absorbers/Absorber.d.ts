import type { IAbsorber } from "../../../Interfaces/Options/Absorbers/IAbsorber";
import type { ICoordinates } from "../../../Interfaces/ICoordinates";
import type { IAbsorberSize } from "../../../Interfaces/Options/Absorbers/IAbsorberSize";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionsColor } from "../../../Interfaces/Options/Particles/IOptionsColor";
export declare class Absorber implements IAbsorber {
    color: IOptionsColor;
    position?: ICoordinates;
    size: IAbsorberSize;
    constructor();
    load(data?: RecursivePartial<IAbsorber>): void;
}
