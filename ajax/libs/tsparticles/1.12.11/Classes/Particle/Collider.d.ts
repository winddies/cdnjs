import type { Container } from "../Container";
import type { Particle } from "../Particle";
export declare class Collider {
    private readonly container;
    private readonly particle;
    constructor(container: Container, particle: Particle);
    collide(p2: Particle): void;
}
