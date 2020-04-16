"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../Utils/Utils");
var Collider = (function () {
    function Collider(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Collider.prototype.collide = function (p2) {
        var p1 = this.particle;
        if (p1 === p2) {
            return;
        }
        var dist = Utils_1.Utils.getDistanceBetweenCoordinates(p1.position, p2.position);
        var distP = (p1.bubbler.radius || p1.radius) + (p2.bubbler.radius || p2.radius);
        if (dist <= distP) {
            p1.resetVelocity();
            p2.resetVelocity();
        }
    };
    return Collider;
}());
exports.Collider = Collider;
