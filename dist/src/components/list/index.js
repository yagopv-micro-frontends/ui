"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var List = _styledComponents.default.ul(_templateObject(), _lib.withColorProps, _lib.withSpacingProps);

exports.List = List;

var ListItem = _styledComponents.default.li(_templateObject2(), _lib.withColorProps, _lib.withSpacingProps);

exports.ListItem = ListItem;

//# sourceMappingURL=index.js.map