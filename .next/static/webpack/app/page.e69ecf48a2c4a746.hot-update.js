"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/common/editor/QuillEditor.tsx":
/*!******************************************************!*\
  !*** ./src/components/common/editor/QuillEditor.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuillEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./.yarn/__virtual__/next-virtual-81ed5b6559/4/Users/anje/AppData/Local/Yarn/Berry/cache/next-npm-13.4.2-c0b22f239f-10c0.zip/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"(app-client)/./.yarn/__virtual__/next-virtual-81ed5b6559/4/Users/anje/AppData/Local/Yarn/Berry/cache/next-npm-13.4.2-c0b22f239f-10c0.zip/node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./.yarn/__virtual__/next-virtual-81ed5b6559/4/Users/anje/AppData/Local/Yarn/Berry/cache/next-npm-13.4.2-c0b22f239f-10c0.zip/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst QuillWrapper = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(async ()=>{\n    const { default: QuillComponent  } = await __webpack_require__.e(/*! import() */ \"_app-client_yarn___virtual___react-quill-virtual-bb3527f928_4_Users_anje_AppData_Local_Yarn_B-abc7cc\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"(app-client)/./.yarn/__virtual__/react-quill-virtual-bb3527f928/4/Users/anje/AppData/Local/Yarn/Berry/cache/react-quill-npm-2.0.0-f2d141fe1d-10c0.zip/node_modules/react-quill/lib/index.js\", 23));\n    return function comp(param) {\n        let { forwardedRef , ...props } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuillComponent, {\n            ref: forwardedRef,\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\developer\\\\GitHubRepo\\\\Next-Quilltest\\\\src\\\\components\\\\common\\\\editor\\\\QuillEditor.tsx\",\n            lineNumber: 17,\n            columnNumber: 14\n        }, this);\n    };\n}, {\n    loadableGenerated: {\n        modules: [\n            \"C:\\\\developer\\\\GitHubRepo\\\\Next-Quilltest\\\\src\\\\components\\\\common\\\\editor\\\\QuillEditor.tsx -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false,\n    loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\developer\\\\GitHubRepo\\\\Next-Quilltest\\\\src\\\\components\\\\common\\\\editor\\\\QuillEditor.tsx\",\n            lineNumber: 20,\n            columnNumber: 32\n        }, undefined)\n});\n_c = QuillWrapper;\nfunction QuillEditor() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuillWrapper, {}, void 0, false, {\n        fileName: \"C:\\\\developer\\\\GitHubRepo\\\\Next-Quilltest\\\\src\\\\components\\\\common\\\\editor\\\\QuillEditor.tsx\",\n        lineNumber: 24,\n        columnNumber: 10\n    }, this);\n}\n_c1 = QuillEditor;\nvar _c, _c1;\n$RefreshReg$(_c, \"QuillWrapper\");\n$RefreshReg$(_c1, \"QuillEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2VkaXRvci9RdWlsbEVkaXRvci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtQztBQUNUO0FBVzFCLE1BQU1FLGVBQWVGLG1EQUFPQSxDQUMxQixVQUFZO0lBQ1YsTUFBTSxFQUFFRyxTQUFTQyxlQUFjLEVBQUUsR0FBRyxNQUFNLHlaQUFPO0lBQ2pELE9BQU8sU0FBU0MsS0FBSyxLQUFtRCxFQUFFO1lBQXJELEVBQUVDLGFBQVksRUFBRSxHQUFHQyxPQUFnQyxHQUFuRDtRQUNuQixxQkFBTyw4REFBQ0g7WUFBZUksS0FBS0Y7WUFBZSxHQUFHQyxLQUFLOzs7Ozs7SUFDckQ7QUFDRjs7Ozs7O0lBQ0VFLEtBQUssS0FBSztJQUFFQyxTQUFTLGtCQUFNLDhEQUFDQztzQkFBSTs7Ozs7OztLQVA5QlQ7QUFVUyxTQUFTVSxjQUFjO0lBQ3BDLHFCQUFPLDhEQUFDVjs7Ozs7QUFDVixDQUFDO01BRnVCVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vZWRpdG9yL1F1aWxsRWRpdG9yLnRzeD82MmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJztcclxuXHJcbnR5cGUgRm9yd2FyZGVkUXVpbGxDb21wb25lbnQgPSB7XHJcbiAgZm9yd2FyZGVkUmVmOiBSZWFjdC5SZWY8UmVhY3RRdWlsbD47XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIG1vZHVsZXM6IGFueTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHRoZW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBRdWlsbFdyYXBwZXIgPSBkeW5hbWljKFxyXG4gIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdDogUXVpbGxDb21wb25lbnQgfSA9IGF3YWl0IGltcG9ydCgncmVhY3QtcXVpbGwnKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjb21wKHsgZm9yd2FyZGVkUmVmLCAuLi5wcm9wcyB9OiBGb3J3YXJkZWRRdWlsbENvbXBvbmVudCkge1xyXG4gICAgICByZXR1cm4gPFF1aWxsQ29tcG9uZW50IHJlZj17Zm9yd2FyZGVkUmVmfSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHsgc3NyOiBmYWxzZSwgbG9hZGluZzogKCkgPT4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+IH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aWxsRWRpdG9yKCkge1xyXG4gIHJldHVybiA8UXVpbGxXcmFwcGVyIC8+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiUmVhY3QiLCJRdWlsbFdyYXBwZXIiLCJkZWZhdWx0IiwiUXVpbGxDb21wb25lbnQiLCJjb21wIiwiZm9yd2FyZGVkUmVmIiwicHJvcHMiLCJyZWYiLCJzc3IiLCJsb2FkaW5nIiwiZGl2IiwiUXVpbGxFZGl0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/common/editor/QuillEditor.tsx\n"));

/***/ })

});