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
/* harmony import */ var _logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-white.jpg */ "./src/components/Header/logo-white.jpg");
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
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "nav-title ".concat(theme ? '' : 'nav-title-light'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
          width: 40,
          height: 40,
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), "  Code-U-App"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-links ".concat(theme ? '' : 'nav-links-light'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.default, {
        setTheme: setTheme,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        style: {
          fontSize: '14px'
        },
        children: "Choose Editor Themes "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
            lineNumber: 49,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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

/***/ "./src/components/Header/logo-white.jpg":
/*!**********************************************!*\
  !*** ./src/components/Header/logo-white.jpg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/src/components/Header/logo-white.98dff46fbc151a268e3eda5fe8321063.jpg","height":1600,"width":1600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAGX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28td2hpdGUuanBnIl0sIm5hbWVzIjpbInRoZW1lT3B0aW9ucyIsIkhlYWRlciIsInNldFRoZW1lVmFsdWUiLCJzZXRUaGVtZSIsInRoZW1lIiwiTG9nb1doaXRlIiwiZm9udFNpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDakIsU0FEaUIsRUFFakIsVUFGaUIsRUFHakIsWUFIaUIsRUFJakIsUUFKaUIsRUFLakIsUUFMaUIsRUFNakIsVUFOaUIsRUFPakIsVUFQaUIsRUFRakIsWUFSaUIsRUFTakIsYUFUaUIsRUFVakIsY0FWaUIsRUFXakIsUUFYaUIsRUFZakIsWUFaaUIsRUFhakIsUUFiaUIsRUFjakIsWUFkaUIsRUFlakIsU0FmaUIsQ0FBckI7O0FBa0JBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdDO0FBQUEsTUFBckNDLGFBQXFDLFFBQXJDQSxhQUFxQztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFFbkQsc0JBRUk7QUFBSyxhQUFTLGdCQUFTQSxLQUFLLEdBQUcsWUFBSCxHQUFrQixhQUFoQyxDQUFkO0FBQUEsNEJBQ0k7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFFLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsc0JBQWVBLEtBQUssR0FBRyxFQUFILEdBQVEsaUJBQTVCLENBQWQ7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBRUMsb0RBQVY7QUFBcUIsZUFBSyxFQUFFLEVBQTVCO0FBQWdDLGdCQUFNLEVBQUUsRUFBeEM7QUFBNEMsYUFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQU8sZUFBTyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBZUk7QUFBSyxlQUFTLHNCQUFlRCxLQUFLLEdBQUcsRUFBSCxHQUFRLGlCQUE1QixDQUFkO0FBQUEsOEJBQ0ksOERBQUMseURBQUQ7QUFBZSxnQkFBUSxFQUFFRCxRQUF6QjtBQUFtQyxhQUFLLEVBQUVDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQU8sYUFBSyxFQUFFO0FBQUVFLGtCQUFRLEVBQUU7QUFBWixTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFRLGlCQUFTLFlBQUtGLEtBQUssR0FBRyxZQUFILEdBQWtCLGFBQTVCLENBQWpCO0FBQThELG9CQUFZLEVBQUMsVUFBM0U7QUFBc0YsZ0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGlCQUFPTCxhQUFhLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsU0FBaEc7QUFBQSxrQkFDS1QsWUFETCxhQUNLQSxZQURMLHVCQUNLQSxZQUFZLENBQUVVLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQ2Y7QUFBMkIsaUJBQUssRUFBRUQsSUFBbEM7QUFBQSxzQkFBeUNBO0FBQXpDLGFBQWFBLElBQUksR0FBR0MsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBK0JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NKO0FBNkNILENBL0NEOztLQUFNWCxNO0FBaUROLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUEsK0RBQWdCLENBQUMsNEpBQTRKLDZmQUE2ZixFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgxOWY0NGNjZGJlYWVlODE1NzIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4uL1RoZW1lL1RoZW1lU3dpdGNoZXInXHJcbmltcG9ydCBMb2dvV2hpdGUgZnJvbSAnLi9sb2dvLXdoaXRlLmpwZydcclxuXHJcbmNvbnN0IHRoZW1lT3B0aW9ucyA9IFtcclxuICAgICdkZWZhdWx0JyxcclxuICAgICczMDI0LWRheScsXHJcbiAgICAnMzAyNC1uaWdodCcsXHJcbiAgICAnYWJib3R0JyxcclxuICAgICdhYmNkZWYnLFxyXG4gICAgJ2FtYmlhbmNlJyxcclxuICAgICdheXUtZGFyaycsXHJcbiAgICAnYXl1LW1pcmFnZScsXHJcbiAgICAnYmFzZTE2LWRhcmsnLFxyXG4gICAgJ2Jhc2UxNi1saWdodCcsXHJcbiAgICAnYmVzcGluJyxcclxuICAgICdibGFja2JvYXJkJyxcclxuICAgICdjb2JhbHQnLFxyXG4gICAgJ2NvbG9yZm9ydGgnLFxyXG4gICAgJ2RyYWN1bGEnLFxyXG5dXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBzZXRUaGVtZVZhbHVlLCBzZXRUaGVtZSwgdGhlbWUgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2ICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJuYXYtY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRpdGxlICR7dGhlbWUgPyAnJyA6ICduYXYtdGl0bGUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtMb2dvV2hpdGV9IHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gYWx0PSdsb2dvJyAvPiAgQ29kZS1VLUFwcFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2LWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LWxpbmtzICR7dGhlbWUgPyAnJyA6ICduYXYtbGlua3MtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lU3dpdGNoZXIgc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19PkNob29zZSBFZGl0b3IgVGhlbWVzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YCR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9IGRlZmF1bHRWYWx1ZT0nYXl1LWRhcmsnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGVtZU9wdGlvbnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0gKyBpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItY29udGFpbmVyICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgIC8vICAgPGRpdj5Mb2dvPC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDw+XHJcbiAgICAgICAgLy8gICAgICAgPFRoZW1lU3dpdGNoZXIgc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcbiAgICAgICAgLy8gICAgIDwvPlxyXG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1yaWdodC1ib3gnPlxyXG4gICAgICAgIC8vICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT0nYXl1LWRhcmsnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgIC8vICAgICAgIHt0aGVtZU9wdGlvbnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAvLyAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtK2luZGV4fSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgLy8gICAgICAgKSl9XHJcbiAgICAgICAgLy8gICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIC8vICAgPC9kaXY+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2Uvc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28td2hpdGUuOThkZmY0NmZiYzE1MWEyNjhlM2VkYTVmZTgzMjEwNjMuanBnXCIsXCJoZWlnaHRcIjoxNjAwLFwid2lkdGhcIjoxNjAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9LQ2dvS0Nnc01EQXNQRUE0UUR4WVVFeE1VRmlJWUdoZ2FHQ0l6SUNVZ0lDVWdNeTAzTENrc055MVJRRGc0UUZGZVQwcFBYbkZsWlhHUGlJKzd1L3NCQ2dvS0Nnb0tDd3dNQ3c4UURoQVBGaFFURXhRV0loZ2FHQm9ZSWpNZ0pTQWdKU0F6TFRjc0tTdzNMVkZBT0RoQVVWNVBTazllY1dWbGNZK0lqN3U3Ky8vQ0FCRUlBQWdBQ0FNQklnQUNFUUVERVFIL3hBQVVBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUgvOW9BQ0FFQkFBQUFBR1gveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVDRUFBQUFILy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRURFQUFBQUgvL3hBQVVFQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFQkFBRS9BSC8veEFBVUVRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVDQVFFL0FILy94QUFVRVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRURBUUUvQUgvLzJRPT1cIn07Il0sInNvdXJjZVJvb3QiOiIifQ==