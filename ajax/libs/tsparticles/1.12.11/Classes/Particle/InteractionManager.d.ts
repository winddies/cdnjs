import type { Container } from "../Container";
import type { Particle } from "../Particle";
export declare class InteractionManager {
    private readonly container;
    private readonly linker;
    private readonly attracter;
    private readonly collider;
    constructor(container: Container, particle: Particle);
    interact(p2: Particle): void;
}
