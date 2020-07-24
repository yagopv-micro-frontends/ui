"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: 0.5rem center;\n  padding: 0.5rem 0.5rem 0.5rem 2.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconInput = (0, _styledComponents.default)(Input)(_templateObject(), function (props) {
  return props.image;
});
exports.IconInput = IconInput;

//# sourceMappingURL=IconInput.js.map