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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28td2hpdGUuanBnIl0sIm5hbWVzIjpbInRoZW1lT3B0aW9ucyIsIkhlYWRlciIsInNldFRoZW1lVmFsdWUiLCJzZXRUaGVtZSIsInRoZW1lIiwid2hpdGVMb2dvIiwiZm9udFNpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDakIsU0FEaUIsRUFFakIsVUFGaUIsRUFHakIsWUFIaUIsRUFJakIsUUFKaUIsRUFLakIsUUFMaUIsRUFNakIsVUFOaUIsRUFPakIsVUFQaUIsRUFRakIsWUFSaUIsRUFTakIsYUFUaUIsRUFVakIsY0FWaUIsRUFXakIsUUFYaUIsRUFZakIsWUFaaUIsRUFhakIsUUFiaUIsRUFjakIsWUFkaUIsRUFlakIsU0FmaUIsQ0FBckI7O0FBa0JBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdDO0FBQUEsTUFBckNDLGFBQXFDLFFBQXJDQSxhQUFxQztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFFbkQsc0JBRUk7QUFBSyxhQUFTLGdCQUFTQSxLQUFLLEdBQUcsWUFBSCxHQUFrQixhQUFoQyxDQUFkO0FBQUEsNEJBQ0k7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFFLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsc0JBQWVBLEtBQUssR0FBRyxFQUFILEdBQVEsaUJBQTVCLENBQWQ7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBRUMsb0RBQVY7QUFBcUIsZUFBSyxFQUFFLEVBQTVCO0FBQWdDLGdCQUFNLEVBQUUsRUFBeEM7QUFBNEMsYUFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQU8sZUFBTyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBZUk7QUFBSyxlQUFTLHNCQUFlRCxLQUFLLEdBQUcsRUFBSCxHQUFRLGlCQUE1QixDQUFkO0FBQUEsOEJBQ0ksOERBQUMseURBQUQ7QUFBZSxnQkFBUSxFQUFFRCxRQUF6QjtBQUFtQyxhQUFLLEVBQUVDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJO0FBQU8sYUFBSyxFQUFFO0FBQUVFLGtCQUFRLEVBQUU7QUFBWixTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFRLGlCQUFTLFlBQUtGLEtBQUssR0FBRyxZQUFILEdBQWtCLGFBQTVCLENBQWpCO0FBQThELG9CQUFZLEVBQUMsVUFBM0U7QUFBc0YsZ0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGlCQUFPTCxhQUFhLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsU0FBaEc7QUFBQSxrQkFDS1QsWUFETCxhQUNLQSxZQURMLHVCQUNLQSxZQUFZLENBQUVVLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQ2Y7QUFBMkIsaUJBQUssRUFBRUQsSUFBbEM7QUFBQSxzQkFBeUNBO0FBQXpDLGFBQWFBLElBQUksR0FBR0MsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBK0JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NKO0FBNkNILENBL0NEOztLQUFNWCxNO0FBaUROLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUEsK0RBQWdCLENBQUMsNEpBQTRKLDZmQUE2ZixFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRjODJmNjJiNjg3ZjFhNjcyYzkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4uL1RoZW1lL1RoZW1lU3dpdGNoZXInXHJcbmltcG9ydCB3aGl0ZUxvZ28gZnJvbSAnLi9sb2dvLXdoaXRlLmpwZyc7XHJcblxyXG5jb25zdCB0aGVtZU9wdGlvbnMgPSBbXHJcbiAgICAnZGVmYXVsdCcsXHJcbiAgICAnMzAyNC1kYXknLFxyXG4gICAgJzMwMjQtbmlnaHQnLFxyXG4gICAgJ2FiYm90dCcsXHJcbiAgICAnYWJjZGVmJyxcclxuICAgICdhbWJpYW5jZScsXHJcbiAgICAnYXl1LWRhcmsnLFxyXG4gICAgJ2F5dS1taXJhZ2UnLFxyXG4gICAgJ2Jhc2UxNi1kYXJrJyxcclxuICAgICdiYXNlMTYtbGlnaHQnLFxyXG4gICAgJ2Jlc3BpbicsXHJcbiAgICAnYmxhY2tib2FyZCcsXHJcbiAgICAnY29iYWx0JyxcclxuICAgICdjb2xvcmZvcnRoJyxcclxuICAgICdkcmFjdWxhJyxcclxuXVxyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgc2V0VGhlbWVWYWx1ZSwgc2V0VGhlbWUsIHRoZW1lIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdiAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibmF2LWNoZWNrXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10aXRsZSAke3RoZW1lID8gJycgOiAnbmF2LXRpdGxlLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2hpdGVMb2dvfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD0nbG9nbycgLz4gIENvZGUtVS1BcHBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdi1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi1saW5rcyAke3RoZW1lID8gJycgOiAnbmF2LWxpbmtzLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT5DaG9vc2UgRWRpdG9yIFRoZW1lcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e2Ake3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfSBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtICsgaW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWNvbnRhaW5lciAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAvLyAgIDxkaXY+TG9nbzwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8PlxyXG4gICAgICAgIC8vICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICAgIC8vICAgICA8Lz5cclxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQtYm94Jz5cclxuICAgICAgICAvLyAgICAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAvLyAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8b3B0aW9uIGtleT17aXRlbStpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICkpfVxyXG4gICAgICAgIC8vICAgICA8L3NlbGVjdD5cclxuICAgICAgICAvLyAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLXdoaXRlLjk4ZGZmNDZmYmMxNTFhMjY4ZTNlZGE1ZmU4MzIxMDYzLmpwZ1wiLFwiaGVpZ2h0XCI6MTYwMCxcIndpZHRoXCI6MTYwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvS0Nnb0tDZ3NNREFzUEVBNFFEeFlVRXhNVUZpSVlHaGdhR0NJeklDVWdJQ1VnTXkwM0xDa3NOeTFSUURnNFFGRmVUMHBQWG5GbFpYR1BpSSs3dS9zQkNnb0tDZ29LQ3d3TUN3OFFEaEFQRmhRVEV4UVdJaGdhR0JvWUlqTWdKU0FnSlNBekxUY3NLU3czTFZGQU9EaEFVVjVQU2s5ZWNXVmxjWStJajd1NysvL0NBQkVJQUFnQUNBTUJJZ0FDRVFFREVRSC94QUFVQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFILzlvQUNBRUJBQUFBQUdYL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFQ0VBQUFBSC8veEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVERUFBQUFILy94QUFVRUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRUJBQUUvQUgvL3hBQVVFUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFQ0FRRS9BSC8veEFBVUVRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVEQVFFL0FILy8yUT09XCJ9OyJdLCJzb3VyY2VSb290IjoiIn0=