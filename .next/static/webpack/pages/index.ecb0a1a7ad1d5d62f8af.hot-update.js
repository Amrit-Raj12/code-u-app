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
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "nav-title ".concat(theme ? '' : 'nav-title-light'),
        children: "Code-U-App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "nav-check",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "nav-links ".concat(theme ? '' : 'nav-links-light'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Theme_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.default, {
        setTheme: setTheme,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
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
            lineNumber: 48,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ0aGVtZU9wdGlvbnMiLCJIZWFkZXIiLCJzZXRUaGVtZVZhbHVlIiwic2V0VGhlbWUiLCJ0aGVtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRyxDQUNqQixTQURpQixFQUVqQixVQUZpQixFQUdqQixZQUhpQixFQUlqQixRQUppQixFQUtqQixRQUxpQixFQU1qQixVQU5pQixFQU9qQixVQVBpQixFQVFqQixZQVJpQixFQVNqQixhQVRpQixFQVVqQixjQVZpQixFQVdqQixRQVhpQixFQVlqQixZQVppQixFQWFqQixRQWJpQixFQWNqQixZQWRpQixFQWVqQixTQWZpQixDQUFyQjs7QUFrQkEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBd0M7QUFBQSxNQUFyQ0MsYUFBcUMsUUFBckNBLGFBQXFDO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUVuRCxzQkFFSTtBQUFLLGFBQVMsZ0JBQVNBLEtBQUssR0FBRyxZQUFILEdBQWtCLGFBQWhDLENBQWQ7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUUsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxzQkFBZUEsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU9JO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDSTtBQUFPLGVBQU8sRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQWVJO0FBQUssZUFBUyxzQkFBZUEsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQWUsZ0JBQVEsRUFBRUQsUUFBekI7QUFBbUMsYUFBSyxFQUFFQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFRLGlCQUFTLFlBQUtBLEtBQUssR0FBRyxZQUFILEdBQWtCLGFBQTVCLENBQWpCO0FBQThELG9CQUFZLEVBQUMsVUFBM0U7QUFBc0YsZ0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPSCxhQUFhLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsU0FBaEc7QUFBQSxrQkFDS1AsWUFETCxhQUNLQSxZQURMLHVCQUNLQSxZQUFZLENBQUVRLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsOEJBQ2Y7QUFBMkIsaUJBQUssRUFBRUQsSUFBbEM7QUFBQSxzQkFBeUNBO0FBQXpDLGFBQWFBLElBQUksR0FBR0MsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBK0JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NKO0FBNkNILENBL0NEOztLQUFNVCxNO0FBaUROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjYjBhMWE3YWQxZDVkNjJmOGFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4uL1RoZW1lL1RoZW1lU3dpdGNoZXInXHJcblxyXG5jb25zdCB0aGVtZU9wdGlvbnMgPSBbXHJcbiAgICAnZGVmYXVsdCcsXHJcbiAgICAnMzAyNC1kYXknLFxyXG4gICAgJzMwMjQtbmlnaHQnLFxyXG4gICAgJ2FiYm90dCcsXHJcbiAgICAnYWJjZGVmJyxcclxuICAgICdhbWJpYW5jZScsXHJcbiAgICAnYXl1LWRhcmsnLFxyXG4gICAgJ2F5dS1taXJhZ2UnLFxyXG4gICAgJ2Jhc2UxNi1kYXJrJyxcclxuICAgICdiYXNlMTYtbGlnaHQnLFxyXG4gICAgJ2Jlc3BpbicsXHJcbiAgICAnYmxhY2tib2FyZCcsXHJcbiAgICAnY29iYWx0JyxcclxuICAgICdjb2xvcmZvcnRoJyxcclxuICAgICdkcmFjdWxhJyxcclxuXVxyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgc2V0VGhlbWVWYWx1ZSwgc2V0VGhlbWUsIHRoZW1lIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdiAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibmF2LWNoZWNrXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10aXRsZSAke3RoZW1lID8gJycgOiAnbmF2LXRpdGxlLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgICAgICBDb2RlLVUtQXBwXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtbGlua3MgJHt0aGVtZSA/ICcnIDogJ25hdi1saW5rcy1saWdodCd9YH0+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVTd2l0Y2hlciBzZXRUaGVtZT17c2V0VGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19PkNob29zZSBFZGl0b3IgVGhlbWVzIDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e2Ake3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfSBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtICsgaW5kZXh9IHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWNvbnRhaW5lciAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAvLyAgIDxkaXY+TG9nbzwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8PlxyXG4gICAgICAgIC8vICAgICAgIDxUaGVtZVN3aXRjaGVyIHNldFRoZW1lPXtzZXRUaGVtZX0gdGhlbWU9e3RoZW1lfSAvPlxyXG4gICAgICAgIC8vICAgICA8Lz5cclxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItcmlnaHQtYm94Jz5cclxuICAgICAgICAvLyAgICAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9J2F5dS1kYXJrJyBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lVmFsdWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAvLyAgICAgICB7dGhlbWVPcHRpb25zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gICAgICAgICA8b3B0aW9uIGtleT17aXRlbStpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICAgICkpfVxyXG4gICAgICAgIC8vICAgICA8L3NlbGVjdD5cclxuICAgICAgICAvLyAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9