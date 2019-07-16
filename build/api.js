"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// executes callback with response
// also returns promise if you would like to asynchronously return something from the callback 
function fetchData(path, callback) {
  return _axios["default"].get("".concat(_config["default"].serverUrl, "/").concat(path)).then(callback);
}
//# sourceMappingURL=api.js.map