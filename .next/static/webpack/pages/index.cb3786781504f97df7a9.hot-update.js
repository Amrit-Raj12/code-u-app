self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Theme/ThemeSwitcher */ "./src/components/Theme/ThemeSwitcher.js");
/* harmony import */ var _public_logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/logo-white.jpg */ "./public/logo-white.jpg");
/* harmony import */ var _public_logo_black_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/logo-black.png */ "./public/logo-black.png");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Header\\header.js",
    _this = undefined;






var themeOptions = ['default', '3024-day', '3024-night', 'abbott', 'abcdef', 'ambiance', 'ayu-dark', 'ayu-mirage', 'base16-dark', 'base16-light', 'bespin', 'blackboard', 'cobalt', 'colorforth', 'dracula'];

var Header = function Header(_ref) {
  var setThemeValue = _ref.setThemeValue,
      setTheme = _ref.setTheme,
      theme = _ref.theme;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "nav ".concat(theme ? 'theme-dark' : 'theme-light'),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "checkbox",
      id: "nav-check"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "nav-title ".concat(theme ? '' : 'nav-title-light'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
          src: theme ? _public_logo_black_png__WEBPACK_IMPORTED_MODULE_4__.default : _public_logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          width: 30,
          height: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-links ".concat(theme ? '' : 'nav-links-light'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.default, {
        setTheme: setTheme,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        style: {
          fontSize: '14px'
        },
        children: "Choose Editor Themes "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        className: "".concat(theme ? 'theme-dark' : 'theme-light'),
        defaultValue: "ayu-dark",
        onChange: function onChange(e) {
          return setThemeValue(e.target.value);
        },
        children: themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: item,
            children: item
          }, item + index, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this) // <div className={`header-container ${theme ? 'theme-dark' : 'theme-light'}`}>
  //   <div>Logo</div>
  //     <>
  //       <ThemeSwitcher setTheme={setTheme} theme={theme} />
  //     </>
  //   <div className='header-right-box'>
  //     <select defaultValue='ayu-dark' onChange={(e) => setThemeValue(e.target.value)}>
  //       {themeOptions?.map((item, index) => (
  //         <option key={item+index} value={item}>{item}</option>
  //       ))}
  //     </select>
  //   </div>
  // </div>
  ;
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./public/logo-black.png":
/*!*******************************!*\
  !*** ./public/logo-black.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/logo-black.afc85c8fe31927f20a9e65366ae3c8fe.png","height":517,"width":482,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAgElEQVR42mNgYGZl4DVnXy6gysbAwMLAwMAdz7mR9Qjneu5wBgYGttmcC0zYmPcxMHBsYZ/BwL6H/SjrOa7FrGc59rMeYGA7w7GWrZd9D9sk9q0sZxnY6zg2SUqwLpUXZd/LUQYyyon9IMtTjr08lgxAwMrOICrIVSTNxcnAwAoAF4wZyahLjloAAAAASUVORK5CYII="});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2xvZ28tYmxhY2sucG5nIl0sIm5hbWVzIjpbInRoZW1lT3B0aW9ucyIsIkhlYWRlciIsInNldFRoZW1lVmFsdWUiLCJzZXRUaGVtZSIsInRoZW1lIiwiYmxhY2tMb2dvIiwid2hpdGVMb2dvIiwiZm9udFNpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQ2pCLFNBRGlCLEVBRWpCLFVBRmlCLEVBR2pCLFlBSGlCLEVBSWpCLFFBSmlCLEVBS2pCLFFBTGlCLEVBTWpCLFVBTmlCLEVBT2pCLFVBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLGFBVGlCLEVBVWpCLGNBVmlCLEVBV2pCLFFBWGlCLEVBWWpCLFlBWmlCLEVBYWpCLFFBYmlCLEVBY2pCLFlBZGlCLEVBZWpCLFNBZmlCLENBQXJCOztBQWtCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF3QztBQUFBLE1BQXJDQyxhQUFxQyxRQUFyQ0EsYUFBcUM7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRW5ELHNCQUVJO0FBQUssYUFBUyxnQkFBU0EsS0FBSyxHQUFHLFlBQUgsR0FBa0IsYUFBaEMsQ0FBZDtBQUFBLDRCQUNJO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLHNCQUFlQSxLQUFLLEdBQUcsRUFBSCxHQUFRLGlCQUE1QixDQUFkO0FBQUEsK0JBRUksOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVBLEtBQUssR0FBR0MsMkRBQUgsR0FBZUMsMkRBQWhDO0FBQTJDLGVBQUssRUFBRSxFQUFsRDtBQUFzRCxnQkFBTSxFQUFFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBUUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQU8sZUFBTyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBZ0JJO0FBQUssZUFBUyxzQkFBZUYsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQWUsZ0JBQVEsRUFBRUQsUUFBekI7QUFBbUMsYUFBSyxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFPLGFBQUssRUFBRTtBQUFFRyxrQkFBUSxFQUFFO0FBQVosU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0k7QUFBUSxpQkFBUyxZQUFLSCxLQUFLLEdBQUcsWUFBSCxHQUFrQixhQUE1QixDQUFqQjtBQUE4RCxvQkFBWSxFQUFDLFVBQTNFO0FBQXNGLGdCQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSxpQkFBT04sYUFBYSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLFNBQWhHO0FBQUEsa0JBQ0tWLFlBREwsYUFDS0EsWUFETCx1QkFDS0EsWUFBWSxDQUFFVyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUNmO0FBQTJCLGlCQUFLLEVBQUVELElBQWxDO0FBQUEsc0JBQXlDQTtBQUF6QyxhQUFhQSxJQUFJLEdBQUdDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosQ0FnQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0o7QUE4Q0gsQ0FoREQ7O0tBQU1aLE07QUFrRE4sK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQSwrREFBZ0IsQ0FBQywwSUFBMEksaVFBQWlRLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2IzNzg2NzgxNTA0Zjk3ZGY3YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSAnLi4vVGhlbWUvVGhlbWVTd2l0Y2hlcidcclxuaW1wb3J0IHdoaXRlTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nby13aGl0ZS5qcGcnO1xyXG5pbXBvcnQgYmxhY2tMb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9sb2dvLWJsYWNrLnBuZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuY29uc3QgdGhlbWVPcHRpb25zID0gW1xyXG4gICAgJ2RlZmF1bHQnLFxyXG4gICAgJzMwMjQtZGF5JyxcclxuICAgICczMDI0LW5pZ2h0JyxcclxuICAgICdhYmJvdHQnLFxyXG4gICAgJ2FiY2RlZicsXHJcbiAgICAnYW1iaWFuY2UnLFxyXG4gICAgJ2F5dS1kYXJrJyxcclxuICAgICdheXUtbWlyYWdlJyxcclxuICAgICdiYXNlMTYtZGFyaycsXHJcbiAgICAnYmFzZTE2LWxpZ2h0JyxcclxuICAgICdiZXNwaW4nLFxyXG4gICAgJ2JsYWNrYm9hcmQnLFxyXG4gICAgJ2NvYmFsdCcsXHJcbiAgICAnY29sb3Jmb3J0aCcsXHJcbiAgICAnZHJhY3VsYScsXHJcbl1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHNldFRoZW1lVmFsdWUsIHNldFRoZW1lLCB0aGVtZSB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYgJHt0aGVtZSA/ICd0aGVtZS1kYXJrJyA6ICd0aGVtZS1saWdodCd9YH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm5hdi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGl0bGUgJHt0aGVtZSA/ICcnIDogJ25hdi10aXRsZS1saWdodCd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXt3aGl0ZUxvZ299IHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gYWx0PSdsb2dvJyAvPiAgQ29kZS1VLUFwcCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aGVtZSA/IGJsYWNrTG9nbyA6IHdoaXRlTG9nb30gd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2LWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LWxpbmtzICR7dGhlbWUgPyAnJyA6ICduYXYtbGlua3MtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lU3dpdGNoZXIgc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19PkNob29zZSBFZGl0b3IgVGhlbWVzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YCR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9IGRlZmF1bHRWYWx1ZT0nYXl1LWRhcmsnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGVtZU9wdGlvbnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0gKyBpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItY29udGFpbmVyICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgIC8vICAgPGRpdj5Mb2dvPC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDw+XHJcbiAgICAgICAgLy8gICAgICAgPFRoZW1lU3dpdGNoZXIgc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcbiAgICAgICAgLy8gICAgIDwvPlxyXG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1yaWdodC1ib3gnPlxyXG4gICAgICAgIC8vICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT0nYXl1LWRhcmsnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgIC8vICAgICAgIHt0aGVtZU9wdGlvbnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAvLyAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtK2luZGV4fSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgLy8gICAgICAgKSl9XHJcbiAgICAgICAgLy8gICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIC8vICAgPC9kaXY+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2xvZ28tYmxhY2suYWZjODVjOGZlMzE5MjdmMjBhOWU2NTM2NmFlM2M4ZmUucG5nXCIsXCJoZWlnaHRcIjo1MTcsXCJ3aWR0aFwiOjQ4MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFjQUFBQUlDQVFBQUFDZkRTMk5BQUFBZ0VsRVFWUjQybU5nWUdabDREVm5YeTZneXNiQXdNTEF3TUFkejdtUjlRam5ldTV3QmdZR3R0bWNDMHpZbVBjeE1IQnNZWi9Cd0w2SC9TanJPYTdGckdjNTlyTWVZR0E3dzdHV3JaZDlEOXNrOXEwc1p4blk2emcyU1Vxd0xwVVhaZC9MVVFZeXlvbjlJTXRUanIwOGxneEF3TXJPSUNySVZTVE54Y25Bd0FvQUY0d1p5YWhMamxvQUFBQUFTVVZPUks1Q1lJST1cIn07Il0sInNvdXJjZVJvb3QiOiIifQ==