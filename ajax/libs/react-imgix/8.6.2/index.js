"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Picture", {
  enumerable: true,
  get: function get() {
    return _reactImgix.Picture;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function get() {
    return _reactImgix.Source;
  }
});
Object.defineProperty(exports, "PublicConfigAPI", {
  enumerable: true,
  get: function get() {
    return _config.PublicConfigAPI;
  }
});
Object.defineProperty(exports, "buildURL", {
  enumerable: true,
  get: function get() {
    return _constructUrl.buildURLPublic;
  }
});
Object.defineProperty(exports, "Background", {
  enumerable: true,
  get: function get() {
    return _reactImgixBg.Background;
  }
});
exports.default = void 0;

var _reactImgix = _interopRequireWildcard(require("./react-imgix"));

var _config = require("./config");

var _constructUrl = require("./constructUrl");

var _reactImgixBg = require("./react-imgix-bg");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _reactImgix.default;
exports.default = _default;
//# sourceMappingURL=index.js.map