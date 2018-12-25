webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/Portfolio/index.js":
/*!***************************************!*\
  !*** ./components/Portfolio/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _style_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/typography */ "./components/style/typography/index.js");
var _jsxFileName = "/Users/danielkeen/Development/personal-site/components/Portfolio/index.js";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tbottom: 5%;\n\tright: 10%;\n\tposition: absolute;\n\tmargin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tleft: 5%;\n\ttop: 0;\n\tposition: absolute;\n\tfont-weight: normal;\n\tfont-size: ", ";\n\tmargin: 0;\n\n\t&:after {\n\t\tcontent: \"\";\n\t\tborder-bottom: 1px solid ", ";\n\t\twidth: 20%;\n\t\tdisplay: block;\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["max-width: 100%;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t/* display: none; */\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba(0, 0, 0, 0.2); /* Black background with opacity */\n\tz-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tcolor: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-gap: ", ";\n\n\t@media (max-width: 868px) {\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-template-rows: 1fr;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])('32px'));
var PortfolioItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), function (props) {
  return props.theme.colors.neutral.xlight;
});
var PortfolioItemOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var PortfolioItemImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4());
var PortfolioItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject5(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])('32px'), function (props) {
  return props.theme.colors.neutral.xlight;
});
var PortfolioItemDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject6());

var PortfolioItem = function PortfolioItem(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemOverlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemImage, {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_typography__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "My Recent Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/sentimind.png",
    title: "SentiMind",
    description: "A Twitter sentiment analysis tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/sentimind.png",
    title: "SentiMind",
    description: "A Twitter sentiment analysis tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/sentimind.png",
    title: "SentiMind",
    description: "A Twitter sentiment analysis tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/sentimind.png",
    title: "SentiMind",
    description: "A Twitter sentiment analysis tool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=portfolio.js.ca0c179cde33e1c97f69.hot-update.js.map