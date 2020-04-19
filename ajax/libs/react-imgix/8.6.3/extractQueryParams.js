"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractQueryParams;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function extractQueryParams(src) {
  var _src$split = src.split("?"),
      _src$split2 = _slicedToArray(_src$split, 2),
      url = _src$split2[0],
      query = _src$split2[1];

  var params = query ? query.split("&").map(function (x) {
    var _x$split = x.split("="),
        _x$split2 = _slicedToArray(_x$split, 2),
        key = _x$split2[0],
        val = _x$split2[1];

    return [key, decodeURIComponent(val)];
  }).reduce(function (obj, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return _extends(obj, _defineProperty({}, key, val));
  }, {}) : {};
  return [url, params];
}
//# sourceMappingURL=extractQueryParams.js.map