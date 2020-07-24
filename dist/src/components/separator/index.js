"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Separator = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 2px;\n  margin: 10px 0;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Separator = _styledComponents.default.hr(_templateObject(), (0, _lib.color)('medium'));

exports.Separator = Separator;

//# sourceMappingURL=index.js.map