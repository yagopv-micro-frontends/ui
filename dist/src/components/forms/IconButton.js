"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-image: ", ";\n  width: ", ";\n  height: ", ";\n  background-color: transparent;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border: none;\n  font-size: 0;\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 0.7;\n  }\n  :active {\n    opacity: 1;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconButton = _styledComponents.default.button(_templateObject(), function (props) {
  return props.image;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, _lib.withSpacingProps);

exports.IconButton = IconButton;

//# sourceMappingURL=IconButton.js.map