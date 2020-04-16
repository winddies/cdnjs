"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Utils/Constants");
var Utils_1 = require("./Utils/Utils");
var CanvasUtils_1 = require("./Utils/CanvasUtils");
var ColorUtils_1 = require("./Utils/ColorUtils");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.size();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var trail = options.particles.move.trail;
        this.coverColor = ColorUtils_1.ColorUtils.colorToRgb(cover.color !== undefined ?
            cover.color :
            options.backgroundMask.cover);
        this.trailFillColor = typeof trail.fillColor === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(trail.fillColor) :
            ColorUtils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Constants_1.Constants.canvasClass;
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
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.dimension);
        }
    };
    Canvas.prototype.size = function () {
        if (this.element) {
            this.element.width = this.dimension.width;
            this.element.height = this.dimension.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                if (this.coverColor) {
                    this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.coverColor));
                }
                else {
                    this.paintBase();
                }
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(ColorUtils_1.ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            CanvasUtils_1.CanvasUtils.clear(this.context, this.dimension);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawPolygonMask = function () {
        var container = this.container;
        var options = container.options;
        var context = this.context;
        var polygonDraw = options.polygon.draw;
        var polygon = container.polygon;
        var rawData = polygon.raw;
        var path = polygon.polygonPath;
        var path2dSupported = polygon.path2DSupported;
        if (context) {
            if (path2dSupported && path && polygon.offset) {
                CanvasUtils_1.CanvasUtils.drawPolygonMaskPath(context, path, polygonDraw.stroke, polygon.offset);
            }
            else if (rawData) {
                CanvasUtils_1.CanvasUtils.drawPolygonMask(context, rawData, polygonDraw.stroke);
            }
        }
    };
    Canvas.prototype.drawLinkedLine = function (p1, p2, pos1, pos2, opacity) {
        var container = this.container;
        var options = container.options;
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        if (container.particles.lineLinkedColor === Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
            var sourceColor = p1.color;
            var destColor = p2.color;
            colorLine = {
                b: Math.floor(Utils_1.Utils.mix(sourceColor.b, destColor.b, p1.radius, p2.radius)),
                g: Math.floor(Utils_1.Utils.mix(sourceColor.g, destColor.g, p1.radius, p2.radius)),
                r: Math.floor(Utils_1.Utils.mix(sourceColor.r, destColor.r, p1.radius, p2.radius)),
            };
        }
        else {
            colorLine = container.particles.lineLinkedColor;
        }
        var width = container.retina.lineLinkedWidth;
        CanvasUtils_1.CanvasUtils.drawLineLinked(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, options.particles.lineLinked.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawConnectLine(ctx, this.container.retina.lineLinkedWidth, lineStyle, p1.position, p2.position);
    };
    Canvas.prototype.drawGrabLine = function (particle, opacity, mousePos) {
        var container = this.container;
        var options = container.options;
        var optColor = options.particles.lineLinked.color;
        var lineColor = container.particles.lineLinkedColor ||
            (typeof optColor === "string" ? ColorUtils_1.ColorUtils.stringToRgb(optColor) : ColorUtils_1.ColorUtils.colorToRgb(optColor));
        if (lineColor == Constants_1.Constants.randomColorValue) {
            lineColor = ColorUtils_1.ColorUtils.getRandomRgbColor();
        }
        container.particles.lineLinkedColor = lineColor;
        var colorLine = { r: 127, g: 127, b: 127 };
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        if (container.particles.lineLinkedColor == Constants_1.Constants.randomColorValue) {
            colorLine = ColorUtils_1.ColorUtils.getRandomRgbColor() || colorLine;
        }
        else {
            colorLine = container.particles.lineLinkedColor || colorLine;
        }
        var beginPos = {
            x: particle.position.x + particle.offset.x,
            y: particle.position.y + particle.offset.y,
        };
        CanvasUtils_1.CanvasUtils.drawGrabLine(ctx, container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    };
    Canvas.prototype.drawParticle = function (particle) {
        var container = this.container;
        var options = container.options;
        var colorValue;
        var radius = particle.bubbler.radius !== undefined ? particle.bubbler.radius : particle.radius;
        var opacity = particle.bubbler.opacity !== undefined ? particle.bubbler.opacity : particle.opacity.value;
        if (particle.color) {
            colorValue = ColorUtils_1.ColorUtils.getStyleFromColor(particle.color, opacity);
        }
        if (!this.context || !colorValue) {
            return;
        }
        CanvasUtils_1.CanvasUtils.drawParticle(this.context, particle, colorValue, options.backgroundMask.enable, radius, opacity);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            CanvasUtils_1.CanvasUtils.paintBase(this.context, this.dimension, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (p1.color && p2.color) {
            var sourceRgb = p1.color;
            var destRgb = p2.color;
            var midRgb = {
                b: Utils_1.Utils.mix(sourceRgb.b, destRgb.b, p1.radius, p2.radius),
                g: Utils_1.Utils.mix(sourceRgb.g, destRgb.g, p1.radius, p2.radius),
                r: Utils_1.Utils.mix(sourceRgb.r, destRgb.r, p1.radius, p2.radius),
            };
            if (this.context) {
                return CanvasUtils_1.CanvasUtils.gradient(this.context, p1, p2, midRgb, connectOptions.lineLinked.opacity);
            }
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = typeof background.color === "string" ?
                ColorUtils_1.ColorUtils.stringToRgb(background.color) :
                ColorUtils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = ColorUtils_1.ColorUtils.getStyleFromColor(color, background.opacity);
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
    };
    return Canvas;
}());
exports.Canvas = Canvas;
