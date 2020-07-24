"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Menu = _macro.default.section(_templateObject(), function (props) {
  return "\n    @media ".concat(props.size, " {\n      position: fixed;\n      width: 200px !important;\n      height: 100%;\n      transition: transform 0.3s ease-out;\n      transform: ").concat(props.isOpen ? 'translateX(0)' : 'translateX(-100%)', ";\n      background: ").concat((0, _lib.color)('black'), ";\n    }\n    @media ").concat(props.theme.breakpoints.md, " {\n      position: inherit;\n      width: auto;\n      height: 100%;\n    }\n  ");
});

exports.Menu = Menu;

//# sourceMappingURL=index.js.map