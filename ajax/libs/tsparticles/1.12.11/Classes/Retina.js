"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Retina = (function () {
    function Retina(container) {
        this.container = container;
        this.isRetina = false;
        this.bubbleModeDistance = 0;
        this.bubbleModeSize = 0;
        this.connectModeDistance = 0;
        this.connectModeRadius = 0;
        this.grabModeDistance = 0;
        this.repulseModeDistance = 0;
        this.slowModeRadius = 0;
        this.lineLinkedDistance = 0;
        this.lineLinkedWidth = 0;
        this.moveSpeed = 0;
        this.sizeValue = 0;
        this.sizeAnimationSpeed = 0;
        this.polygonMaskMoveRadius = 0;
        this.pxRatio = 1;
    }
    Retina.prototype.init = function () {
        var container = this.container;
        var options = container.options;
        if (options.detectRetina && window.devicePixelRatio > 1) {
            this.pxRatio = window.devicePixelRatio;
            this.isRetina = true;
        }
        else {
            this.pxRatio = 1;
            this.isRetina = false;
        }
        var ratio = this.pxRatio;
        if (container.canvas.element) {
            container.canvas.dimension.width = container.canvas.element.offsetWidth * ratio;
            container.canvas.dimension.height = container.canvas.element.offsetHeight * ratio;
        }
        this.bubbleModeDistance = options.interactivity.modes.bubble.distance * ratio;
        this.bubbleModeSize = options.interactivity.modes.bubble.size * ratio;
        this.connectModeDistance = options.interactivity.modes.connect.distance * ratio;
        this.connectModeRadius = options.interactivity.modes.connect.radius * ratio;
        this.grabModeDistance = options.interactivity.modes.grab.distance * ratio;
        this.repulseModeDistance = options.interactivity.modes.repulse.distance * ratio;
        this.slowModeRadius = options.interactivity.modes.slow.radius * ratio;
        this.lineLinkedDistance = options.particles.lineLinked.distance * ratio;
        this.lineLinkedWidth = options.particles.lineLinked.width * ratio;
        this.moveSpeed = options.particles.move.speed * ratio;
        this.sizeValue = options.particles.size.value * ratio;
        this.sizeAnimationSpeed = options.particles.size.animation.speed * ratio;
        this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
    };
    Retina.prototype.reset = function () {
    };
    return Retina;
}());
exports.Retina = Retina;
