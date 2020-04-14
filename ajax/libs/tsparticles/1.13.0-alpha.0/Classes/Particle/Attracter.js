export class Attracter {
    static attract(p1, container) {
        var _a;
        const options = container.options;
        for (const p2 of container.particles.spatialGrid.queryRadius(p1.position, (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance)) {
            if (p1 === p2 || p2.particlesOptions.move.attract.enable)
                continue;
            const dx = p1.position.x - p2.position.x;
            const dy = p1.position.y - p2.position.y;
            const ax = dx / (options.particles.move.attract.rotate.x * 1000);
            const ay = dy / (options.particles.move.attract.rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    }
}
