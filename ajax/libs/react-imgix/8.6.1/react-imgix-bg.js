"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__BackgroundImpl = exports.Background = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMeasure = _interopRequireWildcard(require("react-measure"));

var _constructUrl = _interopRequireDefault(require("./constructUrl"));

var _targetWidths = _interopRequireDefault(require("./targetWidths"));

var _findClosest = _interopRequireDefault(require("./findClosest"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PACKAGE_VERSION = "8.6.1";

var noop = function noop() {};

var findNearestWidth = function findNearestWidth(actualWidth) {
  return (0, _findClosest.default)(actualWidth, _targetWidths.default);
};

var toFixed = function toFixed(dp, value) {
  return +value.toFixed(dp);
};

var BackgroundImpl = function BackgroundImpl(props) {
  var measureRef = props.measureRef,
      measure = props.measure,
      contentRect = props.contentRect,
      _props$imgixParams = props.imgixParams,
      imgixParams = _props$imgixParams === void 0 ? {} : _props$imgixParams,
      onLoad = props.onLoad,
      disableLibraryParam = props.disableLibraryParam,
      src = props.src,
      children = props.children,
      _props$className = props.className,
      className = _props$className === void 0 ? "" : _props$className;
  var forcedWidth = imgixParams.w,
      forcedHeight = imgixParams.h;
  var hasDOMDimensions = contentRect.bounds.top != null;
  var htmlAttributes = props.htmlAttributes || {};
  var dpr = toFixed(2, imgixParams.dpr || global.devicePixelRatio || 1);
  var ref = htmlAttributes.ref;

  var onRef = function onRef(el) {
    measureRef(el);

    if (typeof ref === "function") {
      ref(el);
    }
  };

  var _ref = function () {
    var bothWidthAndHeightPassed = forcedWidth != null && forcedHeight != null;

    if (bothWidthAndHeightPassed) {
      return {
        width: forcedWidth,
        height: forcedHeight
      };
    }

    if (!hasDOMDimensions) {
      return {
        width: undefined,
        height: undefined
      };
    }

    var ar = contentRect.bounds.width / contentRect.bounds.height;
    var neitherWidthNorHeightPassed = forcedWidth == null && forcedHeight == null;

    if (neitherWidthNorHeightPassed) {
      var _width = findNearestWidth(contentRect.bounds.width);

      var _height = Math.ceil(_width / ar);

      return {
        width: _width,
        height: _height
      };
    }

    if (forcedWidth != null) {
      var _height2 = Math.ceil(forcedWidth / ar);

      return {
        width: forcedWidth,
        height: _height2
      };
    } else if (forcedHeight != null) {
      var _width2 = Math.ceil(forcedHeight * ar);

      return {
        width: _width2,
        height: forcedHeight
      };
    }
  }(),
      width = _ref.width,
      height = _ref.height;

  var isReady = width != null && height != null;

  var commonProps = _objectSpread({}, htmlAttributes);

  if (!isReady) {
    return _react.default.createElement("div", _extends({}, commonProps, {
      className: "react-imgix-bg-loading ".concat(className),
      ref: onRef
    }), children);
  }

  var renderedSrc = function () {
    var srcOptions = _objectSpread({
      fit: "crop"
    }, imgixParams, disableLibraryParam ? {} : {
      ixlib: "react-".concat(PACKAGE_VERSION)
    }, {
      width: width,
      height: height,
      dpr: dpr
    });

    return (0, _constructUrl.default)(src, srcOptions);
  }();

  var style = _objectSpread({}, htmlAttributes.style, {
    backgroundImage: "url(".concat(renderedSrc, ")"),
    backgroundSize: (htmlAttributes.style || {}).backgroundSize !== undefined ? htmlAttributes.style.backgroundSize : "cover"
  });

  return _react.default.createElement("div", _extends({}, commonProps, {
    className: className,
    ref: onRef,
    style: style
  }), children);
};

exports.__BackgroundImpl = BackgroundImpl;
var Background = (0, _reactMeasure.withContentRect)("bounds")(BackgroundImpl);
exports.Background = Background;
//# sourceMappingURL=react-imgix-bg.js.map