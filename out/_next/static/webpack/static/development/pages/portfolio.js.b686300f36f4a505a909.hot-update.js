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

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\topacity: 0;\n\ttransition: opacity 0.25s ease-in-out;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tbottom: 5%;\n\tright: 5%;\n\tposition: absolute;\n\tmargin: 0;\n\tz-index: 10;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tleft: 5%;\n\ttop: 0;\n\tposition: absolute;\n\tfont-weight: normal;\n\tfont-size: ", ";\n\tmargin: 0;\n\tz-index: 10;\n\n\t&:after {\n\t\tcontent: \"\";\n\t\tborder-bottom: 1px solid ", ";\n\t\twidth: 20%;\n\t\tdisplay: block;\n\t\tz-index: 10;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tmax-width: 100%;\n\tmin-height: 100%;\n\tdisplay: block;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tleft: 40%;\n\tbottom: 40%;\n\tz-index: 10;\n\n\t&:hover {\n\t\tcursor: pointer;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba(0, 0, 0, 0.8); /* Black background with opacity */\n\tz-index: 2; /* Specify a stack order in case you're using a different order for other elements */\n"]);

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
var GithubIconOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject4());
var PortfolioItemImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject5());
var PortfolioItemHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject6(), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])('32px'), function (props) {
  return props.theme.colors.neutral.xlight;
});
var PortfolioItemDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject7());
var OverlayWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());

var PortfolioItem = function PortfolioItem(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      githubLink = _ref.githubLink;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OverlayWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemOverlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: githubLink,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GithubIconOverlay, {
    src: "../../static/Github-Mark-Light.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItemImage, {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }));
};

var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_typography__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "My Recent Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/sentimind.png",
    title: "SentiMind",
    description: "A Twitter sentiment analysis tool",
    githubLink: "https://github.com/DKeen0123/SentiMind",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/wellmo.png",
    title: "WellMo",
    description: "A mood check in tool",
    githubLink: "https://github.com/DKeen0123/WellMo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/sick-fits.png",
    title: "Sick Fits",
    description: "A retail store using Next.js and GraphQL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PortfolioItem, {
    image: "../../static/quote-machine.png",
    title: "Random Quote Machine",
    description: "A Random quote generator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=portfolio.js.b686300f36f4a505a909.hot-update.js.map