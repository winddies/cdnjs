import type { IEmitter } from "../../../Interfaces/Options/Emitters/IEmitter";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { ICoordinates } from "../../../Interfaces/ICoordinates";
import { MoveDirection } from "../../../Enums/MoveDirection";
import type { IParticles } from "../../../Interfaces/Options/Particles/IParticles";
import type { IEmitterRate } from "../../../Interfaces/Options/Emitters/IEmitterRate";
import type { IEmitterLife } from "../../../Interfaces/Options/Emitters/IEmitterLife";
import type { IDimension } from "../../../Interfaces/IDimension";
export declare class Emitter implements IEmitter {
    size?: IDimension;
    direction: MoveDirection;
    life: IEmitterLife;
    particles?: IParticles;
    position?: ICoordinates;
    rate: IEmitterRate;
    constructor();
    load(data?: RecursivePartial<IEmitter>, particlesOptions?: IParticles): void;
}
