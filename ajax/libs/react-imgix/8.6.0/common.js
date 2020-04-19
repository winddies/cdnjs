"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("./constants");

Object.defineProperty(exports, "CONSTANTS", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_constants).default;
  }
});

var _warning = require("warning");

Object.defineProperty(exports, "warning", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_warning).default;
  }
});

var _shallowequal = require("shallowequal");

Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shallowequal).default;
  }
});

var _config = require("./config");

Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_config).default;
  }
});
exports.compose = compose;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Taken from https://github.com/reduxjs/redux/blob/v4.0.0/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
//# sourceMappingURL=common.js.map