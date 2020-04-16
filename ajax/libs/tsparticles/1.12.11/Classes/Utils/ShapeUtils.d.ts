import type { Particle } from "../Particle";
import type { IShapeDrawer } from "../../Interfaces/IShapeDrawer";
export declare class ShapeUtils {
    private static readonly drawers;
    static addShapeDrawer(type: string, drawer: IShapeDrawer): void;
    static drawShape(context: CanvasRenderingContext2D, particle: Particle, radius: number, opacity: number): void;
}
