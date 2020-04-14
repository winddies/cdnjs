var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Canvas } from "./Canvas";
import { EventListeners } from "./Utils/EventListeners";
import { Particles } from "./Particles";
import { Retina } from "./Retina";
import { ShapeType } from "../Enums/ShapeType";
import { PolygonMask } from "./PolygonMask";
import { FrameManager } from "./FrameManager";
import { Options } from "./Options/Options";
import { Utils } from "./Utils/Utils";
import { Presets } from "./Utils/Presets";
import { Emitter } from "./Emitter";
export class Container {
    constructor(id, params, ...presets) {
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina(this);
        this.canvas = new Canvas(this);
        this.particles = new Particles(this);
        this.polygon = new PolygonMask(this);
        this.drawer = new FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.images = [];
        this.bubble = {};
        this.repulse = {};
        this.emitters = [];
        this.options = new Options();
        for (const preset of presets) {
            this.options.load(Presets.getPreset(preset));
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.eventListeners = new EventListeners(this);
    }
    static requestFrame(callback) {
        return window.customRequestAnimationFrame(callback);
    }
    static cancelAnimation(handle) {
        window.cancelAnimationFrame(handle);
    }
    play() {
        if (this.paused) {
            this.lastFrameTime = performance.now();
            this.paused = false;
            for (const emitter of this.emitters) {
                emitter.start();
            }
        }
        this.drawAnimationFrame = Container.requestFrame((t) => this.drawer.nextFrame(t));
    }
    pause() {
        if (this.drawAnimationFrame !== undefined) {
            for (const emitter of this.emitters) {
                emitter.stop();
            }
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
            this.paused = true;
        }
    }
    densityAutoParticles() {
        if (!(this.canvas.element && this.options.particles.number.density.enable)) {
            return;
        }
        let area = this.canvas.element.width * this.canvas.element.height / 1000;
        if (this.retina.isRetina) {
            area /= this.retina.pixelRatio * 2;
        }
        const optParticlesNumber = this.options.particles.number.value;
        const density = this.options.particles.number.density.area;
        const particlesNumber = area * optParticlesNumber / density;
        const particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    }
    destroy() {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.polygon;
        delete this.bubble;
        delete this.repulse;
        delete this.images;
        delete this.drawer;
        delete this.eventListeners;
        this.destroyed = true;
    }
    exportImg(callback) {
        this.exportImage(callback);
    }
    exportImage(callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    }
    exportConfiguration() {
        return JSON.stringify(this.options, undefined, 2);
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            this.stop();
            yield this.start();
        });
    }
    stop() {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.images = [];
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        this.polygon.reset();
        for (const emitter of this.emitters) {
            emitter.stop();
        }
        this.emitters = [];
        delete this.particles.lineLinkedColor;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.started) {
                return;
            }
            this.started = true;
            this.eventListeners.addListeners();
            yield this.polygon.init();
            if (Utils.isInArray(ShapeType.char, this.options.particles.shape.type) ||
                Utils.isInArray(ShapeType.character, this.options.particles.shape.type)) {
                if (this.options.particles.shape.character instanceof Array) {
                    for (const character of this.options.particles.shape.character) {
                        yield Utils.loadFont(character);
                    }
                }
                else {
                    const character = this.options.particles.shape.character;
                    if (character !== undefined) {
                        yield Utils.loadFont(character);
                    }
                }
            }
            if (Utils.isInArray(ShapeType.image, this.options.particles.shape.type)) {
                if (this.options.particles.shape.image instanceof Array) {
                    for (const optionsImage of this.options.particles.shape.image) {
                        yield this.loadImageShape(optionsImage);
                    }
                }
                else {
                    yield this.loadImageShape(this.options.particles.shape.image);
                }
            }
            this.init();
            this.play();
        });
    }
    loadImageShape(imageShape) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.images.push(yield Utils.loadImage(imageShape));
            }
            catch (_a) {
            }
        });
    }
    init() {
        this.retina.init();
        this.canvas.init();
        this.particles.init();
        if (this.options.emitters instanceof Array) {
            for (const emitterOptions of this.options.emitters) {
                const emitter = new Emitter(this, emitterOptions);
                this.emitters.push(emitter);
            }
        }
        else {
            const emitterOptions = this.options.emitters;
            const emitter = new Emitter(this, emitterOptions);
            this.emitters.push(emitter);
        }
        this.densityAutoParticles();
    }
}
