webpackJsonp(["service.module"],{

/***/ "../../../../../src/app/views/ng/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_my_service__ = __webpack_require__("../../../../../src/app/views/ng/service/service/my.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ===================================================== 

// ===================================================== 公共服务


// ===================================================== 
var ServiceComponent = (function () {
    function ServiceComponent(router, my) {
        this.router = router;
        this.my = my;
    }
    ServiceComponent.prototype.pipe = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/pipe/pipe/keys.pipe.ts';
    };
    ServiceComponent.prototype.play = function () {
        this.data = this.my;
    };
    ServiceComponent.prototype.start = function () {
        this.my.play();
    };
    ServiceComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/service/service/my.service.ts';
    };
    ServiceComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/service/service.component.ts';
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"service()\">\u67E5\u770B\u670D\u52A1</button>\n\t\t</div>\n\t\t<div class=\"lh30 mvvm-code mt10\">\n\t\t\t<dl class=\"mvvm-list samebox\">\n\t\t\t\t<dt>\u670D\u52A1 </dt>\n\t\t\t\t<dd><b>constructor(private router: RouterService, public my:MyService)\uFF5B\uFF5D</b> \u5B9E\u4F8B\u5316\u670D\u52A1</dd>\n\t\t\t</dl>\n\t\t\t\n\t\t\t<dl class=\"mvvm-list samebox mt10\">\n\t\t\t\t<dt>private \uFF5C public\uFF1A</dt>\n\t\t\t\t<dd>private \u58F0\u660E\u7684\u670D\u52A1\u53EA\u80FD\u5728  Class \u7C7B\u4E2D\u4F7F\u7528\uFF0C\u65E0\u6CD5\u518D template \u6A21\u5757\u4E2D\u4F7F\u7528</dd>\n\t\t\t\t<dd>public \u58F0\u660E\u7684\u670D\u52A1\u5728 Class \u7C7B\u548C\u6A21\u677F\u4E2D\u90FD\u53EF\u4F7F\u7528</dd>\n\t\t\t</dl>\n\t\t</div>\n\t\t<div class=\"samebox mt10\">\n\t\t\t<button class=\"btn-default\" (click) = \"play()\">\u83B7\u53D6\u670D\u52A1\u4E2D\u7684\u5C5E\u6027</button>\n\t\t\t<button class=\"btn-default\" (click) = \"start()\">\u4F7F\u7528\u670D\u52A1\u4E2D\u7684\u65B9\u6CD5</button>\n\t\t</div>\n\t\t<pre class=\"mvvm-pre samebox mt10\">{{data | json}}</pre>\n\t",
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_my_service__["a" /* MyService */]] // 服务隔离, 只在本组件及其子组件树中可用
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_2__service_my_service__["a" /* MyService */]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/service/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_component__ = __webpack_require__("../../../../../src/app/views/ng/service/service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 服务
// ===================================================== 同一个模块的组件

// ======================================================================== NgModule
var ServiceModule = (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_3__service_component__["a" /* ServiceComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__service_component__["a" /* ServiceComponent */]
            ],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/service/service/my.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyService = (function () {
    function MyService() {
        this.name = '自定义服务';
        this.version = '1.0.0';
        this.isBack = true;
    }
    MyService.prototype.play = function () {
        alert('服务中的方法');
    };
    MyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MyService);
    return MyService;
}());



/***/ })

});
//# sourceMappingURL=service.module.chunk.js.map