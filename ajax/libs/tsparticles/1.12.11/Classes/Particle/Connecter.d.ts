import type { Particle } from "../Particle";
import type { Container } from "../Container";
export declare class Connecter {
    private readonly particle;
    private readonly container;
    constructor(container: Container, particle: Particle);
    connect(destParticle: Particle): void;
}
