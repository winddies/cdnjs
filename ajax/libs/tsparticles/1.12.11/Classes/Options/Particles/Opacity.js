"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpacityAnimation_1 = require("./OpacityAnimation");
var RandomOpacity_1 = require("./RandomOpacity");
var Opacity = (function () {
    function Opacity() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new RandomOpacity_1.RandomOpacity();
        this.value = 1;
    }
    Object.defineProperty(Opacity.prototype, "anim", {
        get: function () {
            return this.animation;
        },
        set: function (value) {
            this.animation = value;
        },
        enumerable: true,
        configurable: true
    });
    Opacity.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            var animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
            if (animation !== undefined) {
                this.animation.load(animation);
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.enable = data.random;
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Opacity;
}());
exports.Opacity = Opacity;
