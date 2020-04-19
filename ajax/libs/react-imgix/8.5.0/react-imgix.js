"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__PictureImpl = exports.__SourceImpl = exports.Source = exports.Picture = exports.__ReactImgixImpl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("./array-findindex");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _targetWidths = require("./targetWidths");

var _targetWidths2 = _interopRequireDefault(_targetWidths);

var _constructUrl = require("./constructUrl");

var _constructUrl2 = _interopRequireDefault(_constructUrl);

var _HOCs = require("./HOCs");

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PACKAGE_VERSION = "8.5.0";
var NODE_ENV = process.env.NODE_ENV;

var buildKey = function buildKey(idx) {
  return "react-imgix-" + idx;
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
  className: _propTypes2.default.string,
  onMounted: _propTypes2.default.func,
  htmlAttributes: _propTypes2.default.object
};

var SHARED_IMGIX_AND_SOURCE_PROP_TYPES = _extends({}, COMMON_PROP_TYPES, {
  disableSrcSet: _propTypes2.default.bool,
  disableLibraryParam: _propTypes2.default.bool,
  imgixParams: _propTypes2.default.object,
  sizes: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  src: _propTypes2.default.string.isRequired
});

/**
 * Parse an aspect ratio in the format w:h to a decimal. If false is returned, the aspect ratio is in the wrong format.
 */
function parseAspectRatio(aspectRatio) {
  if (typeof aspectRatio !== "string") {
    return false;
  }
  var isValidFormat = function isValidFormat(str) {
    return (/^\d+(\.\d+)?:\d+(\.\d+)?$/.test(str)
    );
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
      aspectRatio = _ref.aspectRatio;

  var fixedSize = width != null || height != null;

  var srcOptions = _extends({}, imgixParams, disableLibraryParam ? {} : { ixlib: "react-" + PACKAGE_VERSION }, fixedSize && height ? { height: height } : {}, fixedSize && width ? { width: width } : {});

  var src = (0, _constructUrl2.default)(rawSrc, srcOptions);

  var srcSet = void 0;

  if (disableSrcSet) {
    srcSet = src;
  } else {
    if (fixedSize || type === "source") {
      var dpr2 = (0, _constructUrl2.default)(rawSrc, _extends({}, srcOptions, { dpr: 2 }));
      var dpr3 = (0, _constructUrl2.default)(rawSrc, _extends({}, srcOptions, { dpr: 3 }));
      var dpr4 = (0, _constructUrl2.default)(rawSrc, _extends({}, srcOptions, { dpr: 4 }));
      var dpr5 = (0, _constructUrl2.default)(rawSrc, _extends({}, srcOptions, { dpr: 5 }));
      srcSet = dpr2 + " 2x, " + dpr3 + " 3x, " + dpr4 + " 4x, " + dpr5 + " 5x";
    } else {
      var showARWarning = false;
      var buildSrcSetPair = function buildSrcSetPair(targetWidth) {
        var urlParams = _extends({}, srcOptions, {
          width: targetWidth
        });
        var aspectRatioDecimal = parseAspectRatio(aspectRatio);
        if (aspectRatio != null && aspectRatioDecimal === false) {
          // false indicates invalid
          showARWarning = true;
        }
        if (!srcOptions.height && aspectRatioDecimal && aspectRatioDecimal > 0) {
          urlParams.height = Math.ceil(targetWidth / aspectRatioDecimal);
        }
        var url = (0, _constructUrl2.default)(rawSrc, urlParams);
        return url + " " + targetWidth + "w";
      };
      srcSet = _targetWidths2.default.map(buildSrcSetPair).join(", ");

      if (showARWarning && _common.config.warnings.invalidARFormat) {
        console.warn("[Imgix] The aspect ratio passed (\"" + aspectRatio + "\") is not in the correct format. The correct format is \"W:H\".");
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
  var params = _extends({}, defaultImgixParams, props.imgixParams);

  var fit = false;
  if (params.crop != null) fit = "crop";
  if (params.fit) fit = params.fit;

  if (params.ar) {
    delete params.ar;
  }

  return _extends({}, params, {
    fit: fit
  });
}

/**
 * React component used to render <img> elements with Imgix
 */

var ReactImgix = function (_Component) {
  _inherits(ReactImgix, _Component);

  function ReactImgix() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactImgix);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ReactImgix.__proto__ || Object.getPrototypeOf(ReactImgix)).call.apply(_ref2, [this].concat(args))), _this), _this.componentDidMount = function () {
      var node = _reactDom2.default.findDOMNode(_this);
      _this.props.onMounted(node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactImgix, [{
    key: "render",
    value: function render() {
      var _extends2;

      var _props = this.props,
          disableSrcSet = _props.disableSrcSet,
          type = _props.type,
          width = _props.width,
          height = _props.height;

      // Pre-render checks

      if (NODE_ENV !== "production" && _common.config.warnings.sizesAttribute) {
        if (this.props.width == null && this.props.height == null && this.props.sizes == null && !this.props._inPicture) {
          console.warn("If width and height are not set, a sizes attribute should be passed.");
        }
      }

      var htmlAttributes = this.props.htmlAttributes || {};

      var _buildSrc = buildSrc(_extends({}, this.props, {
        type: "img",
        imgixParams: imgixParams(this.props),
        aspectRatio: (this.props.imgixParams || {}).ar
      })),
          src = _buildSrc.src,
          srcSet = _buildSrc.srcSet;

      var attributeConfig = _extends({}, defaultAttributeMap, this.props.attributeConfig);
      var childProps = _extends({}, this.props.htmlAttributes, (_extends2 = {}, _defineProperty(_extends2, attributeConfig.sizes, this.props.sizes), _defineProperty(_extends2, "className", this.props.className), _defineProperty(_extends2, "width", width <= 1 ? null : width), _defineProperty(_extends2, "height", height <= 1 ? null : height), _defineProperty(_extends2, attributeConfig.src, src), _extends2));
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
      return _react2.default.createElement("img", childProps);
    }
  }]);

  return ReactImgix;
}(_react.Component);

ReactImgix.propTypes = _extends({}, SHARED_IMGIX_AND_SOURCE_PROP_TYPES);
ReactImgix.defaultProps = {
  disableSrcSet: false,
  onMounted: noop
};

ReactImgix.displayName = "ReactImgix";

/**
 * React component used to render <picture> elements with Imgix
 */

var PictureImpl = function (_Component2) {
  _inherits(PictureImpl, _Component2);

  function PictureImpl() {
    var _ref3;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, PictureImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = PictureImpl.__proto__ || Object.getPrototypeOf(PictureImpl)).call.apply(_ref3, [this].concat(args))), _this2), _this2.componentDidMount = function () {
      var node = _reactDom2.default.findDOMNode(_this2);
      _this2.props.onMounted(node);
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(PictureImpl, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      // make sure all of our children have key set, otherwise we get react warnings

      var _children = _react2.default.Children.map(children, function (child, idx) {
        return _react2.default.cloneElement(child, {
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

      return _react2.default.createElement("picture", { children: _children });
    }
  }]);

  return PictureImpl;
}(_react.Component);

PictureImpl.propTypes = _extends({}, COMMON_PROP_TYPES, {
  children: _propTypes2.default.any
});
PictureImpl.defaultProps = {
  onMounted: noop
};

PictureImpl.displayName = "ReactImgixPicture";

/**
 * React component used to render <source> elements with Imgix
 */

var SourceImpl = function (_Component3) {
  _inherits(SourceImpl, _Component3);

  function SourceImpl() {
    var _ref4;

    var _temp3, _this3, _ret3;

    _classCallCheck(this, SourceImpl);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref4 = SourceImpl.__proto__ || Object.getPrototypeOf(SourceImpl)).call.apply(_ref4, [this].concat(args))), _this3), _this3.componentDidMount = function () {
      var node = _reactDom2.default.findDOMNode(_this3);
      _this3.props.onMounted(node);
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  _createClass(SourceImpl, [{
    key: "render",
    value: function render() {
      var _extends3;

      var _props2 = this.props,
          disableSrcSet = _props2.disableSrcSet,
          width = _props2.width,
          height = _props2.height;


      var htmlAttributes = this.props.htmlAttributes || {};

      var _buildSrc2 = buildSrc(_extends({}, this.props, {
        type: "source",
        imgixParams: imgixParams(this.props)
      })),
          src = _buildSrc2.src,
          srcSet = _buildSrc2.srcSet;

      var attributeConfig = _extends({}, defaultAttributeMap, this.props.attributeConfig);
      var childProps = _extends({}, this.props.htmlAttributes, (_extends3 = {}, _defineProperty(_extends3, attributeConfig.sizes, this.props.sizes), _defineProperty(_extends3, "className", this.props.className), _defineProperty(_extends3, "width", width <= 1 ? null : width), _defineProperty(_extends3, "height", height <= 1 ? null : height), _extends3));

      // inside of a <picture> element a <source> element ignores its src
      // attribute in favor of srcSet so we set that with either an actual
      // srcSet or a single src
      if (disableSrcSet) {
        childProps[attributeConfig.srcSet] = src;
      } else {
        childProps[attributeConfig.srcSet] = src + ", " + srcSet;
      }
      // for now we'll take media from htmlAttributes which isn't ideal because
      //   a) this isn't an <img>
      //   b) passing objects as props means that react will always rerender
      //      since objects dont respond correctly to ===

      return _react2.default.createElement("source", childProps);
    }
  }]);

  return SourceImpl;
}(_react.Component);

SourceImpl.propTypes = _extends({}, SHARED_IMGIX_AND_SOURCE_PROP_TYPES);
SourceImpl.defaultProps = {
  disableSrcSet: false,
  onMounted: noop
};

SourceImpl.displayName = "ReactImgixSource";

var ReactImgixWrapped = (0, _common.compose)(_HOCs.deprecatePropsHOC, _HOCs.ShouldComponentUpdateHOC)(ReactImgix);
var Picture = (0, _common.compose)(_HOCs.ShouldComponentUpdateHOC)(PictureImpl);
var Source = (0, _common.compose)(_HOCs.ShouldComponentUpdateHOC)(SourceImpl);

exports.default = ReactImgixWrapped;
exports.__ReactImgixImpl = ReactImgix;
exports.Picture = Picture;
exports.Source = Source;
exports.__SourceImpl = SourceImpl;
exports.__PictureImpl = PictureImpl;
//# sourceMappingURL=react-imgix.js.map