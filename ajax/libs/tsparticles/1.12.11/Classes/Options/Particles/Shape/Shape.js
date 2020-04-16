"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = require("../../../../Enums/ShapeType");
var CharacterShape_1 = require("./CharacterShape");
var ImageShape_1 = require("./ImageShape");
var PolygonShape_1 = require("./PolygonShape");
var Shape = (function () {
    function Shape() {
        this.character = new CharacterShape_1.CharacterShape();
        this.image = new ImageShape_1.ImageShape();
        this.polygon = new PolygonShape_1.PolygonShape();
        this.type = ShapeType_1.ShapeType.circle;
        this.custom = {};
    }
    Object.defineProperty(Shape.prototype, "images", {
        get: function () {
            if (this.image instanceof Array) {
                return this.image;
            }
            return [];
        },
        set: function (value) {
            this.image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return [];
        },
        set: function (value) {
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.custom !== undefined)
                for (var customShape in data.custom) {
                    var item = data.custom[customShape];
                    if (item !== undefined) {
                        if (item instanceof Array) {
                            this.custom[customShape] = item.filter(function (t) { return t !== undefined; }).map(function (s) {
                                return s;
                            });
                        }
                        else {
                            this.custom[customShape] = item;
                        }
                    }
                }
            if (data.character !== undefined) {
                if (data.character instanceof Array) {
                    this.character = data.character.map(function (s) {
                        var tmp = new CharacterShape_1.CharacterShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.character instanceof Array) {
                        this.character = new CharacterShape_1.CharacterShape();
                    }
                    this.character.load(data.character);
                }
            }
            if (data.image !== undefined) {
                if (data.image instanceof Array) {
                    this.image = data.image.map(function (s) {
                        var tmp = new ImageShape_1.ImageShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.image instanceof Array) {
                        this.image = new ImageShape_1.ImageShape();
                    }
                    this.image.load(data.image);
                }
            }
            if (data.polygon !== undefined) {
                if (data.polygon instanceof Array) {
                    this.polygon = data.polygon.map(function (s) {
                        var tmp = new PolygonShape_1.PolygonShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.polygon instanceof Array) {
                        this.polygon = new PolygonShape_1.PolygonShape();
                    }
                    this.polygon.load(data.polygon);
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Shape;
}());
exports.Shape = Shape;
