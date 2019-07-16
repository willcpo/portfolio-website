"use strict";

var _config = _interopRequireDefault(require("./config"));

var _nodeSassMiddleware = _interopRequireDefault(require("node-sass-middleware"));

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireDefault(require("./components/App"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.use((0, _nodeSassMiddleware["default"])({
  src: _path["default"].join(__dirname, "sass"),
  dest: _path["default"].join(__dirname, "public")
}));
server.set("view engine", "ejs");
server.use(_express["default"]["static"]("public"));
server.get("*", function (req, res) {
  res.render("index", {
    initialMarkup: _server["default"].renderToString(_react["default"].createElement(_reactRouterDom.StaticRouter, {
      location: req.url,
      context: {
        "static": true
      }
    }, _react["default"].createElement(_App["default"], null)))
  });
});
server.listen(_config["default"].port, _config["default"].host, function () {
  console.info("Express listening on port ", _config["default"].port);
});
//# sourceMappingURL=server.js.map