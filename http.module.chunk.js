webpackJsonp(["http.module"],{

/***/ "../../../../../src/app/views/ng/http/http.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
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
var HttpComponent = (function () {
    function HttpComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    HttpComponent.prototype.getToken = function () {
        console.log(localStorage);
    };
    HttpComponent.prototype.getData = function () {
    };
    HttpComponent.prototype.postData = function () {
    };
    HttpComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/http/http.component.ts';
    };
    HttpComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/http.service.ts';
    };
    HttpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    \t<div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"service()\">\u67E5\u770B\u670D\u52A1</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>Http \u8BF7\u6C42\u6570\u636E:  </dt>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" (click)=\"service()\">get \u6587\u672C</button>\n        <button class=\"btn-default\" (click)=\"getToken()\">\u83B7\u53D6 token</button>\n        <button class=\"btn-default\" (click)=\"getData()\">\u83B7\u53D6\u83B7\u53D6</button>\n        <button class=\"btn-default\" (click)=\"postData()\">\u63D0\u4EA4\u6570\u636E</button>\n        <button class=\"btn-default\" (click)=\"router.reload()\">\u5237\u65B0\u5F53\u524D\u9875\u9762</button>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__["a" /* HttpService */]])
    ], HttpComponent);
    return HttpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/http/http.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_component__ = __webpack_require__("../../../../../src/app/views/ng/http/http.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件

// ======================================================================== NgModule
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'http', component: __WEBPACK_IMPORTED_MODULE_3__http_component__["a" /* HttpComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__http_component__["a" /* HttpComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], HttpModule);
    return HttpModule;
}());



/***/ })

});
//# sourceMappingURL=http.module.chunk.js.map