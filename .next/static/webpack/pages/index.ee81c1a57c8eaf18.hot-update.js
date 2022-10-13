"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/potfolio/Potfolio.jsx":
/*!******************************************!*\
  !*** ./components/potfolio/Potfolio.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Potfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _potfolioList_PotfolioList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../potfolioList/PotfolioList */ \"./components/potfolioList/PotfolioList.jsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ \"./components/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Potfolio() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"featured\"), selected = ref[0], setSelected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref1[0], setData = ref1[1];\n    var list = [\n        {\n            id: \"featured\",\n            title: \"Featured\"\n        },\n        {\n            id: \"web\",\n            title: \"Web App\"\n        },\n        {\n            id: \"articles\",\n            title: \"Articles\"\n        }, \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        switch(selected){\n            case \"featured\":\n                setData(_data__WEBPACK_IMPORTED_MODULE_3__.featuredPortfolio);\n                break;\n            case \"web\":\n                setData(_data__WEBPACK_IMPORTED_MODULE_3__.webPortfolio);\n                break;\n            // case \"mobile\":\n            //   setData(mobilePortfolio);\n            //   break;\n            case \"articles\":\n                setData(_data__WEBPACK_IMPORTED_MODULE_3__.articlesPortfolio);\n                break;\n            default:\n                setData(_data__WEBPACK_IMPORTED_MODULE_3__.featuredPortfolio);\n        }\n    }, [\n        selected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"portfolio\",\n        id: \"portfolio\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: list.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_potfolioList_PotfolioList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: item.title,\n                        active: selected === item.id,\n                        setSelected: setSelected,\n                        id: item.id\n                    }, void 0, false, {\n                        fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: data.map(function(d) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: d.link,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: d.img,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: d.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, _this)\n                    }, d.id, false, {\n                        fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/allanmabwa/apeli/potfolio/components/potfolio/Potfolio.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Potfolio, \"SjMexBjBQSE73PeGr0e8aujDcAY=\");\n_c = Potfolio;\nvar _c;\n$RefreshReg$(_c, \"Potfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BvdGZvbGlvL1BvdGZvbGlvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1k7QUFPdkM7QUFFRixTQUFTTSxRQUFRLEdBQUc7OztJQUNqQyxJQUFnQ0wsR0FBb0IsR0FBcEJBLCtDQUFRLENBQUMsVUFBVSxDQUFDLEVBQTdDTSxRQUFRLEdBQWlCTixHQUFvQixHQUFyQyxFQUFFTyxXQUFXLEdBQUlQLEdBQW9CLEdBQXhCO0lBQzVCLElBQXdCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCUSxJQUFJLEdBQWFSLElBQVksR0FBekIsRUFBRVMsT0FBTyxHQUFJVCxJQUFZLEdBQWhCO0lBQ3BCLElBQU1VLElBQUksR0FBRztRQUNYO1lBQ0VDLEVBQUUsRUFBRSxVQUFVO1lBQ2RDLEtBQUssRUFBRSxVQUFVO1NBQ2xCO1FBQ0Q7WUFDRUQsRUFBRSxFQUFFLEtBQUs7WUFDVEMsS0FBSyxFQUFFLFNBQVM7U0FDakI7UUFDRDtZQUNFRCxFQUFFLEVBQUUsVUFBVTtZQUNkQyxLQUFLLEVBQUUsVUFBVTtTQUNsQjtLQUNGO0lBRURiLGdEQUFTLENBQUMsV0FBTTtRQUNkLE9BQVFPLFFBQVE7WUFDZCxLQUFLLFVBQVU7Z0JBQ2JHLE9BQU8sQ0FBQ1Asb0RBQWlCLENBQUMsQ0FBQztnQkFDM0IsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUk8sT0FBTyxDQUFDTiwrQ0FBWSxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07WUFDUixpQkFBaUI7WUFDakIsOEJBQThCO1lBQzlCLFdBQVc7WUFDWCxLQUFLLFVBQVU7Z0JBQ2JNLE9BQU8sQ0FBQ0wsb0RBQWlCLENBQUMsQ0FBQztnQkFDM0IsTUFBTTtZQUVSO2dCQUNFSyxPQUFPLENBQUNQLG9EQUFpQixDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDLEVBQUU7UUFBQ0ksUUFBUTtLQUFDLENBQUMsQ0FBQztJQUVmLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXO1FBQUNILEVBQUUsRUFBQyxXQUFXOzswQkFDdkMsOERBQUNJLElBQUU7MEJBQUMsV0FBUzs7Ozs7b0JBQUs7MEJBQ2xCLDhEQUFDQyxJQUFFOzBCQUNBTixJQUFJLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNiLDhEQUFDakIsa0VBQVk7d0JBRVhXLEtBQUssRUFBRU0sSUFBSSxDQUFDTixLQUFLO3dCQUNqQk8sTUFBTSxFQUFFYixRQUFRLEtBQUtZLElBQUksQ0FBQ1AsRUFBRTt3QkFDNUJKLFdBQVcsRUFBRUEsV0FBVzt3QkFDeEJJLEVBQUUsRUFBRU8sSUFBSSxDQUFDUCxFQUFFOzs7Ozs2QkFDWDtpQkFDSCxDQUFDOzs7OztvQkFDQzswQkFDTCw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7MEJBQ3ZCTixJQUFJLENBQUNTLEdBQUcsQ0FBQyxTQUFDRyxDQUFDO3lDQUNWLDhEQUFDQyxHQUFDO3dCQUFZQyxJQUFJLEVBQUVGLENBQUMsQ0FBQ0csSUFBSTtrQ0FDeEIsNEVBQUNWLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxNQUFNOzs4Q0FDbkIsOERBQUNVLEtBQUc7b0NBQUNDLEdBQUcsRUFBRUwsQ0FBQyxDQUFDSSxHQUFHO29DQUFFRSxHQUFHLEVBQUMsRUFBRTs7Ozs7eUNBQUc7OENBQzFCLDhEQUFDQyxJQUFFOzhDQUFFUCxDQUFDLENBQUNSLEtBQUs7Ozs7O3lDQUFNOzs7Ozs7aUNBQ2Q7dUJBSkFRLENBQUMsQ0FBQ1QsRUFBRTs7Ozs2QkFLUjtpQkFDTCxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0FoRXVCTixRQUFRO0FBQVJBLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3Rmb2xpby9Qb3Rmb2xpby5qc3g/YWY3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvdGZvbGlvTGlzdCBmcm9tICcuLi9wb3Rmb2xpb0xpc3QvUG90Zm9saW9MaXN0JztcbmltcG9ydCB7XG4gIGZlYXR1cmVkUG9ydGZvbGlvLFxuICB3ZWJQb3J0Zm9saW8sXG4gIC8vIG1vYmlsZVBvcnRmb2xpbyxcbiAgYXJ0aWNsZXNQb3J0Zm9saW8sXG4gIC8vIGNvbnRlbnRQb3J0Zm9saW8sXG59IGZyb20gJy4uL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3Rmb2xpbygpIHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnZmVhdHVyZWQnKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIGlkOiAnZmVhdHVyZWQnLFxuICAgICAgdGl0bGU6ICdGZWF0dXJlZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3dlYicsXG4gICAgICB0aXRsZTogJ1dlYiBBcHAnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhcnRpY2xlcycsXG4gICAgICB0aXRsZTogJ0FydGljbGVzJyxcbiAgICB9LFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3dpdGNoIChzZWxlY3RlZCkge1xuICAgICAgY2FzZSAnZmVhdHVyZWQnOlxuICAgICAgICBzZXREYXRhKGZlYXR1cmVkUG9ydGZvbGlvKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3ZWInOlxuICAgICAgICBzZXREYXRhKHdlYlBvcnRmb2xpbyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gY2FzZSBcIm1vYmlsZVwiOlxuICAgICAgLy8gICBzZXREYXRhKG1vYmlsZVBvcnRmb2xpbyk7XG4gICAgICAvLyAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJ0aWNsZXMnOlxuICAgICAgICBzZXREYXRhKGFydGljbGVzUG9ydGZvbGlvKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNldERhdGEoZmVhdHVyZWRQb3J0Zm9saW8pO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpb1wiIGlkPVwicG9ydGZvbGlvXCI+XG4gICAgICA8aDE+UG9ydGZvbGlvPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPFBvdGZvbGlvTGlzdFxuICAgICAgICAgIFxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkID09PSBpdGVtLmlkfVxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2RhdGEubWFwKChkKSA9PiAoXG4gICAgICAgICAgPGEga2V5PXtkLmlkfSBocmVmPXtkLmxpbmt9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtkLmltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPGgzPntkLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb3Rmb2xpb0xpc3QiLCJmZWF0dXJlZFBvcnRmb2xpbyIsIndlYlBvcnRmb2xpbyIsImFydGljbGVzUG9ydGZvbGlvIiwiUG90Zm9saW8iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGF0YSIsInNldERhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwiYWN0aXZlIiwiZCIsImEiLCJocmVmIiwibGluayIsImltZyIsInNyYyIsImFsdCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/potfolio/Potfolio.jsx\n"));

/***/ })

});