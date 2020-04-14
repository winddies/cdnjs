import { PolygonDrawerBase } from "./PolygonDrawerBase";
export class StarDrawer extends PolygonDrawerBase {
    getSidesData(particle, radius) {
        var _a;
        const polygon = particle.shapeData;
        const sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
    }
    getCenter(particle, radius) {
        var _a;
        const polygon = particle.shapeData;
        const sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
    }
}
