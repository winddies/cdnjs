"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var LineLinked_1 = require("./LineLinked");
var Move_1 = require("./Move");
var ParticlesNumber_1 = require("./ParticlesNumber");
var Opacity_1 = require("./Opacity");
var Shape_1 = require("./Shape/Shape");
var Size_1 = require("./Size");
var Rotate_1 = require("./Rotate");
var Shadow_1 = require("./Shadow");
var Stroke_1 = require("./Stroke");
var Particles = (function () {
    function Particles() {
        this.color = new Color_1.Color();
        this.lineLinked = new LineLinked_1.LineLinked();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.shadow = new Shadow_1.Shadow();
        this.stroke = new Stroke_1.Stroke();
    }
    Object.defineProperty(Particles.prototype, "line_linked", {
        get: function () {
            return this.lineLinked;
        },
        set: function (value) {
            this.lineLinked = value;
        },
        enumerable: true,
        configurable: true
    });
    Particles.prototype.load = function (data) {
        var _a, _b, _c;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map(function (s) {
                        var tmp = new Color_1.Color();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.color instanceof Array) {
                        this.color = new Color_1.Color();
                    }
                    this.color.load(data.color);
                }
            }
            var lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;
            if (lineLinked !== undefined) {
                this.lineLinked.load(lineLinked);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            var strokeToLoad = (_b = data.stroke) !== null && _b !== void 0 ? _b : (_c = data.shape) === null || _c === void 0 ? void 0 : _c.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map(function (s) {
                        var tmp = new Stroke_1.Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke_1.Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    };
    return Particles;
}());
exports.Particles = Particles;
