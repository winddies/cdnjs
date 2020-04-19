"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildURLPublic = buildURLPublic;
exports.default = void 0;

var _extractQueryParams3 = _interopRequireDefault(require("./extractQueryParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright © 2015 by Coursera
Licensed under the Apache License 2.0, seen https://github.com/coursera/react-imgix/blob/master/LICENSE

Minor syntax modifications have been made
*/
var Base64 = require("js-base64").Base64;

var PACKAGE_VERSION = "8.6.3";
// @see https://www.imgix.com/docs/reference
var PARAM_EXPANSION = Object.freeze({
  // Adjustment
  brightness: "bri",
  contrast: "con",
  exposure: "exp",
  gamma: "gam",
  highlights: "high",
  hue: "hue",
  invert: "invert",
  saturation: "sat",
  shaddows: "shad",
  sharpness: "sharp",
  "unsharp-mask": "usm",
  "unsharp-radius": "usmrad",
  vibrance: "vib",
  // Automatic
  "auto-features": "auto",
  // Background
  "background-color": "bg",
  // Blend
  blend: "blend",
  "blend-mode": "bm",
  "blend-align": "ba",
  "blend-alpha": "balph",
  "blend-padding": "bp",
  "blend-width": "bw",
  "blend-height": "bh",
  "blend-fit": "bf",
  "blend-crop": "bc",
  "blend-size": "bs",
  "blend-x": "bx",
  "blend-y": "by",
  // Border & Padding
  border: "border",
  padding: "pad",
  // Face Detection
  "face-index": "faceindex",
  "face-padding": "facepad",
  faces: "faces",
  // Format
  "chroma-subsampling": "chromasub",
  "color-quantization": "colorquant",
  download: "dl",
  DPI: "dpi",
  format: "fm",
  "lossless-compression": "lossless",
  quality: "q",
  // Mask
  "mask-image": "mask",
  // Mask
  "noise-blur": "nr",
  "noise-sharpen": "nrs",
  // Palette n/a
  // PDF n/a
  // Pixel Density n/a
  // Rotation
  "flip-direction": "flip",
  orientation: "or",
  "rotation-angle": "rot",
  // Size
  "crop-mode": "crop",
  "fit-mode": "fit",
  "image-height": "h",
  "image-width": "w",
  // Stylize
  blurring: "blur",
  halftone: "htn",
  monotone: "mono",
  pixelate: "px",
  "sepia-tone": "sepia",
  // Trim TODO
  // Watermark TODO
  // Extra
  height: "h",
  width: "w"
});
var DEFAULT_OPTIONS = Object.freeze({
  auto: "format" // http://www.imgix.com/docs/reference/automatic#param-auto

});

function constructUrlFromParams(src, params) {
  return "".concat(src, "?").concat(Object.entries(params).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        a = _ref2[0],
        b = _ref2[1];

    return "".concat(a, "=").concat(encodeURIComponent(b));
  }).join("&"));
}
/**
 * Construct a URL for an image with an Imgix proxy, expanding image options
 * per the [API reference docs](https://www.imgix.com/docs/reference).
 * @param  {String} src         src of raw image
 * @param  {Object} longOptions map of image API options, in long or short form per expansion rules
 * @return {String}             URL of image src transformed by Imgix
 */


function constructUrl(src, longOptions) {
  if (!src) {
    return "";
  }

  var shortOptions = _extends({}, DEFAULT_OPTIONS);

  Object.keys(longOptions).forEach(function (key) {
    var val = longOptions[key];

    if (PARAM_EXPANSION[key]) {
      key = PARAM_EXPANSION[key];
    }

    key = encodeURIComponent(key);

    if (key.substr(-2) === "64") {
      val = Base64.encodeURI(val);
    }

    shortOptions[key] = val;
  });
  return constructUrlFromParams(src, shortOptions);
}

function buildURLPublic(src) {
  var imgixParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var disableLibraryParam = options.disableLibraryParam;

  var _extractQueryParams = (0, _extractQueryParams3.default)(src),
      _extractQueryParams2 = _slicedToArray(_extractQueryParams, 2),
      rawSrc = _extractQueryParams2[0],
      params = _extractQueryParams2[1];

  return constructUrl(rawSrc, _objectSpread({}, params, {}, imgixParams, {}, disableLibraryParam ? {} : {
    ixlib: "react-".concat(PACKAGE_VERSION)
  }));
}

var _default = constructUrl;
exports.default = _default;
//# sourceMappingURL=constructUrl.js.map