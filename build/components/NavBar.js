"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LogoName = _interopRequireDefault(require("./LogoName"));

var _reactRouterDom = require("react-router-dom");

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

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    _classCallCheck(this, NavBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavBar).call(this, props));
    _this.state = {
      menu: "menu-closed",
      xButton: "xButton-off",
      nav: "Nav-Normal"
    };
    _this.showMenu = _this.showMenu.bind(_assertThisInitialized(_this));
    _this.closeMenu = _this.closeMenu.bind(_assertThisInitialized(_this));
    _this.checkMenuOpen = _this.checkMenuOpen.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NavBar, [{
    key: "showMenu",
    value: function showMenu() {
      var _this2 = this;

      this.setState({
        menu: "menu-opening"
      });
      setTimeout(function () {
        _this2.setState({
          menu: "menu-open",
          xButton: "xButton-on",
          nav: "Nav-Mobile"
        });
      }, 500);
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      var _this3 = this;

      this.setState({
        menu: "menu-closing",
        xButton: "xButton-off",
        nav: "Nav-Normal"
      });
      setTimeout(function () {
        _this3.setState({
          menu: "menu-closed"
        });
      }, 500);
    }
  }, {
    key: "checkMenuOpen",
    value: function checkMenuOpen() {
      if (this.state.menu == "menu-open") {
        this.closeMenu();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.props.location.pathname.split("/")[1];
      return _react["default"].createElement("div", {
        className: "Navbar"
      }, _react["default"].createElement("div", {
        className: "menu",
        id: this.state.menu
      }, " "), _react["default"].createElement(_LogoName["default"], null), _react["default"].createElement("div", {
        id: this.state.nav
      }, _react["default"].createElement(_reactRouterDom.Link, {
        className: "navItem",
        to: "/Programming",
        id: ["", "acting", "film", "politics", "programming"].includes(selected.toLowerCase()) ? "selected" : "",
        onClick: this.checkMenuOpen
      }, "My Story"), _react["default"].createElement(_reactRouterDom.Link, {
        className: "navItem",
        to: "/Resume",
        id: selected == "Resume" ? "selected" : "",
        onClick: this.checkMenuOpen
      }, "Resume"), _react["default"].createElement(_reactRouterDom.Link, {
        className: "navItem",
        to: "/Projects",
        id: selected == "Projects" ? "selected" : "",
        onClick: this.checkMenuOpen
      }, "Projects"), _react["default"].createElement(_reactRouterDom.Link, {
        className: "navItem",
        to: "/ContactMe",
        id: selected == "ContactMe" ? "selected" : "",
        onClick: this.checkMenuOpen
      }, "Contact Me")), _react["default"].createElement("img", {
        src: "/img/menu.png",
        id: "menuButton",
        onClick: this.showMenu
      }), _react["default"].createElement("img", {
        src: "/img/x.png",
        className: "xButton",
        id: this.state.xButton,
        onClick: this.closeMenu
      }));
    }
  }]);

  return NavBar;
}(_react["default"].Component);

var _default = (0, _reactRouterDom.withRouter)(NavBar);

exports["default"] = _default;
//# sourceMappingURL=NavBar.js.map