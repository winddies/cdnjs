"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = require("./Container");
var Constants_1 = require("./Utils/Constants");
var Utils_1 = require("./Utils/Utils");
var tsParticlesDom = [];
var Loader = (function () {
    function Loader() {
    }
    Loader.dom = function () {
        if (!tsParticlesDom) {
            tsParticlesDom = [];
        }
        return tsParticlesDom;
    };
    Loader.domItem = function (index) {
        var dom = Loader.dom();
        var item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    };
    Loader.loadFromArray = function (tagId, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader.load(tagId, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.setFromArray = function (id, domContainer, params, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Loader.set(id, domContainer, Utils_1.Utils.itemFromArray(params, index))];
            });
        });
    };
    Loader.load = function (tagId, params) {
        return __awaiter(this, void 0, void 0, function () {
            var domContainer;
            return __generator(this, function (_a) {
                domContainer = document.getElementById(tagId);
                if (!domContainer) {
                    return [2];
                }
                return [2, this.set(tagId, domContainer, params)];
            });
        });
    };
    Loader.set = function (id, domContainer, params) {
        return __awaiter(this, void 0, void 0, function () {
            var dom, oldIndex, old, canvasEl, generatedCanvas, existingCanvases, newItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dom = Loader.dom();
                        oldIndex = dom.findIndex(function (v) { return v.id === id; });
                        if (oldIndex >= 0) {
                            old = this.domItem(oldIndex);
                            if (old && !old.destroyed) {
                                old.destroy();
                                dom.splice(oldIndex, 1);
                            }
                        }
                        if (domContainer.tagName === "canvas") {
                            canvasEl = domContainer;
                            generatedCanvas = false;
                        }
                        else {
                            existingCanvases = domContainer.getElementsByTagName("canvas");
                            if (existingCanvases.length) {
                                canvasEl = existingCanvases[0];
                                if (!canvasEl.className) {
                                    canvasEl.className = Constants_1.Constants.canvasClass;
                                }
                                generatedCanvas = false;
                            }
                            else {
                                generatedCanvas = true;
                                canvasEl = document.createElement("canvas");
                                canvasEl.className = Constants_1.Constants.canvasClass;
                                canvasEl.style.width = "100%";
                                canvasEl.style.height = "100%";
                                domContainer.appendChild(canvasEl);
                            }
                        }
                        newItem = new Container_1.Container(id, params);
                        if (oldIndex >= 0) {
                            dom.splice(oldIndex, 0, newItem);
                        }
                        else {
                            dom.push(newItem);
                        }
                        newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
                        return [4, newItem.start()];
                    case 1:
                        _a.sent();
                        return [2, newItem];
                }
            });
        });
    };
    Loader.loadJSON = function (tagId, jsonUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.loadFromArray(tagId, params)];
                        }
                        else {
                            return [2, Loader.load(tagId, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setJSON = function (id, domContainer, jsonUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(jsonUrl)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3, 3];
                        return [4, response.json()];
                    case 2:
                        params = _a.sent();
                        if (params instanceof Array) {
                            return [2, Loader.setFromArray(id, domContainer, params)];
                        }
                        else {
                            return [2, Loader.set(id, domContainer, params)];
                        }
                        return [3, 4];
                    case 3:
                        console.error("Error tsParticles - fetch status: " + response.status);
                        console.error("Error tsParticles - File config not found");
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    ;
    Loader.setOnClickHandler = function (callback) {
        var dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (var _i = 0, dom_1 = dom; _i < dom_1.length; _i++) {
            var domItem = dom_1[_i];
            var el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    };
    return Loader;
}());
exports.Loader = Loader;
