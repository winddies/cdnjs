"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OutMode_1 = require("../../Enums/OutMode");
var Utils_1 = require("../Utils/Utils");
var PolygonMaskType_1 = require("../../Enums/PolygonMaskType");
var Mover_1 = require("./Mover");
var RotateDirection_1 = require("../../Enums/RotateDirection");
var Updater = (function () {
    function Updater(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    Updater.checkBounds = function (coordinate, radius, size, outside) {
        if ((coordinate + radius > size) || (coordinate - radius < 0)) {
            outside();
        }
    };
    Updater.prototype.update = function (delta) {
        this.mover.move(delta);
        this.updateOpacity();
        this.updateSize();
        this.updateAngle();
        this.fixOutOfCanvasPosition();
        this.updateOutMode();
    };
    Updater.prototype.updateOpacity = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.opacity.animation.enable) {
            if (particle.opacity.status) {
                if (particle.opacity.value >= options.particles.opacity.value) {
                    particle.opacity.status = false;
                }
                particle.opacity.value += (particle.opacity.velocity || 0);
            }
            else {
                if (particle.opacity.value <= options.particles.opacity.animation.minimumValue) {
                    particle.opacity.status = true;
                }
                particle.opacity.value -= (particle.opacity.velocity || 0);
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    };
    Updater.prototype.updateSize = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.size.animation.enable) {
            if (particle.size.status) {
                if (particle.radius >= container.retina.sizeValue) {
                    particle.size.status = false;
                }
                particle.radius += (particle.size.velocity || 0);
            }
            else {
                if (particle.radius <= options.particles.size.animation.minimumValue) {
                    particle.size.status = true;
                }
                particle.radius -= (particle.size.velocity || 0);
            }
            if (particle.radius < 0) {
                particle.radius = 0;
            }
        }
    };
    Updater.prototype.updateAngle = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.particles.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case RotateDirection_1.RotateDirection.clockwise:
                    particle.angle += options.particles.rotate.animation.speed * Math.PI / 18;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case RotateDirection_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= options.particles.rotate.animation.speed * Math.PI / 18;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    };
    Updater.prototype.fixOutOfCanvasPosition = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var outMode = options.particles.move.outMode;
        var canvasSize = container.canvas.dimension;
        var newPos;
        if (outMode === OutMode_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.radius,
                right: canvasSize.width,
                top: particle.radius,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.radius - particle.offset.y,
                left: particle.radius,
                right: canvasSize.width,
                top: -particle.radius - particle.offset.y,
            };
        }
        else if (outMode === OutMode_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.radius - particle.offset.x,
                right: canvasSize.width + particle.radius + particle.offset.x,
                top: particle.radius,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.radius - particle.offset.y,
                left: -particle.radius - particle.offset.x,
                right: canvasSize.width + particle.radius + particle.offset.x,
                top: -particle.radius - particle.offset.y,
            };
        }
        if (outMode === OutMode_1.OutMode.destroy) {
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.dimension, particle.radius)) {
                container.particles.remove(particle);
            }
        }
        else {
            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, particle.radius);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                particle.position.y = Math.random() * canvasSize.height;
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                particle.position.y = Math.random() * canvasSize.height;
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                particle.position.y = newPos.top;
                particle.position.x = Math.random() * canvasSize.width;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                particle.position.y = newPos.bottom;
                particle.position.x = Math.random() * canvasSize.width;
            }
        }
    };
    Updater.prototype.updateOutMode = function () {
        var container = this.container;
        var options = container.options;
        switch (options.particles.move.outMode) {
            case OutMode_1.OutMode.bounce:
            case OutMode_1.OutMode.bounceVertical:
            case OutMode_1.OutMode.bounceHorizontal:
                this.updateBounce();
                break;
        }
    };
    Updater.prototype.updateBounce = function () {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (options.polygon.enable && options.polygon.type !== PolygonMaskType_1.PolygonMaskType.none &&
            options.polygon.type !== PolygonMaskType_1.PolygonMaskType.inline) {
            if (!container.polygon.checkInsidePolygon(particle.position)) {
                this.polygonBounce();
            }
        }
        else if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            if (particle.initialPosition) {
                var dist = Utils_1.Utils.getDistanceBetweenCoordinates(particle.initialPosition, particle.position);
                if (dist > container.retina.polygonMaskMoveRadius) {
                    this.polygonBounce();
                }
            }
        }
        else {
            var outMode = options.particles.move.outMode;
            var x = particle.position.x + particle.offset.x;
            var y = particle.position.y + particle.offset.y;
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceHorizontal) {
                Updater.checkBounds(x, particle.radius, container.canvas.dimension.width, function () {
                    particle.velocity.horizontal = -particle.velocity.horizontal;
                });
            }
            if (outMode === OutMode_1.OutMode.bounce || outMode === OutMode_1.OutMode.bounceVertical) {
                Updater.checkBounds(y, particle.radius, container.canvas.dimension.height, function () {
                    particle.velocity.vertical = -particle.velocity.vertical;
                });
            }
        }
    };
    Updater.prototype.polygonBounce = function () {
        var particle = this.particle;
        particle.velocity.horizontal = -particle.velocity.horizontal + (particle.velocity.vertical / 2);
        particle.velocity.vertical = -particle.velocity.vertical + (particle.velocity.horizontal / 2);
    };
    return Updater;
}());
exports.Updater = Updater;
