webpackHotUpdate("my-app",{

/***/ "./packages/mars-theme/src/components/categories.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/categories.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Categories=(_ref)=>{var{state}=_ref;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,state.theme.category.map((_ref2)=>{var[name,link]=_ref2;// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===link;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link,\"aria-current\":isCurrentPage?\"page\":undefined},name));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Categories));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1k0x2ck0\",label:\"NavContainer\"})( false?undefined:{name:\"1qzacld\",styles:\"list-style:none;width:50%;max-width:50%;box-sizing:border-box;margin:0;align-items:center;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL215LWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEIrQiIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9teS1hcHAvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IENhdGVnb3JpZXMgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAge3N0YXRlLnRoZW1lLmNhdGVnb3J5Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gc3RhdGUucm91dGVyLmxpbmsgPT09IGxpbms7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e2xpbmt9IGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9OYXZDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KENhdGVnb3JpZXMpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgXG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1k0x2ck1\",label:\"NavItem\"})( false?undefined:{name:\"1lvdtl7\",styles:\"padding:0;margin:0 auto;color:black;font-size:1.5em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL215LWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0MwQiIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9teS1hcHAvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IENhdGVnb3JpZXMgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAge3N0YXRlLnRoZW1lLmNhdGVnb3J5Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gc3RhdGUucm91dGVyLmxpbmsgPT09IGxpbms7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e2xpbmt9IGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9OYXZDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KENhdGVnb3JpZXMpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgXG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanM/ZDJlMiJdLCJuYW1lcyI6WyJDYXRlZ29yaWVzIiwic3RhdGUiLCJ0aGVtZSIsImNhdGVnb3J5IiwibWFwIiwibmFtZSIsImxpbmsiLCJpc0N1cnJlbnRQYWdlIiwicm91dGVyIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIk5hdkNvbnRhaW5lciIsIk5hdkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBOzs7O0dBS0EsR0FBTUEsV0FBVSxDQUFHLFlBQUMsQ0FBRUMsS0FBRixDQUFELFlBQ2YsMkRBQUMsWUFBRCxNQUNLQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkMsR0FBckIsQ0FBeUIsU0FBa0IsSUFBakIsQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWlCLE9BQ3hDO0FBQ0EsR0FBTUMsY0FBYSxDQUFHTixLQUFLLENBQUNPLE1BQU4sQ0FBYUYsSUFBYixHQUFzQkEsSUFBNUMsQ0FDQSxNQUNJLDJEQUFDLE9BQUQsRUFBUyxHQUFHLENBQUVELElBQWQsRUFFSSwwREFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRUMsSUFBWixDQUFrQixlQUFjQyxhQUFhLENBQUcsTUFBSCxDQUFZRSxTQUF6RCxFQUNLSixJQURMLENBRkosQ0FESixDQVFILENBWEEsQ0FETCxDQURlLEVBQW5CLENBaUJlSyx1SEFBTyxDQUFDVixVQUFELENBQXRCLEVBRUEsR0FBTVcsYUFBWSxxMEZBQWxCLENBVUEsR0FBTUMsUUFBTyx5a0dBQWIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2NhdGVnb3JpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgQ2F0ZWdvcmllcyA9ICh7IHN0YXRlIH0pID0+IChcbiAgICA8TmF2Q29udGFpbmVyPlxuICAgICAgICB7c3RhdGUudGhlbWUuY2F0ZWdvcnkubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluaztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L05hdkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoQ2F0ZWdvcmllcyk7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/categories.js\n");

/***/ })

})