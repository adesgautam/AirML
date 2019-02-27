(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs"], factory);
	else if(typeof exports === 'object')
		exports["ngx-chips"] = factory(require("rxjs"));
	else
		root["ngx-chips"] = factory(root["rxjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_23__) {
return webpackJsonpngx_chips([0],{

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(13);
__webpack_require__(4);
__webpack_require__(12);
__webpack_require__(23);
module.exports = __webpack_require__(7);


/***/ })

},[81]);
});
//# sourceMappingURL=vendor.map