"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  font-size: 1rem;\n  border: 2px solid ", ";\n  border-radius: 5px;\n  padding: 10px;\n  background: transparent;\n  outline: none;\n  ::placeholder {\n    color: ", ";\n    opacity: 0.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Textarea = _styledComponents.default.textarea(_templateObject(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.Textarea = Textarea;

//# sourceMappingURL=Textarea.js.map