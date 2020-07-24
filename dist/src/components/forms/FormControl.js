"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 35px 0;\n  position: relative;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormControl = _styledComponents.default.div(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color || themeColor('primary');
});

exports.FormControl = FormControl;

//# sourceMappingURL=FormControl.js.map