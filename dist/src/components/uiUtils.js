"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withColorProps = exports.withOverflowProps = exports.withAlignmentProps = exports.withSpacingProps = void 0;

var _styledComponents = require("styled-components");

var _theme = require("./theme");

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var withSpacingProps = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var p = _ref.p;
  return p && "padding: ".concat((0, _theme.spacing)(p) || p, ";");
}, function (_ref2) {
  var m = _ref2.m;
  return m && "margin: ".concat((0, _theme.spacing)(m) || m, ";");
}, function (_ref3) {
  var pt = _ref3.pt;
  return pt && "padding-top: ".concat((0, _theme.spacing)(pt) || pt, ";");
}, function (_ref4) {
  var pr = _ref4.pr;
  return pr && "padding-right: ".concat((0, _theme.spacing)(pr) || pr, ";");
}, function (_ref5) {
  var pb = _ref5.pb;
  return pb && "padding-bottom: ".concat((0, _theme.spacing)(pb) || pb, ";");
}, function (_ref6) {
  var pl = _ref6.pl;
  return pl && "padding-left: ".concat((0, _theme.spacing)(pl) || pl, ";");
}, function (_ref7) {
  var mt = _ref7.mt;
  return mt && "margin-top: ".concat((0, _theme.spacing)(mt) || mt, ";");
}, function (_ref8) {
  var mr = _ref8.mr;
  return mr && "margin-right: ".concat((0, _theme.spacing)(mr) || mr, ";");
}, function (_ref9) {
  var mb = _ref9.mb;
  return mb && "margin-bottom: ".concat((0, _theme.spacing)(mb) || mb, ";");
}, function (_ref10) {
  var ml = _ref10.ml;
  return ml && "margin-left: ".concat((0, _theme.spacing)(ml) || ml, ";");
}, function (_ref11) {
  var px = _ref11.px;
  return px && "padding: 0 ".concat((0, _theme.spacing)(px), ";");
}, function (_ref12) {
  var py = _ref12.py;
  return py && "padding: ".concat((0, _theme.spacing)(py), " 0;");
}, function (_ref13) {
  var mx = _ref13.mx;
  return mx && "margin: 0 ".concat((0, _theme.spacing)(mx), ";");
}, function (_ref14) {
  var my = _ref14.my;
  return my && "margin: ".concat((0, _theme.spacing)(my), " 0;");
});
exports.withSpacingProps = withSpacingProps;
var withAlignmentProps = (0, _styledComponents.css)(_templateObject2(), function (_ref15) {
  var textAlign = _ref15.textAlign;
  return textAlign && "text-align: ".concat(textAlign, ";");
});
exports.withAlignmentProps = withAlignmentProps;
var withOverflowProps = (0, _styledComponents.css)(_templateObject3(), function (_ref16) {
  var overflowX = _ref16.overflowX;
  return overflowX && "overflow-y: ".concat(overflowX, ";");
}, function (_ref17) {
  var overflowY = _ref17.overflowY;
  return overflowY && "overflow-y: ".concat(overflowY, ";");
}, function (_ref18) {
  var overflow = _ref18.overflow;
  return overflow && "overflow: ".concat(overflow, ";");
});
exports.withOverflowProps = withOverflowProps;
var withColorProps = (0, _styledComponents.css)(_templateObject4(), function (_ref19) {
  var bg = _ref19.bg;
  return bg && "background: ".concat(bg, ";");
}, function (_ref20) {
  var color = _ref20.color;
  return color && "color: ".concat(color, ";");
});
exports.withColorProps = withColorProps;

//# sourceMappingURL=uiUtils.js.map