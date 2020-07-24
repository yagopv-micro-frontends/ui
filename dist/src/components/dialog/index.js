"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = Dialog;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require(".");

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Dialog(_ref) {
  var children = _ref.children,
      onCancel = _ref.onCancel,
      onAccept = _ref.onAccept;
  return _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(ModalContainer, {
    justifyContent: "center",
    alignIntems: "center",
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(ModalWrapper, {
    alignItems: "center",
    direction: "column"
  }, /*#__PURE__*/_react.default.createElement(_.Text, {
    as: "h4",
    color: "dark"
  }, children), /*#__PURE__*/_react.default.createElement(_.Flex, {
    mt: "xl"
  }, /*#__PURE__*/_react.default.createElement(_.Button, {
    background: "bright",
    color: "dark",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_.Button, {
    background: "ko",
    ml: "md",
    onClick: onAccept
  }, "Accept")))), document.getElementById('root'));
}

var ModalContainer = (0, _styledComponents.default)(_.Flex)(_templateObject());
var ModalWrapper = (0, _styledComponents.default)(_.Flex)(_templateObject2(), (0, _lib.color)('primary'));

//# sourceMappingURL=index.js.map