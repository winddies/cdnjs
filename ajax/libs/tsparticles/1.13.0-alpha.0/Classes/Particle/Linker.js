import { ColorUtils } from "../Utils/ColorUtils";
import { Constants } from "../Utils/Constants";
export class Linker {
    static link(p1, container) {
        var _a;
        const optOpacity = p1.particlesOptions.lineLinked.opacity;
        const optDistance = (_a = p1.lineLinkedDistance) !== null && _a !== void 0 ? _a : container.retina.lineLinkedDistance;
        for (const p2 of container.particles.spatialGrid.queryRadiusWithDist(p1.position, optDistance)) {
            if (p1 === p2.particle || !p2.particle.particlesOptions.lineLinked.enable)
                continue;
            const opacityLine = optOpacity - (p2.dist * optOpacity) / optDistance;
            if (opacityLine > 0) {
                if (!container.particles.lineLinkedColor) {
                    const color = p1.particlesOptions.lineLinked.color;
                    if (color === Constants.randomColorValue) {
                        if (p1.particlesOptions.lineLinked.consent) {
                            container.particles.lineLinkedColor = ColorUtils.stringToRgb(color);
                        }
                        else if (p1.particlesOptions.lineLinked.blink) {
                            container.particles.lineLinkedColor = Constants.randomColorValue;
                        }
                        else {
                            container.particles.lineLinkedColor = "mid";
                        }
                    }
                    else {
                        container.particles.lineLinkedColor = typeof color === "string" ?
                            ColorUtils.stringToRgb(color) :
                            ColorUtils.colorToRgb(color);
                    }
                }
                if (p2.particle.links.indexOf(p1) == -1 && p1.links.indexOf(p2.particle) == -1) {
                    p1.links.push(p2.particle);
                    container.canvas.drawLinkedLine(p1, p2.particle, p1.position, p2.particle.position, opacityLine);
                }
            }
        }
    }
}
