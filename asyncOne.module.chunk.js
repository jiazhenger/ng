webpackJsonp(["asyncOne.module"],{

/***/ "../../../../../src/app/views/ng/router/async/one/asyncOne.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asyncOne__ = __webpack_require__("../../../../../src/app/views/ng/router/async/one/asyncOne.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 惰性加载模块的组件

// ======================================================================== NgModule
var Module = (function () {
    function Module() {
    }
    Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                // 重要之处: 必须标记路由
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__asyncOne__["a" /* AsyncOne */] } // path 必等空
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__asyncOne__["a" /* AsyncOne */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]] // 公开路由
        })
    ], Module);
    return Module;
}());

//  在根路由仅使用  { path: 'asyn-one', loadChildren: './views/about/module#Module' }  


/***/ }),

/***/ "../../../../../src/app/views/ng/router/async/one/asyncOne.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncOne; });
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
var AsyncOne = (function () {
    function AsyncOne(router) {
        this.router = router;
    }
    AsyncOne.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/async/one/asyncOne.ts';
    };
    AsyncOne.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/async/one/asyncOne.module.ts';
    };
    AsyncOne.prototype.appRouting = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    AsyncOne = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">@NgModule \u60F0\u6027\u52A0\u8F7D\u6A21\u5757</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appRouting()\">ng.module \u5BFC\u5165\u60F0\u6027\u52A0\u8F7D\u6A21\u5757</button>\n\t\t\t<p class=\"mvvm-code mt10\">\uFF5B path: 'async-one', <b>loadChildren</b>: './views/router/async/one/asyncOne.module<b>#Module</b>' \uFF5D</p>\n\t\t</nav>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], AsyncOne);
    return AsyncOne;
}());



/***/ })

});
//# sourceMappingURL=asyncOne.module.chunk.js.map