var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Container } from "./Container";
import { Constants } from "./Utils/Constants";
import { Utils } from "./Utils/Utils";
let tsParticlesDom = [];
export class Loader {
    static dom() {
        if (!tsParticlesDom) {
            tsParticlesDom = [];
        }
        return tsParticlesDom;
    }
    static domItem(index) {
        const dom = Loader.dom();
        const item = dom[index];
        if (item && !item.destroyed) {
            return item;
        }
        dom.splice(index, 1);
    }
    static loadFromArray(tagId, params, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.load(tagId, Utils.itemFromArray(params, index));
        });
    }
    static setFromArray(id, domContainer, params, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.set(id, domContainer, Utils.itemFromArray(params, index));
        });
    }
    static load(tagId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const domContainer = document.getElementById(tagId);
            if (!domContainer) {
                return;
            }
            return this.set(tagId, domContainer, params);
        });
    }
    static set(id, domContainer, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const dom = Loader.dom();
            const oldIndex = dom.findIndex((v) => v.id === id);
            if (oldIndex >= 0) {
                const old = this.domItem(oldIndex);
                if (old && !old.destroyed) {
                    old.destroy();
                    dom.splice(oldIndex, 1);
                }
            }
            let canvasEl;
            let generatedCanvas;
            if (domContainer.tagName === "canvas") {
                canvasEl = domContainer;
                generatedCanvas = false;
            }
            else {
                const existingCanvases = domContainer.getElementsByTagName("canvas");
                if (existingCanvases.length) {
                    canvasEl = existingCanvases[0];
                    if (!canvasEl.className) {
                        canvasEl.className = Constants.canvasClass;
                    }
                    generatedCanvas = false;
                }
                else {
                    generatedCanvas = true;
                    canvasEl = document.createElement("canvas");
                    canvasEl.className = Constants.canvasClass;
                    canvasEl.style.width = "100%";
                    canvasEl.style.height = "100%";
                    domContainer.appendChild(canvasEl);
                }
            }
            const newItem = new Container(id, params);
            if (oldIndex >= 0) {
                dom.splice(oldIndex, 0, newItem);
            }
            else {
                dom.push(newItem);
            }
            newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
            yield newItem.start();
            return newItem;
        });
    }
    static loadJSON(tagId, jsonUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(jsonUrl);
            if (response.ok) {
                const params = yield response.json();
                if (params instanceof Array) {
                    return Loader.loadFromArray(tagId, params);
                }
                else {
                    return Loader.load(tagId, params);
                }
            }
            else {
                console.error(`Error tsParticles - fetch status: ${response.status}`);
                console.error("Error tsParticles - File config not found");
            }
        });
    }
    ;
    static setJSON(id, domContainer, jsonUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(jsonUrl);
            if (response.ok) {
                const params = yield response.json();
                if (params instanceof Array) {
                    return Loader.setFromArray(id, domContainer, params);
                }
                else {
                    return Loader.set(id, domContainer, params);
                }
            }
            else {
                console.error(`Error tsParticles - fetch status: ${response.status}`);
                console.error("Error tsParticles - File config not found");
            }
        });
    }
    ;
    static setOnClickHandler(callback) {
        const dom = Loader.dom();
        if (dom.length === 0) {
            throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
        }
        for (const domItem of dom) {
            const el = domItem.interactivity.element;
            if (el) {
                el.addEventListener("click", callback);
            }
        }
    }
}
