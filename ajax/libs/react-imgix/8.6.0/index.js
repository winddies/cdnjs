"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Background = exports.PublicConfigAPI = exports.Source = exports.Picture = exports.buildURL = undefined;

var _reactImgixBg = require("./react-imgix-bg");

Object.defineProperty(exports, "Background", {
  enumerable: true,
  get: function get() {
    return _reactImgixBg.Background;
  }
});

var _reactImgix = require("./react-imgix");

var _reactImgix2 = _interopRequireDefault(_reactImgix);

var _config = require("./config");

var _constructUrl = require("./constructUrl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.buildURL = _constructUrl.buildURLPublic;
exports.default = _reactImgix2.default;
exports.Picture = _reactImgix.Picture;
exports.Source = _reactImgix.Source;
exports.PublicConfigAPI = _config.PublicConfigAPI;
//# sourceMappingURL=index.js.map