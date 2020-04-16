"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LineLinkedShadow_1 = require("./LineLinkedShadow");
var Color_1 = require("./Color");
var LineLinked = (function () {
    function LineLinked() {
        this.blink = false;
        this.color = new Color_1.Color();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LineLinkedShadow_1.LineLinkedShadow();
        this.width = 1;
    }
    LineLinked.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            if (data.color !== undefined) {
                if (typeof data.color === "string") {
                    this.color.value = data.color;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return LineLinked;
}());
exports.LineLinked = LineLinked;
