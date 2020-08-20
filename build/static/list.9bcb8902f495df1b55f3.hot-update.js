webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list-image.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/list-image.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var ListMedia=(_ref)=>{var{state,id}=_ref;var media=state.source.attachment[id];if(!media)return null;var srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(\"\".concat(current.join(\" \"),\"w\").concat(index!==array.length-1?\", \":\"\")),\"\")||null;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{alt:media.title.rendered,src:media.source_url,srcSet:srcset}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(ListMedia));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ev1y1qj0\",label:\"Container\"})( false?undefined:{name:\"1wrhqea\",styles:\"margin:16px 0;height:350px;@media screen and (max-width:800px){&{height:auto;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL215LWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QtaW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUM0QiIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9teS1hcHAvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0LWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbmNvbnN0IExpc3RNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoaXRlbSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0TWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDE2cHggMDtcbiAgaGVpZ2h0OiAzNTBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICYge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDExMCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgJiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"ev1y1qj1\",label:\"StyledImage\"})( false?undefined:{name:\"1oxchxw\",styles:\"display:block;width:110%;height:80%;border-radius:15px;@media screen and (max-width:800px){&{width:100%;margin:0 auto;margin-bottom:20px;height:auto;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3YmVydC9EZXNrdG9wL215LWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QtaW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENpQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhld2JlcnQvRGVza3RvcC9teS1hcHAvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0LWltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbmNvbnN0IExpc3RNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoaXRlbSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0TWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDE2cHggMDtcbiAgaGVpZ2h0OiAzNTBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICYge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDExMCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgJiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QtaW1hZ2UuanM/NDQ1ZiJdLCJuYW1lcyI6WyJMaXN0TWVkaWEiLCJzdGF0ZSIsImlkIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50Iiwic3Jjc2V0IiwiT2JqZWN0IiwidmFsdWVzIiwibWVkaWFfZGV0YWlscyIsInNpemVzIiwibWFwIiwiaXRlbSIsInNvdXJjZV91cmwiLCJ3aWR0aCIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsImluZGV4IiwiYXJyYXkiLCJjb25jYXQiLCJqb2luIiwibGVuZ3RoIiwidGl0bGUiLCJyZW5kZXJlZCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJTdHlsZWRJbWFnZSIsIkltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxVQUFTLENBQUcsUUFBbUIsSUFBbEIsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWtCLE1BQ25DLEdBQU1DLE1BQUssQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JILEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNDLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FFWixHQUFNRyxPQUFNLENBQ1ZDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0JDLEtBQWxDLENBQ0U7QUFERixDQUVHQyxHQUZILENBRU9DLElBQUksRUFBSSxDQUFDQSxJQUFJLENBQUNDLFVBQU4sQ0FBa0JELElBQUksQ0FBQ0UsS0FBdkIsQ0FGZixDQUdFO0FBSEYsQ0FJR0MsTUFKSCxDQUtJLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFpQkMsS0FBakIsQ0FBd0JDLEtBQXhCLEdBQ0VILEtBQUssQ0FBQ0ksTUFBTixXQUNLSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxHQUFiLENBREwsYUFDMEJILEtBQUssR0FBS0MsS0FBSyxDQUFDRyxNQUFOLENBQWUsQ0FBekIsQ0FBNkIsSUFBN0IsQ0FBb0MsRUFEOUQsRUFOTixDQVNJLEVBVEosR0FVTyxJQVhULENBYUEsTUFDRSwyREFBQyxTQUFELE1BQ0UsMERBQUMsV0FBRCxFQUNFLEdBQUcsQ0FBRW5CLEtBQUssQ0FBQ29CLEtBQU4sQ0FBWUMsUUFEbkIsQ0FFRSxHQUFHLENBQUVyQixLQUFLLENBQUNVLFVBRmIsQ0FHRSxNQUFNLENBQUVQLE1BSFYsRUFERixDQURGLENBU0QsQ0EzQkQsQ0E2QmVtQix1SEFBTyxDQUFDekIsU0FBRCxDQUF0QixFQUVBLEdBQU0wQixVQUFTLDg3RUFBZixDQVdBLEdBQU1DLFlBQVcsQ0FBRyxrRkFBT0Msa0VBQVAseUNBQUgsbzVFQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC1pbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBMaXN0TWVkaWEgPSAoeyBzdGF0ZSwgaWQgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKGl0ZW0gPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICBzcmM9e21lZGlhLnNvdXJjZV91cmx9XG4gICAgICAgIHNyY1NldD17c3Jjc2V0fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdE1lZGlhKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGhlaWdodDogMzUwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkKEltYWdlKWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICYge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list-image.js\n");

/***/ })

})