import type { Container } from "./Container";
import type { IDimension } from "../Interfaces/IDimension";
import type { Particle } from "./Particle";
import type { ICoordinates } from "../Interfaces/ICoordinates";
export declare class Canvas {
    element?: HTMLCanvasElement;
    readonly dimension: IDimension;
    private readonly container;
    private context;
    private generatedCanvas;
    private coverColor?;
    private trailFillColor?;
    constructor(container: Container);
    init(): void;
    loadCanvas(canvas: HTMLCanvasElement, generatedCanvas?: boolean): void;
    destroy(): void;
    size(): void;
    paint(): void;
    clear(): void;
    isPointInPath(path: Path2D, point: ICoordinates): boolean;
    drawPolygonMask(): void;
    drawLinkedLine(p1: Particle, p2: Particle, pos1: ICoordinates, pos2: ICoordinates, opacity: number): void;
    drawConnectLine(p1: Particle, p2: Particle): void;
    drawGrabLine(particle: Particle, opacity: number, mousePos: ICoordinates): void;
    drawParticle(particle: Particle): void;
    private paintBase;
    private lineStyle;
    private initBackground;
}
