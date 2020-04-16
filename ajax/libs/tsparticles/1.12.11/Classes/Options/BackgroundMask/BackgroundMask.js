"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackgroundMaskCover_1 = require("./BackgroundMaskCover");
var BackgroundMask = (function () {
    function BackgroundMask() {
        this.cover = new BackgroundMaskCover_1.BackgroundMaskCover();
        this.enable = false;
    }
    BackgroundMask.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.cover !== undefined) {
                this.cover.load(data.cover);
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return BackgroundMask;
}());
exports.BackgroundMask = BackgroundMask;
