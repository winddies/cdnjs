import { Container } from "./Container";
import type { ICoordinates } from "../Interfaces/ICoordinates";
import { IDimension } from "../Interfaces/IDimension";
export declare class PolygonMask {
    redrawTimeout?: number;
    raw?: ICoordinates[];
    svg?: SVGSVGElement;
    path?: SVGPathElement;
    polygonPath?: Path2D;
    dimension: IDimension;
    offset?: ICoordinates;
    readonly path2DSupported: boolean;
    private readonly container;
    private polygonPathLength;
    constructor(container: Container);
    checkInsidePolygon(position: ICoordinates | undefined | null): boolean;
    redraw(): void;
    init(): Promise<void>;
    reset(): void;
    randomPointInPolygon(): ICoordinates;
    parseSvgPathToPolygon(svgUrl?: string): Promise<ICoordinates[] | undefined>;
    drawPolygon(): void;
    drawPointsOnPolygonPath(): void;
    private getRandomPointOnPolygonPath;
    private getRandomPointOnPolygonPathByLength;
    private getEquidistantPointOnPolygonPathByIndex;
    private getPoingOnPolygonPathByIndex;
    private createPath2D;
}
