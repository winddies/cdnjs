"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = require("../../../../Enums/ShapeType");
var ImageShape_1 = require("./ImageShape");
var PolygonShape_1 = require("./PolygonShape");
var CharacterShape_1 = require("./CharacterShape");
var Shape = (function () {
    function Shape() {
        this.options = {};
        this.character = new CharacterShape_1.CharacterShape();
        this.image = new ImageShape_1.ImageShape();
        this.polygon = new PolygonShape_1.PolygonShape();
        this.type = ShapeType_1.ShapeType.circle;
    }
    Object.defineProperty(Shape.prototype, "custom", {
        get: function () {
            return this.options;
        },
        set: function (value) {
            this.options = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "images", {
        get: function () {
            return this.image instanceof Array ? this.image : [this.image];
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
    Object.defineProperty(Shape.prototype, "character", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.character]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.char]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.character] = value;
            this.options[ShapeType_1.ShapeType.char] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "polygon", {
        get: function () {
            var _a;
            return ((_a = this.options[ShapeType_1.ShapeType.polygon]) !== null && _a !== void 0 ? _a : this.options[ShapeType_1.ShapeType.star]);
        },
        set: function (value) {
            this.options[ShapeType_1.ShapeType.polygon] = value;
            this.options[ShapeType_1.ShapeType.star] = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var options = (_a = data.options) !== null && _a !== void 0 ? _a : data.custom;
            if (options !== undefined) {
                for (var shape in options) {
                    var item = options[shape];
                    if (item !== undefined) {
                        if (item instanceof Array) {
                            this.options[shape] = item.filter(function (t) { return t !== undefined; }).map(function (t) {
                                return t;
                            });
                        }
                        else {
                            this.options[shape] = item;
                        }
                    }
                }
            }
            if (data.character !== undefined) {
                var item = data.character;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        this.options[ShapeType_1.ShapeType.character] = item.filter(function (t) { return t !== undefined; }).map(function (s) {
                            return s;
                        });
                        this.options[ShapeType_1.ShapeType.char] = item.filter(function (t) { return t !== undefined; }).map(function (s) {
                            return s;
                        });
                    }
                    else {
                        this.options[ShapeType_1.ShapeType.character] = item;
                        this.options[ShapeType_1.ShapeType.char] = item;
                    }
                }
            }
            if (data.polygon !== undefined) {
                var item = data.polygon;
                if (item !== undefined) {
                    if (item instanceof Array) {
                        this.options[ShapeType_1.ShapeType.polygon] = item.filter(function (t) { return t !== undefined; }).map(function (s) {
                            return s;
                        });
                        this.options[ShapeType_1.ShapeType.star] = item.filter(function (t) { return t !== undefined; }).map(function (s) {
                            return s;
                        });
                    }
                    else {
                        this.options[ShapeType_1.ShapeType.polygon] = item;
                        this.options[ShapeType_1.ShapeType.star] = item;
                    }
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
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Shape;
}());
exports.Shape = Shape;
