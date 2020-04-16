"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Linker_1 = require("./Linker");
var Attracter_1 = require("./Attracter");
var Collider_1 = require("./Collider");
var InteractionManager = (function () {
    function InteractionManager(container, particle) {
        this.container = container;
        this.linker = new Linker_1.Linker(container, particle);
        this.attracter = new Attracter_1.Attracter(container, particle);
        this.collider = new Collider_1.Collider(container, particle);
    }
    InteractionManager.prototype.interact = function (p2) {
        var container = this.container;
        var options = container.options;
        if (options.particles.lineLinked.enable) {
            this.linker.link(p2);
        }
        if (options.particles.move.attract.enable) {
            this.attracter.attract(p2);
        }
        if (options.particles.move.collisions) {
            this.collider.collide(p2);
        }
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;
