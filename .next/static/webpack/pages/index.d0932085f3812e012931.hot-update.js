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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
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
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "nav-title ".concat(theme ? '' : 'nav-title-light'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          src: _public_logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          width: 40,
          height: 40
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-links ".concat(theme ? '' : 'nav-links-light'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.default, {
        setTheme: setTheme,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        style: {
          fontSize: '14px'
        },
        children: "Choose Editor Themes "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
            lineNumber: 51,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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

/***/ "./public/logo-white.jpg":
/*!*******************************!*\
  !*** ./public/logo-white.jpg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/logo-white.98dff46fbc151a268e3eda5fe8321063.jpg","height":1600,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAGX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2xvZ28td2hpdGUuanBnIl0sIm5hbWVzIjpbInRoZW1lT3B0aW9ucyIsIkhlYWRlciIsInNldFRoZW1lVmFsdWUiLCJzZXRUaGVtZSIsInRoZW1lIiwid2hpdGVMb2dvIiwiZm9udFNpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQ2pCLFNBRGlCLEVBRWpCLFVBRmlCLEVBR2pCLFlBSGlCLEVBSWpCLFFBSmlCLEVBS2pCLFFBTGlCLEVBTWpCLFVBTmlCLEVBT2pCLFVBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLGFBVGlCLEVBVWpCLGNBVmlCLEVBV2pCLFFBWGlCLEVBWWpCLFlBWmlCLEVBYWpCLFFBYmlCLEVBY2pCLFlBZGlCLEVBZWpCLFNBZmlCLENBQXJCOztBQWtCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF3QztBQUFBLE1BQXJDQyxhQUFxQyxRQUFyQ0EsYUFBcUM7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRW5ELHNCQUVJO0FBQUssYUFBUyxnQkFBU0EsS0FBSyxHQUFHLFlBQUgsR0FBa0IsYUFBaEMsQ0FBZDtBQUFBLDRCQUNJO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLHNCQUFlQSxLQUFLLEdBQUcsRUFBSCxHQUFRLGlCQUE1QixDQUFkO0FBQUEsK0JBRUksOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVDLDJEQUFaO0FBQXVCLGVBQUssRUFBRSxFQUE5QjtBQUFrQyxnQkFBTSxFQUFFO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBUUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQU8sZUFBTyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBZ0JJO0FBQUssZUFBUyxzQkFBZUQsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQWUsZ0JBQVEsRUFBRUQsUUFBekI7QUFBbUMsYUFBSyxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFPLGFBQUssRUFBRTtBQUFFRSxrQkFBUSxFQUFFO0FBQVosU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0k7QUFBUSxpQkFBUyxZQUFLRixLQUFLLEdBQUcsWUFBSCxHQUFrQixhQUE1QixDQUFqQjtBQUE4RCxvQkFBWSxFQUFDLFVBQTNFO0FBQXNGLGdCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxpQkFBT0wsYUFBYSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLFNBQWhHO0FBQUEsa0JBQ0tULFlBREwsYUFDS0EsWUFETCx1QkFDS0EsWUFBWSxDQUFFVSxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUNmO0FBQTJCLGlCQUFLLEVBQUVELElBQWxDO0FBQUEsc0JBQXlDQTtBQUF6QyxhQUFhQSxJQUFJLEdBQUdDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosQ0FnQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0o7QUE4Q0gsQ0FoREQ7O0tBQU1YLE07QUFrRE4sK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQSwrREFBZ0IsQ0FBQyw2SUFBNkksNmZBQTZmLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDA5MzIwODVmMzgxMmUwMTI5MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSAnLi4vVGhlbWUvVGhlbWVTd2l0Y2hlcidcclxuaW1wb3J0IHdoaXRlTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nby13aGl0ZS5qcGcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IHRoZW1lT3B0aW9ucyA9IFtcclxuICAgICdkZWZhdWx0JyxcclxuICAgICczMDI0LWRheScsXHJcbiAgICAnMzAyNC1uaWdodCcsXHJcbiAgICAnYWJib3R0JyxcclxuICAgICdhYmNkZWYnLFxyXG4gICAgJ2FtYmlhbmNlJyxcclxuICAgICdheXUtZGFyaycsXHJcbiAgICAnYXl1LW1pcmFnZScsXHJcbiAgICAnYmFzZTE2LWRhcmsnLFxyXG4gICAgJ2Jhc2UxNi1saWdodCcsXHJcbiAgICAnYmVzcGluJyxcclxuICAgICdibGFja2JvYXJkJyxcclxuICAgICdjb2JhbHQnLFxyXG4gICAgJ2NvbG9yZm9ydGgnLFxyXG4gICAgJ2RyYWN1bGEnLFxyXG5dXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBzZXRUaGVtZVZhbHVlLCBzZXRUaGVtZSwgdGhlbWUgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2ICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJuYXYtY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRpdGxlICR7dGhlbWUgPyAnJyA6ICduYXYtdGl0bGUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17d2hpdGVMb2dvfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD0nbG9nbycgLz4gIENvZGUtVS1BcHAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17d2hpdGVMb2dvfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtbGlua3MgJHt0aGVtZSA/ICcnIDogJ25hdi1saW5rcy1saWdodCd9YH0+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVTd2l0Y2hlciBzZXRUaGVtZT17c2V0VGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMTRweCcgfX0+Q2hvb3NlIEVkaXRvciBUaGVtZXMgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtgJHt0aGVtZSA/ICd0aGVtZS1kYXJrJyA6ICd0aGVtZS1saWdodCd9YH0gZGVmYXVsdFZhbHVlPSdheXUtZGFyaycgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaGVtZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoZW1lT3B0aW9ucz8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbSArIGluZGV4fSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1jb250YWluZXIgJHt0aGVtZSA/ICd0aGVtZS1kYXJrJyA6ICd0aGVtZS1saWdodCd9YH0+XHJcbiAgICAgICAgLy8gICA8ZGl2PkxvZ288L2Rpdj5cclxuICAgICAgICAvLyAgICAgPD5cclxuICAgICAgICAvLyAgICAgICA8VGhlbWVTd2l0Y2hlciBzZXRUaGVtZT17c2V0VGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cclxuICAgICAgICAvLyAgICAgPC8+XHJcbiAgICAgICAgLy8gICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLXJpZ2h0LWJveCc+XHJcbiAgICAgICAgLy8gICAgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPSdheXUtZGFyaycgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaGVtZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgLy8gICAgICAge3RoZW1lT3B0aW9ucz8ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIC8vICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0raW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAvLyAgICAgICApKX1cclxuICAgICAgICAvLyAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgLy8gICA8L2Rpdj5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvbG9nby13aGl0ZS45OGRmZjQ2ZmJjMTUxYTI2OGUzZWRhNWZlODMyMTA2My5qcGdcIixcImhlaWdodFwiOjE2MDAsXCJ3aWR0aFwiOjE2MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0tDZ29LQ2dzTURBc1BFQTRRRHhZVUV4TVVGaUlZR2hnYUdDSXpJQ1VnSUNVZ015MDNMQ2tzTnkxUlFEZzRRRkZlVDBwUFhuRmxaWEdQaUkrN3Uvc0JDZ29LQ2dvS0N3d01DdzhRRGhBUEZoUVRFeFFXSWhnYUdCb1lJak1nSlNBZ0pTQXpMVGNzS1N3M0xWRkFPRGhBVVY1UFNrOWVjV1ZsY1krSWo3dTcrLy9DQUJFSUFBZ0FDQU1CSWdBQ0VRRURFUUgveEFBVUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBSC85b0FDQUVCQUFBQUFHWC94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRUNFQUFBQUgvL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFREVBQUFBSC8veEFBVUVBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVCQUFFL0FILy94QUFVRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRUNBUUUvQUgvL3hBQVVFUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFREFRRS9BSC8vMlE9PVwifTsiXSwic291cmNlUm9vdCI6IiJ9