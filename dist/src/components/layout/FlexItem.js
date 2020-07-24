"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("./Box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexItem = (0, _styledComponents.default)(_Box.Box)(_templateObject(), function (props) {
  return props.grow;
});
exports.FlexItem = FlexItem;

//# sourceMappingURL=FlexItem.js.map