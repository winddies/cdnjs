"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeUtils = (function () {
    function ShapeUtils() {
    }
    ShapeUtils.addShapeDrawer = function (type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    };
    ShapeUtils.drawShape = function (context, particle, radius, opacity) {
        if (!particle.shape) {
            return;
        }
        var drawer = this.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity);
    };
    ShapeUtils.drawers = {};
    return ShapeUtils;
}());
exports.ShapeUtils = ShapeUtils;
