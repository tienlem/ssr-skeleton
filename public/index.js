(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["index"],{

/***/ "./src/app/components/Button/index.js":
/*!********************************************!*\
  !*** ./src/app/components/Button/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/lib/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Button"]);

/***/ }),

/***/ "./src/app/components/Card/index.js":
/*!******************************************!*\
  !*** ./src/app/components/Card/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/lib/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Card"]);

/***/ }),

/***/ "./src/app/components/Form/index.js":
/*!******************************************!*\
  !*** ./src/app/components/Form/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/lib/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Form"]);

/***/ }),

/***/ "./src/app/components/Input/index.js":
/*!*******************************************!*\
  !*** ./src/app/components/Input/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/lib/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_0__["Input"]);

/***/ }),

/***/ "./src/app/containers/Authentication/index.jsx":
/*!*****************************************************!*\
  !*** ./src/app/containers/Authentication/index.jsx ***!
  \*****************************************************/
/*! exports provided: Login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/Form */ "./src/app/components/Form/index.js");
/* harmony import */ var app_components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/Input */ "./src/app/components/Input/index.js");
/* harmony import */ var app_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/Button */ "./src/app/components/Button/index.js");
/* harmony import */ var app_components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/Card */ "./src/app/components/Card/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var utils_redux_injectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/redux-injectors */ "./src/utils/redux-injectors.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/app/containers/Authentication/styles/index.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slice */ "./src/app/containers/Authentication/slice.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./saga */ "./src/app/containers/Authentication/saga.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks */ "./src/app/containers/Authentication/hooks.js");











var Login = function Login() {
  Object(utils_redux_injectors__WEBPACK_IMPORTED_MODULE_6__["useInjectSaga"])({
    key: _slice__WEBPACK_IMPORTED_MODULE_8__["sliceKey"],
    saga: _saga__WEBPACK_IMPORTED_MODULE_9__["default"]
  });

  var _useHooks = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      handlers = _useHooks.handlers;

  var onFinish = handlers.onFinish,
      onFinishFailed = handlers.onFinishFailed;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["StyledLogin"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "vertical",
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    label: t('Authentication.userName'),
    name: "userName",
    rules: [{
      required: true,
      message: t('Authentication.requiredUserName')
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    label: t('Authentication.password'),
    name: "password",
    rules: [{
      required: true,
      message: t('Authentication.requiredPassword')
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Input__WEBPACK_IMPORTED_MODULE_2__["default"].Password, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "primary",
    htmlType: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Submit")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Login));

/***/ }),

/***/ "./src/app/containers/Authentication/styles/index.js":
/*!***********************************************************!*\
  !*** ./src/app/containers/Authentication/styles/index.js ***!
  \***********************************************************/
/*! exports provided: StyledLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLogin", function() { return StyledLogin; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var StyledLogin = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__StyledLogin",
  componentId: "dcl83k-0"
})(["display:flex;min-height:calc(100vh - 160px);.content-wrapper{display:flex;align-items:center;justify-content:center;width:100%;}"]);

/***/ }),

/***/ "./src/app/containers/HomePage/index.jsx":
/*!***********************************************!*\
  !*** ./src/app/containers/HomePage/index.jsx ***!
  \***********************************************/
/*! exports provided: HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var app_containers_Authentication_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/containers/Authentication/slice */ "./src/app/containers/Authentication/slice.js");
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */



function HomePage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t; // return (
  //   <>
  //     <Trans i18nKey="i18nFeature.title"></Trans>
  //   </>
  // );


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, t('HomePage.welcome'));
}

var loadData = function loadData(store) {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(app_containers_Authentication_slice__WEBPACK_IMPORTED_MODULE_2__["actions"].loginSuccess()); // Manually dispatch a network request
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(HomePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnRhaW5lcnMvQXV0aGVudGljYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFpbmVycy9BdXRoZW50aWNhdGlvbi9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWluZXJzL0hvbWVQYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkIiwiRm9ybSIsIklucHV0IiwiTG9naW4iLCJ1c2VJbmplY3RTYWdhIiwia2V5Iiwic2xpY2VLZXkiLCJzYWdhIiwidXNlSG9va3MiLCJoYW5kbGVycyIsIm9uRmluaXNoIiwib25GaW5pc2hGYWlsZWQiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtZW1vIiwiU3R5bGVkTG9naW4iLCJzdHlsZWQiLCJkaXYiLCJIb21lUGFnZSIsImxvYWREYXRhIiwic3RvcmUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJsb2dpblN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSwwR0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVlQyx3R0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVlQyx3R0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVlQyx5R0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDekJDLDZFQUFhLENBQUM7QUFBRUMsT0FBRyxFQUFFQywrQ0FBUDtBQUFpQkMsUUFBSSxFQUFKQSw2Q0FBSUE7QUFBckIsR0FBRCxDQUFiOztBQUR5QixrQkFFSkMsdURBQVEsRUFGSjtBQUFBLE1BRWpCQyxRQUZpQixhQUVqQkEsUUFGaUI7O0FBQUEsTUFHakJDLFFBSGlCLEdBR1lELFFBSFosQ0FHakJDLFFBSGlCO0FBQUEsTUFHUEMsY0FITyxHQUdZRixRQUhaLENBR1BFLGNBSE87O0FBQUEsd0JBSVhDLG9FQUFjLEVBSkg7QUFBQSxNQUlqQkMsQ0FKaUIsbUJBSWpCQSxDQUppQjs7QUFNekIsc0JBQ0UsMkRBQUMsbURBQUQscUJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSwyREFBQywyREFBRCxxQkFDRSwyREFBQywyREFBRDtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxZQUFRLEVBQUVILFFBSFo7QUFJRSxrQkFBYyxFQUFFQztBQUpsQixrQkFNRSwyREFBQywyREFBRCxDQUFNLElBQU47QUFDRSxTQUFLLEVBQUVFLENBQUMsQ0FBQyx5QkFBRCxDQURWO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxjQUFRLEVBQUUsSUFEWjtBQUVFQyxhQUFPLEVBQUVGLENBQUMsQ0FBQyxpQ0FBRDtBQUZaLEtBREs7QUFIVCxrQkFVRSwyREFBQyw0REFBRCxPQVZGLENBTkYsZUFtQkUsMkRBQUMsMkRBQUQsQ0FBTSxJQUFOO0FBQ0UsU0FBSyxFQUFFQSxDQUFDLENBQUMseUJBQUQsQ0FEVjtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsU0FBSyxFQUFFLENBQ0w7QUFDRUMsY0FBUSxFQUFFLElBRFo7QUFFRUMsYUFBTyxFQUFFRixDQUFDLENBQUMsaUNBQUQ7QUFGWixLQURLO0FBSFQsa0JBVUUsMkRBQUMsNERBQUQsQ0FBTyxRQUFQLE9BVkYsQ0FuQkYsZUFnQ0UsMkRBQUMsMkRBQUQsQ0FBTSxJQUFOLHFCQUNFLDJEQUFDLDZEQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsWUFBUSxFQUFDO0FBQWhDLGtCQUNFLGtGQURGLENBREYsQ0FoQ0YsQ0FERixDQURGLENBREYsQ0FERjtBQThDRCxDQXBETTtBQXNEUUcsOEhBQUksQ0FBQ2IsS0FBRCxDQUFuQixFOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNYyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0lBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLFNBQVNDLFFBQVQsR0FBb0I7QUFBQSx3QkFDWFIsb0VBQWMsRUFESDtBQUFBLE1BQ2pCQyxDQURpQixtQkFDakJBLENBRGlCLEVBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLHNCQUFPLHdIQUFHQSxDQUFDLENBQUMsa0JBQUQsQ0FBSixDQUFQO0FBQ0Q7O0FBRUQsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3hCO0FBQ0E7QUFDQSxTQUFPQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsMkVBQU8sQ0FBQ0MsWUFBUixFQUFmLENBQVAsQ0FId0IsQ0FHdUI7QUFDaEQsQ0FKRDs7QUFNZVQsOEhBQUksQ0FBQ0ksUUFBRCxDQUFuQixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdhcHAvY29tcG9uZW50cy9Gb3JtJztcbmltcG9ydCBJbnB1dCBmcm9tICdhcHAvY29tcG9uZW50cy9JbnB1dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FwcC9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICdhcHAvY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VJbmplY3RTYWdhIH0gZnJvbSAndXRpbHMvcmVkdXgtaW5qZWN0b3JzJztcbmltcG9ydCB7IFN0eWxlZExvZ2luIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgc2xpY2VLZXkgfSBmcm9tICcuL3NsaWNlJztcbmltcG9ydCBzYWdhIGZyb20gJy4vc2FnYSc7XG5pbXBvcnQgdXNlSG9va3MgZnJvbSAnLi9ob29rcyc7XG5cbmV4cG9ydCBjb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgdXNlSW5qZWN0U2FnYSh7IGtleTogc2xpY2VLZXksIHNhZ2EgfSk7XG4gIGNvbnN0IHsgaGFuZGxlcnMgfSA9IHVzZUhvb2tzKCk7XG4gIGNvbnN0IHsgb25GaW5pc2gsIG9uRmluaXNoRmFpbGVkIH0gPSBoYW5kbGVycztcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExvZ2luPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXG4gICAgICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBsYWJlbD17dCgnQXV0aGVudGljYXRpb24udXNlck5hbWUnKX1cbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHQoJ0F1dGhlbnRpY2F0aW9uLnJlcXVpcmVkVXNlck5hbWUnKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIGxhYmVsPXt0KCdBdXRoZW50aWNhdGlvbi5wYXNzd29yZCcpfVxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdCgnQXV0aGVudGljYXRpb24ucmVxdWlyZWRQYXNzd29yZCcpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlN1Ym1pdDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkTG9naW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKExvZ2luKTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExvZ2luID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcblxuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG4iLCIvKlxuICogSG9tZVBhZ2VcbiAqXG4gKiBUaGlzIGlzIHRoZSBmaXJzdCB0aGluZyB1c2VycyBzZWUgb2Ygb3VyIEFwcCwgYXQgdGhlICcvJyByb3V0ZVxuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnYXBwL2NvbnRhaW5lcnMvQXV0aGVudGljYXRpb24vc2xpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDw+XG4gIC8vICAgICA8VHJhbnMgaTE4bktleT1cImkxOG5GZWF0dXJlLnRpdGxlXCI+PC9UcmFucz5cbiAgLy8gICA8Lz5cbiAgLy8gKTtcbiAgcmV0dXJuIDw+e3QoJ0hvbWVQYWdlLndlbGNvbWUnKX08Lz47XG59XG5cbmNvbnN0IGxvYWREYXRhID0gc3RvcmUgPT4ge1xuICAvLyBGb3IgdGhlIGNvbm5lY3QgdGFnIHdlIG5lZWQgUHJvdmlkZXIgY29tcG9uZW50IGJ1dCBvbiB0aGUgc2VydmVyIGF0IHRoaXMgbW9tZW50IGFwcCBpcyBub3QgcmVuZGVyZWQgeWV0XG4gIC8vIFNvIHdlIG5lZWQgdG8gdXNlIHN0b3JlIGl0c2VsZiB0byBsb2FkIGRhdGFcbiAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGFjdGlvbnMubG9naW5TdWNjZXNzKCkpOyAvLyBNYW51YWxseSBkaXNwYXRjaCBhIG5ldHdvcmsgcmVxdWVzdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIb21lUGFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9