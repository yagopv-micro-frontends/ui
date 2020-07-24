"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _layout = require("../layout");

var _lib = require("../../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: ", "\n  font-family: ", ";\n  font-size:  ", ";\n  text-transform:  ", ";\n  line-height: ", ";\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function isHeading(type) {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(type);
}

var truncatedMixin = (0, _styledComponents.css)(_templateObject());
var truncatedMultilineMixin = (0, _styledComponents.css)(_templateObject2());
var Text = (0, _styledComponents.default)(_layout.Box)(_templateObject3(), function (props) {
  return (0, _lib.color)(props.color) || 'inherit' || (isHeading(props.as) ? (0, _lib.color)('primary') : (0, _lib.color)('medium'));
}, function (props) {
  return props.background || (isHeading(props.as) ? '900' : '400');
}, function (props) {
  return (0, _lib.fontFamily)(props.fontFamily) || (isHeading(props.as) ? (0, _lib.fontFamily)('secondary') : (0, _lib.fontFamily)('primary'));
}, function (props) {
  return (0, _lib.fontSize)(props.as) || '0.8rem';
}, function (props) {
  return props.textTransform || (isHeading(props.as) ? 'uppercase' : 'none');
}, function (props) {
  return isHeading(props.as) && '2rem';
}, function (props) {
  return props.truncate === 1 && truncatedMixin;
}, function (props) {
  return props.truncate > 1 && truncatedMultilineMixin;
});
exports.Text = Text;

//# sourceMappingURL=index.js.map