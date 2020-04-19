"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickMode_1 = require("../../Enums/Modes/ClickMode");
var HoverMode_1 = require("../../Enums/Modes/HoverMode");
var OutMode_1 = require("../../Enums/OutMode");
var Utils_1 = require("../Utils/Utils");
var DivMode_1 = require("../../Enums/Modes/DivMode");
var Constants_1 = require("../Utils/Constants");
var Repulser = (function () {
    function Repulser(container, particle) {
        this.container = container;
        this.particle = particle;
    }
    Repulser.prototype.repulse = function () {
        var container = this.container;
        var options = container.options;
        var interactivity = options.interactivity;
        var hoverEnabled = interactivity.events.onHover.enable;
        var clickEnabled = interactivity.events.onClick.enable;
        var mouseMoveStatus = container.interactivity.status === Constants_1.Constants.mouseMoveEvent;
        var hoverMode = interactivity.events.onHover.mode;
        var clickMode = interactivity.events.onClick.mode;
        var divMode = interactivity.events.onDiv.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse();
        }
        else if (interactivity.events.onDiv.enable && Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
            this.divRepulse();
        }
    };
    Repulser.prototype.divRepulse = function () {
        var container = this.container;
        var options = container.options;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        if (!elem) {
            return;
        }
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2),
            y: (elem.offsetTop + elem.offsetHeight / 2),
        };
        var divWidth = elem.offsetWidth / 2;
        if (container.retina.isRetina) {
            pos.x *= container.retina.pixelRatio;
            pos.y *= container.retina.pixelRatio;
            divWidth *= container.retina.pixelRatio;
        }
        var repulseRadius = divWidth;
        this.processRepulse(pos, repulseRadius);
    };
    Repulser.prototype.hoverRepulse = function () {
        var container = this.container;
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(mousePos, repulseRadius);
    };
    Repulser.prototype.processRepulse = function (position, repulseRadius) {
        var _a;
        var container = this.container;
        var particle = this.particle;
        var dx = particle.position.x - position.x;
        var dy = particle.position.y - position.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var normVec = {
            x: dx / dist,
            y: dy / dist,
        };
        var velocity = 100;
        var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(dist / repulseRadius, 2)) * velocity, 0, 50);
        var outMode = particle.particlesOptions.move.outMode;
        var sizeValue = (_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue;
        var pos = {
            x: particle.position.x + normVec.x * repulseFactor,
            y: particle.position.y + normVec.y * repulseFactor,
        };
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical || outMode === OutMode_1.OutMode.bounceHorizontal) {
            var isInside = {
                horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.dimension.width,
                vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.dimension.height,
            };
            if (outMode === OutMode_1.OutMode.bounceVertical || isInside.horizontal) {
                particle.position.x = pos.x;
            }
            if (outMode === OutMode_1.OutMode.bounceHorizontal || isInside.vertical) {
                particle.position.y = pos.y;
            }
        }
        else {
            particle.position.x = pos.x;
            particle.position.y = pos.y;
        }
    };
    Repulser.prototype.clickRepulse = function () {
        var container = this.container;
        var particle = this.particle;
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            var repulseDistance = container.retina.repulseModeDistance;
            var repulseRadius = Math.pow(repulseDistance / 6, 3);
            var mouseClickPos = container.interactivity.mouse.clickPosition || { x: 0, y: 0 };
            var dx = mouseClickPos.x - particle.position.x;
            var dy = mouseClickPos.y - particle.position.y;
            var d = dx * dx + dy * dy;
            var force = -repulseRadius / d;
            if (d <= repulseRadius) {
                this.processClickRepulse(dx, dy, force);
            }
        }
        else if (container.repulse.clicking === false) {
            particle.velocity.horizontal = particle.initialVelocity.horizontal;
            particle.velocity.vertical = particle.initialVelocity.vertical;
        }
    };
    Repulser.prototype.processClickRepulse = function (dx, dy, force) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        var outMode = options.particles.move.outMode;
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal || outMode === OutMode_1.OutMode.bounceVertical) {
            var pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== OutMode_1.OutMode.bounceVertical) {
                if (pos.x + particle.size.value > container.canvas.dimension.width ||
                    pos.x - particle.size.value < 0) {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                }
            }
            if (outMode !== OutMode_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.size.value > container.canvas.dimension.height ||
                    pos.y - particle.size.value < 0) {
                    particle.velocity.vertical = -particle.velocity.vertical;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;
