import { Utils } from "../Utils/Utils";
import { HoverMode } from "../../Enums/Modes/HoverMode";
export class Mover {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    move(delta) {
        var _a;
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        if (options.particles.move.enable) {
            const slowFactor = this.getProximitySpeedFactor();
            const deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
            const moveSpeed = ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : container.retina.moveSpeed) / 2 * slowFactor * deltaFactor;
            particle.position.x += particle.velocity.horizontal * moveSpeed;
            particle.position.y += particle.velocity.vertical * moveSpeed;
        }
        this.moveParallax();
    }
    moveParallax() {
        const container = this.container;
        const options = container.options;
        if (!options.interactivity.events.onHover.parallax.enable) {
            return;
        }
        const particle = this.particle;
        const parallaxForce = options.interactivity.events.onHover.parallax.force;
        const mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
        const windowDimension = {
            height: window.innerHeight / 2,
            width: window.innerWidth / 2,
        };
        const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
        const tmp = {
            x: (mousePos.x - windowDimension.width) * (particle.size.value / parallaxForce),
            y: (mousePos.y - windowDimension.height) * (particle.size.value / parallaxForce),
        };
        particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
        particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
    }
    getProximitySpeedFactor() {
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        const active = Utils.isInArray(HoverMode.slow, options.interactivity.events.onHover.mode);
        if (!active) {
            return 1;
        }
        const mousePos = this.container.interactivity.mouse.position;
        if (!mousePos) {
            return 1;
        }
        const particlePos = particle.position;
        const dist = Utils.getDistanceBetweenCoordinates(mousePos, particlePos);
        const radius = container.retina.slowModeRadius;
        if (dist > radius) {
            return 1;
        }
        const proximityFactor = (dist / radius) || 0;
        const slowFactor = options.interactivity.modes.slow.factor;
        return proximityFactor / slowFactor;
    }
}
