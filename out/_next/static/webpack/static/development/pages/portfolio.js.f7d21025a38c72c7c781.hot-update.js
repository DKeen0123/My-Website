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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tcolor: ", ";\n\tmargin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: normal;\n\tfont-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tborder: 1px solid rgba(0, 0, 0, 0.8);\n\tpadding: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n\tgrid-template-rows: 500px 500px;\n\tgrid-gap: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var PortfolioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])('32px'));
var PortfolioItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var PortfolioItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject3(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])('32px'));
var PortfolioItemDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject4(), function (props) {
  return props.theme.color.neutral.dark;
});

var PortfolioItem = function PortfolioItem(image, title, description) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_typography__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "My Recent Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: '../../static/sentimind.png',
    title: 'SentiMind',
    description: "A Twitter sentiment analysis tool, built over 9 days as part of the Makers Academy bootcamp course",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=portfolio.js.f7d21025a38c72c7c781.hot-update.js.map