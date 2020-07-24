"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  flex: 1;\n  font-size: 1rem;\n  border solid 2px;\n  padding: 10px;\n  background: transparent;\n  outline: none;\n  color: inherit;\n  ::placeholder {\n    color: inherit;\n    opacity: 0.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents.default.input.attrs(function (props) {
  return {
    type: props.type || 'text'
  };
})(_templateObject(), (0, _lib.fontFamily)('primary'));

exports.Input = Input;

//# sourceMappingURL=Input.js.map