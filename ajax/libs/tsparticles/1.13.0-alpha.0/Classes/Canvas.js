import { Constants } from "./Utils/Constants";
import { Utils } from "./Utils/Utils";
import { CanvasUtils } from "./Utils/CanvasUtils";
import { ColorUtils } from "./Utils/ColorUtils";
export class Canvas {
    constructor(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    init() {
        this.size();
        const container = this.container;
        const options = container.options;
        const cover = options.backgroundMask.cover;
        const trail = options.particles.move.trail;
        this.coverColor = ColorUtils.colorToRgb(cover.color !== undefined ?
            cover.color :
            options.backgroundMask.cover);
        this.trailFillColor = typeof trail.fillColor === "string" ?
            ColorUtils.stringToRgb(trail.fillColor) :
            ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    }
    loadCanvas(canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.dimension.height = canvas.offsetHeight;
        this.dimension.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    }
    destroy() {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            CanvasUtils.clear(this.context, this.dimension);
        }
    }
    size() {
        if (this.element) {
            this.element.width = this.dimension.width;
            this.element.height = this.dimension.height;
        }
    }
    paint() {
        const container = this.container;
        const options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                if (this.coverColor) {
                    this.paintBase(ColorUtils.getStyleFromColor(this.coverColor));
                }
                else {
                    this.paintBase();
                }
            }
            else {
                this.paintBase();
            }
        }
    }
    clear() {
        const container = this.container;
        const options = container.options;
        const trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            CanvasUtils.clear(this.context, this.dimension);
        }
    }
    isPointInPath(path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    }
    drawPolygonMask() {
        const container = this.container;
        const options = container.options;
        const context = this.context;
        const polygonDraw = options.polygon.draw;
        const polygon = container.polygon;
        const rawData = polygon.raw;
        const path = polygon.polygonPath;
        const path2dSupported = polygon.path2DSupported;
        if (context) {
            if (path2dSupported && path && polygon.offset) {
                CanvasUtils.drawPolygonMaskPath(context, path, polygonDraw.stroke, polygon.offset);
            }
            else if (rawData) {
                CanvasUtils.drawPolygonMask(context, rawData, polygonDraw.stroke);
            }
        }
    }
    drawLinkedLine(p1, p2, pos1, pos2, opacity) {
        var _a;
        const container = this.container;
        const options = container.options;
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        let colorLine;
        if (container.particles.lineLinkedColor === Constants.randomColorValue) {
            colorLine = ColorUtils.getRandomRgbColor();
        }
        else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
            const sourceColor = p1.color;
            const destColor = p2.color;
            colorLine = {
                b: Math.floor(Utils.mix(sourceColor.b, destColor.b, p1.size.value, p2.size.value)),
                g: Math.floor(Utils.mix(sourceColor.g, destColor.g, p1.size.value, p2.size.value)),
                r: Math.floor(Utils.mix(sourceColor.r, destColor.r, p1.size.value, p2.size.value)),
            };
        }
        else {
            colorLine = container.particles.lineLinkedColor;
        }
        const width = (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth;
        CanvasUtils.drawLineLinked(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.lineLinked.shadow);
    }
    drawConnectLine(p1, p2) {
        var _a;
        const lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        const ctx = this.context;
        if (!ctx) {
            return;
        }
        CanvasUtils.drawConnectLine(ctx, (_a = p1.lineLinkedWidth) !== null && _a !== void 0 ? _a : this.container.retina.lineLinkedWidth, lineStyle, p1.position, p2.position);
    }
    drawGrabLine(particle, opacity, mousePos) {
        var _a;
        const container = this.container;
        const optColor = particle.particlesOptions.lineLinked.color;
        let lineColor = container.particles.lineLinkedColor ||
            (typeof optColor === "string" ? ColorUtils.stringToRgb(optColor) : ColorUtils.colorToRgb(optColor));
        if (lineColor == Constants.randomColorValue) {
            lineColor = ColorUtils.getRandomRgbColor();
        }
        container.particles.lineLinkedColor = lineColor;
        let colorLine = { r: 127, g: 127, b: 127 };
        const ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        if (container.particles.lineLinkedColor == Constants.randomColorValue) {
            colorLine = ColorUtils.getRandomRgbColor() || colorLine;
        }
        else {
            colorLine = container.particles.lineLinkedColor || colorLine;
        }
        const beginPos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        CanvasUtils.drawGrabLine(ctx, (_a = particle.lineLinkedWidth) !== null && _a !== void 0 ? _a : container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    }
    drawParticle(particle) {
        var _a, _b;
        const container = this.container;
        const options = container.options;
        let colorValue;
        const radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        const opacity = (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        if (particle.color) {
            colorValue = ColorUtils.getStyleFromColor(particle.color, opacity);
        }
        if (!this.context || !colorValue) {
            return;
        }
        CanvasUtils.drawParticle(this.context, particle, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    }
    paintBase(baseColor) {
        if (this.context) {
            CanvasUtils.paintBase(this.context, this.dimension, baseColor);
        }
    }
    lineStyle(p1, p2) {
        const container = this.container;
        const options = container.options;
        const connectOptions = options.interactivity.modes.connect;
        if (p1.color && p2.color) {
            const sourceRgb = p1.color;
            const destRgb = p2.color;
            const midRgb = {
                b: Utils.mix(sourceRgb.b, destRgb.b, p1.size.value, p2.size.value),
                g: Utils.mix(sourceRgb.g, destRgb.g, p1.size.value, p2.size.value),
                r: Utils.mix(sourceRgb.r, destRgb.r, p1.size.value, p2.size.value),
            };
            if (this.context) {
                return CanvasUtils.gradient(this.context, p1, p2, midRgb, connectOptions.lineLinked.opacity);
            }
        }
    }
    initBackground() {
        const container = this.container;
        const options = container.options;
        const background = options.background;
        const element = this.element;
        if (!element) {
            return;
        }
        const elementStyle = element.style;
        if (background.color) {
            const color = typeof background.color === "string" ?
                ColorUtils.stringToRgb(background.color) :
                ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = ColorUtils.getStyleFromColor(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    }
}
