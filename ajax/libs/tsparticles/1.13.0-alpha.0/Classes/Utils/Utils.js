var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MoveDirection } from "../../Enums/MoveDirection";
export class Utils {
    static clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }
    static isInArray(value, array) {
        return value === array || array.indexOf(value) > -1;
    }
    static mix(comp1, comp2, weight1, weight2) {
        return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }
    static getParticleBaseVelocity(particle) {
        let velocityBase;
        switch (particle.direction) {
            case MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    }
    static getDistanceBetweenCoordinates(pointA, pointB) {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    static loadFont(character) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield document.fonts.load(`${character.weight} 36px '${character.font}'`);
            }
            catch (_a) {
            }
        });
    }
    static arrayRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }
    static itemFromArray(array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    }
    static randomInRange(min, max) {
        return (Math.random() * (max - min)) + min;
    }
    static isPointInside(point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    }
    static areBoundsInside(bounds, size) {
        return bounds.left < size.width && bounds.right > 0
            && bounds.top < size.height && bounds.bottom > 0;
    }
    static calculateBounds(point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    }
    static loadImage(optionsImage) {
        return new Promise((resolve, reject) => {
            const src = optionsImage.src;
            const image = {
                type: src.substr(src.length - 3)
            };
            if (optionsImage.src) {
                const img = new Image();
                img.addEventListener("load", () => {
                    image.obj = img;
                    resolve(image);
                });
                img.addEventListener("error", () => {
                    reject(`Error tsParticles - loading image: ${optionsImage.src}`);
                });
                img.src = optionsImage.src;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    }
}
