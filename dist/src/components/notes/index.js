"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoteContentEmpty = exports.NoteDate = exports.NoteContent = exports.NoteTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  margin: 2rem 0;\n  opacity: 0.5;\n  font-weight: bold;\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  position: relative;\n  top: 5px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  padding: 1rem;\n  border: 2px solid ", ";\n  flex: 1;\n  font-size: 1rem;\n  border-radius: 5px;\n  background: transparent;\n  outline: none;\n  display: block;\n  margin: 2rem 0;\n  width: 100%;\n  color: ", "\n  resize: none;\n  overflow: hidden;\n  min-height: 50px;\n  max-height: 100%;\n  ::placeholder {\n    color: ", ";\n    opacity: 0.5;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  color: ", ";\n  font-family: ", ";\n  font-size: 3rem;\n  height: 70px;\n  font-weight: bold;\n  outline: none;\n  width: 100%;\n  resize: none;\n  ::placeholder {\n    font-family: ", ";\n    opacity: 0.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NoteTitle = _styledComponents.default.textarea(_templateObject(), (0, _lib.color)('primary'), (0, _lib.fontFamily)('secondary'), (0, _lib.fontFamily)('primary'));

exports.NoteTitle = NoteTitle;

var NoteContent = _styledComponents.default.textarea(_templateObject2(), (0, _lib.fontFamily)('primary'), (0, _lib.color)('primary'), (0, _lib.color)('medium'), function (props) {
  return (0, _lib.color)('medium');
});

exports.NoteContent = NoteContent;

var NoteDate = _styledComponents.default.span(_templateObject3(), (0, _lib.fontFamily)('secondary'), function (props) {
  return (0, _lib.color)(props.color);
});

exports.NoteDate = NoteDate;

var NoteContentEmpty = _styledComponents.default.p(_templateObject4(), (0, _lib.color)('medium'), (0, _lib.fontFamily)('primary'), (0, _lib.fontSize)('lg'));

exports.NoteContentEmpty = NoteContentEmpty;

//# sourceMappingURL=index.js.map