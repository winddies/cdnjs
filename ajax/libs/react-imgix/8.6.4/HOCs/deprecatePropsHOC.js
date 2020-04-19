"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatePropsHOC = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEPRECATED_PROPS = ["auto", "crop", "fit"];

var deprecatePropsHOC = function deprecatePropsHOC(WrappedComponent) {
  var WithDeprecatedProps = function WithDeprecatedProps(props) {
    var imgixParams = _objectSpread({}, props.customParams || {}, {}, props.imgixParams);

    var propsWithOutDeprecated = _objectSpread({}, props, {
      imgixParams: imgixParams
    });

    DEPRECATED_PROPS.forEach(function (deprecatedProp) {
      (0, _common.warning)(!(deprecatedProp in props), "The prop '".concat(deprecatedProp, "' has been deprecated and will be removed in v9. Please update the usage to <Imgix imgixParams={{").concat(deprecatedProp, ": value}} />"));

      if (deprecatedProp in props) {
        delete propsWithOutDeprecated[deprecatedProp];
        imgixParams[deprecatedProp] = props[deprecatedProp];
      }
    });
    (0, _common.warning)(!("customParams" in props), "The prop 'customParams' has been replaced with 'imgixParams' and will be removed in v9. Please update usage to <Imgix imgixParams={customParams} />");
    delete propsWithOutDeprecated.customParams;

    if (props.faces) {
      (0, _common.warning)(false, "The prop 'faces' has been deprecated and will be removed in v9. Please update the usage to <Imgix imgixParams={{crop: 'faces'}} />");
      delete propsWithOutDeprecated.faces;

      if (!imgixParams.crop) {
        imgixParams.crop = "faces";
      }
    }

    if (props.entropy) {
      (0, _common.warning)(false, "The prop 'entropy' has been deprecated and will be removed in v9. Please update the usage to <Imgix imgixParams={{crop: 'entropy'}} />");
      delete propsWithOutDeprecated.entropy;

      if (!imgixParams.crop) {
        imgixParams.crop = "entropy";
      }
    }

    return _react.default.createElement(WrappedComponent, propsWithOutDeprecated);
  };

  WithDeprecatedProps.propTypes = _objectSpread({}, WrappedComponent.propTypes, {
    auto: _propTypes.default.array,
    customParams: _propTypes.default.object,
    crop: _propTypes.default.string,
    entropy: _propTypes.default.bool,
    faces: _propTypes.default.bool,
    fit: _propTypes.default.string
  });
  WithDeprecatedProps.defaultProps = {
    imgixParams: {}
  };
  WithDeprecatedProps.displayName = "WithDeprecatedProps(".concat(WrappedComponent.displayName, ")");
  return WithDeprecatedProps;
};

exports.deprecatePropsHOC = deprecatePropsHOC;
//# sourceMappingURL=deprecatePropsHOC.js.map