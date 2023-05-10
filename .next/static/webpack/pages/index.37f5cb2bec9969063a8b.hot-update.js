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
          src: theme ? _public_logo_white_jpg__WEBPACK_IMPORTED_MODULE_3__.default : _public_logo_black_png__WEBPACK_IMPORTED_MODULE_4__.default,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ0aGVtZU9wdGlvbnMiLCJIZWFkZXIiLCJzZXRUaGVtZVZhbHVlIiwic2V0VGhlbWUiLCJ0aGVtZSIsIndoaXRlTG9nbyIsImJsYWNrTG9nbyIsImZvbnRTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRyxDQUNqQixTQURpQixFQUVqQixVQUZpQixFQUdqQixZQUhpQixFQUlqQixRQUppQixFQUtqQixRQUxpQixFQU1qQixVQU5pQixFQU9qQixVQVBpQixFQVFqQixZQVJpQixFQVNqQixhQVRpQixFQVVqQixjQVZpQixFQVdqQixRQVhpQixFQVlqQixZQVppQixFQWFqQixRQWJpQixFQWNqQixZQWRpQixFQWVqQixTQWZpQixDQUFyQjs7QUFrQkEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBd0M7QUFBQSxNQUFyQ0MsYUFBcUMsUUFBckNBLGFBQXFDO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUVuRCxzQkFFSTtBQUFLLGFBQVMsZ0JBQVNBLEtBQUssR0FBRyxZQUFILEdBQWtCLGFBQWhDLENBQWQ7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUUsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxzQkFBZUEsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBLCtCQUVJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFQSxLQUFLLEdBQUdDLDJEQUFILEdBQWVDLDJEQUFoQztBQUEyQyxlQUFLLEVBQUUsRUFBbEQ7QUFBc0QsZ0JBQU0sRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVFJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDSTtBQUFPLGVBQU8sRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQWdCSTtBQUFLLGVBQVMsc0JBQWVGLEtBQUssR0FBRyxFQUFILEdBQVEsaUJBQTVCLENBQWQ7QUFBQSw4QkFDSSw4REFBQyx5REFBRDtBQUFlLGdCQUFRLEVBQUVELFFBQXpCO0FBQW1DLGFBQUssRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBTyxhQUFLLEVBQUU7QUFBRUcsa0JBQVEsRUFBRTtBQUFaLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQVEsaUJBQVMsWUFBS0gsS0FBSyxHQUFHLFlBQUgsR0FBa0IsYUFBNUIsQ0FBakI7QUFBOEQsb0JBQVksRUFBQyxVQUEzRTtBQUFzRixnQkFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsaUJBQU9OLGFBQWEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxTQUFoRztBQUFBLGtCQUNLVixZQURMLGFBQ0tBLFlBREwsdUJBQ0tBLFlBQVksQ0FBRVcsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw4QkFDZjtBQUEyQixpQkFBSyxFQUFFRCxJQUFsQztBQUFBLHNCQUF5Q0E7QUFBekMsYUFBYUEsSUFBSSxHQUFHQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBZ0NJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNKO0FBOENILENBaEREOztLQUFNWixNO0FBa0ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3ZjVjYjJiZWM5OTY5MDYzYThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4uL1RoZW1lL1RoZW1lU3dpdGNoZXInXHJcbmltcG9ydCB3aGl0ZUxvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvZ28td2hpdGUuanBnJztcclxuaW1wb3J0IGJsYWNrTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nby1ibGFjay5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IHRoZW1lT3B0aW9ucyA9IFtcclxuICAgICdkZWZhdWx0JyxcclxuICAgICczMDI0LWRheScsXHJcbiAgICAnMzAyNC1uaWdodCcsXHJcbiAgICAnYWJib3R0JyxcclxuICAgICdhYmNkZWYnLFxyXG4gICAgJ2FtYmlhbmNlJyxcclxuICAgICdheXUtZGFyaycsXHJcbiAgICAnYXl1LW1pcmFnZScsXHJcbiAgICAnYmFzZTE2LWRhcmsnLFxyXG4gICAgJ2Jhc2UxNi1saWdodCcsXHJcbiAgICAnYmVzcGluJyxcclxuICAgICdibGFja2JvYXJkJyxcclxuICAgICdjb2JhbHQnLFxyXG4gICAgJ2NvbG9yZm9ydGgnLFxyXG4gICAgJ2RyYWN1bGEnLFxyXG5dXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBzZXRUaGVtZVZhbHVlLCBzZXRUaGVtZSwgdGhlbWUgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2ICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJuYXYtY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXRpdGxlICR7dGhlbWUgPyAnJyA6ICduYXYtdGl0bGUtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17d2hpdGVMb2dvfSB3aWR0aD17NDB9IGhlaWdodD17NDB9IGFsdD0nbG9nbycgLz4gIENvZGUtVS1BcHAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dGhlbWUgPyB3aGl0ZUxvZ28gOiBibGFja0xvZ299IHdpZHRoPXszMH0gaGVpZ2h0PXszMH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdi1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi1saW5rcyAke3RoZW1lID8gJycgOiAnbmF2LWxpbmtzLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT5DaG9vc2UgRWRpdG9yIFRoZW1lcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e2Ake3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfSBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtICsgaW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWNvbnRhaW5lciAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAvLyAgIDxkaXY+TG9nbzwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8PlxyXG4gICAgICAgIC8vICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICAgIC8vICAgICA8Lz5cclxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQtYm94Jz5cclxuICAgICAgICAvLyAgICAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAvLyAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8b3B0aW9uIGtleT17aXRlbStpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICkpfVxyXG4gICAgICAgIC8vICAgICA8L3NlbGVjdD5cclxuICAgICAgICAvLyAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9