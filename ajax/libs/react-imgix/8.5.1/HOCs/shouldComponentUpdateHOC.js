"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShouldComponentUpdateHOC = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShouldComponentUpdateHOC = function ShouldComponentUpdateHOC(WrappedComponent) {
  var ShouldComponentUpdateHOC = function (_Component) {
    _inherits(ShouldComponentUpdateHOC, _Component);

    function ShouldComponentUpdateHOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ShouldComponentUpdateHOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShouldComponentUpdateHOC.__proto__ || Object.getPrototypeOf(ShouldComponentUpdateHOC)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = function (nextProps) {
        var props = _this.props;
        (0, _common.warning)(nextProps.onMounted == _this.props.onMounted, "props.onMounted() is changing between renders. This is probably not intended. Ensure that a class method is being passed to Imgix rather than a function that is created every render. If this is intended, ignore this warning.");

        var customizer = function customizer(oldProp, newProp, key) {
          if (key === "children") {
            return (0, _common.shallowEqual)(oldProp, newProp);
          }
          if (key === "imgixParams") {
            return (0, _common.shallowEqual)(oldProp, newProp, function (a, b) {
              if (Array.isArray(a)) {
                return (0, _common.shallowEqual)(a, b);
              }
              return undefined;
            });
          }
          if (key === "htmlAttributes") {
            return (0, _common.shallowEqual)(oldProp, newProp);
          }
          if (key === "attributeConfig") {
            return (0, _common.shallowEqual)(oldProp, newProp);
          }
          return undefined; // handled by shallowEqual
        };
        var propsAreEqual = (0, _common.shallowEqual)(props, nextProps, customizer);
        return !propsAreEqual;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShouldComponentUpdateHOC, [{
      key: "render",
      value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return ShouldComponentUpdateHOC;
  }(_react.Component);

  ShouldComponentUpdateHOC.displayName = "ShouldComponentUpdateHOC(" + WrappedComponent.displayName + ")";
  return ShouldComponentUpdateHOC;
};

exports.ShouldComponentUpdateHOC = ShouldComponentUpdateHOC;
//# sourceMappingURL=shouldComponentUpdateHOC.js.map