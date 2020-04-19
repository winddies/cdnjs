"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
  warnings: {
    fallbackImage: true,
    sizesAttribute: true,
    invalidARFormat: true
  }
};

var _setWarning = function _setWarning(name, value) {
  if (!name || !(name in config.warnings)) {
    return;
  }
  config.warnings[name] = value;
};

var PublicConfigAPI = function () {
  function PublicConfigAPI() {
    _classCallCheck(this, PublicConfigAPI);
  }

  _createClass(PublicConfigAPI, null, [{
    key: "disableWarning",
    value: function disableWarning(name) {
      _setWarning(name, false);
    }
  }, {
    key: "enableWarning",
    value: function enableWarning(name) {
      _setWarning(name, true);
    }
  }]);

  return PublicConfigAPI;
}();

exports.default = config;
exports.PublicConfigAPI = PublicConfigAPI;
//# sourceMappingURL=config.js.map