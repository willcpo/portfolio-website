"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./components/App"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].hydrate(_react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement(_App["default"], null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map