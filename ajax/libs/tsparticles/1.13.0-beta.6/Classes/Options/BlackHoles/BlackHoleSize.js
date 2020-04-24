"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackHoleRandomSize_1 = require("./BlackHoleRandomSize");
var BlackHoleSize = (function () {
    function BlackHoleSize() {
        this.value = 50;
        this.random = new BlackHoleRandomSize_1.BlackHoleRandomSize();
    }
    BlackHoleSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
            if (data.random !== undefined) {
                if (typeof data.random === "boolean") {
                    this.random.load({ enable: data.random });
                }
                else {
                    this.random.load(data.random);
                }
            }
            if (data.limit !== undefined) {
                this.limit = data.limit;
            }
        }
    };
    return BlackHoleSize;
}());
exports.BlackHoleSize = BlackHoleSize;
