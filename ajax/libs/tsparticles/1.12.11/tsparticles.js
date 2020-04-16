(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "tsParticles", function() { return /* binding */ tsParticles; });

// CONCATENATED MODULE: ./dist/Classes/Utils/Constants.js
class Constants {}
Constants.canvasClass = "tsparticles-canvas-el";
Constants.randomColorValue = "random";
Constants.touchEndEvent = "touchend";
Constants.mouseUpEvent = "mouseup";
Constants.mouseMoveEvent = "mousemove";
Constants.touchStartEvent = "touchstart";
Constants.touchMoveEvent = "touchmove";
Constants.mouseLeaveEvent = "mouseleave";
Constants.touchCancelEvent = "touchcancel";
Constants.resizeEvent = "resize";
Constants.visibilityChangeEvent = "visibilitychange";
// CONCATENATED MODULE: ./dist/Enums/MoveDirection.js
var MoveDirection;

(function (MoveDirection) {
  MoveDirection["bottom"] = "bottom";
  MoveDirection["bottomLeft"] = "bottom-left";
  MoveDirection["bottomRight"] = "bottom-right";
  MoveDirection["left"] = "left";
  MoveDirection["none"] = "none";
  MoveDirection["right"] = "right";
  MoveDirection["top"] = "top";
  MoveDirection["topLeft"] = "top-left";
  MoveDirection["topRight"] = "top-right";
})(MoveDirection || (MoveDirection = {}));
// CONCATENATED MODULE: ./dist/Classes/Utils/Utils.js
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};


class Utils_Utils {
  static clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  static isInArray(value, array) {
    return value === array || array.indexOf(value) > -1;
  }

  static mix(comp1, comp2, weight1, weight2) {
    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
  }

  static getParticleBaseVelocity(options) {
    let velocityBase;

    switch (options.particles.move.direction) {
      case MoveDirection.top:
        velocityBase = {
          x: 0,
          y: -1
        };
        break;

      case MoveDirection.topRight:
        velocityBase = {
          x: 0.5,
          y: -0.5
        };
        break;

      case MoveDirection.right:
        velocityBase = {
          x: 1,
          y: -0
        };
        break;

      case MoveDirection.bottomRight:
        velocityBase = {
          x: 0.5,
          y: 0.5
        };
        break;

      case MoveDirection.bottom:
        velocityBase = {
          x: 0,
          y: 1
        };
        break;

      case MoveDirection.bottomLeft:
        velocityBase = {
          x: -0.5,
          y: 1
        };
        break;

      case MoveDirection.left:
        velocityBase = {
          x: -1,
          y: 0
        };
        break;

      case MoveDirection.topLeft:
        velocityBase = {
          x: -0.5,
          y: -0.5
        };
        break;

      default:
        velocityBase = {
          x: 0,
          y: 0
        };
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
      } catch (_a) {}
    });
  }

  static arrayRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  static itemFromArray(array, index) {
    return array[index !== undefined ? index : this.arrayRandomIndex(array)];
  }

  static randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  static isPointInside(point, size, radius) {
    return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
  }

  static areBoundsInside(bounds, size) {
    return bounds.left < size.width && bounds.right > 0 && bounds.top < size.height && bounds.bottom > 0;
  }

  static calculateBounds(point, radius) {
    return {
      bottom: point.y + radius,
      left: point.x - radius,
      right: point.x + radius,
      top: point.y - radius
    };
  }

}
// CONCATENATED MODULE: ./dist/Classes/Utils/ShapeUtils.js
class ShapeUtils {
  static addShapeDrawer(type, drawer) {
    if (!this.drawers[type]) {
      this.drawers[type] = drawer;
    }
  }

  static drawShape(context, particle, radius, opacity) {
    if (!particle.shape) {
      return;
    }

    const drawer = this.drawers[particle.shape];

    if (!drawer) {
      return;
    }

    drawer.draw(context, particle, radius, opacity);
  }

}
ShapeUtils.drawers = {};
// CONCATENATED MODULE: ./dist/Classes/Utils/ColorUtils.js


class ColorUtils_ColorUtils {
  static colorToRgb(color) {
    let res;

    if (typeof color.value === "string") {
      if (color.value === Constants.randomColorValue) {
        res = {
          b: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          r: Math.floor(Math.random() * 256)
        };
      } else {
        res = ColorUtils_ColorUtils.stringToRgb(color.value);
      }
    } else {
      if (color.value instanceof Array) {
        const colorSelected = Utils_Utils.itemFromArray(color.value);
        res = ColorUtils_ColorUtils.stringToRgb(colorSelected);
      } else {
        const rgbColor = color.value;

        if (rgbColor.r !== undefined) {
          res = rgbColor;
        }

        const hslColor = color.value;

        if (hslColor.h !== undefined) {
          res = ColorUtils_ColorUtils.hslToRgb(hslColor);
        }
      }
    }

    return res;
  }

  static stringToAlpha(input) {
    var _a;

    return (_a = ColorUtils_ColorUtils.stringToRgba(input)) === null || _a === void 0 ? void 0 : _a.a;
  }

  static stringToRgb(input) {
    return ColorUtils_ColorUtils.stringToRgba(input);
  }

  static hslToRgb(hsl) {
    const result = {
      b: 0,
      g: 0,
      r: 0
    };

    if (hsl.s === 0) {
      result.b = hsl.l;
      result.g = hsl.l;
      result.r = hsl.l;
    } else {
      const q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s;
      const p = 2 * hsl.l - q;
      result.r = ColorUtils_ColorUtils.hue2rgb(p, q, hsl.h + 1 / 3);
      result.g = ColorUtils_ColorUtils.hue2rgb(p, q, hsl.h);
      result.b = ColorUtils_ColorUtils.hue2rgb(p, q, hsl.h - 1 / 3);
    }

    result.r = Math.round(result.r * 255);
    result.g = Math.round(result.g * 255);
    result.b = Math.round(result.b * 255);
    return result;
  }

  static hslaToRgba(hsla) {
    const rgbResult = ColorUtils_ColorUtils.hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }

  static getRandomRgbColor(min) {
    var _a;

    const fixedMin = min || 0;
    const minColor = fixedMin + fixedMin * Math.pow(16, 2) + fixedMin * Math.pow(16, 4);
    const maxColor = minColor ^ 0xFFFFFF;
    const randomColor = (Math.random() * maxColor + minColor).toString(16);
    return (_a = this.stringToRgb(`#${randomColor}`)) !== null && _a !== void 0 ? _a : {
      b: 0,
      g: 0,
      r: 0
    };
  }

  static getStyleFromColor(color, opacity) {
    const opacityValue = opacity !== null && opacity !== void 0 ? opacity : 1;
    return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${opacityValue})`;
  }

  static hue2rgb(p, q, t) {
    let tCalc = t;

    if (tCalc < 0) {
      tCalc += 1;
    }

    if (tCalc > 1) {
      tCalc -= 1;
    }

    if (tCalc < 1 / 6) {
      return p + (q - p) * 6 * tCalc;
    }

    if (tCalc < 1 / 2) {
      return q;
    }

    if (tCalc < 2 / 3) {
      return p + (q - p) * (2 / 3 - tCalc) * 6;
    }

    return p;
  }

  static stringToRgba(input) {
    if (input.startsWith('rgb')) {
      const regex = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d\.]+)\s*)?\)/i;
      const result = regex.exec(input);
      return result ? {
        a: result.length > 4 ? parseFloat(result[5]) : 1,
        b: parseInt(result[3]),
        g: parseInt(result[2]),
        r: parseInt(result[1])
      } : undefined;
    } else if (input.startsWith('hsl')) {
      const regex = /hsla?\(\s*(\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([\d\.]+)\s*)?\)/i;
      const result = regex.exec(input);
      return result ? ColorUtils_ColorUtils.hslaToRgba({
        a: result.length > 4 ? parseFloat(result[5]) : 1,
        h: parseInt(result[1]),
        l: parseInt(result[3]),
        s: parseInt(result[2])
      }) : undefined;
    } else {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
      const hexFixed = input.replace(shorthandRegex, (_m, r, g, b, a) => {
        return r + r + g + g + b + b + (a ? a + a : "");
      });
      const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
      const result = regex.exec(hexFixed);
      return result ? {
        a: parseInt(result[4], 16) / 0xFF,
        b: parseInt(result[3], 16),
        g: parseInt(result[2], 16),
        r: parseInt(result[1], 16)
      } : undefined;
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Utils/CanvasUtils.js


class CanvasUtils_CanvasUtils {
  static paintBase(context, dimension, baseColor) {
    context.save();
    context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
    context.fillRect(0, 0, dimension.width, dimension.height);
    context.restore();
  }

  static clear(context, dimension) {
    context.clearRect(0, 0, dimension.width, dimension.height);
  }

  static drawPolygonMask(context, rawData, stroke) {
    const color = typeof stroke.color === "string" ? ColorUtils_ColorUtils.stringToRgb(stroke.color) : ColorUtils_ColorUtils.colorToRgb(stroke.color);

    if (color) {
      context.save();
      context.beginPath();
      context.moveTo(rawData[0].x, rawData[0].y);

      for (let i = 1; i < rawData.length; i++) {
        context.lineTo(rawData[i].x, rawData[i].y);
      }

      context.closePath();
      context.strokeStyle = ColorUtils_ColorUtils.getStyleFromColor(color);
      context.lineWidth = stroke.width;
      context.stroke();
      context.restore();
    }
  }

  static drawPolygonMaskPath(context, path, stroke, position) {
    context.save();
    context.translate(position.x, position.y);
    const color = typeof stroke.color === "string" ? ColorUtils_ColorUtils.stringToRgb(stroke.color) : ColorUtils_ColorUtils.colorToRgb(stroke.color);

    if (color) {
      context.strokeStyle = ColorUtils_ColorUtils.getStyleFromColor(color, stroke.opacity);
      context.lineWidth = stroke.width;
      context.stroke(path);
    }

    context.restore();
  }

  static drawLineLinked(context, width, begin, end, backgroundMask, colorLine, opacity, shadow) {
    context.save();

    if (backgroundMask) {
      context.globalCompositeOperation = 'destination-out';
    }

    if (colorLine) {
      context.strokeStyle = ColorUtils_ColorUtils.getStyleFromColor(colorLine, opacity);
      ;
    }

    context.lineWidth = width;
    context.beginPath();
    const color = typeof shadow.color === "string" ? ColorUtils_ColorUtils.stringToRgb(shadow.color) : ColorUtils_ColorUtils.colorToRgb(shadow.color);

    if (shadow.enable && color) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = ColorUtils_ColorUtils.getStyleFromColor(color);
    }

    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
    context.restore();
  }

  static drawConnectLine(context, width, lineStyle, begin, end) {
    context.save();
    context.beginPath();
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
    context.restore();
  }

  static gradient(context, p1, p2, midColor, opacity) {
    const gradStop = Math.floor(p2.radius / p1.radius);

    if (!p1.color || !p2.color) {
      return;
    }

    const sourcePos = p1.position;
    const destPos = p2.position;
    const grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(0, ColorUtils_ColorUtils.getStyleFromColor(p1.color, opacity));
    grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_ColorUtils.getStyleFromColor(midColor, opacity));
    grad.addColorStop(1, ColorUtils_ColorUtils.getStyleFromColor(p2.color, opacity));
    return grad;
  }

  static drawGrabLine(context, width, begin, end, colorLine, opacity) {
    context.save();
    context.strokeStyle = ColorUtils_ColorUtils.getStyleFromColor(colorLine, opacity);
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.stroke();
    context.closePath();
    context.restore();
  }

  static drawParticle(context, particle, colorValue, backgroundMask, radius, opacity) {
    context.save();
    const shadow = particle.container.options.particles.shadow;
    const shadowColor = particle.shadowColor;

    if (shadow.enable && shadowColor) {
      context.shadowBlur = shadow.blur;
      context.shadowColor = ColorUtils_ColorUtils.getStyleFromColor(shadowColor);
      context.shadowOffsetX = shadow.offset.x;
      context.shadowOffsetY = shadow.offset.y;
    }

    context.fillStyle = colorValue;
    const pos = {
      x: particle.position.x + particle.offset.x,
      y: particle.position.y + particle.offset.y
    };
    context.translate(pos.x, pos.y);
    context.beginPath();

    if (particle.angle !== 0) {
      context.rotate(particle.angle * Math.PI / 180);
    }

    if (backgroundMask) {
      context.globalCompositeOperation = "destination-out";
    }

    const stroke = particle.stroke;

    if (stroke.width > 0 && particle.strokeColor) {
      context.strokeStyle = ColorUtils_ColorUtils.getStyleFromColor(particle.strokeColor, particle.stroke.opacity);
      context.lineWidth = stroke.width;
    }

    ShapeUtils.drawShape(context, particle, radius, opacity);

    if (particle.close) {
      context.closePath();
    }

    if (stroke.width > 0 && particle.strokeColor) {
      context.stroke();
    }

    if (particle.fill) {
      context.fill();
    }

    context.restore();
  }

}
// CONCATENATED MODULE: ./dist/Classes/Canvas.js




class Canvas_Canvas {
  constructor(container) {
    this.container = container;
    this.dimension = {
      height: 0,
      width: 0
    };
    this.context = null;
    this.generatedCanvas = false;
  }

  init() {
    this.size();
    const container = this.container;
    const options = container.options;
    const cover = options.backgroundMask.cover;
    const trail = options.particles.move.trail;
    this.coverColor = ColorUtils_ColorUtils.colorToRgb(cover.color !== undefined ? cover.color : options.backgroundMask.cover);
    this.trailFillColor = typeof trail.fillColor === "string" ? ColorUtils_ColorUtils.stringToRgb(trail.fillColor) : ColorUtils_ColorUtils.colorToRgb(trail.fillColor);
    this.paint();
  }

  loadCanvas(canvas, generatedCanvas) {
    var _a;

    if (!canvas.className) {
      canvas.className = Constants.canvasClass;
    }

    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }

    this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
    this.element = canvas;
    this.dimension.height = canvas.offsetHeight;
    this.dimension.width = canvas.offsetWidth;
    this.context = this.element.getContext("2d");
    this.container.retina.init();
    this.initBackground();
  }

  destroy() {
    var _a;

    if (this.generatedCanvas) {
      (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    }

    if (this.context) {
      CanvasUtils_CanvasUtils.clear(this.context, this.dimension);
    }
  }

  size() {
    if (this.element) {
      this.element.width = this.dimension.width;
      this.element.height = this.dimension.height;
    }
  }

  paint() {
    const container = this.container;
    const options = container.options;

    if (this.context) {
      if (options.backgroundMask.enable && options.backgroundMask.cover) {
        if (this.coverColor) {
          this.paintBase(ColorUtils_ColorUtils.getStyleFromColor(this.coverColor));
        } else {
          this.paintBase();
        }
      } else {
        this.paintBase();
      }
    }
  }

  clear() {
    const container = this.container;
    const options = container.options;
    const trail = options.particles.move.trail;

    if (options.backgroundMask.enable) {
      this.paint();
    } else if (trail.enable && trail.length > 0 && this.trailFillColor) {
      this.paintBase(ColorUtils_ColorUtils.getStyleFromColor(this.trailFillColor, 1 / trail.length));
    } else if (this.context) {
      CanvasUtils_CanvasUtils.clear(this.context, this.dimension);
    }
  }

  isPointInPath(path, point) {
    var _a, _b;

    return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
  }

  drawPolygonMask() {
    const container = this.container;
    const options = container.options;
    const context = this.context;
    const polygonDraw = options.polygon.draw;
    const polygon = container.polygon;
    const rawData = polygon.raw;
    const path = polygon.polygonPath;
    const path2dSupported = polygon.path2DSupported;

    if (context) {
      if (path2dSupported && path && polygon.offset) {
        CanvasUtils_CanvasUtils.drawPolygonMaskPath(context, path, polygonDraw.stroke, polygon.offset);
      } else if (rawData) {
        CanvasUtils_CanvasUtils.drawPolygonMask(context, rawData, polygonDraw.stroke);
      }
    }
  }

  drawLinkedLine(p1, p2, pos1, pos2, opacity) {
    const container = this.container;
    const options = container.options;
    const ctx = this.context;

    if (!ctx) {
      return;
    }

    let colorLine;

    if (container.particles.lineLinkedColor === Constants.randomColorValue) {
      colorLine = ColorUtils_ColorUtils.getRandomRgbColor();
    } else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
      const sourceColor = p1.color;
      const destColor = p2.color;
      colorLine = {
        b: Math.floor(Utils_Utils.mix(sourceColor.b, destColor.b, p1.radius, p2.radius)),
        g: Math.floor(Utils_Utils.mix(sourceColor.g, destColor.g, p1.radius, p2.radius)),
        r: Math.floor(Utils_Utils.mix(sourceColor.r, destColor.r, p1.radius, p2.radius))
      };
    } else {
      colorLine = container.particles.lineLinkedColor;
    }

    const width = container.retina.lineLinkedWidth;
    CanvasUtils_CanvasUtils.drawLineLinked(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, options.particles.lineLinked.shadow);
  }

  drawConnectLine(p1, p2) {
    const lineStyle = this.lineStyle(p1, p2);

    if (!lineStyle) {
      return;
    }

    const ctx = this.context;

    if (!ctx) {
      return;
    }

    CanvasUtils_CanvasUtils.drawConnectLine(ctx, this.container.retina.lineLinkedWidth, lineStyle, p1.position, p2.position);
  }

  drawGrabLine(particle, opacity, mousePos) {
    const container = this.container;
    const options = container.options;
    const optColor = options.particles.lineLinked.color;
    let lineColor = container.particles.lineLinkedColor || (typeof optColor === "string" ? ColorUtils_ColorUtils.stringToRgb(optColor) : ColorUtils_ColorUtils.colorToRgb(optColor));

    if (lineColor == Constants.randomColorValue) {
      lineColor = ColorUtils_ColorUtils.getRandomRgbColor();
    }

    container.particles.lineLinkedColor = lineColor;
    let colorLine = {
      r: 127,
      g: 127,
      b: 127
    };
    const ctx = container.canvas.context;

    if (!ctx) {
      return;
    }

    if (container.particles.lineLinkedColor == Constants.randomColorValue) {
      colorLine = ColorUtils_ColorUtils.getRandomRgbColor() || colorLine;
    } else {
      colorLine = container.particles.lineLinkedColor || colorLine;
    }

    const beginPos = {
      x: particle.position.x + particle.offset.x,
      y: particle.position.y + particle.offset.y
    };
    CanvasUtils_CanvasUtils.drawGrabLine(ctx, container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
  }

  drawParticle(particle) {
    const container = this.container;
    const options = container.options;
    let colorValue;
    const radius = particle.bubbler.radius !== undefined ? particle.bubbler.radius : particle.radius;
    const opacity = particle.bubbler.opacity !== undefined ? particle.bubbler.opacity : particle.opacity.value;

    if (particle.color) {
      colorValue = ColorUtils_ColorUtils.getStyleFromColor(particle.color, opacity);
    }

    if (!this.context || !colorValue) {
      return;
    }

    CanvasUtils_CanvasUtils.drawParticle(this.context, particle, colorValue, options.backgroundMask.enable, radius, opacity);
  }

  paintBase(baseColor) {
    if (this.context) {
      CanvasUtils_CanvasUtils.paintBase(this.context, this.dimension, baseColor);
    }
  }

  lineStyle(p1, p2) {
    const container = this.container;
    const options = container.options;
    const connectOptions = options.interactivity.modes.connect;

    if (p1.color && p2.color) {
      const sourceRgb = p1.color;
      const destRgb = p2.color;
      const midRgb = {
        b: Utils_Utils.mix(sourceRgb.b, destRgb.b, p1.radius, p2.radius),
        g: Utils_Utils.mix(sourceRgb.g, destRgb.g, p1.radius, p2.radius),
        r: Utils_Utils.mix(sourceRgb.r, destRgb.r, p1.radius, p2.radius)
      };

      if (this.context) {
        return CanvasUtils_CanvasUtils.gradient(this.context, p1, p2, midRgb, connectOptions.lineLinked.opacity);
      }
    }
  }

  initBackground() {
    const container = this.container;
    const options = container.options;
    const background = options.background;
    const element = this.element;

    if (!element) {
      return;
    }

    const elementStyle = element.style;

    if (background.color) {
      const color = typeof background.color === "string" ? ColorUtils_ColorUtils.stringToRgb(background.color) : ColorUtils_ColorUtils.colorToRgb(background.color);

      if (color) {
        elementStyle.backgroundColor = ColorUtils_ColorUtils.getStyleFromColor(color, background.opacity);
      }
    }

    if (background.image) {
      elementStyle.backgroundImage = background.image;
    }

    if (background.position) {
      elementStyle.backgroundPosition = background.position;
    }

    if (background.repeat) {
      elementStyle.backgroundRepeat = background.repeat;
    }

    if (background.size) {
      elementStyle.backgroundSize = background.size;
    }
  }

}
// CONCATENATED MODULE: ./dist/Enums/Modes/ClickMode.js
var ClickMode;

(function (ClickMode) {
  ClickMode["bubble"] = "bubble";
  ClickMode["push"] = "push";
  ClickMode["remove"] = "remove";
  ClickMode["repulse"] = "repulse";
})(ClickMode || (ClickMode = {}));
// CONCATENATED MODULE: ./dist/Enums/InteractivityDetect.js
var InteractivityDetect;

(function (InteractivityDetect) {
  InteractivityDetect["canvas"] = "canvas";
  InteractivityDetect["parent"] = "parent";
  InteractivityDetect["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));
// CONCATENATED MODULE: ./dist/Enums/PolygonMaskType.js
var PolygonMaskType;

(function (PolygonMaskType) {
  PolygonMaskType["inline"] = "inline";
  PolygonMaskType["inside"] = "inside";
  PolygonMaskType["outside"] = "outside";
  PolygonMaskType["none"] = "none";
})(PolygonMaskType || (PolygonMaskType = {}));
// CONCATENATED MODULE: ./dist/Classes/Utils/EventListeners.js




class EventListeners_EventListeners {
  constructor(container) {
    this.container = container;
    this.canPush = true;

    this.mouseMoveHandler = e => this.mouseTouchMove(e);

    this.touchStartHandler = e => this.mouseTouchMove(e);

    this.touchMoveHandler = e => this.mouseTouchMove(e);

    this.touchEndHandler = () => this.mouseTouchFinish();

    this.mouseLeaveHandler = () => this.mouseTouchFinish();

    this.touchCancelHandler = () => this.mouseTouchFinish();

    this.touchEndClickHandler = e => this.mouseTouchClick(e);

    this.mouseUpHandler = e => this.mouseTouchClick(e);

    this.visibilityChangeHandler = () => this.handleVisibilityChange();

    this.resizeHandler = () => this.handleWindowResize();
  }

  addListeners() {
    this.manageListeners(true);
  }

  removeListeners() {
    this.manageListeners(false);
  }

  manageListeners(add) {
    const container = this.container;
    const options = container.options;

    if (options.interactivity.detectsOn === InteractivityDetect.window) {
      container.interactivity.element = window;
    } else if (options.interactivity.detectsOn === InteractivityDetect.parent && container.canvas.element) {
      container.interactivity.element = container.canvas.element.parentNode;
    } else {
      container.interactivity.element = container.canvas.element;
    }

    const interactivityEl = container.interactivity.element;

    if (interactivityEl && (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
      this.manageListener(interactivityEl, Constants.mouseMoveEvent, this.mouseMoveHandler, add);
      this.manageListener(interactivityEl, Constants.touchStartEvent, this.touchStartHandler, add);
      this.manageListener(interactivityEl, Constants.touchMoveEvent, this.touchMoveHandler, add);

      if (!options.interactivity.events.onClick.enable) {
        this.manageListener(interactivityEl, Constants.touchEndEvent, this.touchEndHandler, add);
      }

      this.manageListener(interactivityEl, Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
      this.manageListener(interactivityEl, Constants.touchCancelEvent, this.touchCancelHandler, add);
    }

    if (options.interactivity.events.onClick.enable && interactivityEl) {
      this.manageListener(interactivityEl, Constants.touchEndEvent, this.touchEndClickHandler, add);
      this.manageListener(interactivityEl, Constants.mouseUpEvent, this.mouseUpHandler, add);
    }

    if (options.interactivity.events.resize) {
      this.manageListener(window, Constants.resizeEvent, this.resizeHandler, add);
    }

    if (document) {
      this.manageListener(document, Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
    }
  }

  manageListener(element, event, handler, add, options) {
    if (add) {
      this.addListener(element, event, handler, options);
    } else {
      this.removeListener(element, event, handler, options);
    }
  }

  addListener(element, event, handler, options) {
    element.addEventListener(event, handler, options);
  }

  removeListener(element, event, handler, options) {
    element.removeEventListener(event, handler, options);
  }

  handleWindowResize() {
    const container = this.container;
    const options = container.options;

    if (!container.canvas.element) {
      return;
    }

    container.canvas.dimension.width = container.canvas.element.offsetWidth;
    container.canvas.dimension.height = container.canvas.element.offsetHeight;

    if (container.retina.isRetina) {
      container.canvas.dimension.width *= container.retina.pxRatio;
      container.canvas.dimension.height *= container.retina.pxRatio;
    }

    container.canvas.element.width = container.canvas.dimension.width;
    container.canvas.element.height = container.canvas.dimension.height;

    if (!options.particles.move.enable) {
      container.particles.redraw();
    }

    container.densityAutoParticles();
    container.polygon.redraw();
  }

  handleVisibilityChange() {
    const container = this.container;
    const options = container.options;

    if (!options.pauseOnBlur) {
      return;
    }

    if (document === null || document === void 0 ? void 0 : document.hidden) {
      container.pageHidden = true;
      container.pause();
    } else {
      container.pageHidden = false;
      container.play();
    }
  }

  mouseTouchMove(e) {
    var _a, _b, _c;

    const container = this.container;
    const options = container.options;
    let pos;

    if (e.type.startsWith("mouse")) {
      this.canPush = true;
      const mouseEvent = e;

      if (container.interactivity.element === window && container.canvas.element) {
        const clientRect = container.canvas.element.getBoundingClientRect();
        pos = {
          x: mouseEvent.clientX - clientRect.left,
          y: mouseEvent.clientY - clientRect.top
        };
      } else if (options.interactivity.detectsOn === InteractivityDetect.parent) {
        const source = mouseEvent.target;
        const target = mouseEvent.currentTarget;

        if (source && target) {
          const sourceRect = source.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          pos = {
            x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
            y: mouseEvent.offsetY + sourceRect.top - targetRect.top
          };
        } else {
          pos = {
            x: mouseEvent.offsetX || mouseEvent.clientX,
            y: mouseEvent.offsetY || mouseEvent.clientY
          };
        }
      } else {
        pos = {
          x: mouseEvent.offsetX || mouseEvent.clientX,
          y: mouseEvent.offsetY || mouseEvent.clientY
        };
      }
    } else {
      this.canPush = e.type !== "touchmove";
      const touchEvent = e;
      const lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
      const canvasRect = (_a = container.canvas.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
      pos = {
        x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
        y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0)
      };
    }

    container.interactivity.mouse.position = pos;

    if (container.retina.isRetina) {
      container.interactivity.mouse.position.x *= container.retina.pxRatio;
      container.interactivity.mouse.position.y *= container.retina.pxRatio;
    }

    container.interactivity.status = Constants.mouseMoveEvent;
  }

  mouseTouchFinish() {
    const container = this.container;
    delete container.interactivity.mouse.position;
    container.interactivity.status = Constants.mouseLeaveEvent;
  }

  mouseTouchClick(e) {
    const container = this.container;
    const options = container.options;

    if (options.polygon.enable && options.polygon.type !== PolygonMaskType.none && options.polygon.type !== PolygonMaskType.inline) {
      if (container.polygon.checkInsidePolygon(container.interactivity.mouse.position)) {
        this.doMouseTouchClick(e);
      }
    } else {
      this.doMouseTouchClick(e);
    }
  }

  doMouseTouchClick(e) {
    const container = this.container;
    const options = container.options;

    if (this.canPush) {
      if (container.interactivity.mouse.position) {
        container.interactivity.mouse.clickPosition = {
          x: container.interactivity.mouse.position.x,
          y: container.interactivity.mouse.position.y
        };
      }

      container.interactivity.mouse.clickTime = new Date().getTime();
      const pushNb = options.interactivity.modes.push.quantity;
      const removeNb = options.interactivity.modes.remove.quantity;

      switch (options.interactivity.events.onClick.mode) {
        case ClickMode.push:
          if (options.particles.move.enable) {
            container.particles.push(pushNb, container.interactivity.mouse);
          } else {
            if (options.interactivity.modes.push.quantity === 1) {
              container.particles.push(pushNb, container.interactivity.mouse);
            } else if (options.interactivity.modes.push.quantity > 1) {
              container.particles.push(pushNb);
            }
          }

          break;

        case ClickMode.remove:
          container.particles.removeQuantity(removeNb);
          break;

        case ClickMode.bubble:
          container.bubble.clicking = true;
          break;

        case ClickMode.repulse:
          container.repulse.clicking = true;
          container.repulse.count = 0;
          container.repulse.finish = false;
          setTimeout(() => {
            if (!container.destroyed) {
              container.repulse.clicking = false;
            }
          }, options.interactivity.modes.repulse.duration * 1000);
          break;
      }
    }

    e.preventDefault();

    if (e.type === "touchend") {
      setTimeout(() => this.mouseTouchFinish(), 500);
    }

    e.preventDefault();
  }

}
// CONCATENATED MODULE: ./dist/Enums/ProcessBubbleType.js
var ProcessBubbleType;

(function (ProcessBubbleType) {
  ProcessBubbleType["opacity"] = "opacity";
  ProcessBubbleType["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));
// CONCATENATED MODULE: ./dist/Enums/Modes/HoverMode.js
var HoverMode;

(function (HoverMode) {
  HoverMode["bubble"] = "bubble";
  HoverMode["connect"] = "connect";
  HoverMode["grab"] = "grab";
  HoverMode["repulse"] = "repulse";
  HoverMode["slow"] = "slow";
})(HoverMode || (HoverMode = {}));
// CONCATENATED MODULE: ./dist/Classes/Particle/Bubbler.js





class Bubbler_Bubbler {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  bubble() {
    const container = this.container;
    const options = container.options;
    const hoverEnabled = options.interactivity.events.onHover.enable;
    const hoverMode = options.interactivity.events.onHover.mode;
    const clickEnabled = options.interactivity.events.onClick.enable;
    const clickMode = options.interactivity.events.onClick.mode;

    if (hoverEnabled && Utils_Utils.isInArray(HoverMode.bubble, hoverMode)) {
      this.hoverBubble();
    } else if (clickEnabled && Utils_Utils.isInArray(ClickMode.bubble, clickMode)) {
      this.clickBubble();
    }
  }

  init() {
    const particle = this.particle;
    this.opacity = particle.opacity.value;
    this.radius = particle.radius;
  }

  process(distMouse, timeSpent, data) {
    const container = this.container;
    const options = container.options;
    const bubbleDuration = options.interactivity.modes.bubble.duration;
    const bubbleParam = data.bubbleObj.optValue;
    const bubbleDistance = container.retina.bubbleModeDistance;
    const particlesParam = data.particlesObj.optValue;
    const pObjBubble = data.bubbleObj.value;
    const pObj = data.particlesObj.value || 0;
    const type = data.type;

    if (bubbleParam !== particlesParam) {
      if (!container.bubble.durationEnd) {
        if (distMouse <= bubbleDistance) {
          const obj = pObjBubble !== null && pObjBubble !== void 0 ? pObjBubble : pObj;

          if (obj !== bubbleParam) {
            const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;

            if (type === ProcessBubbleType.size) {
              this.radius = value;
            }

            if (type === ProcessBubbleType.opacity) {
              this.opacity = value;
            }
          }
        } else {
          if (type === ProcessBubbleType.size) {
            this.radius = undefined;
          }

          if (type === ProcessBubbleType.opacity) {
            this.opacity = undefined;
          }
        }
      } else if (pObjBubble) {
        const value = bubbleParam * 2 - pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;

        if (type === ProcessBubbleType.size) {
          this.radius = value;
        }

        if (type === ProcessBubbleType.opacity) {
          this.opacity = value;
        }
      }
    }
  }

  clickBubble() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const mouseClickPos = container.interactivity.mouse.clickPosition || {
      x: 0,
      y: 0
    };
    const distMouse = Utils_Utils.getDistanceBetweenCoordinates(particle.position, mouseClickPos);
    const timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;

    if (container.bubble.clicking) {
      if (timeSpent > options.interactivity.modes.bubble.duration) {
        container.bubble.durationEnd = true;
      }

      if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
        container.bubble.clicking = false;
        container.bubble.durationEnd = false;
      }

      const sizeData = {
        bubbleObj: {
          optValue: container.retina.bubbleModeSize,
          value: this.radius
        },
        particlesObj: {
          optValue: container.retina.sizeValue,
          value: this.particle.radius
        },
        type: ProcessBubbleType.size
      };
      this.process(distMouse, timeSpent, sizeData);
      const opacityData = {
        bubbleObj: {
          optValue: options.interactivity.modes.bubble.opacity,
          value: this.opacity
        },
        particlesObj: {
          optValue: options.particles.opacity.value,
          value: this.particle.opacity.value
        },
        type: ProcessBubbleType.opacity
      };
      this.process(distMouse, timeSpent, opacityData);
    }
  }

  hoverBubble() {
    const container = this.container;
    const particle = this.particle;
    const mousePos = container.interactivity.mouse.position || {
      x: 0,
      y: 0
    };
    const distMouse = Utils_Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
    const ratio = 1 - distMouse / container.retina.bubbleModeDistance;

    if (distMouse <= container.retina.bubbleModeDistance) {
      if (ratio >= 0 && container.interactivity.status === Constants.mouseMoveEvent) {
        this.hoverBubbleSize(ratio);
        this.hoverBubbleOpacity(ratio);
      }
    } else {
      this.init();
    }

    if (container.interactivity.status === Constants.mouseLeaveEvent) {
      this.init();
    }
  }

  hoverBubbleSize(ratio) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const modeSize = options.interactivity.modes.bubble.size;
    const optSize = options.particles.size.value;
    const pSize = particle.radius;

    if (container.retina.bubbleModeSize > container.retina.sizeValue) {
      const size = pSize + modeSize * ratio;

      if (size > pSize && size <= modeSize) {
        this.radius = size;
      }
    } else if (container.retina.bubbleModeSize < container.retina.sizeValue) {
      const size = pSize - (optSize - modeSize) * ratio;

      if (size < pSize && size >= modeSize) {
        this.radius = size;
      }
    }
  }

  hoverBubbleOpacity(ratio) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const modeOpacity = options.interactivity.modes.bubble.opacity;
    const optOpacity = options.particles.opacity.value;
    const pOpacity = particle.opacity.value;

    if (modeOpacity > optOpacity) {
      const opacity = pOpacity + modeOpacity * ratio;

      if (opacity > pOpacity && opacity <= modeOpacity) {
        this.opacity = opacity;
      }
    } else if (modeOpacity < optOpacity) {
      const opacity = pOpacity - (optOpacity - modeOpacity) * ratio;

      if (opacity < pOpacity && opacity >= modeOpacity) {
        this.opacity = opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/Drawer.js
class Drawer {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  draw() {
    const container = this.container;
    const particle = this.particle;
    container.canvas.drawParticle(particle);
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/Grabber.js


class Grabber_Grabber {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  grab() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const interactivity = options.interactivity;

    if (interactivity.events.onHover.enable && container.interactivity.status === Constants.mouseMoveEvent) {
      const mousePos = container.interactivity.mouse.position || {
        x: 0,
        y: 0
      };
      const distMouse = Utils_Utils.getDistanceBetweenCoordinates(particle.position, mousePos);

      if (distMouse <= container.retina.grabModeDistance) {
        const lineOpacity = interactivity.modes.grab.lineLinked.opacity;
        const grabDistance = container.retina.grabModeDistance;
        const opacityLine = lineOpacity - distMouse * lineOpacity / grabDistance;

        if (opacityLine > 0) {
          container.canvas.drawGrabLine(particle, opacityLine, mousePos);
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Enums/OutMode.js
var OutMode;

(function (OutMode) {
  OutMode["bounce"] = "bounce";
  OutMode["bounceHorizontal"] = "bounce-horizontal";
  OutMode["bounceVertical"] = "bounce-vertical";
  OutMode["out"] = "out";
  OutMode["destroy"] = "destroy";
})(OutMode || (OutMode = {}));
// CONCATENATED MODULE: ./dist/Enums/Modes/DivMode.js
var DivMode;

(function (DivMode) {
  DivMode["repulse"] = "repulse";
})(DivMode || (DivMode = {}));
// CONCATENATED MODULE: ./dist/Classes/Particle/Repulser.js






class Repulser_Repulser {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  repulse() {
    const container = this.container;
    const options = container.options;
    const hoverEnabled = options.interactivity.events.onHover.enable;
    const clickEnabled = options.interactivity.events.onClick.enable;
    const mouseMoveStatus = container.interactivity.status === Constants.mouseMoveEvent;
    const hoverMode = options.interactivity.events.onHover.mode;
    const clickMode = options.interactivity.events.onClick.mode;
    const divMode = options.interactivity.events.onDiv.mode;

    if (mouseMoveStatus && hoverEnabled && Utils_Utils.isInArray(HoverMode.repulse, hoverMode)) {
      this.hoverRepulse();
    } else if (clickEnabled && Utils_Utils.isInArray(ClickMode.repulse, clickMode)) {
      this.clickRepulse();
    } else if (options.interactivity.events.onDiv.enable && Utils_Utils.isInArray(DivMode.repulse, divMode)) {
      this.divRepulse();
    }
  }

  divRepulse() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const elem = document.getElementById(options.interactivity.events.onDiv.elementId);
    const pos = {
      x: elem.offsetLeft + elem.offsetWidth / 2,
      y: elem.offsetTop + elem.offsetHeight / 2
    };
    let divWidth = elem.offsetWidth / 2;

    if (container.retina.isRetina) {
      pos.x *= container.retina.pxRatio;
      pos.y *= container.retina.pxRatio;
      divWidth *= container.retina.pxRatio;
    }

    const dxDiv = particle.position.x - pos.x;
    const dyDiv = particle.position.y - pos.y;
    const distDiv = Math.sqrt(dxDiv * dxDiv + dyDiv * dyDiv);
    const normVec = {
      x: dxDiv / distDiv,
      y: dyDiv / distDiv
    };
    const repulseRadius = divWidth;
    const velocity = 100;
    const repulseFactor = Utils_Utils.clamp((-Math.pow(distDiv / repulseRadius, 4) + 1) * velocity, 0, 50);
    this.particle.position.x += normVec.x * repulseFactor;
    this.particle.position.y += normVec.y * repulseFactor;
  }

  clickRepulse() {
    const container = this.container;
    const particle = this.particle;

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
      const repulseDistance = container.retina.repulseModeDistance;
      const repulseRadius = Math.pow(repulseDistance / 6, 3);
      const mouseClickPos = container.interactivity.mouse.clickPosition || {
        x: 0,
        y: 0
      };
      const dx = mouseClickPos.x - particle.position.x;
      const dy = mouseClickPos.y - particle.position.y;
      const d = dx * dx + dy * dy;
      const force = -repulseRadius / d;

      if (d <= repulseRadius) {
        this.processRepulse(dx, dy, force);
      }
    } else if (container.repulse.clicking === false) {
      particle.velocity.horizontal = particle.initialVelocity.horizontal;
      particle.velocity.vertical = particle.initialVelocity.vertical;
    }
  }

  hoverRepulse() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const mousePos = container.interactivity.mouse.position || {
      x: 0,
      y: 0
    };
    const dxMouse = particle.position.x - mousePos.x;
    const dyMouse = particle.position.y - mousePos.y;
    const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    const normVec = {
      x: dxMouse / distMouse,
      y: dyMouse / distMouse
    };
    const repulseRadius = container.retina.repulseModeDistance;
    const velocity = 100;
    const repulseFactor = Utils_Utils.clamp((1 - Math.pow(distMouse / repulseRadius, 2)) * velocity, 0, 50);
    const pos = {
      x: particle.position.x + normVec.x * repulseFactor,
      y: particle.position.y + normVec.y * repulseFactor
    };
    const outMode = options.particles.move.outMode;

    if (outMode === OutMode.bounce || outMode === OutMode.bounceVertical || outMode === OutMode.bounceHorizontal) {
      const isInside = {
        horizontal: pos.x - particle.radius > 0 && pos.x + particle.radius < container.canvas.dimension.width,
        vertical: pos.y - particle.radius > 0 && pos.y + particle.radius < container.canvas.dimension.height
      };

      if (outMode === OutMode.bounceVertical || isInside.horizontal) {
        particle.position.x = pos.x;
      }

      if (outMode === OutMode.bounceHorizontal || isInside.vertical) {
        particle.position.y = pos.y;
      }
    } else {
      particle.position.x = pos.x;
      particle.position.y = pos.y;
    }
  }

  processRepulse(dx, dy, force) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const f = Math.atan2(dy, dx);
    particle.velocity.horizontal = force * Math.cos(f);
    particle.velocity.vertical = force * Math.sin(f);
    const outMode = options.particles.move.outMode;

    if (outMode === OutMode.bounce || outMode === OutMode.bounceHorizontal || outMode === OutMode.bounceVertical) {
      const pos = {
        x: particle.position.x + particle.velocity.horizontal,
        y: particle.position.y + particle.velocity.vertical
      };

      if (outMode !== OutMode.bounceVertical) {
        if (pos.x + particle.radius > container.canvas.dimension.width || pos.x - particle.radius < 0) {
          particle.velocity.horizontal = -particle.velocity.horizontal;
        }
      }

      if (outMode !== OutMode.bounceHorizontal) {
        if (pos.y + particle.radius > container.canvas.dimension.height || pos.y - particle.radius < 0) {
          particle.velocity.vertical = -particle.velocity.vertical;
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Enums/ShapeType.js
var ShapeType;

(function (ShapeType) {
  ShapeType["char"] = "char";
  ShapeType["character"] = "character";
  ShapeType["circle"] = "circle";
  ShapeType["edge"] = "edge";
  ShapeType["heart"] = "heart";
  ShapeType["image"] = "image";
  ShapeType["line"] = "line";
  ShapeType["polygon"] = "polygon";
  ShapeType["square"] = "square";
  ShapeType["star"] = "star";
  ShapeType["triangle"] = "triangle";
})(ShapeType || (ShapeType = {}));
// CONCATENATED MODULE: ./dist/Classes/Particle/Mover.js


class Mover_Mover {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  move(delta) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;

    if (options.particles.move.enable) {
      const slowFactor = this.getProximitySpeedFactor();
      const deltaFactor = options.fpsLimit > 0 ? 60 * delta / 1000 : 3.6;
      const moveSpeed = container.retina.moveSpeed / 2 * slowFactor * deltaFactor;
      particle.position.x += particle.velocity.horizontal * moveSpeed;
      particle.position.y += particle.velocity.vertical * moveSpeed;
    }

    this.moveParallax();
  }

  moveParallax() {
    const container = this.container;
    const options = container.options;

    if (!options.interactivity.events.onHover.parallax.enable) {
      return;
    }

    const particle = this.particle;
    const parallaxForce = options.interactivity.events.onHover.parallax.force;
    const mousePos = container.interactivity.mouse.position || {
      x: 0,
      y: 0
    };
    const windowDimension = {
      height: window.innerHeight / 2,
      width: window.innerWidth / 2
    };
    const parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
    const tmp = {
      x: (mousePos.x - windowDimension.width) * (particle.radius / parallaxForce),
      y: (mousePos.y - windowDimension.height) * (particle.radius / parallaxForce)
    };
    particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth;
    particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth;
  }

  getProximitySpeedFactor() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const active = Utils_Utils.isInArray(HoverMode.slow, options.interactivity.events.onHover.mode);

    if (!active) {
      return 1;
    }

    const mousePos = this.container.interactivity.mouse.position;

    if (!mousePos) {
      return 1;
    }

    const particlePos = particle.position;
    const dist = Utils_Utils.getDistanceBetweenCoordinates(mousePos, particlePos);
    const radius = container.retina.slowModeRadius;

    if (dist > radius) {
      return 1;
    }

    const proximityFactor = dist / radius || 0;
    const slowFactor = options.interactivity.modes.slow.factor;
    return proximityFactor / slowFactor;
  }

}
// CONCATENATED MODULE: ./dist/Enums/RotateDirection.js
var RotateDirection;

(function (RotateDirection) {
  RotateDirection["clockwise"] = "clockwise";
  RotateDirection["counterClockwise"] = "counter-clockwise";
  RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));
// CONCATENATED MODULE: ./dist/Classes/Particle/Updater.js





class Updater_Updater {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
    this.mover = new Mover_Mover(container, particle);
  }

  static checkBounds(coordinate, radius, size, outside) {
    if (coordinate + radius > size || coordinate - radius < 0) {
      outside();
    }
  }

  update(delta) {
    this.mover.move(delta);
    this.updateOpacity();
    this.updateSize();
    this.updateAngle();
    this.fixOutOfCanvasPosition();
    this.updateOutMode();
  }

  updateOpacity() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;

    if (options.particles.opacity.animation.enable) {
      if (particle.opacity.status) {
        if (particle.opacity.value >= options.particles.opacity.value) {
          particle.opacity.status = false;
        }

        particle.opacity.value += particle.opacity.velocity || 0;
      } else {
        if (particle.opacity.value <= options.particles.opacity.animation.minimumValue) {
          particle.opacity.status = true;
        }

        particle.opacity.value -= particle.opacity.velocity || 0;
      }

      if (particle.opacity.value < 0) {
        particle.opacity.value = 0;
      }
    }
  }

  updateSize() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;

    if (options.particles.size.animation.enable) {
      if (particle.size.status) {
        if (particle.radius >= container.retina.sizeValue) {
          particle.size.status = false;
        }

        particle.radius += particle.size.velocity || 0;
      } else {
        if (particle.radius <= options.particles.size.animation.minimumValue) {
          particle.size.status = true;
        }

        particle.radius -= particle.size.velocity || 0;
      }

      if (particle.radius < 0) {
        particle.radius = 0;
      }
    }
  }

  updateAngle() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;

    if (options.particles.rotate.animation.enable) {
      switch (particle.rotateDirection) {
        case RotateDirection.clockwise:
          particle.angle += options.particles.rotate.animation.speed * Math.PI / 18;

          if (particle.angle > 360) {
            particle.angle -= 360;
          }

          break;

        case RotateDirection.counterClockwise:
        default:
          particle.angle -= options.particles.rotate.animation.speed * Math.PI / 18;

          if (particle.angle < 0) {
            particle.angle += 360;
          }

          break;
      }
    }
  }

  fixOutOfCanvasPosition() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const outMode = options.particles.move.outMode;
    const canvasSize = container.canvas.dimension;
    let newPos;

    if (outMode === OutMode.bounce) {
      newPos = {
        bottom: canvasSize.height,
        left: particle.radius,
        right: canvasSize.width,
        top: particle.radius
      };
    } else if (outMode === OutMode.bounceHorizontal) {
      newPos = {
        bottom: canvasSize.height + particle.radius - particle.offset.y,
        left: particle.radius,
        right: canvasSize.width,
        top: -particle.radius - particle.offset.y
      };
    } else if (outMode === OutMode.bounceVertical) {
      newPos = {
        bottom: canvasSize.height,
        left: -particle.radius - particle.offset.x,
        right: canvasSize.width + particle.radius + particle.offset.x,
        top: particle.radius
      };
    } else {
      newPos = {
        bottom: canvasSize.height + particle.radius - particle.offset.y,
        left: -particle.radius - particle.offset.x,
        right: canvasSize.width + particle.radius + particle.offset.x,
        top: -particle.radius - particle.offset.y
      };
    }

    if (outMode === OutMode.destroy) {
      if (!Utils_Utils.isPointInside(particle.position, container.canvas.dimension, particle.radius)) {
        container.particles.remove(particle);
      }
    } else {
      const nextBounds = Utils_Utils.calculateBounds(particle.position, particle.radius);

      if (nextBounds.left > canvasSize.width - particle.offset.x) {
        particle.position.x = newPos.left;
        particle.position.y = Math.random() * canvasSize.height;
      } else if (nextBounds.right < -particle.offset.x) {
        particle.position.x = newPos.right;
        particle.position.y = Math.random() * canvasSize.height;
      }

      if (nextBounds.top > canvasSize.height - particle.offset.y) {
        particle.position.y = newPos.top;
        particle.position.x = Math.random() * canvasSize.width;
      } else if (nextBounds.bottom < -particle.offset.y) {
        particle.position.y = newPos.bottom;
        particle.position.x = Math.random() * canvasSize.width;
      }
    }
  }

  updateOutMode() {
    const container = this.container;
    const options = container.options;

    switch (options.particles.move.outMode) {
      case OutMode.bounce:
      case OutMode.bounceVertical:
      case OutMode.bounceHorizontal:
        this.updateBounce();
        break;
    }
  }

  updateBounce() {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;

    if (options.polygon.enable && options.polygon.type !== PolygonMaskType.none && options.polygon.type !== PolygonMaskType.inline) {
      if (!container.polygon.checkInsidePolygon(particle.position)) {
        this.polygonBounce();
      }
    } else if (options.polygon.enable && options.polygon.type === PolygonMaskType.inline) {
      if (particle.initialPosition) {
        const dist = Utils_Utils.getDistanceBetweenCoordinates(particle.initialPosition, particle.position);

        if (dist > container.retina.polygonMaskMoveRadius) {
          this.polygonBounce();
        }
      }
    } else {
      const outMode = options.particles.move.outMode;
      const x = particle.position.x + particle.offset.x;
      const y = particle.position.y + particle.offset.y;

      if (outMode === OutMode.bounce || outMode === OutMode.bounceHorizontal) {
        Updater_Updater.checkBounds(x, particle.radius, container.canvas.dimension.width, () => {
          particle.velocity.horizontal = -particle.velocity.horizontal;
        });
      }

      if (outMode === OutMode.bounce || outMode === OutMode.bounceVertical) {
        Updater_Updater.checkBounds(y, particle.radius, container.canvas.dimension.height, () => {
          particle.velocity.vertical = -particle.velocity.vertical;
        });
      }
    }
  }

  polygonBounce() {
    const particle = this.particle;
    particle.velocity.horizontal = -particle.velocity.horizontal + particle.velocity.vertical / 2;
    particle.velocity.vertical = -particle.velocity.vertical + particle.velocity.horizontal / 2;
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/Connecter.js
class Connecter {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  connect(destParticle) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;

    if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
      const xDiff = Math.abs(particle.position.x - destParticle.position.x);
      const yDiff = Math.abs(particle.position.y - destParticle.position.y);
      const mousePos = container.interactivity.mouse.position || {
        x: 0,
        y: 0
      };
      const xCoreDiff = Math.abs(particle.position.x - mousePos.x);
      const yCoreDiff = Math.abs(particle.position.y - mousePos.y);
      const distMax = Math.abs(container.retina.connectModeDistance);
      const connectAreaRadius = Math.abs(container.retina.connectModeRadius);

      if (xDiff < distMax && yDiff < distMax && xCoreDiff < connectAreaRadius && yCoreDiff < connectAreaRadius) {
        container.canvas.drawConnectLine(particle, destParticle);
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/Linker.js



class Linker_Linker {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  link(p2) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const pos1 = {
      x: particle.position.x + particle.offset.x,
      y: particle.position.y + particle.offset.y
    };
    const pos2 = {
      x: p2.position.x + p2.offset.x,
      y: p2.position.y + p2.offset.y
    };
    const dist = Utils_Utils.getDistanceBetweenCoordinates(pos1, pos2);
    const optOpacity = options.particles.lineLinked.opacity;
    const optDistance = container.retina.lineLinkedDistance;

    if (dist <= optDistance) {
      const opacityLine = optOpacity - dist * optOpacity / optDistance;

      if (opacityLine > 0) {
        if (!container.particles.lineLinkedColor) {
          const color = options.particles.lineLinked.color;

          if (color === Constants.randomColorValue) {
            if (options.particles.lineLinked.consent) {
              container.particles.lineLinkedColor = ColorUtils_ColorUtils.stringToRgb(color);
            } else if (options.particles.lineLinked.blink) {
              container.particles.lineLinkedColor = Constants.randomColorValue;
            } else {
              container.particles.lineLinkedColor = "mid";
            }
          } else {
            container.particles.lineLinkedColor = typeof color === "string" ? ColorUtils_ColorUtils.stringToRgb(color) : ColorUtils_ColorUtils.colorToRgb(color);
          }
        }

        container.canvas.drawLinkedLine(particle, p2, pos1, pos2, opacityLine);
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/Attracter.js
class Attracter {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  attract(p2) {
    const container = this.container;
    const options = container.options;
    const particle = this.particle;
    const dx = particle.position.x - p2.position.x;
    const dy = particle.position.y - p2.position.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= container.retina.lineLinkedDistance) {
      const ax = dx / (options.particles.move.attract.rotate.x * 1000);
      const ay = dy / (options.particles.move.attract.rotate.y * 1000);
      particle.velocity.horizontal -= ax;
      particle.velocity.vertical -= ay;
      p2.velocity.horizontal += ax;
      p2.velocity.vertical += ay;
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/Collider.js

class Collider_Collider {
  constructor(container, particle) {
    this.container = container;
    this.particle = particle;
  }

  collide(p2) {
    const p1 = this.particle;

    if (p1 === p2) {
      return;
    }

    const dist = Utils_Utils.getDistanceBetweenCoordinates(p1.position, p2.position);
    const distP = (p1.bubbler.radius || p1.radius) + (p2.bubbler.radius || p2.radius);

    if (dist <= distP) {
      p1.resetVelocity();
      p2.resetVelocity();
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle/InteractionManager.js



class InteractionManager_InteractionManager {
  constructor(container, particle) {
    this.container = container;
    this.linker = new Linker_Linker(container, particle);
    this.attracter = new Attracter(container, particle);
    this.collider = new Collider_Collider(container, particle);
  }

  interact(p2) {
    const container = this.container;
    const options = container.options;

    if (options.particles.lineLinked.enable) {
      this.linker.link(p2);
    }

    if (options.particles.move.attract.enable) {
      this.attracter.attract(p2);
    }

    if (options.particles.move.collisions) {
      this.collider.collide(p2);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Particle.js














class Particle_Particle {
  constructor(container, position) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    this.container = container;
    const options = container.options;
    const color = options.particles.color;
    this.size = {};
    this.angle = options.particles.rotate.random ? Math.random() * 360 : options.particles.rotate.value;

    if (options.particles.rotate.direction == RotateDirection.random) {
      const index = Math.floor(Math.random() * 2);

      if (index > 0) {
        this.rotateDirection = RotateDirection.counterClockwise;
      } else {
        this.rotateDirection = RotateDirection.clockwise;
      }
    } else {
      this.rotateDirection = options.particles.rotate.direction;
    }

    const randomSize = options.particles.size.random;
    const sizeValue = container.retina.sizeValue;
    this.radius = randomSize.enable ? Utils_Utils.randomInRange(randomSize.minimumValue, sizeValue) : sizeValue;

    if (options.particles.size.animation.enable) {
      this.size.status = false;
      this.size.velocity = container.retina.sizeAnimationSpeed / 100;

      if (!options.particles.size.animation.sync) {
        this.size.velocity = this.size.velocity * Math.random();
      }
    }

    if (options.particles.rotate.animation.enable) {
      if (!options.particles.rotate.animation.sync) {
        this.angle = Math.random() * 360;
      }
    }

    this.position = this.calcPosition(this.container, position);

    if (options.polygon.enable && options.polygon.type === PolygonMaskType.inline) {
      this.initialPosition = {
        x: this.position.x,
        y: this.position.y
      };
    }

    this.offset = {
      x: 0,
      y: 0
    };

    if (options.particles.move.collisions) {
      this.checkOverlap(position);
    }

    if (color instanceof Array) {
      this.color = ColorUtils_ColorUtils.colorToRgb(Utils_Utils.itemFromArray(color));
    } else {
      this.color = ColorUtils_ColorUtils.colorToRgb(color);
    }

    const randomOpacity = options.particles.opacity.random;
    const opacityValue = options.particles.opacity.value;
    this.opacity = {
      value: randomOpacity.enable ? Utils_Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue
    };

    if (options.particles.opacity.animation.enable) {
      this.opacity.status = false;
      this.opacity.velocity = options.particles.opacity.animation.speed / 100;

      if (!options.particles.opacity.animation.sync) {
        this.opacity.velocity *= Math.random();
      }
    }

    this.initialVelocity = Particle_Particle.calculateVelocity(options);
    this.velocity = {
      horizontal: this.initialVelocity.horizontal,
      vertical: this.initialVelocity.vertical
    };
    this.fill = true;
    this.close = true;
    const shapeType = options.particles.shape.type;

    if (shapeType instanceof Array) {
      this.shape = Utils_Utils.itemFromArray(shapeType);
    } else {
      this.shape = shapeType;
    }

    if (this.shape === ShapeType.image) {
      const shape = options.particles.shape;
      const index = Utils_Utils.arrayRandomIndex(container.images);
      const image = container.images[index];
      const optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
      this.image = {
        data: image,
        ratio: optionsImage.width / optionsImage.height,
        replaceColor: optionsImage.replaceColor,
        src: optionsImage.src
      };

      if (!this.image.ratio) {
        this.image.ratio = 1;
      }

      this.fill = (_a = optionsImage.fill) !== null && _a !== void 0 ? _a : this.fill;
      this.close = (_b = optionsImage.close) !== null && _b !== void 0 ? _b : this.close;
    }

    if (this.shape === ShapeType.polygon) {
      if (options.particles.shape.polygon instanceof Array) {
        this.polygon = Utils_Utils.itemFromArray(options.particles.shape.polygon);
      } else {
        this.polygon = options.particles.shape.polygon;
      }

      this.fill = (_c = this.polygon.fill) !== null && _c !== void 0 ? _c : this.fill;
      this.close = (_d = this.polygon.close) !== null && _d !== void 0 ? _d : this.close;
    }

    if (options.particles.stroke instanceof Array) {
      this.stroke = Utils_Utils.itemFromArray(options.particles.stroke);
    } else {
      this.stroke = options.particles.stroke;
    }

    this.strokeColor = typeof this.stroke.color === "string" ? ColorUtils_ColorUtils.stringToRgb(this.stroke.color) : ColorUtils_ColorUtils.colorToRgb(this.stroke.color);
    this.shadowColor = typeof options.particles.shadow.color === "string" ? ColorUtils_ColorUtils.stringToRgb(options.particles.shadow.color) : ColorUtils_ColorUtils.colorToRgb(options.particles.shadow.color);

    if (this.shape === ShapeType.char || this.shape === ShapeType.character) {
      if (options.particles.shape.character instanceof Array) {
        this.character = Utils_Utils.itemFromArray(options.particles.shape.character);
      } else {
        this.character = options.particles.shape.character;
      }

      const value = this.character.value;
      this.text = value instanceof Array ? Utils_Utils.itemFromArray(value) : value;
      this.fill = (_e = this.character.fill) !== null && _e !== void 0 ? _e : this.fill;
      this.close = (_f = this.character.close) !== null && _f !== void 0 ? _f : this.close;
    }

    const shapeData = options.particles.shape.custom[this.shape];

    if (shapeData) {
      this.shapeData = shapeData instanceof Array ? Utils_Utils.itemFromArray(shapeData) : shapeData;
      this.fill = (_g = this.shapeData.fill) !== null && _g !== void 0 ? _g : this.fill;
      this.close = (_h = this.shapeData.close) !== null && _h !== void 0 ? _h : this.close;
    }

    this.updater = new Updater_Updater(this.container, this);
    this.bubbler = new Bubbler_Bubbler(this.container, this);
    this.repulser = new Repulser_Repulser(this.container, this);
    this.drawer = new Drawer(this.container, this);
    this.grabber = new Grabber_Grabber(this.container, this);
    this.connecter = new Connecter(this.container, this);
    this.interactionManager = new InteractionManager_InteractionManager(this.container, this);
  }

  static calculateVelocity(options) {
    const baseVelocity = Utils_Utils.getParticleBaseVelocity(options);
    const res = {
      horizontal: 0,
      vertical: 0
    };

    if (options.particles.move.straight) {
      res.horizontal = baseVelocity.x;
      res.vertical = baseVelocity.y;

      if (options.particles.move.random) {
        res.horizontal *= Math.random();
        res.vertical *= Math.random();
      }
    } else {
      res.horizontal = baseVelocity.x + Math.random() - 0.5;
      res.vertical = baseVelocity.y + Math.random() - 0.5;
    }

    return res;
  }

  resetVelocity() {
    const container = this.container;
    const options = container.options;
    const velocity = Particle_Particle.calculateVelocity(options);
    this.velocity.horizontal = velocity.horizontal;
    this.velocity.vertical = velocity.vertical;
  }

  update(index, delta) {
    const container = this.container;
    const options = container.options;
    this.updater.update(delta);
    const hoverMode = options.interactivity.events.onHover.mode;
    const clickMode = options.interactivity.events.onClick.mode;

    if (Utils_Utils.isInArray(HoverMode.grab, hoverMode)) {
      this.grabber.grab();
    }

    if (Utils_Utils.isInArray(HoverMode.connect, options.interactivity.events.onHover.mode)) {
      for (let j = index + 1; j < container.particles.count; j++) {
        const p2 = container.particles.array[j];
        this.connecter.connect(p2);
      }
    }

    if (Utils_Utils.isInArray(HoverMode.bubble, hoverMode) || Utils_Utils.isInArray(ClickMode.bubble, clickMode)) {
      this.bubbler.bubble();
    }

    if (Utils_Utils.isInArray(HoverMode.repulse, hoverMode) || Utils_Utils.isInArray(ClickMode.repulse, clickMode)) {
      this.repulser.repulse();
    }
  }

  interact(p2) {
    this.interactionManager.interact(p2);
  }

  draw() {
    this.drawer.draw();
  }

  isOverlapping() {
    const container = this.container;
    const p = this;
    let collisionFound = false;
    let iterations = 0;

    for (const p2 of container.particles.array.filter(t => t != p)) {
      iterations++;
      const dist = Utils_Utils.getDistanceBetweenCoordinates(p.position, p2.position);

      if (dist <= p.radius + p2.radius) {
        collisionFound = true;
        break;
      }
    }

    return {
      collisionFound: collisionFound,
      iterations: iterations
    };
  }

  checkOverlap(position) {
    const container = this.container;
    const p = this;
    const overlapResult = p.isOverlapping();

    if (overlapResult.iterations >= container.particles.count) {
      container.particles.remove(this);
    } else if (overlapResult.collisionFound) {
      p.position.x = position ? position.x : Math.random() * container.canvas.dimension.width;
      p.position.y = position ? position.y : Math.random() * container.canvas.dimension.height;
      p.checkOverlap();
    }
  }

  calcPosition(container, position) {
    var _a, _b;

    const pos = {
      x: 0,
      y: 0
    };
    const options = container.options;

    if (options.polygon.enable && ((_b = (_a = container.polygon.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
      if (position) {
        pos.x = position.x;
        pos.y = position.y;
      } else {
        const randomPoint = container.polygon.randomPointInPolygon();
        pos.x = randomPoint.x;
        pos.y = randomPoint.y;
      }
    } else {
      pos.x = position ? position.x : Math.random() * container.canvas.dimension.width;
      pos.y = position ? position.y : Math.random() * container.canvas.dimension.height;

      if (pos.x > container.canvas.dimension.width - this.radius * 2) {
        pos.x -= this.radius;
      } else if (pos.x < this.radius * 2) {
        pos.x += this.radius;
      }

      if (pos.y > container.canvas.dimension.height - this.radius * 2) {
        pos.y -= this.radius;
      } else if (pos.y < this.radius * 2) {
        pos.y += this.radius;
      }
    }

    return pos;
  }

}
// CONCATENATED MODULE: ./dist/Enums/PolygonMaskInlineArrangement.js
var PolygonMaskInlineArrangement;

(function (PolygonMaskInlineArrangement) {
  PolygonMaskInlineArrangement["equidistant"] = "equidistant";
  PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
  PolygonMaskInlineArrangement["perPoint"] = "per-point";
  PolygonMaskInlineArrangement["randomLength"] = "random-length";
  PolygonMaskInlineArrangement["randomPoint"] = "random-point";
})(PolygonMaskInlineArrangement || (PolygonMaskInlineArrangement = {}));
// CONCATENATED MODULE: ./dist/Classes/Particles.js



class Particles_Particles {
  constructor(container) {
    this.container = container;
    this.array = [];
    this.interactionsEnabled = false;
  }

  get count() {
    return this.array.length;
  }

  init() {
    const container = this.container;
    const options = container.options;

    if (options.polygon.enable && options.polygon.type === PolygonMaskType.inline && (options.polygon.inline.arrangement === PolygonMaskInlineArrangement.onePerPoint || options.polygon.inline.arrangement === PolygonMaskInlineArrangement.perPoint)) {
      container.polygon.drawPointsOnPolygonPath();
    } else {
      for (let i = this.array.length; i < options.particles.number.value; i++) {
        this.addParticle(new Particle_Particle(container));
      }
    }

    this.interactionsEnabled = options.particles.lineLinked.enable || options.particles.move.attract.enable || options.particles.move.collisions;
  }

  redraw() {
    this.clear();
    this.init();
    this.draw(0);
  }

  removeAt(index, quantity) {
    if (index >= 0 && index <= this.count) {
      this.array.splice(index, quantity !== null && quantity !== void 0 ? quantity : 1);
    }
  }

  remove(particle) {
    this.removeAt(this.array.indexOf(particle));
  }

  update(delta) {
    for (let i = 0; i < this.array.length; i++) {
      const p = this.array[i];
      p.update(i, delta);

      if (this.interactionsEnabled) {
        for (let j = i + 1; j < this.array.length; j++) {
          const p2 = this.array[j];
          p.interact(p2);
        }
      }
    }
  }

  draw(delta) {
    const container = this.container;
    const options = container.options;
    container.canvas.clear();
    this.update(delta);

    if (options.polygon.enable && options.polygon.draw.enable) {
      container.polygon.drawPolygon();
    }

    for (const p of this.array) {
      p.draw();
    }
  }

  clear() {
    this.array = [];
  }

  push(nb, mousePosition) {
    var _a;

    const container = this.container;
    const options = container.options;
    this.pushing = true;

    if (options.particles.number.limit > 0) {
      if (this.array.length + nb > options.particles.number.limit) {
        this.removeQuantity(this.array.length + nb - options.particles.number.limit);
      }
    }

    let pos;

    if (mousePosition) {
      pos = (_a = mousePosition.position) !== null && _a !== void 0 ? _a : {
        x: 0,
        y: 0
      };
    }

    for (let i = 0; i < nb; i++) {
      this.addParticle(new Particle_Particle(container, pos));
    }

    if (!options.particles.move.enable) {
      this.container.play();
    }

    this.pushing = false;
  }

  addParticle(particle) {
    this.array.push(particle);
  }

  removeQuantity(quantity) {
    const container = this.container;
    const options = container.options;
    this.removeAt(0, quantity);

    if (!options.particles.move.enable) {
      this.container.play();
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Retina.js
class Retina {
  constructor(container) {
    this.container = container;
    this.isRetina = false;
    this.bubbleModeDistance = 0;
    this.bubbleModeSize = 0;
    this.connectModeDistance = 0;
    this.connectModeRadius = 0;
    this.grabModeDistance = 0;
    this.repulseModeDistance = 0;
    this.slowModeRadius = 0;
    this.lineLinkedDistance = 0;
    this.lineLinkedWidth = 0;
    this.moveSpeed = 0;
    this.sizeValue = 0;
    this.sizeAnimationSpeed = 0;
    this.polygonMaskMoveRadius = 0;
    this.pxRatio = 1;
  }

  init() {
    const container = this.container;
    const options = container.options;

    if (options.detectRetina && window.devicePixelRatio > 1) {
      this.pxRatio = window.devicePixelRatio;
      this.isRetina = true;
    } else {
      this.pxRatio = 1;
      this.isRetina = false;
    }

    const ratio = this.pxRatio;

    if (container.canvas.element) {
      container.canvas.dimension.width = container.canvas.element.offsetWidth * ratio;
      container.canvas.dimension.height = container.canvas.element.offsetHeight * ratio;
    }

    this.bubbleModeDistance = options.interactivity.modes.bubble.distance * ratio;
    this.bubbleModeSize = options.interactivity.modes.bubble.size * ratio;
    this.connectModeDistance = options.interactivity.modes.connect.distance * ratio;
    this.connectModeRadius = options.interactivity.modes.connect.radius * ratio;
    this.grabModeDistance = options.interactivity.modes.grab.distance * ratio;
    this.repulseModeDistance = options.interactivity.modes.repulse.distance * ratio;
    this.slowModeRadius = options.interactivity.modes.slow.radius * ratio;
    this.lineLinkedDistance = options.particles.lineLinked.distance * ratio;
    this.lineLinkedWidth = options.particles.lineLinked.width * ratio;
    this.moveSpeed = options.particles.move.speed * ratio;
    this.sizeValue = options.particles.size.value * ratio;
    this.sizeAnimationSpeed = options.particles.size.animation.speed * ratio;
    this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
  }

  reset() {}

}
// CONCATENATED MODULE: ./dist/Classes/PolygonMask.js
var PolygonMask_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};





class PolygonMask_PolygonMask {
  constructor(container) {
    this.container = container;
    this.dimension = {
      height: 0,
      width: 0
    };
    this.polygonPathLength = 0;
    this.path2DSupported = window.hasOwnProperty("Path2D");
  }

  checkInsidePolygon(position) {
    const container = this.container;
    const options = container.options;

    if (!options.polygon.enable || options.polygon.type === PolygonMaskType.none || options.polygon.type === PolygonMaskType.inline) {
      return true;
    }

    if (!this.raw) {
      console.error('No polygon found, you need to specify SVG url in config.');
      return true;
    }

    const x = position ? position.x : Math.random() * container.canvas.dimension.width;
    const y = position ? position.y : Math.random() * container.canvas.dimension.height;
    let inside = false;

    for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
      const xi = this.raw[i].x;
      const yi = this.raw[i].y;
      const xj = this.raw[j].x;
      const yj = this.raw[j].y;
      const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;

      if (intersect) {
        inside = !inside;
      }
    }

    if (options.polygon.type === PolygonMaskType.inside) {
      return inside;
    } else if (options.polygon.type === PolygonMaskType.outside) {
      return !inside;
    }

    return false;
  }

  redraw() {
    const container = this.container;
    const options = container.options;

    if (options.polygon.enable && options.polygon.type !== PolygonMaskType.none) {
      if (this.redrawTimeout) {
        clearTimeout(this.redrawTimeout);
      }

      this.redrawTimeout = setTimeout(() => {
        this.parseSvgPathToPolygon().then(data => {
          this.raw = data;
          this.createPath2D();
          container.particles.redraw();
        });
      }, 250);
    }
  }

  init() {
    return PolygonMask_awaiter(this, void 0, void 0, function* () {
      const container = this.container;
      const options = container.options;

      if (options.polygon.enable && options.polygon.url) {
        this.raw = yield this.parseSvgPathToPolygon(options.polygon.url);
        this.createPath2D();
      }
    });
  }

  reset() {
    delete this.raw;
    delete this.path;
    delete this.svg;
  }

  randomPointInPolygon() {
    const container = this.container;
    const options = container.options;
    let position;

    if (options.polygon.type === PolygonMaskType.inline) {
      switch (options.polygon.inline.arrangement) {
        case PolygonMaskInlineArrangement.randomPoint:
          position = this.getRandomPointOnPolygonPath();
          break;

        case PolygonMaskInlineArrangement.randomLength:
          position = this.getRandomPointOnPolygonPathByLength();
          break;

        case PolygonMaskInlineArrangement.equidistant:
          position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
          break;

        case PolygonMaskInlineArrangement.onePerPoint:
        case PolygonMaskInlineArrangement.perPoint:
        default:
          position = this.getPoingOnPolygonPathByIndex(container.particles.count);
      }
    } else {
      position = {
        x: Math.random() * container.canvas.dimension.width,
        y: Math.random() * container.canvas.dimension.height
      };
    }

    if (this.checkInsidePolygon(position)) {
      return position;
    } else {
      return this.randomPointInPolygon();
    }
  }

  parseSvgPathToPolygon(svgUrl) {
    return PolygonMask_awaiter(this, void 0, void 0, function* () {
      const container = this.container;
      const options = container.options;
      const url = svgUrl || options.polygon.url;

      if (!this.path || !this.svg) {
        const req = yield fetch(url);

        if (req.ok) {
          const xml = yield req.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(xml, "image/svg+xml");
          this.svg = doc.getElementsByTagName("svg")[0];
          this.path = doc.getElementsByTagName("path")[0];

          if (this.path) {
            this.polygonPathLength = this.path.getTotalLength();
          }
        } else {
          console.error("tsParticles Error - during polygon mask download");
          return;
        }
      }

      const scale = options.polygon.scale;
      this.dimension.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
      this.dimension.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
      this.offset = {
        x: container.canvas.dimension.width / 2 - this.dimension.width / 2,
        y: container.canvas.dimension.height / 2 - this.dimension.height / 2
      };
      const len = this.path.pathSegList.numberOfItems;
      const polygonRaw = [];
      const p = {
        x: 0,
        y: 0
      };

      for (let i = 0; i < len; i++) {
        const segment = this.path.pathSegList.getItem(i);

        switch (segment.pathSegType) {
          case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
          case window.SVGPathSeg.PATHSEG_LINETO_ABS:
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
          case window.SVGPathSeg.PATHSEG_ARC_ABS:
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
            const absSeg = segment;
            p.x = absSeg.x;
            p.y = absSeg.y;
            break;

          case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
            p.x = segment.x;
            break;

          case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
            p.y = segment.y;
            break;

          case window.SVGPathSeg.PATHSEG_LINETO_REL:
          case window.SVGPathSeg.PATHSEG_MOVETO_REL:
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
          case window.SVGPathSeg.PATHSEG_ARC_REL:
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
            const relSeg = segment;
            p.x += relSeg.x;
            p.y += relSeg.y;
            break;

          case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
            p.x += segment.x;
            break;

          case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
            p.y += segment.y;
            break;

          case window.SVGPathSeg.PATHSEG_UNKNOWN:
          case window.SVGPathSeg.PATHSEG_CLOSEPATH:
            continue;
        }

        polygonRaw.push({
          x: p.x * scale + this.offset.x,
          y: p.y * scale + this.offset.y
        });
      }

      return polygonRaw;
    });
  }

  drawPolygon() {
    const container = this.container;
    container.canvas.drawPolygonMask();
  }

  drawPointsOnPolygonPath() {
    const container = this.container;

    if (this.raw) {
      for (const item of this.raw) {
        const position = {
          x: item.x,
          y: item.y
        };
        container.particles.addParticle(new Particle_Particle(container, position));
      }
    }
  }

  getRandomPointOnPolygonPath() {
    if (!this.raw || !this.raw.length) throw new Error(`No polygon data loaded.`);
    const coords = Utils_Utils.itemFromArray(this.raw);
    return {
      x: coords.x,
      y: coords.y
    };
  }

  getRandomPointOnPolygonPathByLength() {
    var _a, _b;

    const container = this.container;
    const options = container.options;
    if (!this.raw || !this.raw.length || !this.path) throw new Error(`No polygon data loaded.`);
    const distance = Math.floor(Math.random() * this.polygonPathLength) + 1;
    const point = this.path.getPointAtLength(distance);
    return {
      x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
      y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0)
    };
  }

  getEquidistantPointOnPolygonPathByIndex(index) {
    var _a, _b;

    const container = this.container;
    const options = container.options;
    if (!this.raw || !this.raw.length || !this.path) throw new Error(`No polygon data loaded.`);
    const distance = this.polygonPathLength / options.particles.number.value * index;
    const point = this.path.getPointAtLength(distance);
    return {
      x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
      y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0)
    };
  }

  getPoingOnPolygonPathByIndex(index) {
    if (!this.raw || !this.raw.length) throw new Error(`No polygon data loaded.`);
    const coords = this.raw[index % this.raw.length];
    return {
      x: coords.x,
      y: coords.y
    };
  }

  createPath2D() {
    var _a;

    if (!this.path2DSupported) {
      return;
    }

    const pathData = (_a = this.path) === null || _a === void 0 ? void 0 : _a.getAttribute("d");

    if (pathData) {
      const path = new Path2D(pathData);
      const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
      const finalPath = new Path2D();
      const transform = matrix.scale(this.container.options.polygon.scale);

      if (finalPath.addPath) {
        finalPath.addPath(path, transform);
        this.polygonPath = finalPath;
      } else {
        delete this.polygonPath;
      }
    } else {
      delete this.polygonPath;
    }

    if (!this.polygonPath && this.raw) {
      this.polygonPath = new Path2D();
      this.polygonPath.moveTo(this.raw[0].x, this.raw[0].y);
      this.raw.forEach((pos, i) => {
        var _a;

        if (i > 0) {
          (_a = this.polygonPath) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
        }
      });
      this.polygonPath.closePath();
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/FrameManager.js
class FrameManager {
  constructor(container) {
    this.container = container;
  }

  nextFrame(timestamp) {
    const container = this.container;
    const options = container.options;
    const fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;

    if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / fpsLimit) {
      container.play();
      return;
    }

    const delta = timestamp - container.lastFrameTime;
    container.lastFrameTime = timestamp;
    container.particles.draw(delta);

    if (!options.particles.move.enable) {
      container.pause();
    } else {
      container.play();
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Events/ClickEvent.js
class ClickEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Events/DivEvent.js
class DivEvent {
  constructor() {
    this.elementId = "repulse-div";
    this.enable = false;
    this.mode = [];
  }

  get el() {
    return this.elementId;
  }

  set el(value) {
    this.elementId = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const elementId = (_a = data.elementId) !== null && _a !== void 0 ? _a : data.el;

      if (elementId !== undefined) {
        this.elementId = elementId;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Events/Parallax.js
class Parallax {
  constructor() {
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.force !== undefined) {
        this.force = data.force;
      }

      if (data.smooth !== undefined) {
        this.smooth = data.smooth;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Events/HoverEvent.js

class HoverEvent_HoverEvent {
  constructor() {
    this.enable = false;
    this.mode = [];
    this.parallax = new Parallax();
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.mode !== undefined) {
        this.mode = data.mode;
      }

      this.parallax.load(data.parallax);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Events/Events.js



class Events_Events {
  constructor() {
    this.onClick = new ClickEvent();
    this.onDiv = new DivEvent();
    this.onHover = new HoverEvent_HoverEvent();
    this.resize = true;
  }

  get onclick() {
    return this.onClick;
  }

  set onclick(value) {
    this.onClick = value;
  }

  get ondiv() {
    return this.onDiv;
  }

  set ondiv(value) {
    this.onDiv = value;
  }

  get onhover() {
    return this.onHover;
  }

  set onhover(value) {
    this.onHover = value;
  }

  load(data) {
    var _a, _b, _c;

    if (data !== undefined) {
      this.onClick.load((_a = data.onClick) !== null && _a !== void 0 ? _a : data.onclick);
      this.onDiv.load((_b = data.onDiv) !== null && _b !== void 0 ? _b : data.ondiv);
      this.onHover.load((_c = data.onHover) !== null && _c !== void 0 ? _c : data.onhover);

      if (data.resize !== undefined) {
        this.resize = data.resize;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Bubble.js
class Bubble {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
    this.opacity = 1;
    this.size = 80;
  }

  load(data) {
    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/ConnectLineLinked.js
class ConnectLineLinked {
  constructor() {
    this.opacity = 0.5;
  }

  load(data) {
    if (data !== undefined) {
      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Connect.js

class Connect_Connect {
  constructor() {
    this.distance = 80;
    this.lineLinked = new ConnectLineLinked();
    this.radius = 60;
  }

  get line_linked() {
    return this.lineLinked;
  }

  set line_linked(value) {
    this.lineLinked = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      const lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;

      if (lineLinked !== undefined) {
        this.lineLinked.load(lineLinked);
      }

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/GrabLineLinked.js
class GrabLineLinked {
  constructor() {
    this.opacity = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Grab.js

class Grab_Grab {
  constructor() {
    this.distance = 100;
    this.lineLinked = new GrabLineLinked();
  }

  get line_linked() {
    return this.lineLinked;
  }

  set line_linked(value) {
    this.lineLinked = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      const lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;

      if (lineLinked !== undefined) {
        this.lineLinked.load(lineLinked);
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Remove.js
class Remove {
  constructor() {
    this.quantity = 2;
  }

  get particles_nb() {
    return this.quantity;
  }

  set particles_nb(value) {
    this.quantity = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

      if (quantity !== undefined) {
        this.quantity = quantity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Push.js
class Push {
  constructor() {
    this.quantity = 4;
  }

  get particles_nb() {
    return this.quantity;
  }

  set particles_nb(value) {
    this.quantity = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const quantity = (_a = data.quantity) !== null && _a !== void 0 ? _a : data.particles_nb;

      if (quantity !== undefined) {
        this.quantity = quantity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Repulse.js
class Repulse {
  constructor() {
    this.distance = 200;
    this.duration = 0.4;
  }

  load(data) {
    if (data !== undefined) {
      if (data.distance !== undefined) {
        this.distance = data.distance;
      }

      if (data.duration !== undefined) {
        this.duration = data.duration;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Slow.js
class Slow {
  constructor() {
    this.factor = 1;
    this.radius = 0;
  }

  get active() {
    return false;
  }

  set active(value) {}

  load(data) {
    if (data !== undefined) {
      if (data.factor !== undefined) {
        this.factor = data.factor;
      }

      if (data.radius !== undefined) {
        this.radius = data.radius;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Modes/Modes.js







class Modes_Modes {
  constructor() {
    this.bubble = new Bubble();
    this.connect = new Connect_Connect();
    this.grab = new Grab_Grab();
    this.push = new Push();
    this.remove = new Remove();
    this.repulse = new Repulse();
    this.slow = new Slow();
  }

  load(data) {
    if (data !== undefined) {
      this.bubble.load(data.bubble);
      this.connect.load(data.connect);
      this.grab.load(data.grab);
      this.push.load(data.push);
      this.remove.load(data.remove);
      this.repulse.load(data.repulse);
      this.slow.load(data.slow);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Interactivity/Interactivity.js




class Interactivity_Interactivity {
  constructor() {
    this.detectsOn = InteractivityDetect.canvas;
    this.events = new Events_Events();
    this.modes = new Modes_Modes();
  }

  get detect_on() {
    return this.detectsOn;
  }

  set detect_on(value) {
    this.detectsOn = value;
  }

  load(data) {
    var _a, _b, _c;

    if (data !== undefined) {
      const detectsOn = (_a = data.detectsOn) !== null && _a !== void 0 ? _a : data.detect_on;

      if (detectsOn !== undefined) {
        this.detectsOn = detectsOn;
      }

      this.events.load(data.events);
      this.modes.load(data.modes);

      if ((_c = (_b = data.modes) === null || _b === void 0 ? void 0 : _b.slow) === null || _c === void 0 ? void 0 : _c.active) {
        if (this.events.onHover.mode instanceof Array) {
          if (this.events.onHover.mode.indexOf(HoverMode.slow) < 0) {
            this.events.onHover.mode.push(HoverMode.slow);
          }
        } else if (this.events.onHover.mode !== HoverMode.slow) {
          this.events.onHover.mode = [this.events.onHover.mode, HoverMode.slow];
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Color.js
class Color {
  constructor() {
    this.value = "#fff";
  }

  load(data) {
    if (data !== undefined) {
      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/LineLinkedShadow.js

class LineLinkedShadow_LineLinkedShadow {
  constructor() {
    this.blur = 5;
    this.color = new Color();
    this.enable = false;
    this.color.value = "lime";
  }

  load(data) {
    if (data !== undefined) {
      if (data.blur !== undefined) {
        this.blur = data.blur;
      }

      if (data.color !== undefined) {
        if (typeof data.color === "string") {
          this.color.value = data.color;
        } else {
          this.color.load(data.color);
        }
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/LineLinked.js


class LineLinked_LineLinked {
  constructor() {
    this.blink = false;
    this.color = new Color();
    this.consent = false;
    this.distance = 100;
    this.enable = false;
    this.opacity = 1;
    this.shadow = new LineLinkedShadow_LineLinkedShadow();
    this.width = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.blink !== undefined) {
        this.blink = data.blink;
      }

      if (data.color !== undefined) {
        if (typeof data.color === "string") {
          this.color.value = data.color;
        } else {
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
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Attract.js
class Attract {
  constructor() {
    this.enable = false;
    this.rotate = {
      x: 3000,
      y: 3000
    };
  }

  get rotateX() {
    return this.rotate.x;
  }

  set rotateX(value) {
    this.rotate.x = value;
  }

  get rotateY() {
    return this.rotate.y;
  }

  set rotateY(value) {
    this.rotate.y = value;
  }

  load(data) {
    var _a, _b, _c, _d;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const rotateX = (_b = (_a = data.rotate) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : data.rotateX;

      if (rotateX !== undefined) {
        this.rotate.x = rotateX;
      }

      const rotateY = (_d = (_c = data.rotate) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : data.rotateY;

      if (rotateY !== undefined) {
        this.rotate.y = rotateY;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Trail.js

class Trail_Trail {
  constructor() {
    this.enable = false;
    this.length = 10;
    this.fillColor = new Color();
    this.fillColor.value = "#000000";
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.fillColor !== undefined) {
        if (typeof data.fillColor === "string") {
          this.fillColor.value = data.fillColor;
        } else {
          this.fillColor.load(data.fillColor);
        }
      }

      if (data.length !== undefined) {
        this.length = data.length;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Move.js




class Move_Move {
  constructor() {
    this.attract = new Attract();
    this.collisions = false;
    this.direction = MoveDirection.none;
    this.enable = false;
    this.outMode = OutMode.out;
    this.random = false;
    this.speed = 2;
    this.straight = false;
    this.trail = new Trail_Trail();
  }

  get bounce() {
    return this.collisions;
  }

  set bounce(value) {
    this.collisions = value;
  }

  get out_mode() {
    return this.outMode;
  }

  set out_mode(value) {
    this.outMode = value;
  }

  load(data) {
    var _a, _b;

    if (data !== undefined) {
      this.attract.load(data.attract);
      const collisions = (_a = data.collisions) !== null && _a !== void 0 ? _a : data.bounce;

      if (collisions !== undefined) {
        this.collisions = collisions;
      }

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const outMode = (_b = data.outMode) !== null && _b !== void 0 ? _b : data.out_mode;

      if (outMode !== undefined) {
        this.outMode = outMode;
      }

      if (data.random !== undefined) {
        this.random = data.random;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.straight !== undefined) {
        this.straight = data.straight;
      }

      this.trail.load(data.trail);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Density.js
class Density {
  constructor() {
    this.enable = false;
    this.area = 800;
  }

  get value_area() {
    return this.area;
  }

  set value_area(value) {
    this.area = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const area = (_a = data.area) !== null && _a !== void 0 ? _a : data.value_area;

      if (area !== undefined) {
        this.area = area;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/ParticlesNumber.js

class ParticlesNumber_ParticlesNumber {
  constructor() {
    this.density = new Density();
    this.limit = 0;
    this.value = 100;
  }

  get max() {
    return this.limit;
  }

  set max(value) {
    this.limit = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.density.load(data.density);
      const limit = (_a = data.limit) !== null && _a !== void 0 ? _a : data.max;

      if (limit !== undefined) {
        this.limit = limit;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/OpacityAnimation.js
class OpacityAnimation {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.sync = false;
  }

  get opacity_min() {
    return this.minimumValue;
  }

  set opacity_min(value) {
    this.minimumValue = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.opacity_min;

      if (minimumValue !== undefined) {
        this.minimumValue = minimumValue;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/RandomOpacity.js
class RandomOpacity {
  constructor() {
    this.enable = false;
    this.minimumValue = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Opacity.js


class Opacity_Opacity {
  constructor() {
    this.animation = new OpacityAnimation();
    this.random = new RandomOpacity();
    this.value = 1;
  }

  get anim() {
    return this.animation;
  }

  set anim(value) {
    this.animation = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;

      if (animation !== undefined) {
        this.animation.load(animation);
      }

      if (data.random !== undefined) {
        if (typeof data.random === "boolean") {
          this.random.enable = data.random;
        } else {
          this.random.load(data.random);
        }
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Shape/CharacterShape.js
class CharacterShape {
  constructor() {
    this.fill = false;
    this.font = "Verdana";
    this.style = "";
    this.value = "*";
    this.weight = "400";
    this.fill = true;
    this.close = true;
  }

  load(data) {
    if (data !== undefined) {
      if (data.fill !== undefined) {
        this.fill = data.fill;
      }

      if (data.font !== undefined) {
        this.font = data.font;
      }

      if (data.style !== undefined) {
        this.style = data.style;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }

      if (data.weight !== undefined) {
        this.weight = data.weight;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Shape/ImageShape.js
class ImageShape {
  constructor() {
    this.height = 100;
    this.replaceColor = true;
    this.src = "";
    this.width = 100;
    this.fill = true;
    this.close = true;
  }

  get replace_color() {
    return this.replaceColor;
  }

  set replace_color(value) {
    this.replaceColor = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.height !== undefined) {
        this.height = data.height;
      }

      const replaceColor = (_a = data.replaceColor) !== null && _a !== void 0 ? _a : data.replace_color;

      if (replaceColor !== undefined) {
        this.replaceColor = replaceColor;
      }

      if (data.src !== undefined) {
        this.src = data.src;
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Shape/PolygonShape.js
class PolygonShape {
  constructor() {
    this.close = true;
    this.fill = true;
    this.sides = 5;
  }

  get nb_sides() {
    return this.sides;
  }

  set nb_sides(value) {
    this.sides = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const sides = (_a = data.sides) !== null && _a !== void 0 ? _a : data.nb_sides;

      if (sides !== undefined) {
        this.sides = sides;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Shape/Shape.js




class Shape_Shape {
  constructor() {
    this.character = new CharacterShape();
    this.image = new ImageShape();
    this.polygon = new PolygonShape();
    this.type = ShapeType.circle;
    this.custom = {};
  }

  get images() {
    if (this.image instanceof Array) {
      return this.image;
    }

    return [];
  }

  set images(value) {
    this.image = value;
  }

  get stroke() {
    return [];
  }

  set stroke(value) {}

  load(data) {
    if (data !== undefined) {
      if (data.custom !== undefined) for (const customShape in data.custom) {
        const item = data.custom[customShape];

        if (item !== undefined) {
          if (item instanceof Array) {
            this.custom[customShape] = item.filter(t => t !== undefined).map(s => {
              return s;
            });
          } else {
            this.custom[customShape] = item;
          }
        }
      }

      if (data.character !== undefined) {
        if (data.character instanceof Array) {
          this.character = data.character.map(s => {
            const tmp = new CharacterShape();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.character instanceof Array) {
            this.character = new CharacterShape();
          }

          this.character.load(data.character);
        }
      }

      if (data.image !== undefined) {
        if (data.image instanceof Array) {
          this.image = data.image.map(s => {
            const tmp = new ImageShape();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.image instanceof Array) {
            this.image = new ImageShape();
          }

          this.image.load(data.image);
        }
      }

      if (data.polygon !== undefined) {
        if (data.polygon instanceof Array) {
          this.polygon = data.polygon.map(s => {
            const tmp = new PolygonShape();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.polygon instanceof Array) {
            this.polygon = new PolygonShape();
          }

          this.polygon.load(data.polygon);
        }
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/SizeAnimation.js
class SizeAnimation {
  constructor() {
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 5;
    this.sync = false;
  }

  get size_min() {
    return this.minimumValue;
  }

  set size_min(value) {
    this.minimumValue = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const minimumValue = (_a = data.minimumValue) !== null && _a !== void 0 ? _a : data.size_min;

      if (minimumValue !== undefined) {
        this.minimumValue = minimumValue;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/RandomSize.js
class RandomSize {
  constructor() {
    this.enable = false;
    this.minimumValue = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.minimumValue !== undefined) {
        this.minimumValue = data.minimumValue;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Size.js


class Size_Size {
  constructor() {
    this.animation = new SizeAnimation();
    this.random = new RandomSize();
    this.value = 3;
  }

  get anim() {
    return this.animation;
  }

  set anim(value) {
    this.animation = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;

      if (animation !== undefined) {
        this.animation.load(animation);
      }

      if (data.random !== undefined) {
        if (typeof data.random === "boolean") {
          this.random.enable = data.random;
        } else {
          this.random.load(data.random);
        }
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/RotateAnimation.js
class RotateAnimation {
  constructor() {
    this.enable = false;
    this.speed = 0;
    this.sync = false;
  }

  load(data) {
    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.speed !== undefined) {
        this.speed = data.speed;
      }

      if (data.sync !== undefined) {
        this.sync = data.sync;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Rotate.js


class Rotate_Rotate {
  constructor() {
    this.animation = new RotateAnimation();
    this.direction = RotateDirection.clockwise;
    this.random = false;
    this.value = 0;
  }

  load(data) {
    if (data !== undefined) {
      this.animation.load(data.animation);

      if (data.random !== undefined) {
        this.random = data.random;
      }

      if (data.direction !== undefined) {
        this.direction = data.direction;
      }

      if (data.value !== undefined) {
        this.value = data.value;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Shadow.js

class Shadow_Shadow {
  constructor() {
    this.blur = 0;
    this.color = new Color();
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
    this.color.value = "#000000";
  }

  load(data) {
    if (data !== undefined) {
      if (data.blur !== undefined) {
        this.blur = data.blur;
      }

      if (data.color !== undefined) {
        if (typeof data.color === "string") {
          this.color.value = data.color;
        } else {
          this.color.load(data.color);
        }
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      if (data.offset !== undefined) {
        if (data.offset.x !== undefined) {
          this.offset.x = data.offset.x;
        }

        if (data.offset.y !== undefined) {
          this.offset.y = data.offset.y;
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Stroke.js

class Stroke_Stroke {
  constructor() {
    this.color = new Color();
    this.width = 0;
    this.opacity = 1;
    this.color.value = "#ff0000";
  }

  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        if (typeof data.color === "string") {
          this.color.value = data.color;
        } else {
          this.color.load(data.color);
        }
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Particles/Particles.js










class Particles_Particles_Particles {
  constructor() {
    this.color = new Color();
    this.lineLinked = new LineLinked_LineLinked();
    this.move = new Move_Move();
    this.number = new ParticlesNumber_ParticlesNumber();
    this.opacity = new Opacity_Opacity();
    this.rotate = new Rotate_Rotate();
    this.shape = new Shape_Shape();
    this.size = new Size_Size();
    this.shadow = new Shadow_Shadow();
    this.stroke = new Stroke_Stroke();
  }

  get line_linked() {
    return this.lineLinked;
  }

  set line_linked(value) {
    this.lineLinked = value;
  }

  load(data) {
    var _a, _b, _c;

    if (data !== undefined) {
      if (data.color !== undefined) {
        if (data.color instanceof Array) {
          this.color = data.color.map(s => {
            const tmp = new Color();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.color instanceof Array) {
            this.color = new Color();
          }

          this.color.load(data.color);
        }
      }

      const lineLinked = (_a = data.lineLinked) !== null && _a !== void 0 ? _a : data.line_linked;

      if (lineLinked !== undefined) {
        this.lineLinked.load(lineLinked);
      }

      this.move.load(data.move);
      this.number.load(data.number);
      this.opacity.load(data.opacity);
      this.rotate.load(data.rotate);
      this.shape.load(data.shape);
      this.size.load(data.size);
      this.shadow.load(data.shadow);
      const strokeToLoad = (_b = data.stroke) !== null && _b !== void 0 ? _b : (_c = data.shape) === null || _c === void 0 ? void 0 : _c.stroke;

      if (strokeToLoad !== undefined) {
        if (strokeToLoad instanceof Array) {
          this.stroke = strokeToLoad.map(s => {
            const tmp = new Stroke_Stroke();
            tmp.load(s);
            return tmp;
          });
        } else {
          if (this.stroke instanceof Array) {
            this.stroke = new Stroke_Stroke();
          }

          this.stroke.load(strokeToLoad);
        }
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/PolygonMask/PolygonMaskDrawStroke.js


class PolygonMaskDrawStroke_PolygonMaskDrawStroke {
  constructor() {
    this.color = new Color();
    this.width = 0.5;
    this.opacity = 1;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.color !== undefined) {
        if (typeof data.color === "string") {
          this.color.value = data.color;
        } else {
          this.color.load(data.color);
        }

        if (typeof this.color.value === "string") {
          this.opacity = (_a = ColorUtils_ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
        }
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }

      if (data.width !== undefined) {
        this.width = data.width;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/PolygonMask/Draw.js

class Draw_Draw {
  constructor() {
    this.enable = false;
    this.stroke = new PolygonMaskDrawStroke_PolygonMaskDrawStroke();
  }

  get lineWidth() {
    return this.stroke.width;
  }

  set lineWidth(value) {
    this.stroke.width = value;
  }

  get lineColor() {
    return this.stroke.color;
  }

  set lineColor(value) {
    const destColor = this.stroke.color;

    if (typeof value === "string") {
      destColor.value = value;
    } else {
      destColor.load(value);
    }
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      if (data.enable !== undefined) {
        this.enable = data.enable;
      }

      const stroke = (_a = data.stroke) !== null && _a !== void 0 ? _a : {
        color: data.lineColor,
        width: data.lineWidth
      };
      this.stroke.load(stroke);
    }
  }

}
// CONCATENATED MODULE: ./dist/Enums/PolygonMaskMoveType.js
var PolygonMaskMoveType;

(function (PolygonMaskMoveType) {
  PolygonMaskMoveType["path"] = "path";
  PolygonMaskMoveType["radius"] = "radius";
})(PolygonMaskMoveType || (PolygonMaskMoveType = {}));
// CONCATENATED MODULE: ./dist/Classes/Options/PolygonMask/Move.js

class PolygonMask_Move_Move {
  constructor() {
    this.radius = 10;
    this.type = PolygonMaskMoveType.path;
  }

  load(data) {
    if (data !== undefined) {
      if (data.radius !== undefined) {
        this.radius = data.radius;
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/PolygonMask/PolygonInline.js

class PolygonInline_PolygonInline {
  constructor() {
    this.arrangement = PolygonMaskInlineArrangement.onePerPoint;
  }

  load(data) {
    if (data !== undefined) {
      if (data.arrangement !== undefined) {
        this.arrangement = data.arrangement;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/PolygonMask/PolygonMask.js




class PolygonMask_PolygonMask_PolygonMask {
  constructor() {
    this.draw = new Draw_Draw();
    this.enable = false;
    this.inline = new PolygonInline_PolygonInline();
    this.move = new PolygonMask_Move_Move();
    this.scale = 1;
    this.type = PolygonMaskType.none;
    this.url = "";
  }

  get inlineArrangement() {
    return this.inline.arrangement;
  }

  set inlineArrangement(value) {
    this.inline.arrangement = value;
  }

  load(data) {
    var _a;

    if (data !== undefined) {
      this.draw.load(data.draw);
      const inline = (_a = data.inline) !== null && _a !== void 0 ? _a : {
        arrangement: data.inlineArrangement
      };

      if (inline !== undefined) {
        this.inline.load(inline);
      }

      this.move.load(data.move);

      if (data.scale !== undefined) {
        this.scale = data.scale;
      }

      if (data.type !== undefined) {
        this.type = data.type;
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      } else {
        this.enable = this.type !== PolygonMaskType.none;
      }

      if (data.url !== undefined) {
        this.url = data.url;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/BackgroundMask/BackgroundMaskCover.js

class BackgroundMaskCover_BackgroundMaskCover {
  constructor() {
    this.color = new Color();
    this.opacity = 1;
  }

  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        this.color.load(data.color);
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/BackgroundMask/BackgroundMask.js

class BackgroundMask_BackgroundMask {
  constructor() {
    this.cover = new BackgroundMaskCover_BackgroundMaskCover();
    this.enable = false;
  }

  load(data) {
    if (data !== undefined) {
      if (data.cover !== undefined) {
        this.cover.load(data.cover);
      }

      if (data.enable !== undefined) {
        this.enable = data.enable;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Utils/Presets.js
class Presets {
  static getPreset(preset) {
    return this.presets[preset];
  }

  static addPreset(presetKey, options) {
    if (!this.presets[presetKey]) {
      this.presets[presetKey] = options;
    }
  }

}
Presets.presets = {};
// CONCATENATED MODULE: ./dist/Classes/Options/Background/Background.js

class Background_Background {
  load(data) {
    if (data !== undefined) {
      if (data.color !== undefined) {
        if (this.color === undefined) {
          this.color = new Color();
        }

        if (typeof data.color === "string") {
          this.color.value = data.color;
        } else {
          this.color.load(data.color);
        }
      }

      if (data.image !== undefined) {
        this.image = data.image;
      }

      if (data.position !== undefined) {
        this.position = data.position;
      }

      if (data.repeat !== undefined) {
        this.repeat = data.repeat;
      }

      if (data.size !== undefined) {
        this.size = data.size;
      }

      if (data.opacity !== undefined) {
        this.opacity = data.opacity;
      }
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Options/Options.js






class Options_Options {
  constructor() {
    this.detectRetina = false;
    this.fpsLimit = 30;
    this.interactivity = new Interactivity_Interactivity();
    this.particles = new Particles_Particles_Particles();
    this.polygon = new PolygonMask_PolygonMask_PolygonMask();
    this.backgroundMask = new BackgroundMask_BackgroundMask();
    this.pauseOnBlur = true;
    this.background = new Background_Background();
  }

  get fps_limit() {
    return this.fpsLimit;
  }

  set fps_limit(value) {
    this.fpsLimit = value;
  }

  get retina_detect() {
    return this.detectRetina;
  }

  set retina_detect(value) {
    this.detectRetina = value;
  }

  load(data) {
    var _a, _b;

    if (data !== undefined) {
      if (data.preset !== undefined) {
        if (data.preset instanceof Array) {
          for (const preset of data.preset) {
            this.importPreset(preset);
          }
        } else {
          this.importPreset(data.preset);
        }
      }

      if (data.background !== undefined) {
        this.background.load(data.background);
      }

      const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;

      if (detectRetina !== undefined) {
        this.detectRetina = detectRetina;
      }

      const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;

      if (fpsLimit !== undefined) {
        this.fpsLimit = fpsLimit;
      }

      if (data.pauseOnBlur !== undefined) {
        this.pauseOnBlur = data.pauseOnBlur;
      }

      this.interactivity.load(data.interactivity);
      this.particles.load(data.particles);
      this.polygon.load(data.polygon);
      this.backgroundMask.load(data.backgroundMask);
    }
  }

  importPreset(preset) {
    const presetOptions = Presets.getPreset(preset);

    if (presetOptions !== undefined) {
      this.load(presetOptions);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/Container.js
var Container_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};











class Container_Container {
  constructor(id, params, ...presets) {
    this.started = false;
    this.destroyed = false;
    this.id = id;
    this.paused = true;
    this.sourceOptions = params;
    this.lastFrameTime = 0;
    this.pageHidden = false;
    this.retina = new Retina(this);
    this.canvas = new Canvas_Canvas(this);
    this.particles = new Particles_Particles(this);
    this.polygon = new PolygonMask_PolygonMask(this);
    this.drawer = new FrameManager(this);
    this.interactivity = {
      mouse: {}
    };
    this.images = [];
    this.bubble = {};
    this.repulse = {};
    this.options = new Options_Options();

    for (const preset of presets) {
      this.options.load(Presets.getPreset(preset));
    }

    if (this.sourceOptions) {
      this.options.load(this.sourceOptions);
    }

    this.eventListeners = new EventListeners_EventListeners(this);
  }

  static requestFrame(callback) {
    return window.customRequestAnimationFrame(callback);
  }

  static cancelAnimation(handle) {
    window.cancelAnimationFrame(handle);
  }

  play() {
    if (this.paused) {
      this.lastFrameTime = performance.now();
      this.paused = false;
    }

    this.drawAnimationFrame = Container_Container.requestFrame(t => this.drawer.nextFrame(t));
  }

  pause() {
    if (this.drawAnimationFrame !== undefined) {
      Container_Container.cancelAnimation(this.drawAnimationFrame);
      delete this.drawAnimationFrame;
      this.paused = true;
    }
  }

  densityAutoParticles() {
    if (!(this.canvas.element && this.options.particles.number.density.enable)) {
      return;
    }

    let area = this.canvas.element.width * this.canvas.element.height / 1000;

    if (this.retina.isRetina) {
      area /= this.retina.pxRatio * 2;
    }

    const optParticlesNumber = this.options.particles.number.value;
    const density = this.options.particles.number.density.area;
    const particlesNumber = area * optParticlesNumber / density;
    const particlesCount = this.particles.count;

    if (particlesCount < particlesNumber) {
      this.particles.push(Math.abs(particlesNumber - particlesCount));
    } else if (particlesCount > particlesNumber) {
      this.particles.removeQuantity(particlesCount - particlesNumber);
    }
  }

  destroy() {
    this.stop();
    this.retina.reset();
    this.canvas.destroy();
    delete this.interactivity;
    delete this.options;
    delete this.retina;
    delete this.canvas;
    delete this.particles;
    delete this.polygon;
    delete this.bubble;
    delete this.repulse;
    delete this.images;
    delete this.drawer;
    delete this.eventListeners;
    this.destroyed = true;
  }

  exportImg(callback) {
    this.exportImage(callback);
  }

  exportImage(callback, type, quality) {
    var _a;

    return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
  }

  exportConfiguration() {
    return JSON.stringify(this.options, undefined, 2);
  }

  loadImage(optionsImage) {
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
      } else {
        reject("Error tsParticles - No image.src");
      }
    });
  }

  refresh() {
    return Container_awaiter(this, void 0, void 0, function* () {
      this.stop();
      yield this.start();
    });
  }

  stop() {
    if (!this.started) {
      return;
    }

    this.started = false;
    this.eventListeners.removeListeners();
    this.pause();
    this.images = [];
    this.particles.clear();
    this.retina.reset();
    this.canvas.clear();
    this.polygon.reset();
    delete this.particles.lineLinkedColor;
  }

  start() {
    return Container_awaiter(this, void 0, void 0, function* () {
      if (this.started) {
        return;
      }

      this.started = true;
      this.eventListeners.addListeners();
      yield this.polygon.init();

      if (Utils_Utils.isInArray(ShapeType.char, this.options.particles.shape.type) || Utils_Utils.isInArray(ShapeType.character, this.options.particles.shape.type)) {
        if (this.options.particles.shape.character instanceof Array) {
          for (const character of this.options.particles.shape.character) {
            yield Utils_Utils.loadFont(character);
          }
        } else {
          const character = this.options.particles.shape.character;
          yield Utils_Utils.loadFont(character);
        }
      }

      if (Utils_Utils.isInArray(ShapeType.image, this.options.particles.shape.type)) {
        if (this.options.particles.shape.image instanceof Array) {
          for (const optionsImage of this.options.particles.shape.image) {
            yield this.loadImageShape(optionsImage);
          }
        } else {
          yield this.loadImageShape(this.options.particles.shape.image);
        }
      }

      this.init();
      this.play();
    });
  }

  loadImageShape(imageShape) {
    return Container_awaiter(this, void 0, void 0, function* () {
      this.images.push((yield this.loadImage(imageShape)));
    });
  }

  init() {
    this.retina.init();
    this.canvas.init();
    this.particles.init();
    this.densityAutoParticles();
  }

}
// CONCATENATED MODULE: ./dist/Classes/Loader.js
var Loader_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};




let tsParticlesDom = [];
class Loader_Loader {
  static dom() {
    if (!tsParticlesDom) {
      tsParticlesDom = [];
    }

    return tsParticlesDom;
  }

  static domItem(index) {
    const dom = Loader_Loader.dom();
    const item = dom[index];

    if (item && !item.destroyed) {
      return item;
    }

    dom.splice(index, 1);
  }

  static loadFromArray(tagId, params, index) {
    return Loader_awaiter(this, void 0, void 0, function* () {
      return Loader_Loader.load(tagId, Utils_Utils.itemFromArray(params, index));
    });
  }

  static setFromArray(id, domContainer, params, index) {
    return Loader_awaiter(this, void 0, void 0, function* () {
      return Loader_Loader.set(id, domContainer, Utils_Utils.itemFromArray(params, index));
    });
  }

  static load(tagId, params) {
    return Loader_awaiter(this, void 0, void 0, function* () {
      const domContainer = document.getElementById(tagId);

      if (!domContainer) {
        return;
      }

      return this.set(tagId, domContainer, params);
    });
  }

  static set(id, domContainer, params) {
    return Loader_awaiter(this, void 0, void 0, function* () {
      const dom = Loader_Loader.dom();
      const oldIndex = dom.findIndex(v => v.id === id);

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
      } else {
        const existingCanvases = domContainer.getElementsByTagName("canvas");

        if (existingCanvases.length) {
          canvasEl = existingCanvases[0];

          if (!canvasEl.className) {
            canvasEl.className = Constants.canvasClass;
          }

          generatedCanvas = false;
        } else {
          generatedCanvas = true;
          canvasEl = document.createElement("canvas");
          canvasEl.className = Constants.canvasClass;
          canvasEl.style.width = "100%";
          canvasEl.style.height = "100%";
          domContainer.appendChild(canvasEl);
        }
      }

      const newItem = new Container_Container(id, params);

      if (oldIndex >= 0) {
        dom.splice(oldIndex, 0, newItem);
      } else {
        dom.push(newItem);
      }

      newItem.canvas.loadCanvas(canvasEl, generatedCanvas);
      yield newItem.start();
      return newItem;
    });
  }

  static loadJSON(tagId, jsonUrl) {
    return Loader_awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(jsonUrl);

      if (response.ok) {
        const params = yield response.json();

        if (params instanceof Array) {
          return Loader_Loader.loadFromArray(tagId, params);
        } else {
          return Loader_Loader.load(tagId, params);
        }
      } else {
        console.error(`Error tsParticles - fetch status: ${response.status}`);
        console.error("Error tsParticles - File config not found");
      }
    });
  }

  static setJSON(id, domContainer, jsonUrl) {
    return Loader_awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(jsonUrl);

      if (response.ok) {
        const params = yield response.json();

        if (params instanceof Array) {
          return Loader_Loader.setFromArray(id, domContainer, params);
        } else {
          return Loader_Loader.set(id, domContainer, params);
        }
      } else {
        console.error(`Error tsParticles - fetch status: ${response.status}`);
        console.error("Error tsParticles - File config not found");
      }
    });
  }

  static setOnClickHandler(callback) {
    const dom = Loader_Loader.dom();

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
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/LineDrawer.js
class LineDrawer {
  draw(context, particle, radius, opacity) {
    context.moveTo(0, -radius / 2);
    context.lineTo(0, radius / 2);
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/CircleDrawer.js
class CircleDrawer {
  draw(context, particle, radius, opacity) {
    context.arc(0, 0, radius, 0, Math.PI * 2, false);
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/SquareDrawer.js
class SquareDrawer {
  draw(context, particle, radius, opacity) {
    context.rect(-radius, -radius, radius * 2, radius * 2);
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/PolygonDrawerBase.js
class PolygonDrawerBase {
  draw(context, particle, radius, opacity) {
    const start = this.getCenter(particle, radius);
    const side = this.getSidesData(particle, radius);
    const sideCount = side.count.numerator * side.count.denominator;
    const decimalSides = side.count.numerator / side.count.denominator;
    const interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;

    if (!context) {
      return;
    }

    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(0, 0);

    for (let i = 0; i < sideCount; i++) {
      context.lineTo(side.length, 0);
      context.translate(side.length, 0);
      context.rotate(interiorAngle);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/TriangleDrawer.js

class TriangleDrawer_TriangleDrawer extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    const side = {
      count: {
        denominator: 2,
        numerator: 3
      },
      length: radius * 2
    };
    return side;
  }

  getCenter(particle, radius) {
    const start = {
      x: -radius,
      y: radius / 1.66
    };
    return start;
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/StarDrawer.js

class StarDrawer_StarDrawer extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    var _a, _b;

    const sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
    const side = {
      count: {
        denominator: 2,
        numerator: sides
      },
      length: radius * 2 * 2.66 / (sides / 3)
    };
    return side;
  }

  getCenter(particle, radius) {
    var _a, _b;

    const sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
    const start = {
      x: -radius * 2 / (sides / 4),
      y: -radius / (2 * 2.66 / 3.5)
    };
    return start;
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/PolygonDrawer.js

class PolygonDrawer_PolygonDrawer extends PolygonDrawerBase {
  getSidesData(particle, radius) {
    var _a, _b;

    const sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
    const side = {
      count: {
        denominator: 1,
        numerator: sides
      },
      length: radius * 2.66 / (sides / 3)
    };
    return side;
  }

  getCenter(particle, radius) {
    var _a, _b;

    const sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
    const start = {
      x: -radius / (sides / 3.5),
      y: -radius / (2.66 / 3.5)
    };
    return start;
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/TextDrawer.js
class TextDrawer {
  draw(context, particle, radius, opacity) {
    const text = particle.text;
    const character = particle.character;

    if (text === undefined || character === undefined) {
      return;
    }

    const style = character.style;
    const weight = character.weight;
    const size = Math.round(radius) * 2;
    const font = character.font;
    const fill = character.fill;
    context.font = `${style} ${weight} ${size}px "${font}"`;
    const pos = {
      x: -radius / 2,
      y: radius / 2
    };

    if (fill) {
      context.fillText(text, pos.x, pos.y);
    } else {
      context.strokeText(text, pos.x, pos.y);
    }
  }

}
// CONCATENATED MODULE: ./dist/Classes/ShapeDrawers/ImageDrawer.js
class ImageDrawer {
  draw(context, particle, radius, opacity) {
    var _a;

    if (!context) {
      return;
    }

    const imgObj = (_a = particle.image) === null || _a === void 0 ? void 0 : _a.data.obj;

    if (!imgObj) {
      return;
    }

    let ratio = 1;

    if (particle.image) {
      ratio = particle.image.ratio;
    }

    const pos = {
      x: -radius,
      y: -radius
    };
    context.globalAlpha = opacity;
    context.drawImage(imgObj, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    context.globalAlpha = 1;
  }

}
// CONCATENATED MODULE: ./dist/index.js
var dist_awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};














class dist_Main {
  constructor() {
    this.initialized = false;

    if (typeof window !== "undefined" && window) {
      window.customRequestAnimationFrame = (() => {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60));
      })();

      window.customCancelRequestAnimationFrame = (() => {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
      })();
    }

    const squareDrawer = new SquareDrawer();
    const textDrawer = new TextDrawer();
    ShapeUtils.addShapeDrawer(ShapeType.line, new LineDrawer());
    ShapeUtils.addShapeDrawer(ShapeType.circle, new CircleDrawer());
    ShapeUtils.addShapeDrawer(ShapeType.edge, squareDrawer);
    ShapeUtils.addShapeDrawer(ShapeType.square, squareDrawer);
    ShapeUtils.addShapeDrawer(ShapeType.triangle, new TriangleDrawer_TriangleDrawer());
    ShapeUtils.addShapeDrawer(ShapeType.star, new StarDrawer_StarDrawer());
    ShapeUtils.addShapeDrawer(ShapeType.polygon, new PolygonDrawer_PolygonDrawer());
    ShapeUtils.addShapeDrawer(ShapeType.char, textDrawer);
    ShapeUtils.addShapeDrawer(ShapeType.character, textDrawer);
    ShapeUtils.addShapeDrawer(ShapeType.image, new ImageDrawer());
  }

  init() {
    if (!this.initialized) {
      this.initialized = true;

      if (typeof window !== "undefined" && window) {
        const tsParticles = this;

        window.particlesJS = (tagId, params) => {
          tsParticles.load(tagId, params);
        };

        window.particlesJS.load = (tagId, pathConfigJson, callback) => {
          tsParticles.loadJSON(tagId, pathConfigJson).then(container => {
            if (container) {
              callback(container);
            }
          });
        };

        window.particlesJS.setOnClickHandler = callback => {
          tsParticles.setOnClickHandler(callback);
        };

        window.pJSDom = () => {
          return window.tsParticles.dom();
        };
      }
    }
  }

  loadFromArray(tagId, params, index) {
    return dist_awaiter(this, void 0, void 0, function* () {
      return Loader_Loader.loadFromArray(tagId, params, index);
    });
  }

  load(tagId, params) {
    return dist_awaiter(this, void 0, void 0, function* () {
      return Loader_Loader.load(tagId, params);
    });
  }

  loadJSON(tagId, pathConfigJson) {
    return Loader_Loader.loadJSON(tagId, pathConfigJson);
  }

  setOnClickHandler(callback) {
    Loader_Loader.setOnClickHandler(callback);
  }

  dom() {
    return Loader_Loader.dom();
  }

  domItem(index) {
    return Loader_Loader.domItem(index);
  }

  addShape(shape, drawer) {
    let customDrawer;

    if (typeof drawer === "function") {
      customDrawer = {
        draw: drawer
      };
    } else {
      customDrawer = drawer;
    }

    ShapeUtils.addShapeDrawer(shape, customDrawer);
  }

  addPreset(preset, options) {
    Presets.addPreset(preset, options);
  }

}

const tsParticles = new dist_Main();
tsParticles.init();


/***/ })
/******/ ])));