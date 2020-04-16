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
        var hoverEnabled = options.interactivity.events.onHover.enable;
        var clickEnabled = options.interactivity.events.onClick.enable;
        var mouseMoveStatus = container.interactivity.status === Constants_1.Constants.mouseMoveEvent;
        var hoverMode = options.interactivity.events.onHover.mode;
        var clickMode = options.interactivity.events.onClick.mode;
        var divMode = options.interactivity.events.onDiv.mode;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(HoverMode_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse();
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(ClickMode_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse();
        }
        else if (options.interactivity.events.onDiv.enable && Utils_1.Utils.isInArray(DivMode_1.DivMode.repulse, divMode)) {
            this.divRepulse();
        }
    };
    Repulser.prototype.divRepulse = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2),
            y: (elem.offsetTop + elem.offsetHeight / 2),
        };
        var divWidth = elem.offsetWidth / 2;
        if (container.retina.isRetina) {
            pos.x *= container.retina.pxRatio;
            pos.y *= container.retina.pxRatio;
            divWidth *= container.retina.pxRatio;
        }
        var dxDiv = particle.position.x - pos.x;
        var dyDiv = particle.position.y - pos.y;
        var distDiv = Math.sqrt(dxDiv * dxDiv + dyDiv * dyDiv);
        var normVec = {
            x: dxDiv / distDiv,
            y: dyDiv / distDiv,
        };
        var repulseRadius = divWidth;
        var velocity = 100;
        var repulseFactor = Utils_1.Utils.clamp((-Math.pow(distDiv / repulseRadius, 4) + 1) * velocity, 0, 50);
        this.particle.position.x += normVec.x * repulseFactor;
        this.particle.position.y += normVec.y * repulseFactor;
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
                this.processRepulse(dx, dy, force);
            }
        }
        else if (container.repulse.clicking === false) {
            particle.velocity.horizontal = particle.initialVelocity.horizontal;
            particle.velocity.vertical = particle.initialVelocity.vertical;
        }
    };
    Repulser.prototype.hoverRepulse = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
        var dxMouse = particle.position.x - mousePos.x;
        var dyMouse = particle.position.y - mousePos.y;
        var distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        var normVec = { x: dxMouse / distMouse, y: dyMouse / distMouse };
        var repulseRadius = container.retina.repulseModeDistance;
        var velocity = 100;
        var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(distMouse / repulseRadius, 2)) * velocity, 0, 50);
        var pos = {
            x: particle.position.x + normVec.x * repulseFactor,
            y: particle.position.y + normVec.y * repulseFactor,
        };
        var outMode = options.particles.move.outMode;
        if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical || outMode === OutMode_1.OutMode.bounceHorizontal) {
            var isInside = {
                horizontal: pos.x - particle.radius > 0 && pos.x + particle.radius < container.canvas.dimension.width,
                vertical: pos.y - particle.radius > 0 && pos.y + particle.radius < container.canvas.dimension.height,
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
    Repulser.prototype.processRepulse = function (dx, dy, force) {
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
                if (pos.x + particle.radius > container.canvas.dimension.width || pos.x - particle.radius < 0) {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                }
            }
            if (outMode !== OutMode_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.radius > container.canvas.dimension.height || pos.y - particle.radius < 0) {
                    particle.velocity.vertical = -particle.velocity.vertical;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;
