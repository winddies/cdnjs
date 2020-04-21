import type { IParticlesNumber } from "../../../Interfaces/Options/Particles/IParticlesNumber";
import type { IDensity } from "../../../Interfaces/Options/Particles/IDensity";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class ParticlesNumber implements IParticlesNumber {
    get max(): number;
    set max(value: number);
    density: IDensity;
    limit: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IParticlesNumber>): void;
}
