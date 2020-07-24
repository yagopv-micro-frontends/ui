"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("./Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  height: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = (0, _styledComponents.default)(_Box.Box)(_templateObject(), function (props) {
  return props.alignItems;
}, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.fullHeight ? '100%' : 'auto';
});
exports.Flex = Flex;

//# sourceMappingURL=Flex.js.map