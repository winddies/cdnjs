import type { Container } from "../Container";
import type { Particle } from "../Particle";
export declare class Attracter {
    private readonly container;
    private readonly particle;
    constructor(container: Container, particle: Particle);
    attract(p2: Particle): void;
}
