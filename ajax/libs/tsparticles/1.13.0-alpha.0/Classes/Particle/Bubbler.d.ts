import type { Container } from "../Container";
import type { IParticle } from "../../Interfaces/IParticle";
export declare class Bubbler {
    private readonly particle;
    private readonly container;
    constructor(container: Container, particle: IParticle);
    private static reset;
    bubble(): void;
    private process;
    private clickBubble;
    private hoverBubble;
    private hoverBubbleSize;
    private hoverBubbleOpacity;
}
