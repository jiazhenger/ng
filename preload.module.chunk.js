webpackJsonp(["preload.module"],{

/***/ "../../../../../src/app/views/ng/router/preload/preload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preload__ = __webpack_require__("../../../../../src/app/views/ng/router/preload/preload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 组件

// ======================================================================== NgModule
var Module = (function () {
    function Module() {
    }
    Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([{ path: '', component: __WEBPACK_IMPORTED_MODULE_3__preload__["a" /* Preload */] }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__preload__["a" /* Preload */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], Module);
    return Module;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/preload/preload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// ===================================================== 公共服务

// ===================================================== 组件
var Preload = (function () {
    function Preload(router) {
        this.router = router;
    }
    Preload.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/preload/preload.module.ts';
    };
    Preload.prototype.appRouting = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    Preload.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/preload.service.ts';
    };
    Preload = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">@NgModule \u53EA\u6709\u60F0\u6027\u8DEF\u7531\u624D\u80FD\u9884\u52A0\u8F7D</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appRouting()\">ng.module \u9884\u52A0\u8F7D\u914D\u7F6E</button>\n\t\t\t<p class=\"mt10 mvvm-code\">\u6240\u6709\u60F0\u6027\u8DEF\u7531\u9884\u52A0\u8F7D\u914D\u7F6E: <i>RouterModule.forRoot(router, \uFF5B<b>preloadingStrategy: PreloadAllModules</b>\uFF5D)</i></p>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"service()\">preload.service \u6309\u9700\u9884\u52A0\u8F7D\u670D\u52A1</button>\n\t\t\t<p class=\"mt10 mvvm-code\">\n\t\t\t\t\u6309\u9700\u9884\u52A0\u8F7D\u914D\u7F6E:\uFF5B path: 'preload', loadChildren: './views/router/preload/preload.module#Module', <b>data:\uFF5B preload:true \uFF5D</b> \uFF5D\n\t\t\t</p>\n\t\t</nav>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], Preload);
    return Preload;
}());



/***/ })

});
//# sourceMappingURL=preload.module.chunk.js.map