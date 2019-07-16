"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

//import * as api from "../api";
var interval = {
  amount: 0
};

var SliderMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderMenu, _React$Component);

  function SliderMenu(props) {
    var _this;

    _classCallCheck(this, SliderMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SliderMenu).call(this, props));
    _this.state = {
      links: ["Yelp Restaurant Finder", "News Wiz", "Planner Pet", "Net.js TCP/IP Server", "Teacher Gradebook Extraordinaire", "Emoji Connect Four", "Weather Data Report Generator", "Frogger Clone"]
    }; //Remember to set 'this' to the component for all custom functions

    _this.renderLinks = _this.renderLinks.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SliderMenu, [{
    key: "renderLinks",
    value: function renderLinks() {
      var _this2 = this;

      return this.state.links.map(function (link, index) {
        return _react["default"].createElement("span", {
          key: link,
          className: "sliderLink",
          id: _this2.props.projectNum == index ? "sliderSelected" : "",
          onClick: _this2.handleClick.bind(_this2, index)
        }, link);
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(num) {
      this.props.chooseProject(num);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.context) return;
      var leftArrow = document.querySelector(".triangleLeft");
      var rightArrow = document.querySelector(".triangleRight");
      var sliderMenu = document.querySelector("#sliderMenu"); // if (sliderMenu.scrollLeft<65){
      // 	leftArrow.style.display="none";
      // }

      sliderMenu.addEventListener("scroll", function () {
        if (sliderMenu.scrollLeft < 21) {
          leftArrow.style.display = "none";
        } else {
          leftArrow.style.display = "initial";
        }

        if (sliderMenu.scrollLeft > sliderMenu.scrollWidth - sliderMenu.getBoundingClientRect().width - 5) {
          rightArrow.style.display = "none";
        } else {
          rightArrow.style.display = "initial";
        }
      });
      var upLeft = up.bind(this, "left");
      var updateLeft = update.bind(this, -2, sliderMenu, upLeft);
      var downLeft = down.bind(this, updateLeft, "left");
      var upRight = up.bind(this, "right");
      var updateRight = update.bind(this, 2, sliderMenu, upRight);
      var downRight = down.bind(this, updateRight, "right");
      leftArrow.addEventListener("mousedown", downLeft);
      leftArrow.addEventListener("mouseup", upLeft);
      rightArrow.addEventListener("mousedown", downRight);
      rightArrow.addEventListener("mouseup", upRight);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("svg", {
        height: "71",
        width: "41",
        className: "triangleSVG triangleLeft",
        style: {
          display: "none"
        }
      }, _react["default"].createElement("polygon", {
        points: "31,20.5 31,50.5 10,35.5"
      })), _react["default"].createElement("svg", {
        height: "71",
        width: "41",
        className: "triangleSVG triangleRight"
      }, _react["default"].createElement("polygon", {
        points: "10,20.50 10,50.5 31,35.5"
      })), _react["default"].createElement("div", {
        id: "sliderMenu"
      }, this.renderLinks()));
    }
  }]);

  return SliderMenu;
}(_react["default"].Component);

function update(direction, menu, up) {
  var rect = menu.getBoundingClientRect();

  if (direction > 0 && menu.scrollLeft >= menu.scrollWidth - rect.width + 14) {
    menu.scrollLeft = menu.scrollWidth - rect.width + 114;
    up();
  } else if (direction < 0 && menu.scrollLeft <= 21) {
    menu.scrollLeft = 0;
    up();
  } else {
    menu.scrollLeft += direction;
  }
}

function down(update, side) {
  interval[side] = setInterval(update, 5);
}

function up(side) {
  clearInterval(interval[side]);
}

var _default = (0, _reactRouterDom.withRouter)(SliderMenu);

exports["default"] = _default;
//# sourceMappingURL=SliderMenu.js.map