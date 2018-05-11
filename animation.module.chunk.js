webpackJsonp(["animation.module"],{

/***/ "../../../../../src/app/views/ng/animation/animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/views/ng/animation/animations.ts");
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
var AnimationComponent = (function () {
    function AnimationComponent(router) {
        this.router = router;
        this.state1 = 'active'; // 设置默认显示动画
        this.state2 = 'void';
        this.state3 = 'void';
        this.state4 = 'void';
        this.data = ['trigger', 'state', 'style', 'animate', 'transition', 'keyframes', 'group'];
    }
    AnimationComponent.prototype.toggleState1 = function () {
        this.state1 = this.state1 === 'active' ? 'inactive' : 'active';
    };
    AnimationComponent.prototype.toggleState2 = function () {
        this.state2 = this.state2 === 'void' ? '*' : 'void';
    };
    AnimationComponent.prototype.toggleState3 = function () {
        this.state3 = this.state3 === 'void' ? '*' : 'void';
    };
    AnimationComponent.prototype.toggleState4 = function () {
        this.state4 = this.state4 === 'void' ? '*' : 'void';
    };
    AnimationComponent.prototype.animationStarted = function (v) {
        this.enter = v;
        console.log(v);
    };
    AnimationComponent.prototype.animationDone = function (v) {
        console.log(v);
        this.leave = v;
    };
    AnimationComponent.prototype.del = function (i) {
        this.data.splice(i, 1);
    };
    AnimationComponent.prototype.animation = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/animation/animations.ts';
    };
    AnimationComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/animation/animation.component.ts';
    };
    AnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"animation()\">\u67E5\u770B\u52A8\u753B\u7EC4</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u7ED1\u5B9A\u52A8\u753B\u5230\u5143\u7D20\u4E0A:  </dt>\n\t        \t<dd>&lt;div <b>[@animationName]=\"stateVar\"</b> &gt;&lt;/div&gt;</dd>\n\t        </dl>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u52A8\u753B:  </dt>\n\t        \t<dd><b>void => inactive</b>\uFF1A\u975E\u6FC0\u6D3B\u5143\u7D20\u8FDB\u573A</dd>\n\t        \t<dd><b>void => active</b>\uFF1A\u6FC0\u6D3B\u5143\u7D20\u8FDB\u573A</dd>\n\t        \t<dd><b>inactive => void</b>\uFF1A\u975E\u6FC0\u6D3B\u5143\u7D20\u79BB\u573A</dd>\n\t        \t<dd><b>active => void</b>\uFF1A\u6FC0\u6D3B\u5143\u7D20\u79BB\u573A</dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" [@msgState]=\"state1\" (click)=\"toggleState1()\">\u57FA\u672C\u8F6C\u573A\u52A8\u753B</button>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" [@flyInOut]=\"state2\" (click)=\"toggleState2()\">void\uFF08\u8FDB\u573A\u4E0E\u79BB\u573A\uFF09</button>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" [@keyFrame]=\"state3\" (click)=\"toggleState3()\">keyframes \u590D\u6742\u8F6C\u573A\u52A8\u753B</button>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" [@group]=\"state4\" (click)=\"toggleState4()\">group \u5E76\u884C\u52A8\u753B\u7EC4</button>\n        <hr class=\"_mt10_mb10x\">\n        <ul class=\"lh30 samebox mt10\">\n\t\t\t<li (click)=\"del(index)\"\n\t\t\t\t*ngFor=\"let v of data;index as index\" \n\t\t\t\t[@ngFor]=\"v.state\"\n\t\t\t\t[@ngFor]=\"state\"\n\t\t\t\t[@ngFor]=\"'in'\"\n\t\t\t\t(@ngFor.start)=\"animationStarted($event)\"\n\t\t\t\t(@ngFor.done)=\"animationDone($event)\"\n\t\t\t>{{v}}</li>\n\t\t</ul>\n    ",
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* Animations */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], AnimationComponent);
    return AnimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/animation/animation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationModule", function() { return AnimationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_component__ = __webpack_require__("../../../../../src/app/views/ng/animation/animation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 服务
// ===================================================== 同一个模块的组件

// ======================================================================== NgModule
var AnimationModule = (function () {
    function AnimationModule() {
    }
    AnimationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'animation', component: __WEBPACK_IMPORTED_MODULE_3__animation_component__["a" /* AnimationComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__animation_component__["a" /* AnimationComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], AnimationModule);
    return AnimationModule;
}());



/***/ })

});
//# sourceMappingURL=animation.module.chunk.js.map