"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PolygonDrawerBase_1 = require("./PolygonDrawerBase");
var StarDrawer = (function (_super) {
    __extends(StarDrawer, _super);
    function StarDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarDrawer.prototype.getSidesData = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
    };
    StarDrawer.prototype.getCenter = function (particle, radius) {
        var _a;
        var polygon = particle.shapeData;
        var sides = (_a = polygon === null || polygon === void 0 ? void 0 : polygon.sides) !== null && _a !== void 0 ? _a : 5;
        return {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
    };
    return StarDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.StarDrawer = StarDrawer;
