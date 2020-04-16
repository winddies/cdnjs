import type { Container } from "../Container";
import type { Particle } from "../Particle";
export declare class Grabber {
    private readonly container;
    private readonly particle;
    constructor(container: Container, particle: Particle);
    grab(): void;
}
