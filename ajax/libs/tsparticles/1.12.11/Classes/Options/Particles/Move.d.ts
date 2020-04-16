import type { IMove } from "../../../Interfaces/Options/Particles/IMove";
import { MoveDirection } from "../../../Enums/MoveDirection";
import { OutMode } from "../../../Enums/OutMode";
import type { IAttract } from "../../../Interfaces/Options/Particles/IAttract";
import type { ITrail } from "../../../Interfaces/Options/Particles/ITrail";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
export declare class Move implements IMove {
    get bounce(): boolean;
    set bounce(value: boolean);
    get out_mode(): OutMode;
    set out_mode(value: OutMode);
    attract: IAttract;
    collisions: boolean;
    direction: MoveDirection;
    enable: boolean;
    outMode: OutMode;
    random: boolean;
    speed: number;
    straight: boolean;
    trail: ITrail;
    constructor();
    load(data?: RecursivePartial<IMove>): void;
}
