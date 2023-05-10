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
          width: 30,
          height: 30
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJ0aGVtZU9wdGlvbnMiLCJIZWFkZXIiLCJzZXRUaGVtZVZhbHVlIiwic2V0VGhlbWUiLCJ0aGVtZSIsIndoaXRlTG9nbyIsImZvbnRTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRyxDQUNqQixTQURpQixFQUVqQixVQUZpQixFQUdqQixZQUhpQixFQUlqQixRQUppQixFQUtqQixRQUxpQixFQU1qQixVQU5pQixFQU9qQixVQVBpQixFQVFqQixZQVJpQixFQVNqQixhQVRpQixFQVVqQixjQVZpQixFQVdqQixRQVhpQixFQVlqQixZQVppQixFQWFqQixRQWJpQixFQWNqQixZQWRpQixFQWVqQixTQWZpQixDQUFyQjs7QUFrQkEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBd0M7QUFBQSxNQUFyQ0MsYUFBcUMsUUFBckNBLGFBQXFDO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUVuRCxzQkFFSTtBQUFLLGFBQVMsZ0JBQVNBLEtBQUssR0FBRyxZQUFILEdBQWtCLGFBQWhDLENBQWQ7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUUsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxzQkFBZUEsS0FBSyxHQUFHLEVBQUgsR0FBUSxpQkFBNUIsQ0FBZDtBQUFBLCtCQUVJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFQywyREFBWjtBQUF1QixlQUFLLEVBQUUsRUFBOUI7QUFBa0MsZ0JBQU0sRUFBRTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQVFJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDSTtBQUFPLGVBQU8sRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQWdCSTtBQUFLLGVBQVMsc0JBQWVELEtBQUssR0FBRyxFQUFILEdBQVEsaUJBQTVCLENBQWQ7QUFBQSw4QkFDSSw4REFBQyx5REFBRDtBQUFlLGdCQUFRLEVBQUVELFFBQXpCO0FBQW1DLGFBQUssRUFBRUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBTyxhQUFLLEVBQUU7QUFBRUUsa0JBQVEsRUFBRTtBQUFaLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJO0FBQVEsaUJBQVMsWUFBS0YsS0FBSyxHQUFHLFlBQUgsR0FBa0IsYUFBNUIsQ0FBakI7QUFBOEQsb0JBQVksRUFBQyxVQUEzRTtBQUFzRixnQkFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsaUJBQU9MLGFBQWEsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxTQUFoRztBQUFBLGtCQUNLVCxZQURMLGFBQ0tBLFlBREwsdUJBQ0tBLFlBQVksQ0FBRVUsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw4QkFDZjtBQUEyQixpQkFBSyxFQUFFRCxJQUFsQztBQUFBLHNCQUF5Q0E7QUFBekMsYUFBYUEsSUFBSSxHQUFHQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLENBZ0NJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNKO0FBOENILENBaEREOztLQUFNWCxNO0FBa0ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExNzE5NDc5YWIyMjExZTJkZDk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4uL1RoZW1lL1RoZW1lU3dpdGNoZXInXHJcbmltcG9ydCB3aGl0ZUxvZ28gZnJvbSAnLi4vLi4vLi4vcHVibGljL2xvZ28td2hpdGUuanBnJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCB0aGVtZU9wdGlvbnMgPSBbXHJcbiAgICAnZGVmYXVsdCcsXHJcbiAgICAnMzAyNC1kYXknLFxyXG4gICAgJzMwMjQtbmlnaHQnLFxyXG4gICAgJ2FiYm90dCcsXHJcbiAgICAnYWJjZGVmJyxcclxuICAgICdhbWJpYW5jZScsXHJcbiAgICAnYXl1LWRhcmsnLFxyXG4gICAgJ2F5dS1taXJhZ2UnLFxyXG4gICAgJ2Jhc2UxNi1kYXJrJyxcclxuICAgICdiYXNlMTYtbGlnaHQnLFxyXG4gICAgJ2Jlc3BpbicsXHJcbiAgICAnYmxhY2tib2FyZCcsXHJcbiAgICAnY29iYWx0JyxcclxuICAgICdjb2xvcmZvcnRoJyxcclxuICAgICdkcmFjdWxhJyxcclxuXVxyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgc2V0VGhlbWVWYWx1ZSwgc2V0VGhlbWUsIHRoZW1lIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdiAke3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibmF2LWNoZWNrXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi10aXRsZSAke3RoZW1lID8gJycgOiAnbmF2LXRpdGxlLWxpZ2h0J31gfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3doaXRlTG9nb30gd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSBhbHQ9J2xvZ28nIC8+ICBDb2RlLVUtQXBwICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3doaXRlTG9nb30gd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2LWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LWxpbmtzICR7dGhlbWUgPyAnJyA6ICduYXYtbGlua3MtbGlnaHQnfWB9PlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lU3dpdGNoZXIgc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzE0cHgnIH19PkNob29zZSBFZGl0b3IgVGhlbWVzIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17YCR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9IGRlZmF1bHRWYWx1ZT0nYXl1LWRhcmsnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGVtZU9wdGlvbnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0gKyBpbmRleH0gdmFsdWU9e2l0ZW19PntpdGVtfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItY29udGFpbmVyICR7dGhlbWUgPyAndGhlbWUtZGFyaycgOiAndGhlbWUtbGlnaHQnfWB9PlxyXG4gICAgICAgIC8vICAgPGRpdj5Mb2dvPC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDw+XHJcbiAgICAgICAgLy8gICAgICAgPFRoZW1lU3dpdGNoZXIgc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcbiAgICAgICAgLy8gICAgIDwvPlxyXG4gICAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci1yaWdodC1ib3gnPlxyXG4gICAgICAgIC8vICAgICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT0nYXl1LWRhcmsnIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGhlbWVWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgIC8vICAgICAgIHt0aGVtZU9wdGlvbnM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAvLyAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtK2luZGV4fSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgLy8gICAgICAgKSl9XHJcbiAgICAgICAgLy8gICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIC8vICAgPC9kaXY+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=