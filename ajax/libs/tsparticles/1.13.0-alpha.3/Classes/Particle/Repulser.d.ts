import type { Container } from "../Container";
import type { IParticle } from "../../Interfaces/IParticle";
export declare class Repulser {
    private readonly particle;
    private readonly container;
    constructor(container: Container, particle: IParticle);
    repulse(): void;
    private divRepulse;
    private hoverRepulse;
    private processRepulse;
    private clickRepulse;
    private processClickRepulse;
}
