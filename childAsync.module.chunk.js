webpackJsonp(["childAsync.module"],{

/***/ "../../../../../src/app/views/ng/router/child/childAsync.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildAsyncComponent; });
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
var ChildAsyncComponent = (function () {
    function ChildAsyncComponent(router) {
        this.router = router;
    }
    ChildAsyncComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/child/childAsync.component.ts';
    };
    ChildAsyncComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/child/childAsync.module.ts';
    };
    ChildAsyncComponent.prototype.appRouting = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    ChildAsyncComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u7EC4\u4EF6\u5FC5\u987B\u914D\u7F6E routerOutlet</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">@NgModule \u5B50\u8DEF\u7531\u914D\u7F6E</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appRouting()\">ng.module \u5BFC\u5165\u5B50\u8DEF\u7531</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"/ng/child-async/test-a\" routerLinkActive=\"active\">\u5230 A \u5B50\u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"/ng/child-async/test-b\" routerLinkActive=\"active\">\u5230 B \u5B50\u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o\" routerLink=\"/ng/child-async/test-c\" routerLinkActive=\"active\">\u5230 C \u5B50\u8DEF\u7531</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<!-- \u5B50\u8DEF\u7531\u51FA\u53E3 -->\n\t\t\t<router-outlet></router-outlet>\n\t\t</nav>\n\t",
            styles: ["\n\t\t.active{border-color:#d6487e;color:#d6487e;}\n\t"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], ChildAsyncComponent);
    return ChildAsyncComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/childAsync.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildAsyncModule", function() { return ChildAsyncModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__childAsync_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/childAsync.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_component_A_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/test-component/A.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_component_B_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/test-component/B.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_component_C_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/test-component/C.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件




// ======================================================================== NgModule
var ChildAsyncModule = (function () {
    function ChildAsyncModule() {
    }
    ChildAsyncModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(// 子路由不能使用根路由的 router-outlet
                [
                    {
                        path: '', component: __WEBPACK_IMPORTED_MODULE_3__childAsync_component__["a" /* ChildAsyncComponent */],
                        children: [
                            { path: 'test-a', component: __WEBPACK_IMPORTED_MODULE_4__test_component_A_component__["a" /* AComponent */] },
                            { path: 'test-b', component: __WEBPACK_IMPORTED_MODULE_5__test_component_B_component__["a" /* BComponent */] },
                            { path: 'test-c', component: __WEBPACK_IMPORTED_MODULE_6__test_component_C_component__["a" /* CComponent */] },
                            { path: '', redirectTo: '/ng/child-async/test-a', pathMatch: 'full' } // 设置默认显示路由
                        ]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__childAsync_component__["a" /* ChildAsyncComponent */],
                __WEBPACK_IMPORTED_MODULE_4__test_component_A_component__["a" /* AComponent */],
                __WEBPACK_IMPORTED_MODULE_5__test_component_B_component__["a" /* BComponent */],
                __WEBPACK_IMPORTED_MODULE_6__test_component_C_component__["a" /* CComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], ChildAsyncModule);
    return ChildAsyncModule;
}());

// 可作为惰性加载加入根路由 app.routing.module.ts
// 可作为同步路由加入  app.module.ts  


/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/test-component/A.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AComponent; });
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

// =====================================================
var AComponent = (function () {
    function AComponent(router) {
        this.router = router;
    }
    AComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news-router',
            template: '<div class="mvvm-box-1">天下为公</div><button class="btn-default mt20" (click)="router.back()">后退</button>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], AComponent);
    return AComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/test-component/B.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BComponent; });
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

// =====================================================
var BComponent = (function () {
    function BComponent(router) {
        this.router = router;
    }
    BComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news-router',
            template: '<div class="mvvm-box-1">投桃报李</div><button class="btn-default mt20" (click)="router.back()">后退</button>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], BComponent);
    return BComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/test-component/C.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CComponent; });
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

// =====================================================
var CComponent = (function () {
    function CComponent(router) {
        this.router = router;
    }
    CComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news-router',
            template: '<div class="mvvm-box-1">一往无前</div><button class="btn-default mt20" (click)="router.back()">后退</button>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], CComponent);
    return CComponent;
}());



/***/ })

});
//# sourceMappingURL=childAsync.module.chunk.js.map