"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ResumeJSON = _interopRequireDefault(require("../ResumeJSON.js"));

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
var Resume =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Resume, _React$Component);

  function Resume(props) {
    var _this;

    _classCallCheck(this, Resume);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Resume).call(this, props)); //Remember to set 'this' to the component for all custom functions

    _this.renderResume = _this.renderResume.bind(_assertThisInitialized(_this));
    _this.renderRowCategories = _this.renderRowCategories.bind(_assertThisInitialized(_this));
    _this.renderRowLeaves = _this.renderRowLeaves.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Resume, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var collapsable = document.querySelectorAll(".rowNum0, .rowNum1, .rowNum2, .rowNum3, .rowNum4");

      var _loop = function _loop(i) {
        collapsable[i].addEventListener("click touch", function () {
          var content = this.nextElementSibling;

          if (content.style.maxHeight) {
            content.style.maxHeight = null;
            collapsable[i].firstChild.src = "img/collapsed.png";
          } else {
            var node = content;
            var index = 0;

            while (!node.classList.contains("resumeContent")) {
              var func = function func(node, index) {
                for (var _i = 0; _i <= index; _i++) {
                  node.style.maxHeight = node.scrollHeight + "px";
                }
              };

              setTimeout(func.bind(this, node, index), 200 * index++);
              node.previousElementSibling.firstChild.src = "img/expanded.png";
              node = node.parentElement.parentElement;
            }
          }
        });
      };

      for (var i = 0; i < collapsable.length; i++) {
        _loop(i);
      }

      var topLevelRows = document.querySelector(".resumeContent").childNodes;
      topLevelRows[1].firstChild.click();
      setTimeout(function () {
        topLevelRows[1].childNodes[1].firstChild.firstChild.click();
      }, 200);
      setTimeout(function () {
        topLevelRows[1].childNodes[1].firstChild.childNodes[1].childNodes[1].firstChild.click();
      }, 400);
      topLevelRows[2].firstChild.click();
      topLevelRows[4].firstChild.click();
    }
  }, {
    key: "renderResume",
    value: function renderResume() {
      var _this2 = this;

      return Object.keys(_ResumeJSON["default"]).map(function (name, index) {
        return _react["default"].createElement("div", {
          key: "A" + index
        }, _react["default"].createElement("div", {
          className: "resumeRow category rowNum0"
        }, _react["default"].createElement("img", {
          className: "resumeArrow",
          src: "/img/collapsed.png"
        }), _react["default"].createElement("p", {
          className: "resumeText"
        }, name)), _react["default"].createElement("div", {
          className: "collapsedcontent"
        }, _this2.renderRowCategories(_ResumeJSON["default"][name], "A" + index, 1)));
      });
    }
  }, {
    key: "renderRowCategories",
    value: function renderRowCategories(object, key, rowNum) {
      var _this3 = this;

      return Object.keys(object).map(function (name, index) {
        if (name == "Info") {
          return _react["default"].createElement("div", {
            key: "C" + key + index
          }, _react["default"].createElement("div", {
            className: "resumeRow leaf info rowNum" + rowNum
          }, _react["default"].createElement("img", {
            className: "resumeDot",
            src: "/img/LeafRowHandle.png"
          }), _react["default"].createElement("p", {
            className: "resumeText"
          }, object[name][0])), _react["default"].createElement("div", {
            className: "resumeRow leaf info rowNum" + rowNum
          }, _react["default"].createElement("img", {
            className: "resumeDot",
            src: "/img/LeafRowHandle.png"
          }), _react["default"].createElement("p", {
            className: "resumeText"
          }, object[name][1])));
        } else if (Array.isArray(object[name])) {
          return _react["default"].createElement("div", {
            key: key + "D" + index
          }, _react["default"].createElement("div", {
            className: "resumeRow category rowNum" + rowNum
          }, _react["default"].createElement("img", {
            className: "resumeArrow",
            src: "/img/collapsed.png"
          }), _react["default"].createElement("p", {
            className: "resumeText"
          }, name)), _react["default"].createElement("div", {
            className: "collapsedcontent"
          }, _this3.renderRowLeaves(object[name], key + "E" + index, rowNum + 1)));
        } else {
          return _react["default"].createElement("div", {
            key: key + "D" + index
          }, _react["default"].createElement("div", {
            className: "resumeRow category rowNum" + rowNum
          }, _react["default"].createElement("img", {
            className: "resumeArrow",
            src: "/img/collapsed.png"
          }), _react["default"].createElement("p", {
            className: "resumeText"
          }, name)), _react["default"].createElement("div", {
            className: "collapsedcontent"
          }, _this3.renderRowCategories(object[name], key + "E" + index, rowNum + 1)));
        }
      });
    }
  }, {
    key: "renderRowLeaves",
    value: function renderRowLeaves(array, key, rowNum) {
      return array.map(function (row, index) {
        return _react["default"].createElement("div", {
          className: "resumeRow leaf rowNum" + rowNum,
          key: key + index
        }, _react["default"].createElement("img", {
          className: "resumeDot",
          src: "/img/LeafRowHandle.png"
        }), _react["default"].createElement("p", {
          className: "resumeText"
        }, row));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "resumeContent"
      }, _react["default"].createElement("a", {
        href: "/Resume-Will-Powers.pdf ",
        download: true,
        className: "pdf"
      }, "\u2B07\uFE0E Download PDF"), this.renderResume());
    }
  }]);

  return Resume;
}(_react["default"].Component);

var _default = Resume;
exports["default"] = _default;
//# sourceMappingURL=Resume.js.map