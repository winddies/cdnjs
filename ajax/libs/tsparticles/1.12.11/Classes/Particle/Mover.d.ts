import type { Particle } from "../Particle";
import type { Container } from "../Container";
export declare class Mover {
    private readonly container;
    private readonly particle;
    constructor(container: Container, particle: Particle);
    move(delta: number): void;
    private moveParallax;
    private getProximitySpeedFactor;
}
