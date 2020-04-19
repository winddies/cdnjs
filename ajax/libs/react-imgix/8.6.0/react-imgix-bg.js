"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__BackgroundImpl = exports.Background = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMeasure = require("react-measure");

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

var _constructUrl = require("./constructUrl");

var _constructUrl2 = _interopRequireDefault(_constructUrl);

var _targetWidths = require("./targetWidths");

var _targetWidths2 = _interopRequireDefault(_targetWidths);

var _findClosest = require("./findClosest");

var _findClosest2 = _interopRequireDefault(_findClosest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PACKAGE_VERSION = "8.6.0";

var noop = function noop() {};

var findNearestWidth = function findNearestWidth(actualWidth) {
  return (0, _findClosest2.default)(actualWidth, _targetWidths2.default);
};

var toFixed = function toFixed(dp, value) {
  return +value.toFixed(dp);
};

var BackgroundImpl = function BackgroundImpl(props) {
  var measureRef = props.measureRef,
      measure = props.measure,
      contentRect = props.contentRect,
      _props$imgixParams = props.imgixParams,
      imgixParams = _props$imgixParams === undefined ? {} : _props$imgixParams,
      onLoad = props.onLoad,
      disableLibraryParam = props.disableLibraryParam,
      src = props.src,
      children = props.children,
      _props$className = props.className,
      className = _props$className === undefined ? "" : _props$className;
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
      return { width: forcedWidth, height: forcedHeight };
    }

    if (!hasDOMDimensions) {
      return { width: undefined, height: undefined };
    }
    var ar = contentRect.bounds.width / contentRect.bounds.height;

    var neitherWidthNorHeightPassed = forcedWidth == null && forcedHeight == null;
    if (neitherWidthNorHeightPassed) {
      var _width = findNearestWidth(contentRect.bounds.width);
      var _height = Math.ceil(_width / ar);
      return { width: _width, height: _height };
    }
    if (forcedWidth != null) {
      var _height2 = Math.ceil(forcedWidth / ar);
      return { width: forcedWidth, height: _height2 };
    } else if (forcedHeight != null) {
      var _width2 = Math.ceil(forcedHeight * ar);
      return { width: _width2, height: forcedHeight };
    }
  }(),
      width = _ref.width,
      height = _ref.height;

  var isReady = width != null && height != null;

  var commonProps = _extends({}, htmlAttributes);

  if (!isReady) {
    return _react2.default.createElement(
      "div",
      _extends({}, commonProps, {
        className: "react-imgix-bg-loading " + className,
        ref: onRef
      }),
      children
    );
  }

  var renderedSrc = function () {
    var srcOptions = _extends({
      fit: "crop"
    }, imgixParams, disableLibraryParam ? {} : { ixlib: "react-" + PACKAGE_VERSION }, {
      width: width,
      height: height,
      dpr: dpr
    });

    return (0, _constructUrl2.default)(src, srcOptions);
  }();

  var style = _extends({}, htmlAttributes.style, {
    backgroundImage: "url(" + renderedSrc + ")",
    backgroundSize: (htmlAttributes.style || {}).backgroundSize !== undefined ? htmlAttributes.style.backgroundSize : "cover"
  });

  return _react2.default.createElement(
    "div",
    _extends({}, commonProps, { className: className, ref: onRef, style: style }),
    children
  );
};
var Background = (0, _reactMeasure.withContentRect)("bounds")(BackgroundImpl);

exports.Background = Background;
exports.__BackgroundImpl = BackgroundImpl;
//# sourceMappingURL=react-imgix-bg.js.map