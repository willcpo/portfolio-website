"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SliderMenu = _interopRequireDefault(require("./SliderMenu"));

var _projectInfo = _interopRequireDefault(require("../projectInfo"));

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
var Projects =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projects).call(this, props));
    _this.state = {
      projectNum: 0,
      githubLink: _projectInfo["default"][0].githubLink,
      infoRows: _projectInfo["default"][0].infoRows
    }; //Remember to set 'this' to the component for all custom functions

    _this.renderProject = _this.renderProject.bind(_assertThisInitialized(_this));
    _this.chooseProject = _this.chooseProject.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Projects, [{
    key: "renderProject",
    value: function renderProject() {
      return this.state.infoRows.map(function (row) {
        return _react["default"].createElement("div", {
          key: row.src,
          className: "projectRow"
        }, _react["default"].createElement("div", {
          className: "projectImg"
        }, _react["default"].createElement("img", {
          src: row.src
        })), _react["default"].createElement("div", {
          className: "projectText"
        }, _react["default"].createElement("p", null, row.text)));
      });
    }
  }, {
    key: "chooseProject",
    value: function chooseProject(projectNum) {
      this.setState({
        projectNum: projectNum,
        githubLink: _projectInfo["default"][projectNum].githubLink,
        infoRows: _projectInfo["default"][projectNum].infoRows
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_SliderMenu["default"], {
        context: this.props.context,
        chooseProject: this.chooseProject,
        projectNum: this.state.projectNum
      }), _react["default"].createElement("div", {
        className: "projectBox"
      }, this.renderProject()), _react["default"].createElement("a", {
        className: "githubLink",
        href: this.state.githubLink
      }, " \u21B3 Link to Github  "));
    }
  }]);

  return Projects;
}(_react["default"].Component);

var _default = Projects;
exports["default"] = _default;
//# sourceMappingURL=Projects.js.map