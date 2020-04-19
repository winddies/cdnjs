"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__PictureImpl = exports.__SourceImpl = exports.Source = exports.Picture = exports.__ReactImgixImpl = exports.default = void 0;

require("./array-findindex");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _targetWidths = _interopRequireDefault(require("./targetWidths"));

var _constructUrl = _interopRequireDefault(require("./constructUrl"));

var _HOCs = require("./HOCs");

var _common = require("./common");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PACKAGE_VERSION = "8.6.2";
var NODE_ENV = process.env.NODE_ENV;
var Q_PARAM_REGEX = /&?q=([^&]+)/;

var buildKey = function buildKey(idx) {
  return "react-imgix-".concat(idx);
};

var validTypes = ["img", "picture", "source"];
var defaultImgixParams = {
  auto: ["format"],
  fit: "crop"
};
var defaultAttributeMap = {
  src: "src",
  srcSet: "srcSet",
  sizes: "sizes"
};

var noop = function noop() {};

var COMMON_PROP_TYPES = {
  className: _propTypes.default.string,
  onMounted: _propTypes.default.func,
  htmlAttributes: _propTypes.default.object
};

var SHARED_IMGIX_AND_SOURCE_PROP_TYPES = _objectSpread({}, COMMON_PROP_TYPES, {
  disableQualityByDPR: _propTypes.default.bool,
  disableSrcSet: _propTypes.default.bool,
  disableLibraryParam: _propTypes.default.bool,
  imgixParams: _propTypes.default.object,
  sizes: _propTypes.default.string,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  src: _propTypes.default.string.isRequired
});
/**
 * Parse an aspect ratio in the format w:h to a decimal. If false is returned, the aspect ratio is in the wrong format.
 */


function parseAspectRatio(aspectRatio) {
  if (typeof aspectRatio !== "string") {
    return false;
  }

  var isValidFormat = function isValidFormat(str) {
    return /^\d+(\.\d+)?:\d+(\.\d+)?$/.test(str);
  };

  if (!isValidFormat(aspectRatio)) {
    return false;
  }

  var _aspectRatio$split = aspectRatio.split(":"),
      _aspectRatio$split2 = _slicedToArray(_aspectRatio$split, 2),
      width = _aspectRatio$split2[0],
      height = _aspectRatio$split2[1];

  return parseFloat(width) / parseFloat(height);
}
/**
 * Returns a function which builds a srcSet string with the width,
 * and height if there is one
 */


function buildSrcSetPairFunction(url) {
  var aspectRatioDecimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fixedHeight = arguments.length > 2 ? arguments[2] : undefined;

  if (fixedHeight) {
    return function (targetWidth) {
      return "".concat(url, "&h=").concat(fixedHeight, "&w=").concat(targetWidth, " ").concat(targetWidth, "w");
    };
  }

  if (aspectRatioDecimal > 0) {
    return function (targetWidth) {
      return "".concat(url, "&h=").concat(Math.ceil(targetWidth / aspectRatioDecimal), "&w=").concat(targetWidth, " ").concat(targetWidth, "w");
    };
  }

  return function (targetWidth) {
    return "".concat(url, "&w=").concat(targetWidth, " ").concat(targetWidth, "w");
  };
}
/**
 * Returns a function which builds a srcSet string with dpr,
 * and quality if not disabled.
 */


function buildDprSrcFunction(url, disableQualityByDPR, quality) {
  // Use quality if explicitly passed in -- either as an option or already in the url
  if (disableQualityByDPR && quality) {
    return function (dpr) {
      return "".concat(url, "&q=").concat(quality, "&dpr=").concat(dpr, " ").concat(dpr, "x");
    };
  }

  if (disableQualityByDPR) {
    return function (dpr) {
      return "".concat(url, "&dpr=").concat(dpr, " ").concat(dpr, "x");
    };
  }

  return function (dpr) {
    return "".concat(url, "&q=").concat(quality || _common.CONSTANTS["q_dpr".concat(dpr)], "&dpr=").concat(dpr, " ").concat(dpr, "x");
  };
}
/**
 * Build a imgix source url with parameters from a raw url
 */


function buildSrc(_ref) {
  var rawSrc = _ref.src,
      width = _ref.width,
      height = _ref.height,
      disableLibraryParam = _ref.disableLibraryParam,
      disableSrcSet = _ref.disableSrcSet,
      type = _ref.type,
      imgixParams = _ref.imgixParams,
      aspectRatio = _ref.aspectRatio,
      disableQualityByDPR = _ref.disableQualityByDPR;
  var fixedSize = width != null || height != null;

  var srcOptions = _objectSpread({}, imgixParams, {}, disableLibraryParam ? {} : {
    ixlib: "react-".concat(PACKAGE_VERSION)
  }, {}, fixedSize && height ? {
    height: height
  } : {}, {}, fixedSize && width ? {
    width: width
  } : {});

  var src = (0, _constructUrl.default)(rawSrc, srcOptions);
  var srcSet;

  if (disableSrcSet) {
    srcSet = src;
  } else {
    if (fixedSize || type === "source") {
      var qOption = srcOptions.q,
          urlParams = _objectWithoutProperties(srcOptions, ["q"]); // Get the q from the raw src.


      var _ref2 = Q_PARAM_REGEX.exec(rawSrc) || [],
          _ref3 = _slicedToArray(_ref2, 2),
          qSrc = _ref3[1]; // Use the quality setting from the options, but fall back
      // to the q param already in the src


      var q = qOption || qSrc; // Remove q query param if it is already in the url
      // We’ll add it back using either q passed as an option, q from the src
      // or use the constants for each dpr

      var srcWithoutQ = rawSrc.replace(Q_PARAM_REGEX, "");
      var constructedUrl = (0, _constructUrl.default)(srcWithoutQ, urlParams);
      var buildDprSrc = buildDprSrcFunction(constructedUrl, disableQualityByDPR, q);
      srcSet = [1, 2, 3, 4, 5].map(buildDprSrc).join(", ");
    } else {
      var _width = srcOptions.width,
          _height = srcOptions.height,
          _urlParams = _objectWithoutProperties(srcOptions, ["width", "height"]);

      var _constructedUrl = (0, _constructUrl.default)(rawSrc, _urlParams);

      var aspectRatioDecimal = parseAspectRatio(aspectRatio); // false indicates invalid

      var showARWarning = aspectRatio != null && aspectRatioDecimal === false;
      var buildSrcSetPair = buildSrcSetPairFunction(_constructedUrl, aspectRatioDecimal, _height);
      srcSet = _targetWidths.default.map(buildSrcSetPair).join(", ");

      if (showARWarning && _common.config.warnings.invalidARFormat) {
        console.warn("[Imgix] The aspect ratio passed (\"".concat(aspectRatio, "\") is not in the correct format. The correct format is \"W:H\"."));
      }
    }
  }

  return {
    src: src,
    srcSet: srcSet
  };
}
/**
 * Combines default imgix params with custom imgix params to make a imgix params config object
 */


function imgixParams(props) {
  var params = _objectSpread({}, defaultImgixParams, {}, props.imgixParams);

  var fit = false;
  if (params.crop != null) fit = "crop";
  if (params.fit) fit = params.fit;

  if (params.ar) {
    delete params.ar;
  }

  return _objectSpread({}, params, {
    fit: fit
  });
}
/**
 * React component used to render <img> elements with Imgix
 */


var ReactImgix =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactImgix, _Component);

  function ReactImgix() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReactImgix);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactImgix)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var node = _reactDom.default.findDOMNode(_assertThisInitialized(_this));

      _this.props.onMounted(node);
    });

    return _this;
  }

  _createClass(ReactImgix, [{
    key: "render",
    value: function render() {
      var _objectSpread2;

      var _this$props = this.props,
          disableSrcSet = _this$props.disableSrcSet,
          type = _this$props.type,
          width = _this$props.width,
          height = _this$props.height; // Pre-render checks

      if (NODE_ENV !== "production" && _common.config.warnings.sizesAttribute) {
        if (this.props.width == null && this.props.height == null && this.props.sizes == null && !this.props._inPicture) {
          console.warn("If width and height are not set, a sizes attribute should be passed.");
        }
      }

      var htmlAttributes = this.props.htmlAttributes || {};

      var _buildSrc = buildSrc(_objectSpread({}, this.props, {
        type: "img",
        imgixParams: imgixParams(this.props),
        aspectRatio: (this.props.imgixParams || {}).ar
      })),
          src = _buildSrc.src,
          srcSet = _buildSrc.srcSet;

      var attributeConfig = _objectSpread({}, defaultAttributeMap, {}, this.props.attributeConfig);

      var childProps = _objectSpread({}, this.props.htmlAttributes, (_objectSpread2 = {}, _defineProperty(_objectSpread2, attributeConfig.sizes, this.props.sizes), _defineProperty(_objectSpread2, "className", this.props.className), _defineProperty(_objectSpread2, "width", width <= 1 ? null : width), _defineProperty(_objectSpread2, "height", height <= 1 ? null : height), _defineProperty(_objectSpread2, attributeConfig.src, src), _objectSpread2));

      if (!disableSrcSet) {
        childProps[attributeConfig.srcSet] = srcSet;
      }

      if (type === "bg") {
        // TODO: Remove in v9
        throw new Error("type='bg' has been removed in this version of react-imgix. If you would like this re-implemented please give this issues a thumbs up: https://github.com/imgix/react-imgix/issues/160");
      }

      if (type === "source") {
        // TODO: Remove in v9
        throw new Error("type='source' has been changed to <Source />. Please see the upgrade guide at: https://github.com/imgix/react-imgix#7x-to-80");
      }

      if (type === "picture") {
        // TODO: Remove in v9
        throw new Error("type='picture' has been changed to <Picture />. Please see the upgrade guide at: https://github.com/imgix/react-imgix#7x-to-80");
      }

      return _react.default.createElement("img", childProps);
    }
  }]);

  return ReactImgix;
}(_react.Component);

exports.__ReactImgixImpl = ReactImgix;

_defineProperty(ReactImgix, "propTypes", _objectSpread({}, SHARED_IMGIX_AND_SOURCE_PROP_TYPES));

_defineProperty(ReactImgix, "defaultProps", {
  disableSrcSet: false,
  onMounted: noop
});

ReactImgix.displayName = "ReactImgix";
/**
 * React component used to render <picture> elements with Imgix
 */

var PictureImpl =
/*#__PURE__*/
function (_Component2) {
  _inherits(PictureImpl, _Component2);

  function PictureImpl() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, PictureImpl);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(PictureImpl)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "componentDidMount", function () {
      var node = _reactDom.default.findDOMNode(_assertThisInitialized(_this2));

      _this2.props.onMounted(node);
    });

    return _this2;
  }

  _createClass(PictureImpl, [{
    key: "render",
    value: function render() {
      var children = this.props.children; // make sure all of our children have key set, otherwise we get react warnings

      var _children = _react.default.Children.map(children, function (child, idx) {
        return _react.default.cloneElement(child, {
          key: buildKey(idx),
          _inPicture: true
        });
      }) || [];
      /*
      We need to make sure an <img /> or <Imgix /> is the last child so we look for one in children
      a. if we find one, move it to the last entry if it's not already there
      b. if we don't find one, warn the user as they probably want to pass one.
      */
      // look for an <img> or <ReactImgix type='img'> - at the bare minimum we have to have a single <img> element or else it will not work.


      var imgIdx = _children.findIndex(function (c) {
        return c.type === "img" || c.type === ReactImgix || c.type === ReactImgixWrapped;
      });

      if (imgIdx === -1 && _common.config.warnings.fallbackImage) {
        console.warn("No fallback <img /> or <Imgix /> found in the children of a <picture> component. A fallback image should be passed to ensure the image renders correctly at all dimensions.");
      } else if (imgIdx !== _children.length - 1) {
        // found one, need to move it to the end
        _children.push(_children.splice(imgIdx, 1)[0]);
      }

      return _react.default.createElement("picture", {
        children: _children
      });
    }
  }]);

  return PictureImpl;
}(_react.Component);

exports.__PictureImpl = PictureImpl;

_defineProperty(PictureImpl, "propTypes", _objectSpread({}, COMMON_PROP_TYPES, {
  children: _propTypes.default.any
}));

_defineProperty(PictureImpl, "defaultProps", {
  onMounted: noop
});

PictureImpl.displayName = "ReactImgixPicture";
/**
 * React component used to render <source> elements with Imgix
 */

var SourceImpl =
/*#__PURE__*/
function (_Component3) {
  _inherits(SourceImpl, _Component3);

  function SourceImpl() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, SourceImpl);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(SourceImpl)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "componentDidMount", function () {
      var node = _reactDom.default.findDOMNode(_assertThisInitialized(_this3));

      _this3.props.onMounted(node);
    });

    return _this3;
  }

  _createClass(SourceImpl, [{
    key: "render",
    value: function render() {
      var _objectSpread3;

      var _this$props2 = this.props,
          disableSrcSet = _this$props2.disableSrcSet,
          width = _this$props2.width,
          height = _this$props2.height;
      var htmlAttributes = this.props.htmlAttributes || {};

      var _buildSrc2 = buildSrc(_objectSpread({}, this.props, {
        type: "source",
        imgixParams: imgixParams(this.props)
      })),
          src = _buildSrc2.src,
          srcSet = _buildSrc2.srcSet;

      var attributeConfig = _objectSpread({}, defaultAttributeMap, {}, this.props.attributeConfig);

      var childProps = _objectSpread({}, this.props.htmlAttributes, (_objectSpread3 = {}, _defineProperty(_objectSpread3, attributeConfig.sizes, this.props.sizes), _defineProperty(_objectSpread3, "className", this.props.className), _defineProperty(_objectSpread3, "width", width <= 1 ? null : width), _defineProperty(_objectSpread3, "height", height <= 1 ? null : height), _objectSpread3)); // inside of a <picture> element a <source> element ignores its src
      // attribute in favor of srcSet so we set that with either an actual
      // srcSet or a single src


      if (disableSrcSet) {
        childProps[attributeConfig.srcSet] = src;
      } else {
        childProps[attributeConfig.srcSet] = "".concat(src, ", ").concat(srcSet);
      } // for now we'll take media from htmlAttributes which isn't ideal because
      //   a) this isn't an <img>
      //   b) passing objects as props means that react will always rerender
      //      since objects dont respond correctly to ===


      return _react.default.createElement("source", childProps);
    }
  }]);

  return SourceImpl;
}(_react.Component);

exports.__SourceImpl = SourceImpl;

_defineProperty(SourceImpl, "propTypes", _objectSpread({}, SHARED_IMGIX_AND_SOURCE_PROP_TYPES));

_defineProperty(SourceImpl, "defaultProps", {
  disableSrcSet: false,
  onMounted: noop
});

SourceImpl.displayName = "ReactImgixSource";
var ReactImgixWrapped = (0, _common.compose)(_HOCs.deprecatePropsHOC, _HOCs.ShouldComponentUpdateHOC)(ReactImgix);
var Picture = (0, _common.compose)(_HOCs.ShouldComponentUpdateHOC)(PictureImpl);
exports.Picture = Picture;
var Source = (0, _common.compose)(_HOCs.ShouldComponentUpdateHOC)(SourceImpl);
exports.Source = Source;
var _default = ReactImgixWrapped;
exports.default = _default;
//# sourceMappingURL=react-imgix.js.map