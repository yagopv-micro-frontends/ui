"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = exports.spacing = exports.fontSize = exports.fontFamily = exports.color = exports.theme = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n  }\n \n  body, #root {\n    font-family: ", ";\n    height: 100%;\n    background: ", ";\n    color: ", ";\n    line-height: 1.3em;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .gutter-horizontal {\n    cursor: ew-resize;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    color: ", ";\n  }\n  ::-webkit-scrollbar {\n    width: 3px;\n  }\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = {
  breakpoints: {
    xs: '(max-width: 576px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1140px)'
  },
  colors: {
    primary: '#F8C51D',
    secondary: '#C86818',
    separator: '#1B1B1B',
    medium: '#999999',
    dark: '#000',
    bright: '#FFF',
    ko: '#E92119',
    ok: '#3C8C20'
  },
  font: {
    family: {
      primary: '"Raleway", sans-serif',
      secondary: '"Oswald", sans-serif',
      special: '"Press Start 2P"'
    },
    size: {
      h1: '2rem',
      h2: '1.8rem',
      h3: '1.6rem',
      h4: '1.2rem',
      h5: '1rem',
      h6: '0.8rem',
      p: '0.8rem'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  }
};
exports.theme = theme;

var color = function color(_color) {
  return theme.colors[_color];
};

exports.color = color;

var fontFamily = function fontFamily(family) {
  return theme.font.family[family];
};

exports.fontFamily = fontFamily;

var fontSize = function fontSize(size) {
  return theme.font.size[size];
};

exports.fontSize = fontSize;

var spacing = function spacing(size) {
  return theme.spacing[size];
};

exports.spacing = spacing;
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), fontFamily('primary'), color('dark'), color('primary'), color('primary'), color('dark'), color('primary'), color('bright'));
exports.GlobalStyle = GlobalStyle;

//# sourceMappingURL=theme.js.map