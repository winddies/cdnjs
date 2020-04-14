import { Utils } from "../Utils/Utils";
export class Collider {
    static collide(p1, container) {
        var _a;
        for (const p2 of container.particles.spatialGrid.queryRadius(p1.position, ((_a = p1.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue) * 2)) {
            if (!p2 || p1 === p2 || !p2.particlesOptions.move.collisions)
                continue;
            const dist = Utils.getDistanceBetweenCoordinates(p1.position, p2.position);
            const distP = (p1.bubble.radius || p1.sizeValue || container.retina.sizeValue) + (p2.bubble.radius || p2.sizeValue || container.retina.sizeValue);
            if (dist <= distP) {
                p1.resetVelocity();
                p2.resetVelocity();
            }
        }
    }
}
