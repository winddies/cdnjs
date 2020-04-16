"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bubbler_1 = require("./Particle/Bubbler");
var Drawer_1 = require("./Particle/Drawer");
var Grabber_1 = require("./Particle/Grabber");
var Repulser_1 = require("./Particle/Repulser");
var ShapeType_1 = require("../Enums/ShapeType");
var Updater_1 = require("./Particle/Updater");
var Utils_1 = require("./Utils/Utils");
var PolygonMaskType_1 = require("../Enums/PolygonMaskType");
var Connecter_1 = require("./Particle/Connecter");
var InteractionManager_1 = require("./Particle/InteractionManager");
var HoverMode_1 = require("../Enums/Modes/HoverMode");
var ClickMode_1 = require("../Enums/Modes/ClickMode");
var RotateDirection_1 = require("../Enums/RotateDirection");
var ColorUtils_1 = require("./Utils/ColorUtils");
var Particle = (function () {
    function Particle(container, position) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.container = container;
        var options = container.options;
        var color = options.particles.color;
        this.size = {};
        this.angle = options.particles.rotate.random ? Math.random() * 360 : options.particles.rotate.value;
        if (options.particles.rotate.direction == RotateDirection_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = options.particles.rotate.direction;
        }
        var randomSize = options.particles.size.random;
        var sizeValue = container.retina.sizeValue;
        this.radius = randomSize.enable ? Utils_1.Utils.randomInRange(randomSize.minimumValue, sizeValue) : sizeValue;
        if (options.particles.size.animation.enable) {
            this.size.status = false;
            this.size.velocity = container.retina.sizeAnimationSpeed / 100;
            if (!options.particles.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (options.particles.rotate.animation.enable) {
            if (!options.particles.rotate.animation.sync) {
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
        if (options.particles.move.collisions) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
        var randomOpacity = options.particles.opacity.random;
        var opacityValue = options.particles.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (options.particles.opacity.animation.enable) {
            this.opacity.status = false;
            this.opacity.velocity = options.particles.opacity.animation.speed / 100;
            if (!options.particles.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = Particle.calculateVelocity(options);
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        this.fill = true;
        this.close = true;
        var shapeType = options.particles.shape.type;
        if (shapeType instanceof Array) {
            this.shape = Utils_1.Utils.itemFromArray(shapeType);
        }
        else {
            this.shape = shapeType;
        }
        if (this.shape === ShapeType_1.ShapeType.image) {
            var shape = options.particles.shape;
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
            this.fill = (_a = optionsImage.fill) !== null && _a !== void 0 ? _a : this.fill;
            this.close = (_b = optionsImage.close) !== null && _b !== void 0 ? _b : this.close;
        }
        if (this.shape === ShapeType_1.ShapeType.polygon) {
            if (options.particles.shape.polygon instanceof Array) {
                this.polygon = Utils_1.Utils.itemFromArray(options.particles.shape.polygon);
            }
            else {
                this.polygon = options.particles.shape.polygon;
            }
            this.fill = (_c = this.polygon.fill) !== null && _c !== void 0 ? _c : this.fill;
            this.close = (_d = this.polygon.close) !== null && _d !== void 0 ? _d : this.close;
        }
        if (options.particles.stroke instanceof Array) {
            this.stroke = Utils_1.Utils.itemFromArray(options.particles.stroke);
        }
        else {
            this.stroke = options.particles.stroke;
        }
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof options.particles.shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(options.particles.shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(options.particles.shadow.color);
        if (this.shape === ShapeType_1.ShapeType.char || this.shape === ShapeType_1.ShapeType.character) {
            if (options.particles.shape.character instanceof Array) {
                this.character = Utils_1.Utils.itemFromArray(options.particles.shape.character);
            }
            else {
                this.character = options.particles.shape.character;
            }
            var value = this.character.value;
            this.text = value instanceof Array ? Utils_1.Utils.itemFromArray(value) : value;
            this.fill = (_e = this.character.fill) !== null && _e !== void 0 ? _e : this.fill;
            this.close = (_f = this.character.close) !== null && _f !== void 0 ? _f : this.close;
        }
        var shapeData = options.particles.shape.custom[this.shape];
        if (shapeData) {
            this.shapeData = shapeData instanceof Array ? Utils_1.Utils.itemFromArray(shapeData) : shapeData;
            this.fill = (_g = this.shapeData.fill) !== null && _g !== void 0 ? _g : this.fill;
            this.close = (_h = this.shapeData.close) !== null && _h !== void 0 ? _h : this.close;
        }
        this.updater = new Updater_1.Updater(this.container, this);
        this.bubbler = new Bubbler_1.Bubbler(this.container, this);
        this.repulser = new Repulser_1.Repulser(this.container, this);
        this.drawer = new Drawer_1.Drawer(this.container, this);
        this.grabber = new Grabber_1.Grabber(this.container, this);
        this.connecter = new Connecter_1.Connecter(this.container, this);
        this.interactionManager = new InteractionManager_1.InteractionManager(this.container, this);
    }
    Particle.calculateVelocity = function (options) {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(options);
        var res = {
            horizontal: 0,
            vertical: 0,
        };
        if (options.particles.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (options.particles.move.random) {
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
    Particle.prototype.resetVelocity = function () {
        var container = this.container;
        var options = container.options;
        var velocity = Particle.calculateVelocity(options);
        this.velocity.horizontal = velocity.horizontal;
        this.velocity.vertical = velocity.vertical;
    };
    Particle.prototype.update = function (index, delta) {
        var container = this.container;
        var options = container.options;
        this.updater.update(delta);
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickMode = options.interactivity.events.onClick.mode;
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.grab, hoverMode)) {
            this.grabber.grab();
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.connect, options.interactivity.events.onHover.mode)) {
            for (var j = index + 1; j < container.particles.count; j++) {
                var p2 = container.particles.array[j];
                this.connecter.connect(p2);
            }
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.bubble, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.bubble, clickMode)) {
            this.bubbler.bubble();
        }
        if (Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode) || Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.repulser.repulse();
        }
    };
    Particle.prototype.interact = function (p2) {
        this.interactionManager.interact(p2);
    };
    Particle.prototype.draw = function () {
        this.drawer.draw();
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
            if (dist <= p.radius + p2.radius) {
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
            p.position.x = position ? position.x : Math.random() * container.canvas.dimension.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.dimension.height;
            p.checkOverlap();
        }
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
            pos.x = position ? position.x : Math.random() * container.canvas.dimension.width;
            pos.y = position ? position.y : Math.random() * container.canvas.dimension.height;
            if (pos.x > container.canvas.dimension.width - this.radius * 2) {
                pos.x -= this.radius;
            }
            else if (pos.x < this.radius * 2) {
                pos.x += this.radius;
            }
            if (pos.y > container.canvas.dimension.height - this.radius * 2) {
                pos.y -= this.radius;
            }
            else if (pos.y < this.radius * 2) {
                pos.y += this.radius;
            }
        }
        return pos;
    };
    return Particle;
}());
exports.Particle = Particle;
