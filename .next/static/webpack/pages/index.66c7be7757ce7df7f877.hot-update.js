self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Theme/ThemeSwitcher.js":
/*!***********************************************!*\
  !*** ./src/components/Theme/ThemeSwitcher.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/index.js");
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Switch */ "./node_modules/@mui/material/Switch/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\project-work\\codeEditor-app\\src\\components\\Theme\\ThemeSwitcher.js",
    _this = undefined;





var MaterialUISwitch = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_3__.default)(function (_ref) {
  var theme = _ref.theme;
  return {
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"".concat(encodeURIComponent('#fff'), "\" d=\"M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z\"/></svg>')")
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" width=\"20\" viewBox=\"0 0 20 20\"><path fill=\"".concat(encodeURIComponent('#fff'), "\" d=\"M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z\"/></svg>')")
      }
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2
    }
  };
});

var ThemeSwitcher = function ThemeSwitcher(_ref2) {
  var setTheme = _ref2.setTheme,
      theme = _ref2.theme;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__.default, {
    control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MaterialUISwitch, {
      sx: {
        m: 1
      },
      defaultChecked: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 22
    }, _this) //   label={`${theme ? "" :"Light Mode"}"Dark Mode"`}
    ,
    onChange: function onChange(e) {
      var _e$target;

      return setTheme(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, _this);
};

_c = ThemeSwitcher;
/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitcher);

var _c;

$RefreshReg$(_c, "ThemeSwitcher");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGhlbWUvVGhlbWVTd2l0Y2hlci5qcyJdLCJuYW1lcyI6WyJNYXRlcmlhbFVJU3dpdGNoIiwic3R5bGVkIiwiU3dpdGNoIiwidGhlbWUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJjb2xvciIsImJhY2tncm91bmRJbWFnZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwibW9kZSIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiVGhlbWVTd2l0Y2hlciIsInNldFRoZW1lIiwibSIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsZ0JBQWdCLEdBQUdDLDREQUFNLENBQUNDLHlEQUFELENBQU4sQ0FBZTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ3BEQyxTQUFLLEVBQUUsRUFENkM7QUFFcERDLFVBQU0sRUFBRSxFQUY0QztBQUdwREMsV0FBTyxFQUFFLENBSDJDO0FBSXBELCtCQUEyQjtBQUN2QkMsWUFBTSxFQUFFLENBRGU7QUFFdkJELGFBQU8sRUFBRSxDQUZjO0FBR3ZCRSxlQUFTLEVBQUUsaUJBSFk7QUFJdkIsdUJBQWlCO0FBQ2JDLGFBQUssRUFBRSxNQURNO0FBRWJELGlCQUFTLEVBQUUsa0JBRkU7QUFHYixxQ0FBNkI7QUFDekJFLHlCQUFlLGlKQUFpSUMsa0JBQWtCLENBQzlKLE1BRDhKLENBQW5KO0FBRFUsU0FIaEI7QUFRYixnQ0FBd0I7QUFDcEJDLGlCQUFPLEVBQUUsQ0FEVztBQUVwQkMseUJBQWUsRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0MsU0FBaEMsR0FBNEM7QUFGekM7QUFSWDtBQUpNLEtBSnlCO0FBc0JwRCwwQkFBc0I7QUFDbEJGLHFCQUFlLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjQyxJQUFkLEtBQXVCLE1BQXZCLEdBQWdDLFNBQWhDLEdBQTRDLFNBRDNDO0FBRWxCWCxXQUFLLEVBQUUsRUFGVztBQUdsQkMsWUFBTSxFQUFFLEVBSFU7QUFJbEIsa0JBQVk7QUFDUlcsZUFBTyxFQUFFLElBREQ7QUFFUkMsZ0JBQVEsRUFBRSxVQUZGO0FBR1JiLGFBQUssRUFBRSxNQUhDO0FBSVJDLGNBQU0sRUFBRSxNQUpBO0FBS1JhLFlBQUksRUFBRSxDQUxFO0FBTVJDLFdBQUcsRUFBRSxDQU5HO0FBT1JDLHdCQUFnQixFQUFFLFdBUFY7QUFRUkMsMEJBQWtCLEVBQUUsUUFSWjtBQVNSWCx1QkFBZSxpSkFBaUlDLGtCQUFrQixDQUM5SixNQUQ4SixDQUFuSjtBQVRQO0FBSk0sS0F0QjhCO0FBd0NwRCwwQkFBc0I7QUFDbEJDLGFBQU8sRUFBRSxDQURTO0FBRWxCQyxxQkFBZSxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixNQUF2QixHQUFnQyxTQUFoQyxHQUE0QyxTQUYzQztBQUdsQk8sa0JBQVksRUFBRSxLQUFLO0FBSEQ7QUF4QzhCLEdBQWhCO0FBQUEsQ0FBZixDQUF6Qjs7QUErQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixRQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixTQUF0QkEsUUFBc0I7QUFBQSxNQUFackIsS0FBWSxTQUFaQSxLQUFZO0FBQzNDLHNCQUNJLDhEQUFDLG1FQUFEO0FBQ0ksV0FBTyxlQUFFLDhEQUFDLGdCQUFEO0FBQWtCLFFBQUUsRUFBRTtBQUFFc0IsU0FBQyxFQUFFO0FBQUwsT0FBdEI7QUFBZ0Msb0JBQWM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURiLENBRUk7QUFGSjtBQUdJLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBOztBQUFBLGFBQU9GLFFBQVEsQ0FBQ0UsQ0FBRCxhQUFDQSxDQUFELG9DQUFDQSxDQUFDLENBQUVDLE1BQUosOENBQUMsVUFBV0MsT0FBWixDQUFmO0FBQUE7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQVJEOztLQUFNTCxhO0FBVU4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZjN2JlNzc1N2NlN2RmN2Y4NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3dpdGNoJztcclxuXHJcblxyXG5jb25zdCBNYXRlcmlhbFVJU3dpdGNoID0gc3R5bGVkKFN3aXRjaCkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIHdpZHRoOiA2MixcclxuICAgIGhlaWdodDogMzQsXHJcbiAgICBwYWRkaW5nOiA3LFxyXG4gICAgJyYgLk11aVN3aXRjaC1zd2l0Y2hCYXNlJzoge1xyXG4gICAgICAgIG1hcmdpbjogMSxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNnB4KScsXHJcbiAgICAgICAgJyYuTXVpLWNoZWNrZWQnOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMjJweCknLFxyXG4gICAgICAgICAgICAnJiAuTXVpU3dpdGNoLXRodW1iOmJlZm9yZSc6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGZpbGw9XCIke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgICAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICApfVwiIGQ9XCJNNC4yIDIuNWwtLjcgMS44LTEuOC43IDEuOC43LjcgMS44LjYtMS44TDYuNyA1bC0xLjktLjctLjYtMS44em0xNSA4LjNhNi43IDYuNyAwIDExLTYuNi02LjYgNS44IDUuOCAwIDAwNi42IDYuNnpcIi8+PC9zdmc+JylgLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiArIC5NdWlTd2l0Y2gtdHJhY2snOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjODc5NkE1JyA6ICcjYWFiNGJlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmIC5NdWlTd2l0Y2gtdGh1bWInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjMDAzODkyJyA6ICcjMDAxZTNjJyxcclxuICAgICAgICB3aWR0aDogMzIsXHJcbiAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBmaWxsPVwiJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAnI2ZmZicsXHJcbiAgICAgICAgICAgICl9XCIgZD1cIk05LjMwNSAxLjY2N1YzLjc1aDEuMzg5VjEuNjY3aC0xLjM5em0tNC43MDcgMS45NWwtLjk4Mi45ODJMNS4wOSA2LjA3MmwuOTgyLS45ODItMS40NzMtMS40NzN6bTEwLjgwMiAwTDEzLjkyNyA1LjA5bC45ODIuOTgyIDEuNDczLTEuNDczLS45ODItLjk4MnpNMTAgNS4xMzlhNC44NzIgNC44NzIgMCAwMC00Ljg2MiA0Ljg2QTQuODcyIDQuODcyIDAgMDAxMCAxNC44NjIgNC44NzIgNC44NzIgMCAwMDE0Ljg2IDEwIDQuODcyIDQuODcyIDAgMDAxMCA1LjEzOXptMCAxLjM4OUEzLjQ2MiAzLjQ2MiAwIDAxMTMuNDcxIDEwYTMuNDYyIDMuNDYyIDAgMDEtMy40NzMgMy40NzJBMy40NjIgMy40NjIgMCAwMTYuNTI3IDEwIDMuNDYyIDMuNDYyIDAgMDExMCA2LjUyOHpNMS42NjUgOS4zMDV2MS4zOWgyLjA4M3YtMS4zOUgxLjY2NnptMTQuNTgzIDB2MS4zOWgyLjA4NHYtMS4zOWgtMi4wODR6TTUuMDkgMTMuOTI4TDMuNjE2IDE1LjRsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyem05LjgyIDBsLS45ODIuOTgyIDEuNDczIDEuNDczLjk4Mi0uOTgyLTEuNDczLTEuNDczek05LjMwNSAxNi4yNXYyLjA4M2gxLjM4OVYxNi4yNWgtMS4zOXpcIi8+PC9zdmc+JylgLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYgLk11aVN3aXRjaC10cmFjayc6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnIzg3OTZBNScgOiAnI2FhYjRiZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCAvIDIsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBUaGVtZVN3aXRjaGVyID0gKHsgc2V0VGhlbWUsIHRoZW1lIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgY29udHJvbD17PE1hdGVyaWFsVUlTd2l0Y2ggc3g9e3sgbTogMSB9fSBkZWZhdWx0Q2hlY2tlZCAvPn1cclxuICAgICAgICAgICAgLy8gICBsYWJlbD17YCR7dGhlbWUgPyBcIlwiIDpcIkxpZ2h0IE1vZGVcIn1cIkRhcmsgTW9kZVwiYH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaGVtZShlPy50YXJnZXQ/LmNoZWNrZWQpfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9