import type { Container } from "../Container";
import type { Particle } from "../Particle";
export declare class Drawer {
    private readonly particle;
    private readonly container;
    constructor(container: Container, particle: Particle);
    draw(): void;
}
