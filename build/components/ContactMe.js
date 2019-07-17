"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//import * as api from "../api";
var ContactMe =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactMe, _React$Component);

  function ContactMe() {
    _classCallCheck(this, ContactMe);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContactMe).apply(this, arguments));
  }

  _createClass(ContactMe, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: "contactPage"
      }, _react["default"].createElement("div", {
        className: "contactFirstRow"
      }, _react["default"].createElement("div", {
        className: "personalSection"
      }, _react["default"].createElement("div", {
        className: "myImage"
      }, _react["default"].createElement("img", {
        src: "img/me.jpg"
      })), _react["default"].createElement("div", {
        className: "locationInfo"
      }, _react["default"].createElement("p", null, _react["default"].createElement("em", null, "Based in"), " ", _react["default"].createElement("br", null), _react["default"].createElement("b", null, "Fairfield, CT, USA")), _react["default"].createElement("p", null, _react["default"].createElement("em", null, "Moving to"), _react["default"].createElement("br", null), _react["default"].createElement("b", null, "San Francisco, California")))), _react["default"].createElement("div", {
        className: "contactSection cs2"
      }, _react["default"].createElement("div", {
        className: "contactInfo"
      }, _react["default"].createElement("p", null, _react["default"].createElement("em", null, "Email"), " ", _react["default"].createElement("br", null), _react["default"].createElement("img", {
        src: "/img/E.png"
      }))), _react["default"].createElement("div", {
        className: "contactInfo"
      }, _react["default"].createElement("p", null, _react["default"].createElement("em", null, "Phone Number"), _react["default"].createElement("br", null), _react["default"].createElement("img", {
        src: "/img/TP.png"
      })))), _react["default"].createElement("div", {
        className: "tempColumn"
      }, _react["default"].createElement("div", {
        className: "contactInfoSection"
      }, _react["default"].createElement("p", null, "Hi! Thanks for visiting my website! I really appreciate your support. I'm currently looking for a career in front-end, back-end and full stack development, specifically in Java and web development.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "Please contact me with any projects you hope for me to work on. I am excited to connect and prove my skills.")), _react["default"].createElement("div", {
        className: "contactSection cs1"
      }, _react["default"].createElement("div", {
        className: "contactInfo"
      }, _react["default"].createElement("p", null, _react["default"].createElement("em", null, "Email"), " ", _react["default"].createElement("br", null), _react["default"].createElement("img", {
        src: "/img/E.png"
      }))), _react["default"].createElement("div", {
        className: "contactInfo"
      }, _react["default"].createElement("p", null, _react["default"].createElement("em", null, "Phone Number"), _react["default"].createElement("br", null), _react["default"].createElement("img", {
        src: "/img/TP.png"
      })))))), _react["default"].createElement("div", {
        className: "socialRow"
      }, _react["default"].createElement("a", {
        href: "https://github.com/willcpo",
        className: "socialMedia"
      }, _react["default"].createElement("img", {
        src: "/img/githubBig.png"
      }), _react["default"].createElement("p", null, "Pull My Repositories")), _react["default"].createElement("a", {
        href: "https://www.linkedin.com/in/wcp227/",
        className: "socialMedia"
      }, _react["default"].createElement("img", {
        src: "/img/linkedinBig.png"
      }), _react["default"].createElement("p", null, "Connect With Me")), _react["default"].createElement("a", {
        href: "https://www.facebook.com/Willcpo",
        className: "socialMedia"
      }, _react["default"].createElement("img", {
        src: "/img/facebookBig.png"
      }), _react["default"].createElement("p", null, "Friend and Follow")))));
    }
  }]);

  return ContactMe;
}(_react["default"].Component);

var _default = ContactMe;
exports["default"] = _default;
//# sourceMappingURL=ContactMe.js.map