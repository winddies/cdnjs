"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = require("../Enums/ShapeType");
var Updater_1 = require("./Particle/Updater");
var Utils_1 = require("./Utils/Utils");
var PolygonMaskType_1 = require("../Enums/PolygonMaskType");
var RotateDirection_1 = require("../Enums/RotateDirection");
var ColorUtils_1 = require("./Utils/ColorUtils");
var Particles_1 = require("./Options/Particles/Particles");
var SizeAnimationStatus_1 = require("../Enums/SizeAnimationStatus");
var OpacityAnimationStatus_1 = require("../Enums/OpacityAnimationStatus");
var Particle = (function () {
    function Particle(container, position, emitter) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.container = container;
        this.emitter = emitter;
        this.fill = true;
        this.close = true;
        this.links = [];
        var options = container.options;
        var particlesOptions = new Particles_1.Particles();
        particlesOptions.load(options.particles);
        if ((emitter === null || emitter === void 0 ? void 0 : emitter.emitterOptions.particles) !== undefined) {
            var shapeType = emitter.emitterOptions.particles.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeData = emitter.emitterOptions.particles.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData;
                this.fill = (_a = this.shapeData.fill) !== null && _a !== void 0 ? _a : this.fill;
                this.close = (_b = this.shapeData.close) !== null && _b !== void 0 ? _b : this.close;
            }
            particlesOptions.load((_c = this.shapeData) === null || _c === void 0 ? void 0 : _c.particles);
            particlesOptions.load(emitter.emitterOptions.particles);
        }
        else {
            var shapeType = options.particles.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeData = options.particles.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData;
                this.fill = (_d = this.shapeData.fill) !== null && _d !== void 0 ? _d : this.fill;
                this.close = (_e = this.shapeData.close) !== null && _e !== void 0 ? _e : this.close;
            }
            particlesOptions.load((_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.particles);
        }
        this.particlesOptions = particlesOptions;
        container.retina.initParticle(this);
        var color = this.particlesOptions.color;
        var sizeValue = ((_g = this.sizeValue) !== null && _g !== void 0 ? _g : container.retina.sizeValue);
        var randomSize = typeof this.particlesOptions.size.random === "boolean" ?
            this.particlesOptions.size.random :
            this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined ?
                Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue) * this.container.retina.pixelRatio :
                sizeValue,
        };
        this.direction = emitter ? emitter.emitterOptions.direction : this.particlesOptions.move.direction;
        this.bubble = {};
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction == RotateDirection_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            this.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
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
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            this.initialPosition = {
                x: this.position.x,
                y: this.position.y,
            };
        }
        this.offset = {
            x: 0,
            y: 0,
        };
        if (this.particlesOptions.collisions.enable) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
        var randomOpacity = this.particlesOptions.opacity.random;
        var opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
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
        if (this.shape === ShapeType_1.ShapeType.image) {
            var shape = this.particlesOptions.shape;
            var index = Utils_1.Utils.arrayRandomIndex(container.images);
            var image = container.images[index];
            var optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
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
            Utils_1.Utils.itemFromArray(this.particlesOptions.stroke) :
            this.particlesOptions.stroke;
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.particlesOptions.shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater_1.Updater(this.container, this);
    }
    Particle.prototype.update = function (index, delta) {
        this.links = [];
        this.updater.update(delta);
    };
    Particle.prototype.draw = function () {
        this.container.canvas.drawParticle(this);
    };
    Particle.prototype.isOverlapping = function () {
        var container = this.container;
        var p = this;
        var collisionFound = false;
        var iterations = 0;
        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != p; }); _i < _a.length; _i++) {
            var p2 = _a[_i];
            iterations++;
            var dist = Utils_1.Utils.getDistanceBetweenCoordinates(p.position, p2.position);
            if (dist <= p.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    };
    Particle.prototype.checkOverlap = function (position) {
        var container = this.container;
        var p = this;
        var overlapResult = p.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            p.position.x = position ? position.x : Math.random() * container.canvas.size.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.size.height;
            p.checkOverlap();
        }
    };
    Particle.prototype.destroy = function () {
    };
    Particle.prototype.calcPosition = function (container, position) {
        var _a, _b;
        var pos = { x: 0, y: 0 };
        var options = container.options;
        if (options.polygon.enable && ((_b = (_a = container.polygon.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                var randomPoint = container.polygon.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
        }
        else {
            pos.x = position ? position.x : Math.random() * container.canvas.size.width;
            pos.y = position ? position.y : Math.random() * container.canvas.size.height;
            if (pos.x > container.canvas.size.width - this.size.value * 2) {
                pos.x -= this.size.value;
            }
            else if (pos.x < this.size.value * 2) {
                pos.x += this.size.value;
            }
            if (pos.y > container.canvas.size.height - this.size.value * 2) {
                pos.y -= this.size.value;
            }
            else if (pos.y < this.size.value * 2) {
                pos.y += this.size.value;
            }
        }
        return pos;
    };
    Particle.prototype.calculateVelocity = function () {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
        var res = {
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
    };
    return Particle;
}());
exports.Particle = Particle;
