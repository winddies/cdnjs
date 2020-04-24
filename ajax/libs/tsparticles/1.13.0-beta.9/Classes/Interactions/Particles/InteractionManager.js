"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Linker_1 = require("./Linker");
var Attracter_1 = require("./Attracter");
var Collider_1 = require("./Collider");
var InteractionManager = (function () {
    function InteractionManager() {
    }
    InteractionManager.interact = function (p1, container) {
        if (p1.particlesOptions.lineLinked.enable) {
            Linker_1.Linker.link(p1, container);
        }
        if (p1.particlesOptions.move.attract.enable) {
            Attracter_1.Attracter.attract(p1, container);
        }
        if (p1.particlesOptions.collisions.enable) {
            Collider_1.Collider.collide(p1, container);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;
