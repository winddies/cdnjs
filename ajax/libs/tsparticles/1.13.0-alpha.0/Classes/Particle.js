import { Bubbler } from "./Particle/Bubbler";
import { Drawer } from "./Particle/Drawer";
import { Grabber } from "./Particle/Grabber";
import { Repulser } from "./Particle/Repulser";
import { ShapeType } from "../Enums/ShapeType";
import { Updater } from "./Particle/Updater";
import { Utils } from "./Utils/Utils";
import { PolygonMaskType } from "../Enums/PolygonMaskType";
import { Connecter } from "./Particle/Connecter";
import { HoverMode } from "../Enums/Modes/HoverMode";
import { ClickMode } from "../Enums/Modes/ClickMode";
import { RotateDirection } from "../Enums/RotateDirection";
import { ColorUtils } from "./Utils/ColorUtils";
import { Particles } from "./Options/Particles/Particles";
import { SizeAnimationStatus } from "../Enums/SizeAnimationStatus";
import { OpacityAnimationStatus } from "../Enums/OpacityAnimationStatus";
export class Particle {
    constructor(container, position, emitter) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.container = container;
        this.emitter = emitter;
        this.fill = true;
        this.close = true;
        this.links = [];
        const options = container.options;
        const particlesOptions = new Particles();
        particlesOptions.load(options.particles);
        if ((emitter === null || emitter === void 0 ? void 0 : emitter.emitterOptions.particles) !== undefined) {
            const shapeType = emitter.emitterOptions.particles.shape.type;
            this.shape = shapeType instanceof Array ? Utils.itemFromArray(shapeType) : shapeType;
            const shapeData = emitter.emitterOptions.particles.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = shapeData instanceof Array ? Utils.itemFromArray(shapeData) : shapeData;
                this.fill = (_a = this.shapeData.fill) !== null && _a !== void 0 ? _a : this.fill;
                this.close = (_b = this.shapeData.close) !== null && _b !== void 0 ? _b : this.close;
            }
            particlesOptions.load((_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.particles);
            particlesOptions.load(emitter.emitterOptions.particles);
        }
        else {
            const shapeType = options.particles.shape.type;
            this.shape = shapeType instanceof Array ? Utils.itemFromArray(shapeType) : shapeType;
            const shapeData = options.particles.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = shapeData instanceof Array ? Utils.itemFromArray(shapeData) : shapeData;
                this.fill = (_d = this.shapeData.fill) !== null && _d !== void 0 ? _d : this.fill;
                this.close = (_e = this.shapeData.close) !== null && _e !== void 0 ? _e : this.close;
            }
            particlesOptions.load((_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.particles);
        }
        this.particlesOptions = particlesOptions;
        container.retina.initParticle(this);
        const color = this.particlesOptions.color;
        const sizeValue = ((_g = this.sizeValue) !== null && _g !== void 0 ? _g : container.retina.sizeValue);
        const randomSize = typeof this.particlesOptions.size.random === "boolean" ?
            this.particlesOptions.size.random :
            this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined ?
                Utils.randomInRange(this.randomMinimumSize, sizeValue) * this.container.retina.pixelRatio :
                sizeValue,
        };
        this.direction = emitter ? emitter.emitterOptions.direction : this.particlesOptions.move.direction;
        this.bubble = {};
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction == RotateDirection.random) {
            const index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            this.size.status = SizeAnimationStatus.increasing;
            this.size.velocity = ((_h = this.sizeAnimationSpeed) !== null && _h !== void 0 ? _h : container.retina.sizeAnimationSpeed) / 100;
            if (!this.particlesOptions.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (this.particlesOptions.rotate.animation.enable) {
            if (!this.particlesOptions.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        if (options.polygon.enable && options.polygon.type === PolygonMaskType.inline) {
            this.initialPosition = {
                x: this.position.x,
                y: this.position.y,
            };
        }
        this.offset = {
            x: 0,
            y: 0,
        };
        if (this.particlesOptions.move.collisions) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils.colorToRgb(Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils.colorToRgb(color);
        }
        const randomOpacity = this.particlesOptions.opacity.random;
        const opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = OpacityAnimationStatus.increasing;
            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
            if (!this.particlesOptions.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = this.calculateVelocity();
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        if (this.shape === ShapeType.image) {
            const shape = this.particlesOptions.shape;
            const index = Utils.arrayRandomIndex(container.images);
            const image = container.images[index];
            const optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
            this.image = {
                data: image,
                ratio: optionsImage.width / optionsImage.height,
                replaceColor: optionsImage.replaceColor,
                src: optionsImage.src,
            };
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_j = optionsImage.fill) !== null && _j !== void 0 ? _j : this.fill;
            this.close = (_k = optionsImage.close) !== null && _k !== void 0 ? _k : this.close;
        }
        this.stroke = this.particlesOptions.stroke instanceof Array ?
            Utils.itemFromArray(this.particlesOptions.stroke) :
            this.particlesOptions.stroke;
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ?
            ColorUtils.stringToRgb(this.particlesOptions.shadow.color) :
            ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater(this.container, this);
        this.bubbler = new Bubbler(this.container, this);
        this.repulser = new Repulser(this.container, this);
    }
    resetVelocity() {
        const velocity = this.calculateVelocity();
        this.velocity.horizontal = velocity.horizontal;
        this.velocity.vertical = velocity.vertical;
    }
    update(index, delta) {
        const container = this.container;
        const options = container.options;
        this.links = [];
        this.updater.update(delta);
        const hoverMode = options.interactivity.events.onHover.mode;
        const clickMode = options.interactivity.events.onClick.mode;
        if (Utils.isInArray(HoverMode.grab, hoverMode)) {
            Grabber.grab(this, container);
        }
        if (Utils.isInArray(HoverMode.connect, options.interactivity.events.onHover.mode)) {
            for (let j = index + 1; j < container.particles.count; j++) {
                const p2 = container.particles.array[j];
                Connecter.connect(this, p2, container);
            }
        }
        if (Utils.isInArray(HoverMode.bubble, hoverMode) || Utils.isInArray(ClickMode.bubble, clickMode)) {
            this.bubbler.bubble();
        }
        if (Utils.isInArray(HoverMode.repulse, hoverMode) || Utils.isInArray(ClickMode.repulse, clickMode)) {
            this.repulser.repulse();
        }
    }
    draw() {
        Drawer.draw(this, this.container);
    }
    isOverlapping() {
        const container = this.container;
        const p = this;
        let collisionFound = false;
        let iterations = 0;
        for (const p2 of container.particles.array.filter((t) => t != p)) {
            iterations++;
            const dist = Utils.getDistanceBetweenCoordinates(p.position, p2.position);
            if (dist <= p.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    }
    checkOverlap(position) {
        const container = this.container;
        const p = this;
        const overlapResult = p.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            p.position.x = position ? position.x : Math.random() * container.canvas.dimension.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.dimension.height;
            p.checkOverlap();
        }
    }
    destroy() {
    }
    calcPosition(container, position) {
        var _a, _b;
        const pos = { x: 0, y: 0 };
        const options = container.options;
        if (options.polygon.enable && ((_b = (_a = container.polygon.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                const randomPoint = container.polygon.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
        }
        else {
            pos.x = position ? position.x : Math.random() * container.canvas.dimension.width;
            pos.y = position ? position.y : Math.random() * container.canvas.dimension.height;
            if (pos.x > container.canvas.dimension.width - this.size.value * 2) {
                pos.x -= this.size.value;
            }
            else if (pos.x < this.size.value * 2) {
                pos.x += this.size.value;
            }
            if (pos.y > container.canvas.dimension.height - this.size.value * 2) {
                pos.y -= this.size.value;
            }
            else if (pos.y < this.size.value * 2) {
                pos.y += this.size.value;
            }
        }
        return pos;
    }
    calculateVelocity() {
        const baseVelocity = Utils.getParticleBaseVelocity(this);
        const res = {
            horizontal: 0,
            vertical: 0,
        };
        if (this.particlesOptions.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (this.particlesOptions.move.random) {
                res.horizontal *= Math.random();
                res.vertical *= Math.random();
            }
        }
        else {
            res.horizontal = baseVelocity.x + Math.random() - 0.5;
            res.vertical = baseVelocity.y + Math.random() - 0.5;
        }
        return res;
    }
}
