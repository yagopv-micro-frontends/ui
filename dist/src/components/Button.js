"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("./theme");

var _uiUtils = require("./uiUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  transition: all 0.2s;\n  min-width: 100px;\n  padding: 10px 20px;\n  font-size: 1rem;\n  background: ", ";\n  text-transform: uppercase;\n  color: ", ";\n  outline: none;\n  cursor: pointer;\n  height: 50px;\n  :hover {\n    background: ", ";\n    color: ", ";\n    border: 2px solid ", ";\n    font-weight: bold;\n  }\n  :active {\n    transform: translateY(2px);\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), (0, _theme.fontFamily)('secondary'), function (props) {
  return (0, _theme.color)(props.background || 'secondary');
}, function (props) {
  return (0, _theme.color)(props.color || 'bright');
}, (0, _theme.color)('bright'), (0, _theme.color)('secondary'), (0, _theme.color)('secondary'), _uiUtils.withSpacingProps);

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map