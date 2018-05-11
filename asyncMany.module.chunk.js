webpackJsonp(["asyncMany.module"],{

/***/ "../../../../../src/app/views/ng/router/async/many/asyncMany.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asyncMany__ = __webpack_require__("../../../../../src/app/views/ng/router/async/many/asyncMany.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_component_A_component__ = __webpack_require__("../../../../../src/app/views/ng/router/async/many/test-component/A.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_component_B_component__ = __webpack_require__("../../../../../src/app/views/ng/router/async/many/test-component/B.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_component_C_component__ = __webpack_require__("../../../../../src/app/views/ng/router/async/many/test-component/C.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件




// ======================================================================== NgModule
var Module = (function () {
    function Module() {
    }
    Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                // 会产生包含路由		
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'asyn-group-a', component: __WEBPACK_IMPORTED_MODULE_4__test_component_A_component__["a" /* AComponent */] },
                    { path: 'asyn-group-b', component: __WEBPACK_IMPORTED_MODULE_5__test_component_B_component__["a" /* BComponent */] },
                    { path: 'asyn-group-c', component: __WEBPACK_IMPORTED_MODULE_6__test_component_C_component__["a" /* CComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__asyncMany__["a" /* AsyncMany */] },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__asyncMany__["a" /* AsyncMany */],
                __WEBPACK_IMPORTED_MODULE_4__test_component_A_component__["a" /* AComponent */],
                __WEBPACK_IMPORTED_MODULE_5__test_component_B_component__["a" /* BComponent */],
                __WEBPACK_IMPORTED_MODULE_6__test_component_C_component__["a" /* CComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], Module);
    return Module;
}());

//  在根路由仅使用  { path: 'async-many', loadChildren: './views/router/async/many/asyncMany.module#Module' } 


/***/ }),

/***/ "../../../../../src/app/views/ng/router/async/many/asyncMany.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncMany; });
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
var AsyncMany = (function () {
    function AsyncMany(router) {
        this.router = router;
    }
    AsyncMany.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/async/many/asyncMany.ts';
    };
    AsyncMany.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/async/many/asyncMany.module.ts';
    };
    AsyncMany.prototype.appRouting = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    AsyncMany = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u5230\u672C\u7EC4\u4EF6</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">@NgModule \u60F0\u6027\u52A0\u8F7D\u6A21\u5757</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appRouting()\">ng.module \u5BFC\u5165\u60F0\u6027\u52A0\u8F7D\u6A21\u5757</button>\n\t\t\t<p class=\"mt10 mvvm-code\">\uFF5B path: 'async-many', <b>loadChildren</b>: './views/router/async/many/asyncMany.module<b>#AsyncManyModule</b>' \uFF5D</p>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"asyn-group-a\">\u5230 A \u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"asyn-group-b\">\u5230 B \u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o\" routerLink=\"asyn-group-c\">\u5230 C \u8DEF\u7531</button>\n\t\t</nav>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], AsyncMany);
    return AsyncMany;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/async/many/test-component/A.component.ts":
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

/***/ "../../../../../src/app/views/ng/router/async/many/test-component/B.component.ts":
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

/***/ "../../../../../src/app/views/ng/router/async/many/test-component/C.component.ts":
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
//# sourceMappingURL=asyncMany.module.chunk.js.map