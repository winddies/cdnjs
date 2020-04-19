"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecatePropsHOC = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEPRECATED_PROPS = ["auto", "crop", "fit"];
var deprecatePropsHOC = function deprecatePropsHOC(WrappedComponent) {
  var WithDeprecatedProps = function WithDeprecatedProps(props) {
    var imgixParams = _extends({}, props.customParams || {}, props.imgixParams);
    var propsWithOutDeprecated = _extends({}, props, {
      imgixParams: imgixParams
    });
    DEPRECATED_PROPS.forEach(function (deprecatedProp) {
      (0, _common.warning)(!(deprecatedProp in props), "The prop '" + deprecatedProp + "' has been deprecated and will be removed in v9. Please update the usage to <Imgix imgixParams={{" + deprecatedProp + ": value}} />");

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

    return _react2.default.createElement(WrappedComponent, propsWithOutDeprecated);
  };
  WithDeprecatedProps.propTypes = _extends({}, WrappedComponent.propTypes, {
    auto: _propTypes2.default.array,
    customParams: _propTypes2.default.object,
    crop: _propTypes2.default.string,
    entropy: _propTypes2.default.bool,
    faces: _propTypes2.default.bool,
    fit: _propTypes2.default.string
  });
  WithDeprecatedProps.defaultProps = {
    imgixParams: {}
  };
  WithDeprecatedProps.displayName = "WithDeprecatedProps(" + WrappedComponent.displayName + ")";

  return WithDeprecatedProps;
};

exports.deprecatePropsHOC = deprecatePropsHOC;
//# sourceMappingURL=deprecatePropsHOC.js.map