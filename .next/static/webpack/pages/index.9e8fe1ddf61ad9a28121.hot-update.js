self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_project_work_codeEditor_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Editor */ "./src/components/Editor.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hooks/useLocalStorage */ "./src/components/hooks/useLocalStorage.js");
/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/header */ "./src/components/Header/header.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\pages\\App.js",
    _s = $RefreshSig$();




 // import ResizePanel from "react-resize-panel";
// import dynamic from 'next/dynamic'
// const ResizePanel = dynamic(
//   () => import('react-resize-panel'),
//   { ssr: false }
// )

function App() {
  _s();

  var _useLocalStorage = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.default)('html', '<h1>HTML goes here...</h1>'),
      _useLocalStorage2 = (0,F_project_work_codeEditor_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useLocalStorage, 2),
      html = _useLocalStorage2[0],
      setHtml = _useLocalStorage2[1];

  var _useLocalStorage3 = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.default)('css', "/* CSS goes here... */; body{background:green};"),
      _useLocalStorage4 = (0,F_project_work_codeEditor_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useLocalStorage3, 2),
      css = _useLocalStorage4[0],
      setCss = _useLocalStorage4[1];

  var _useLocalStorage5 = (0,_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.default)('js', "//Javascript goes here \n console.log('Welcome')"),
      _useLocalStorage6 = (0,F_project_work_codeEditor_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useLocalStorage5, 2),
      js = _useLocalStorage6[0],
      setJs = _useLocalStorage6[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      srcDoc = _useState[0],
      setSrcDoc = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('ayu-dark'),
      themeValue = _useState2[0],
      setThemeValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('theme-light'),
      theme = _useState3[0],
      setTheme = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var timeDelay = setTimeout(function () {
      setSrcDoc("\n        <html>\n        <body>".concat(html, "</body>\n        <style>").concat(css, "</style>\n        <script>").concat(js, "</script>\n        </html>\n      "));
    }, 350);
    return function () {
      return clearTimeout(timeDelay);
    };
  }, [html, css, js]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_header__WEBPACK_IMPORTED_MODULE_5__.default, {
      setThemeValue: setThemeValue,
      setTheme: setTheme,
      theme: theme
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pane top-pane",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_2__.default, {
        language: "xml",
        displayName: "HTML",
        value: html,
        onChange: setHtml,
        themeValue: themeValue,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_2__.default, {
        language: "css",
        displayName: "CSS",
        value: css,
        onChange: setCss,
        themeValue: themeValue,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Editor__WEBPACK_IMPORTED_MODULE_2__.default, {
        language: "javascript",
        displayName: "JS",
        value: js,
        onChange: setJs,
        themeValue: themeValue,
        theme: theme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pane",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
        srcDoc: srcDoc,
        title: "output",
        sandbox: "allow-forms allow-popups allow-scripts allow-same-origin allow-modals",
        frameBorder: "0",
        width: "100%",
        height: "100%",
        className: "responsive-iframe"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(App, "G1CjwimyDQ5yRcXQ/MpW6VXqN0Q=", false, function () {
  return [_components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.default, _components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.default, _components_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = App;

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJodG1sIiwic2V0SHRtbCIsImNzcyIsInNldENzcyIsImpzIiwic2V0SnMiLCJ1c2VTdGF0ZSIsInNyY0RvYyIsInNldFNyY0RvYyIsInRoZW1lVmFsdWUiLCJzZXRUaGVtZVZhbHVlIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZUVmZmVjdCIsInRpbWVEZWxheSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUFBLHlCQUVKQywwRUFBZSxDQUFDLE1BQUQsRUFBUyw0QkFBVCxDQUZYO0FBQUE7QUFBQSxNQUVyQkMsSUFGcUI7QUFBQSxNQUVmQyxPQUZlOztBQUFBLDBCQUdORiwwRUFBZSxDQUFDLEtBQUQsRUFBUSxpREFBUixDQUhUO0FBQUE7QUFBQSxNQUdyQkcsR0FIcUI7QUFBQSxNQUdoQkMsTUFIZ0I7O0FBQUEsMEJBSVJKLDBFQUFlLENBQUMsSUFBRCxFQUFPLGtEQUFQLENBSlA7QUFBQTtBQUFBLE1BSXJCSyxFQUpxQjtBQUFBLE1BSWpCQyxLQUppQjs7QUFBQSxrQkFLQUMsK0NBQVEsQ0FBQyxFQUFELENBTFI7QUFBQSxNQUtyQkMsTUFMcUI7QUFBQSxNQUtiQyxTQUxhOztBQUFBLG1CQU9RRiwrQ0FBUSxDQUFDLFVBQUQsQ0FQaEI7QUFBQSxNQU9yQkcsVUFQcUI7QUFBQSxNQU9UQyxhQVBTOztBQUFBLG1CQVNGSiwrQ0FBUSxDQUFDLGFBQUQsQ0FUTjtBQUFBLE1BU3JCSyxLQVRxQjtBQUFBLE1BU2RDLFFBVGM7O0FBVzVCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQ2pDUCxlQUFTLDJDQUVDUixJQUZELHFDQUdFRSxHQUhGLHVDQUlHRSxFQUpILHdDQUFUO0FBT0QsS0FSMkIsRUFRekIsR0FSeUIsQ0FBNUI7QUFVQSxXQUFPO0FBQUEsYUFBTVksWUFBWSxDQUFDRixTQUFELENBQWxCO0FBQUEsS0FBUDtBQUVELEdBYlEsRUFhTixDQUFDZCxJQUFELEVBQU9FLEdBQVAsRUFBWUUsRUFBWixDQWJNLENBQVQ7QUFlQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDhEQUFEO0FBQVEsbUJBQWEsRUFBRU0sYUFBdkI7QUFBc0MsY0FBUSxFQUFFRSxRQUFoRDtBQUEwRCxXQUFLLEVBQUVEO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRSw4REFBQyx1REFBRDtBQUNFLGdCQUFRLEVBQUMsS0FEWDtBQUVFLG1CQUFXLEVBQUMsTUFGZDtBQUdFLGFBQUssRUFBRVgsSUFIVDtBQUlFLGdCQUFRLEVBQUVDLE9BSlo7QUFNRSxrQkFBVSxFQUFFUSxVQU5kO0FBUUUsYUFBSyxFQUFFRTtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFLDhEQUFDLHVEQUFEO0FBQ0UsZ0JBQVEsRUFBQyxLQURYO0FBRUUsbUJBQVcsRUFBQyxLQUZkO0FBR0UsYUFBSyxFQUFFVCxHQUhUO0FBSUUsZ0JBQVEsRUFBRUMsTUFKWjtBQU1FLGtCQUFVLEVBQUVNLFVBTmQ7QUFRRSxhQUFLLEVBQUVFO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBcUJFLDhEQUFDLHVEQUFEO0FBQ0UsZ0JBQVEsRUFBQyxZQURYO0FBRUUsbUJBQVcsRUFBQyxJQUZkO0FBR0UsYUFBSyxFQUFFUCxFQUhUO0FBSUUsZ0JBQVEsRUFBRUMsS0FKWjtBQU1FLGtCQUFVLEVBQUVJLFVBTmQ7QUFRRSxhQUFLLEVBQUVFO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQXlDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0U7QUFDRSxjQUFNLEVBQUVKLE1BRFY7QUFFRSxhQUFLLEVBQUMsUUFGUjtBQUdFLGVBQU8sRUFBQyx1RUFIVjtBQUlFLG1CQUFXLEVBQUMsR0FKZDtBQUtFLGFBQUssRUFBQyxNQUxSO0FBTUUsY0FBTSxFQUFDLE1BTlQ7QUFPRSxpQkFBUyxFQUFDO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0Y7QUFBQSxrQkFERjtBQXVERDs7R0FqRnVCVCxHO1VBRUVDLHNFLEVBQ0ZBLHNFLEVBQ0ZBLHNFOzs7S0FKRUQsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZThmZTFkZGY2MWFkOWEyODEyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVkaXRvciBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRvcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9va3MvdXNlTG9jYWxTdG9yYWdlJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlcidcclxuLy8gaW1wb3J0IFJlc2l6ZVBhbmVsIGZyb20gXCJyZWFjdC1yZXNpemUtcGFuZWxcIjtcclxuXHJcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuXHJcbi8vIGNvbnN0IFJlc2l6ZVBhbmVsID0gZHluYW1pYyhcclxuLy8gICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXJlc2l6ZS1wYW5lbCcpLFxyXG4vLyAgIHsgc3NyOiBmYWxzZSB9XHJcbi8vIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuXHJcbiAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gdXNlTG9jYWxTdG9yYWdlKCdodG1sJywgJzxoMT5IVE1MIGdvZXMgaGVyZS4uLjwvaDE+JylcclxuICBjb25zdCBbY3NzLCBzZXRDc3NdID0gdXNlTG9jYWxTdG9yYWdlKCdjc3MnLCBcIi8qIENTUyBnb2VzIGhlcmUuLi4gKi87IGJvZHl7YmFja2dyb3VuZDpncmVlbn07XCIpXHJcbiAgY29uc3QgW2pzLCBzZXRKc10gPSB1c2VMb2NhbFN0b3JhZ2UoJ2pzJywgXCIvL0phdmFzY3JpcHQgZ29lcyBoZXJlIFxcbiBjb25zb2xlLmxvZygnV2VsY29tZScpXCIpXHJcbiAgY29uc3QgW3NyY0RvYywgc2V0U3JjRG9jXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBbdGhlbWVWYWx1ZSwgc2V0VGhlbWVWYWx1ZV0gPSB1c2VTdGF0ZSgnYXl1LWRhcmsnKVxyXG5cclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCd0aGVtZS1saWdodCcpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lRGVsYXkgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U3JjRG9jKGBcclxuICAgICAgICA8aHRtbD5cclxuICAgICAgICA8Ym9keT4ke2h0bWx9PC9ib2R5PlxyXG4gICAgICAgIDxzdHlsZT4ke2Nzc308L3N0eWxlPlxyXG4gICAgICAgIDxzY3JpcHQ+JHtqc308L3NjcmlwdD5cclxuICAgICAgICA8L2h0bWw+XHJcbiAgICAgIGApXHJcbiAgICB9LCAzNTApXHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lRGVsYXkpXHJcblxyXG4gIH0sIFtodG1sLCBjc3MsIGpzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgc2V0VGhlbWVWYWx1ZT17c2V0VGhlbWVWYWx1ZX0gc2V0VGhlbWU9e3NldFRoZW1lfSB0aGVtZT17dGhlbWV9IC8+XHJcbiAgICAgIHsvKiBcclxuICAgICA8UmVzaXplUGFuZWxcclxuICAgICAgICBkaXJlY3Rpb249XCJzXCJcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3RoZW1lID8gJ3RoZW1lLWRhcmsnIDogJ3RoZW1lLWxpZ2h0J31gfVxyXG4gICAgICAgIC8vIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCBoZWlnaHQ6IFwiMTAlXCIgfX1cclxuICAgICAgPiAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lIHRvcC1wYW5lJz5cclxuICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICBsYW5ndWFnZT0neG1sJ1xyXG4gICAgICAgICAgZGlzcGxheU5hbWU9J0hUTUwnXHJcbiAgICAgICAgICB2YWx1ZT17aHRtbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRIdG1sfVxyXG5cclxuICAgICAgICAgIHRoZW1lVmFsdWU9e3RoZW1lVmFsdWV9XHJcblxyXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEVkaXRvclxyXG4gICAgICAgICAgbGFuZ3VhZ2U9J2NzcydcclxuICAgICAgICAgIGRpc3BsYXlOYW1lPSdDU1MnXHJcbiAgICAgICAgICB2YWx1ZT17Y3NzfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldENzc31cclxuXHJcbiAgICAgICAgICB0aGVtZVZhbHVlPXt0aGVtZVZhbHVlfVxyXG5cclxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgIGxhbmd1YWdlPSdqYXZhc2NyaXB0J1xyXG4gICAgICAgICAgZGlzcGxheU5hbWU9J0pTJ1xyXG4gICAgICAgICAgdmFsdWU9e2pzfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldEpzfVxyXG5cclxuICAgICAgICAgIHRoZW1lVmFsdWU9e3RoZW1lVmFsdWV9XHJcblxyXG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9SZXNpemVQYW5lbD4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lJz5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBzcmNEb2M9e3NyY0RvY31cclxuICAgICAgICAgIHRpdGxlPSdvdXRwdXQnXHJcbiAgICAgICAgICBzYW5kYm94PSdhbGxvdy1mb3JtcyBhbGxvdy1wb3B1cHMgYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1tb2RhbHMnXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj0nMCdcclxuICAgICAgICAgIHdpZHRoPScxMDAlJ1xyXG4gICAgICAgICAgaGVpZ2h0PScxMDAlJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVzcG9uc2l2ZS1pZnJhbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==