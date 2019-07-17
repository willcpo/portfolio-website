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
var MyStory =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyStory, _React$Component);

  function MyStory(props) {
    var _this;

    _classCallCheck(this, MyStory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyStory).call(this, props));
    _this.state = {
      storyLineInfo: {
        leftX: "-100px",
        centerX: "-100px",
        topY: "-100px",
        bottomY: "-100px",
        heightDiff: "0px"
      }
    };
    _this.resize = _this.resize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MyStory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.context) return;
      var links = document.querySelectorAll(".circleLink");
      links.forEach(function (link) {
        link.addEventListener("click", function () {
          setTimeout(function () {
            _this2.resize();
          }, 200);
        });
      });
      window.addEventListener("resize", this.resize);
      setTimeout(function () {
        _this2.resize.call();
      }, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.context) return;
      window.removeEventListener("resize", this.resize);
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this3 = this;

      if (this.props.history.location.pathname == "/") {
        if (window.innerWidth > 689) {
          this.props.history.push("/programming");
          setTimeout(function () {
            _this3.resize.call();
          }, 50);
          return;
        } else {
          return;
        }
      }

      var display = document.querySelector(".display");
      var selected = document.querySelector(".selectedStory");
      var timeline = document.querySelector(".timeline");
      var displayBoundingRect = display.getBoundingClientRect();
      var selectedBoundingRect = selected.getBoundingClientRect();
      var displayX = display.offsetLeft;
      var displayY = display.offsetTop;
      var displayWidth = displayBoundingRect.width;
      var displayHeight = displayBoundingRect.height;
      var selectedX = timeline.offsetLeft;
      var selectedY = selected.offsetTop + 50;
      var selectedHeight = selectedBoundingRect.height;
      this.setState({
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
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("h1", {
        className: "pageTitle storyPageTitle"
      }, "My Story"), _react["default"].createElement("div", {
        id: "centeredContent"
      }, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/acting",
        render: function render() {
          return _react["default"].createElement("div", {
            className: "display"
          }, _react["default"].createElement(_reactRouterDom.Link, {
            to: "/"
          }, _react["default"].createElement("img", {
            src: "/img/x.png",
            className: "xButton xButton-display"
          })), _react["default"].createElement("div", {
            className: "storyContent"
          }, _react["default"].createElement("h2", {
            className: "storyTitle"
          }, "Singing & Acting"), _react["default"].createElement("p", {
            className: "storyParagraph"
          }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Since I can remember, I have always been a performer. I joined the chorus in high school and middle school and have had the privilege of performing solos in school concerts. I have sung and acted in countless film projects of myself and my friends, as well as many school plays.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0I received a state award in performing arts for my contributions, including my daily role as the morning announcer in high school.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "Such roles include The Cowardly Lion in \u201CThe Wizard of Oz\u201D, Fagin in \u201COliver\u201D and Macbeth in \u201CMacbeth\u201D.")));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/film",
        render: function render() {
          return _react["default"].createElement("div", {
            className: "display"
          }, _react["default"].createElement(_reactRouterDom.Link, {
            to: "/"
          }, _react["default"].createElement("img", {
            src: "/img/x.png",
            className: "xButton xButton-display"
          })), _react["default"].createElement("div", {
            className: "storyContent"
          }, _react["default"].createElement("h2", {
            className: "storyTitle"
          }, "Film & Animation"), _react["default"].createElement("p", {
            className: "storyParagraph"
          }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Since childhood I wrote, filmed and edited many of my own digital video projects using Final Cut, Adobe Premiere and various other projects.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0At Emerson College, I pursued those interests, developing a keen eye in the art of aesthetics and narrative, as well as developing a profound interest and skillset in animation, which I found technically engaging and incredibly flexible as a communication medium.")));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/politics",
        render: function render() {
          return _react["default"].createElement("div", {
            className: "display"
          }, _react["default"].createElement(_reactRouterDom.Link, {
            to: "/"
          }, _react["default"].createElement("img", {
            src: "/img/x.png",
            className: "xButton xButton-display"
          })), _react["default"].createElement("div", {
            className: "storyContent"
          }, _react["default"].createElement("h2", {
            className: "storyTitle"
          }, "Political Science"), _react["default"].createElement("p", {
            className: "storyParagraph"
          }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0While pursuing film, I wrote almost exclusively about history and science. My frustration grew as I began to realize that film was not a sufficient enough medium to convey intricate and grand ideas about our world and to sway public opinion.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0To study exactly how the trajectory of history and science can be shaped, I decided to leave Emerson and transfer to NYU to study political science.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0In studying game theory and statistical analysis, I hoped to understand the mechanisms in which historical and technological change can manifest itself within society and government.")));
        }
      }), _react["default"].createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/programming",
        render: function render() {
          return _react["default"].createElement("div", {
            className: "display"
          }, _react["default"].createElement(_reactRouterDom.Link, {
            to: "/"
          }, _react["default"].createElement("img", {
            src: "/img/x.png",
            className: "xButton xButton-display"
          })), _react["default"].createElement("div", {
            className: "storyContent"
          }, _react["default"].createElement("h2", {
            className: "storyTitle"
          }, "Computer Programming"), _react["default"].createElement("p", {
            className: "storyParagraph"
          }, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0While I deeply enjoyed learning about politics through the lens of game theory and statistical analysis, I realized that that career trajectory would not lead me to help implement technological and historical triumphs. For that, my eyes turned toward the society-changing sectors of software and web technologies.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0The extension of human thought and memory, facilitated by communication and software technologies have allowed humans to understand more about their world and expand their potentials. That is a revolution of human history that I would like to be a part of.", _react["default"].createElement("br", null), _react["default"].createElement("br", null), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0That is exactly why I chose to change my major once again and graduate Magna Cum Laude, majoring in Computer Science with a GPA of 3.95")));
        }
      })), _react["default"].createElement(_reactRouterDom.Route, {
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
      }), _react["default"].createElement("div", {
        className: "timeline"
      }, _react["default"].createElement("div", {
        className: "line"
      }), _react["default"].createElement(_reactRouterDom.Link, {
        className: this.props.location.pathname.toLowerCase() == "/acting" ? "selectedStory circleLink" : "circleLink",
        id: "acting",
        to: "/acting"
      }, _react["default"].createElement("img", {
        src: "/img/theater.svg",
        className: "circle"
      })), _react["default"].createElement(_reactRouterDom.Link, {
        className: this.props.location.pathname.toLowerCase() == "/film" ? "selectedStory circleLink" : "circleLink",
        id: "film",
        to: "/film"
      }, _react["default"].createElement("img", {
        src: "/img/clapperboard.svg",
        className: "circle"
      })), _react["default"].createElement(_reactRouterDom.Link, {
        className: this.props.location.pathname.toLowerCase() == "/politics" ? "selectedStory circleLink" : "circleLink",
        id: "politics",
        to: "/politics"
      }, _react["default"].createElement("img", {
        src: "/img/capitol.svg",
        className: "circle"
      })), _react["default"].createElement(_reactRouterDom.Link, {
        className: this.props.location.pathname.toLowerCase() == "/programming" ? "selectedStory circleLink" : "circleLink",
        id: "programming",
        to: "/programming"
      }, _react["default"].createElement("img", {
        src: "/img/analytics.svg",
        className: "circle"
      })))));
    }
  }]);

  return MyStory;
}(_react["default"].Component);

var _default = (0, _reactRouterDom.withRouter)(MyStory);

exports["default"] = _default;
//# sourceMappingURL=MyStory.js.map