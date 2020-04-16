import type { Container } from "../Container";
import type { Particle } from "../Particle";
export declare class Repulser {
    private readonly particle;
    private readonly container;
    constructor(container: Container, particle: Particle);
    repulse(): void;
    private divRepulse;
    private clickRepulse;
    private hoverRepulse;
    private processRepulse;
}
