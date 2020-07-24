"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownPreview = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lib = require("../../lib");

var _link = require("../link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", "\n  margin: 1rem 0;\n  overflow: hidden;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ", ";\n    font-family: ", ";\n    text-transform: uppercase;\n    margin: 30px 0;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.3rem;\n  }\n\n  h4 {\n    font-size: 1.1rem;\n  }\n\n  h5 {\n    font-size: 1rem;\n  }\n\n  h6 {\n    font-size: 0.8rem;\n  }\n\n  p {\n    font-size: 1rem;\n    margin: 20px 0;\n    color: ", ";\n    font-family: ", ";\n  }\n\n  a {\n    ", "\n  }\n\n  blockquote {\n    margin: 10px 0;\n    border-left: 5px solid ", ";\n    padding-left: 1rem;\n  }\n\n  pre {\n    padding: 10px;\n    background-color: ", ";\n    color: ", ";\n    border-radius: 5px;\n    overflow: auto;\n    ::-webkit-scrollbar-thumb {\n      background: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MarkdownPreview = _styledComponents.default.div(_templateObject(), (0, _lib.color)('medium'), (0, _lib.color)('primary'), (0, _lib.fontFamily)('secondary'), (0, _lib.color)('medium'), (0, _lib.fontFamily)('primary'), _link.linkMixin, (0, _lib.color)('primary'), (0, _lib.color)('medium'), (0, _lib.color)('dark'));

exports.MarkdownPreview = MarkdownPreview;

//# sourceMappingURL=index.js.map