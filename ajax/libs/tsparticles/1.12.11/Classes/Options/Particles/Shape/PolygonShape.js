"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonShape = (function () {
    function PolygonShape() {
        this.close = true;
        this.fill = true;
        this.sides = 5;
    }
    Object.defineProperty(PolygonShape.prototype, "nb_sides", {
        get: function () {
            return this.sides;
        },
        set: function (value) {
            this.sides = value;
        },
        enumerable: true,
        configurable: true
    });
    PolygonShape.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;
            if (sides !== undefined) {
                this.sides = sides;
            }
        }
    };
    return PolygonShape;
}());
exports.PolygonShape = PolygonShape;
