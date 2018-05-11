webpackJsonp(["fragment.module"],{

/***/ "../../../../../src/app/views/ng/router/fragment/fragment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FragmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
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
var FragmentComponent = (function () {
    function FragmentComponent(router, myRouter) {
        this.router = router;
        this.myRouter = myRouter;
    }
    FragmentComponent.prototype.component = function () {
        this.myRouter.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/fragment/fragment.component.ts';
    };
    FragmentComponent.prototype.test = function () {
        this.myRouter.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/fragment/test.component.ts';
    };
    FragmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"test()\">\u53C2\u6570\u53CA\u7247\u6BB5\u6D4B\u8BD5\u7EC4\u4EF6</button>\n\t\t</nav>\n\t\t<div class=\"lh30 mvvm-code samebox mt10\">\n\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t<dt>\u65E0\u53C2\u6570\u547D\u4EE4\u8DEF\u7531: </dt>\n\t\t\t\t<dd><b>this.router.navigate(['/fragment/'], \uFF5B queryParams:\uFF5B\uFF5D,fragment: 'anchor' \uFF5D)</b></dd>\n\t\t\t</dl>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/fragment/fragment-test'], { fragment: 'anchor' })\" routerLinkActive=\"active\" class=\"btn-o\">(click)=\"router.navigate(['/fragment/'], \uFF5B fragment: 'anchor' \uFF5D)\"</a></p>\n\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/fragment/fragment-test'], { queryParams:{id:100,name:'summer'}, fragment: 'anchor' })\" routerLinkActive=\"active\" class=\"btn-o\">(click)=\"router.navigate(['/fragment/'], \uFF5BqueryParams:\uFF5Bid:100,name:'summer'\uFF5D, fragment: 'anchor' \uFF5D)\"</a></p>\n\t\t</div>\n\t",
            styles: ["\n\t\t.active{border-color:#d6487e;color:#d6487e;}\n\t"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */]])
    ], FragmentComponent);
    return FragmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/fragment/fragment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentModule", function() { return FragmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fragment_component__ = __webpack_require__("../../../../../src/app/views/ng/router/fragment/fragment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_component__ = __webpack_require__("../../../../../src/app/views/ng/router/fragment/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件


// ======================================================================== NgModule
var FragmentModule = (function () {
    function FragmentModule() {
    }
    FragmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(// 子路由不能使用根路由的 router-outlet
                [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__fragment_component__["a" /* FragmentComponent */] },
                    { path: 'fragment-test', component: __WEBPACK_IMPORTED_MODULE_4__test_component__["a" /* TestComponent */] },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__fragment_component__["a" /* FragmentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__test_component__["a" /* TestComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], FragmentModule);
    return FragmentModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/fragment/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// ===================================================== 组件
var TestComponent = (function () {
    function TestComponent(route) {
        this.route = route;
        this.title = '';
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) {
            _this.anchor = fragment;
        });
        this.route.queryParams.subscribe(function (params) {
            _this.p = params;
        });
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"samebox\">\n\t\t\t<div class=\"lh30\">\n\t\t\t\t<p>\u67E5\u8BE2\u53C2\u6570\u7247\u6BB5</p>\n\t\t\t\t<p>\u53C2\u6570: {{p | json}}</p>\n\t\t\t\t<p>\u951A\u70B9: {{anchor}}</p>\n\t\t\t</div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<div style=\"height:800px\"></div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<div class=\"_tc_f30\" style=\"height:100px;background:yellow;line-height:100px;\">\u951A\u70B9\u5904\u4E00</div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<div style=\"height:800px\"></div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<div class=\"_tc_f30\" style=\"height:100px;background:yellow;line-height:100px;\">\u951A\u70B9\u5904\u4E8C</div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<div style=\"height:800px\"></div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t\n\t\t\t<a id=\"anchor\">\u951A\u70B9 id</a>\n\t\t\t\n\t\t\t<div class=\"_tc_f30\" style=\"height:100px;background:yellow;line-height:100px;\">\u951A\u70B9\u5904\u4E09</div>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<div style=\"height:1000px\"></div>\n\t\t</nav>\n\t",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TestComponent);
    return TestComponent;
}());



/***/ })

});
//# sourceMappingURL=fragment.module.chunk.js.map