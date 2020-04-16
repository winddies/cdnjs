"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextDrawer = (function () {
    function TextDrawer() {
    }
    TextDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var text = particle.text;
        var character = particle.character;
        if (text === undefined || character === undefined) {
            return;
        }
        var style = character.style;
        var weight = character.weight;
        var size = Math.round(radius) * 2;
        var font = character.font;
        var fill = character.fill;
        context.font = style + " " + weight + " " + size + "px \"" + font + "\"";
        var pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    };
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;
