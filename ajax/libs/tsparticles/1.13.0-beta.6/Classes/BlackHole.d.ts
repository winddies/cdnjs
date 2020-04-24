import type { ICoordinates } from "../Interfaces/ICoordinates";
import type { Container } from "./Container";
import type { Particle } from "./Particle";
import { IRgb } from "../Interfaces/IRgb";
import { IBlackHole } from "../Interfaces/Options/BlackHoles/IBlackHole";
export declare class BlackHole {
    position: ICoordinates;
    size: number;
    limit?: number;
    color: IRgb;
    mass: number;
    private readonly container;
    constructor(container: Container, options: IBlackHole, position?: ICoordinates);
    attract(particle: Particle): boolean;
    draw(): void;
}
