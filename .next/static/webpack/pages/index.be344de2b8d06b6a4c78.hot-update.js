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
/* harmony import */ var _logo_black_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-black.png */ "./src/components/Header/logo-black.png");
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
          src: _logo_black_png__WEBPACK_IMPORTED_MODULE_3__.default,
          width: 400,
          height: 400,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ0aGVtZU9wdGlvbnMiLCJIZWFkZXIiLCJzZXRUaGVtZVZhbHVlIiwic2V0VGhlbWUiLCJ0aGVtZSIsIndoaXRlTG9nbyIsImZvbnRTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQ2pCLFNBRGlCLEVBRWpCLFVBRmlCLEVBR2pCLFlBSGlCLEVBSWpCLFFBSmlCLEVBS2pCLFFBTGlCLEVBTWpCLFVBTmlCLEVBT2pCLFVBUGlCLEVBUWpCLFlBUmlCLEVBU2pCLGFBVGlCLEVBVWpCLGNBVmlCLEVBV2pCLFFBWGlCLEVBWWpCLFlBWmlCLEVBYWpCLFFBYmlCLEVBY2pCLFlBZGlCLEVBZWpCLFNBZmlCLENBQXJCOztBQWtCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF3QztBQUFBLE1BQXJDQyxhQUFxQyxRQUFyQ0EsYUFBcUM7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRW5ELHNCQUVJO0FBQUssYUFBUyxnQkFBU0EsS0FBSyxHQUFHLFlBQUgsR0FBa0IsYUFBaEMsQ0FBZDtBQUFBLDRCQUNJO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBRSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLHNCQUFlQSxLQUFLLEdBQUcsRUFBSCxHQUFRLGlCQUE1QixDQUFkO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUVDLG9EQUFWO0FBQXFCLGVBQUssRUFBRSxHQUE1QjtBQUFpQyxnQkFBTSxFQUFFLEdBQXpDO0FBQThDLGFBQUcsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU9JO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDSTtBQUFPLGVBQU8sRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQWVJO0FBQUssZUFBUyxzQkFBZUQsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQWUsZ0JBQVEsRUFBRUQsUUFBekI7QUFBbUMsYUFBSyxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFPLGFBQUssRUFBRTtBQUFFRSxrQkFBUSxFQUFFO0FBQVosU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0k7QUFBUSxpQkFBUyxZQUFLRixLQUFLLEdBQUcsWUFBSCxHQUFrQixhQUE1QixDQUFqQjtBQUE4RCxvQkFBWSxFQUFDLFVBQTNFO0FBQXNGLGdCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxpQkFBT0wsYUFBYSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLFNBQWhHO0FBQUEsa0JBQ0tULFlBREwsYUFDS0EsWUFETCx1QkFDS0EsWUFBWSxDQUFFVSxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUNmO0FBQTJCLGlCQUFLLEVBQUVELElBQWxDO0FBQUEsc0JBQXlDQTtBQUF6QyxhQUFhQSxJQUFJLEdBQUdDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGU7QUFBQSxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSixDQStCSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDSjtBQTZDSCxDQS9DRDs7S0FBTVgsTTtBQWlETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZTM0NGRlMmI4ZDA2YjZhNGM3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tICcuLi9UaGVtZS9UaGVtZVN3aXRjaGVyJ1xyXG5pbXBvcnQgd2hpdGVMb2dvIGZyb20gJy4vbG9nby1ibGFjay5wbmcnO1xyXG5cclxuY29uc3QgdGhlbWVPcHRpb25zID0gW1xyXG4gICAgJ2RlZmF1bHQnLFxyXG4gICAgJzMwMjQtZGF5JyxcclxuICAgICczMDI0LW5pZ2h0JyxcclxuICAgICdhYmJvdHQnLFxyXG4gICAgJ2FiY2RlZicsXHJcbiAgICAnYW1iaWFuY2UnLFxyXG4gICAgJ2F5dS1kYXJrJyxcclxuICAgICdheXUtbWlyYWdlJyxcclxuICAgICdiYXNlMTYtZGFyaycsXHJcbiAgICAnYmFzZTE2LWxpZ2h0JyxcclxuICAgICdiZXNwaW4nLFxyXG4gICAgJ2JsYWNrYm9hcmQnLFxyXG4gICAgJ2NvYmFsdCcsXHJcbiAgICAnY29sb3Jmb3J0aCcsXHJcbiAgICAnZHJhY3VsYScsXHJcbl1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHNldFRoZW1lVmFsdWUsIHNldFRoZW1lLCB0aGVtZSB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYgJHt0aGVtZSA/ICd0aGVtZS1kYXJrJyA6ICd0aGVtZS1saWdodCd9YH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm5hdi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtdGl0bGUgJHt0aGVtZSA/ICcnIDogJ25hdi10aXRsZS1saWdodCd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3doaXRlTG9nb30gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IGFsdD0nbG9nbycgLz4gIENvZGUtVS1BcHBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdi1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi1saW5rcyAke3RoZW1lID8gJycgOiAnbmF2LWxpbmtzLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxNHB4JyB9fT5DaG9vc2UgRWRpdG9yIFRoZW1lcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e2Ake3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfSBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtICsgaW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWNvbnRhaW5lciAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAvLyAgIDxkaXY+TG9nbzwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8PlxyXG4gICAgICAgIC8vICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICAgIC8vICAgICA8Lz5cclxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQtYm94Jz5cclxuICAgICAgICAvLyAgICAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAvLyAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8b3B0aW9uIGtleT17aXRlbStpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICkpfVxyXG4gICAgICAgIC8vICAgICA8L3NlbGVjdD5cclxuICAgICAgICAvLyAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9