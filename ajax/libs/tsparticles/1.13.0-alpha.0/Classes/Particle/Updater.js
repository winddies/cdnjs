import { OutMode } from "../../Enums/OutMode";
import { Utils } from "../Utils/Utils";
import { PolygonMaskType } from "../../Enums/PolygonMaskType";
import { Mover } from "./Mover";
import { RotateDirection } from "../../Enums/RotateDirection";
import { SizeAnimationStatus } from "../../Enums/SizeAnimationStatus";
import { OpacityAnimationStatus } from "../../Enums/OpacityAnimationStatus";
export class Updater {
    constructor(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover(container, particle);
    }
    static checkBounds(coordinate, radius, size, outside) {
        if ((coordinate + radius > size) || (coordinate - radius < 0)) {
            outside();
        }
    }
    update(delta) {
        this.mover.move(delta);
        this.updateOpacity();
        this.updateSize();
        this.updateAngle();
        this.fixOutOfCanvasPosition();
        this.updateOutMode();
    }
    updateOpacity() {
        const particle = this.particle;
        if (particle.particlesOptions.opacity.animation.enable) {
            switch (particle.opacity.status) {
                case OpacityAnimationStatus.increasing:
                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
                        particle.opacity.status = OpacityAnimationStatus.decreasing;
                    }
                    else {
                        particle.opacity.value += (particle.opacity.velocity || 0);
                    }
                    break;
                case OpacityAnimationStatus.decreasing:
                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
                        particle.opacity.status = OpacityAnimationStatus.increasing;
                    }
                    else {
                        particle.opacity.value -= (particle.opacity.velocity || 0);
                    }
                    break;
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    }
    updateSize() {
        var _a;
        const container = this.container;
        const particle = this.particle;
        if (particle.particlesOptions.size.animation.enable) {
            switch (particle.size.status) {
                case SizeAnimationStatus.increasing:
                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
                        particle.size.status = SizeAnimationStatus.decreasing;
                    }
                    else {
                        particle.size.value += (particle.size.velocity || 0);
                    }
                    break;
                case SizeAnimationStatus.decreasing:
                    if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
                        particle.size.status = SizeAnimationStatus.increasing;
                    }
                    else {
                        particle.size.value -= (particle.size.velocity || 0);
                    }
            }
            if (particle.size.value < 0) {
                particle.size.value = 0;
            }
        }
    }
    updateAngle() {
        const particle = this.particle;
        if (particle.particlesOptions.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case RotateDirection.clockwise:
                    particle.angle += particle.particlesOptions.rotate.animation.speed * Math.PI / 18;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case RotateDirection.counterClockwise:
                default:
                    particle.angle -= particle.particlesOptions.rotate.animation.speed * Math.PI / 18;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    }
    fixOutOfCanvasPosition() {
        var _a, _b;
        const container = this.container;
        const particle = this.particle;
        const outMode = particle.particlesOptions.move.outMode;
        const canvasSize = container.canvas.dimension;
        let newPos;
        if (outMode === OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.size.value,
                right: canvasSize.width,
                top: particle.size.value,
            };
        }
        else if (outMode === OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: particle.size.value,
                right: canvasSize.width,
                top: -particle.size.value - particle.offset.y,
            };
        }
        else if (outMode === OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: particle.size.value,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: -particle.size.value - particle.offset.y,
            };
        }
        if (outMode === OutMode.destroy) {
            const sizeValue = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
            if (!Utils.isPointInside(particle.position, container.canvas.dimension, sizeValue)) {
                container.particles.remove(particle);
            }
        }
        else {
            const sizeValue = (_b = particle.sizeValue) !== null && _b !== void 0 ? _b : container.retina.sizeValue;
            const nextBounds = Utils.calculateBounds(particle.position, sizeValue);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                particle.position.y = Math.random() * canvasSize.height;
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                particle.position.y = Math.random() * canvasSize.height;
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                particle.position.y = newPos.top;
                particle.position.x = Math.random() * canvasSize.width;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                particle.position.y = newPos.bottom;
                particle.position.x = Math.random() * canvasSize.width;
            }
        }
    }
    updateOutMode() {
        const particle = this.particle;
        switch (particle.particlesOptions.move.outMode) {
            case OutMode.bounce:
            case OutMode.bounceVertical:
            case OutMode.bounceHorizontal:
                this.updateBounce();
                break;
        }
    }
    updateBounce() {
        const container = this.container;
        const options = container.options;
        const particle = this.particle;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType.inline) {
            if (!container.polygon.checkInsidePolygon(particle.position)) {
                this.polygonBounce();
            }
        }
        else if (options.polygon.enable && options.polygon.type === PolygonMaskType.inline) {
            if (particle.initialPosition) {
                const dist = Utils.getDistanceBetweenCoordinates(particle.initialPosition, particle.position);
                if (dist > container.retina.polygonMaskMoveRadius) {
                    this.polygonBounce();
                }
            }
        }
        else {
            const outMode = particle.particlesOptions.move.outMode;
            const x = particle.position.x + particle.offset.x;
            const y = particle.position.y + particle.offset.y;
            if (outMode === OutMode.bounce || outMode === OutMode.bounceHorizontal) {
                Updater.checkBounds(x, particle.size.value, container.canvas.dimension.width, () => {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                });
            }
            if (outMode === OutMode.bounce || outMode === OutMode.bounceVertical) {
                Updater.checkBounds(y, particle.size.value, container.canvas.dimension.height, () => {
                    particle.velocity.vertical = -particle.velocity.vertical;
                });
            }
        }
    }
    polygonBounce() {
        const particle = this.particle;
        particle.velocity.horizontal = -particle.velocity.horizontal + (particle.velocity.vertical / 2);
        particle.velocity.vertical = -particle.velocity.vertical + (particle.velocity.horizontal / 2);
    }
}
