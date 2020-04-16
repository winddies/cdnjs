import type { Container } from "./Container";
import type { IDimension } from "../Interfaces/IDimension";
import type { ICoordinates } from "../Interfaces/ICoordinates";
import type { IParticle } from "../Interfaces/IParticle";
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
    drawLinkedLine(p1: IParticle, p2: IParticle, opacity: number): void;
    drawConnectLine(p1: IParticle, p2: IParticle): void;
    drawGrabLine(particle: IParticle, opacity: number, mousePos: ICoordinates): void;
    drawParticle(particle: IParticle): void;
    private paintBase;
    private lineStyle;
    private initBackground;
}
