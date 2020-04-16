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
var TriangleDrawer = (function (_super) {
    __extends(TriangleDrawer, _super);
    function TriangleDrawer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleDrawer.prototype.getSidesData = function (particle, radius) {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    };
    TriangleDrawer.prototype.getCenter = function (particle, radius) {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    };
    return TriangleDrawer;
}(PolygonDrawerBase_1.PolygonDrawerBase));
exports.TriangleDrawer = TriangleDrawer;
