"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _theme = require("./theme");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n  }\n \n  body, #root {\n    font-family: ", ";\n    height: 100%;\n    background: ", ";\n    color: ", ";\n    line-height: 1.3em;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .gutter-horizontal {\n    cursor: ew-resize;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    color: ", ";\n  }\n  ::-webkit-scrollbar {\n    width: 3px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _styledComponents.createGlobalStyle)(_templateObject(), (0, _theme.fontFamily)('primary'), (0, _theme.color)('dark'), (0, _theme.color)('primary'), (0, _theme.color)('primary'), (0, _theme.color)('dark'), (0, _theme.color)('primary'), (0, _theme.color)('bright'));

exports.default = _default;

//# sourceMappingURL=global-style.js.map