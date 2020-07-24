"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpacityContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: opacity 0.3s ease-in;\n  opacity: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OpacityContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.activated ? props.unit || 0.5 : 1;
});

exports.OpacityContainer = OpacityContainer;

//# sourceMappingURL=index.js.map