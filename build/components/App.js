"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _NavBar = _interopRequireDefault(require("./NavBar"));

var _MyStory = _interopRequireDefault(require("./MyStory"));

var _Resume = _interopRequireDefault(require("./Resume"));

var _Projects = _interopRequireDefault(require("./Projects"));

var _ContactMe = _interopRequireDefault(require("./ContactMe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var appNonStateInfo = {
  resizeFunc: null,
  storyID: ""
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      storyLineInfo: {
        leftX: "-100px",
        centerX: "-100px",
        topY: "-100px",
        bottomY: "-100px",
        heightDiff: "0px"
      },
      redirectFunc: redirect.bind(_assertThisInitialized(_this))
    };
    appNonStateInfo.resizeFunc = getStoryLineInfo.bind(_assertThisInitialized(_this), _this.props.location.pathname.split("/")[1], _this.setState.bind(_assertThisInitialized(_this)));
    appNonStateInfo.storyID = _this.props.location.pathname.split("/")[1];
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.context) return;
      this.state.redirectFunc();
      if (!["/", "/acting", "/film", "/politics", "/programming"].includes(this.props.location.pathname)) return;
      var links = document.querySelectorAll(".circleLink");
      links.forEach(function (link) {
        link.addEventListener("click", function (event) {
          setTimeout(function () {
            appNonStateInfo.storyID = event.path[1].id;
            window.removeEventListener("resize", appNonStateInfo.resizeFunc);
            appNonStateInfo.resizeFunc = getStoryLineInfo.bind(_this2, appNonStateInfo.storyID, _this2.setState.bind(_this2));
            window.addEventListener("resize", appNonStateInfo.resizeFunc);
            appNonStateInfo.resizeFunc();
          }, 50);
        });
      });
      window.addEventListener("resize", this.state.redirectFunc);
      window.addEventListener("resize", appNonStateInfo.resizeFunc);
      appNonStateInfo.resizeFunc();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (this.props.context) return;
      if (!["/", "/acting", "/film", "/politics", "/programming"].includes(this.props.location.pathname)) return;

      if (["", "acting", "film", "politics", "programming"].includes(appNonStateInfo.storyID)) {
        window.removeEventListener("resize", appNonStateInfo.resizeFunc);
        window.removeEventListener("resize", this.state.redirectFunc);
      } else {
        var links = document.querySelectorAll(".circleLink");
        links.forEach(function (link) {
          link.addEventListener("click", function (event) {
            appNonStateInfo.storyID = event.path[1].id;
            window.removeEventListener("resize", appNonStateInfo.resizeFunc);
            appNonStateInfo.resizeFunc = getStoryLineInfo.bind(_this3, appNonStateInfo.storyID, _this3.setState.bind(_this3));
            window.addEventListener("resize", appNonStateInfo.resizeFunc);
            appNonStateInfo.resizeFunc();
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.context) return;
      window.removeEventListener("resize", appNonStateInfo.resizeFunc);
      window.removeEventListener("resize", this.state.redirectFunc);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: ["/acting", "/film", "/politics", "/programming"],
        render: function render() {
          return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
            className: "storyLineHorizontal",
            style: {
              left: _this4.state.storyLineInfo.leftX,
              top: _this4.state.storyLineInfo.LeftY
            }
          }), _react["default"].createElement("div", {
            className: "storyLineHorizontal",
            style: {
              left: _this4.state.storyLineInfo.centerX,
              top: _this4.state.storyLineInfo.RightY
            }
          }), _react["default"].createElement("div", {
            className: "storyLineVertical",
            style: {
              left: _this4.state.storyLineInfo.centerX,
              top: _this4.state.storyLineInfo.topY,
              height: _this4.state.storyLineInfo.heightDiff
            }
          }));
        }
      }), _react["default"].createElement(_NavBar["default"], null), _react["default"].createElement("div", {
        id: "content"
      }, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: ["/", "/acting", "/film", "/politics", "/programming"],
        component: _MyStory["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/Resume",
        component: _Resume["default"],
        context: this.props.context
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/Projects",
        component: _Projects["default"],
        context: this.props.context
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/ContactMe",
        component: _ContactMe["default"]
      }), _react["default"].createElement(_reactRouterDom.Route, {
        path: "/",
        render: function render() {
          return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("h1", {
            style: {
              color: "white"
            }
          }, "404 Not Found. Sorry!"), _react["default"].createElement("p", {
            style: {
              color: "gray"
            }
          }, "400 Level Errors mean that the HTTP request you submitted was invalid."));
        }
      }))), _react["default"].createElement("div", {
        id: "footer"
      }, _react["default"].createElement("div", {
        id: "icons"
      }, _react["default"].createElement("a", {
        className: "icon",
        href: "https://github.com/willcpo"
      }, _react["default"].createElement("img", {
        src: "/img/github.png"
      })), _react["default"].createElement("a", {
        className: "icon",
        href: "https://www.linkedin.com/in/wcp227/"
      }, _react["default"].createElement("img", {
        src: "/img/linkedin.png"
      })), _react["default"].createElement("a", {
        className: "icon",
        href: "https://www.facebook.com/Willcpo"
      }, _react["default"].createElement("img", {
        src: "/img/facebook.png"
      }))), _react["default"].createElement("p", {
        id: "copyright"
      }, "\xA9 Will Powers 2019"), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: ["/", "/acting", "/film", "/politics", "/programming"],
        render: function render() {
          return _react["default"].createElement("div", {
            id: "attribution"
          }, "Icons made by ", _react["default"].createElement("a", {
            href: "https://www.freepik.com/",
            title: "Freepik"
          }, "Freepik"), " and ", _react["default"].createElement("a", {
            href: "https://www.flaticon.com/authors/roundicons",
            title: "Roundicons"
          }, "Roundicons"), " and ", _react["default"].createElement("a", {
            href: "https://www.flaticon.com/authors/vectors-market",
            title: "Vectors Market"
          }, "Vectors Market"), " from ", _react["default"].createElement("a", {
            href: "https://www.flaticon.com/",
            title: "Flaticon"
          }, "www.flaticon.com"));
        }
      })));
    }
  }]);

  return App;
}(_react["default"].Component);

function redirect() {
  if (this.props.history.location.pathname == "/" && window.innerWidth > 689) {
    this.props.history.push("/programming");
    appNonStateInfo.storyID = "programming";
    var thiss = this;
    setTimeout(function () {
      getStoryLineInfo.call(thiss, "programming", thiss.setState.bind(thiss));
    }, 50);
  }
}

function getStoryLineInfo(id, cb) {
  if (this.props.location.pathname == "/") return;
  if (!["/acting", "/film", "/politics", "/programming"].includes(this.props.location.pathname)) return;
  var display = document.querySelector(".display");
  var selected = document.querySelector("#" + id);
  var displayBoundingRect = display.getBoundingClientRect();
  var selectedBoundingRect = selected.getBoundingClientRect();
  var displayX = displayBoundingRect.x;
  var displayY = displayBoundingRect.y + window.scrollY;
  var displayWidth = displayBoundingRect.width;
  var displayHeight = displayBoundingRect.height;
  var selectedX = selectedBoundingRect.x;
  var selectedY = selectedBoundingRect.y + window.scrollY;
  var selectedHeight = selectedBoundingRect.height;
  cb({
    storyLineInfo: {
      leftX: displayX + displayWidth + "px",
      centerX: (displayX + displayWidth + selectedX) / 2 + "px",
      LeftY: displayY + displayHeight / 2 + "px",
      topY: Math.min(displayY + displayHeight / 2, selectedY + selectedHeight / 2) + 2 + "px",
      RightY: selectedY + selectedHeight / 2 + "px",
      heightDiff: Math.abs(displayY + displayHeight / 2 - (selectedY + selectedHeight / 2)) - 2 + "px"
    }
  });
}

var _default = (0, _reactRouterDom.withRouter)(App);

exports["default"] = _default;
//# sourceMappingURL=App.js.map