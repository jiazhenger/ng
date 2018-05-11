webpackJsonp(["data.module"],{

/***/ "../../../../../src/app/views/ng/data/bind.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindComponent; });
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
// ===================================================== 

// ===================================================== 公共服务

// ===================================================== 
var BindComponent = (function () {
    function BindComponent(router) {
        this.router = router;
        this.title = 'Hello Angular';
        this.str = '<strong>Angular</strong>';
        this.data = {};
        this.className = 'current';
        this.flag = false;
        this.today = new Date();
    }
    BindComponent.prototype.changeColor = function () {
        this.flag = !this.flag;
    };
    BindComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/data/bind.component.ts';
    };
    BindComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n    \t<hr class=\"_mt10_mb10x\">\n        <div class=\"lh30 mvvm-code\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>\u63D2\u503C\u8868\u8FBE\u5F0F\u7ED1\u5B9A: </dt>\n\t        \t<dd><b>\uFF5B\uFF5Bvar\uFF5D\uFF5D</b> \u7ED1\u5B9A\u5355\u4E2A\u53D8\u91CF: <s>{{title}}</s></dd>\n\t        \t<dd><b>\uFF5B\uFF5B1+1\uFF5D\uFF5D\uFF5B\uFF5B1+1+var\uFF5D\uFF5D</b> \u8868\u8FBE\u5F0F\u7B80\u5355\u8BA1\u7B97: <s>{{1 + 1}}</s></dd>\n\t        \t<dd><b>\uFF5B\uFF5Ba ? m : n\uFF5D\uFF5D</b> \u4E09\u5143\u8FD0\u7B97: <s>{{true ? 200 : 100}}</s></dd>\n\t        \t<dd><b>\uFF5B\uFF5Btoday | date:'shortDate'\uFF5D\uFF5D</b> \u7BA1\u9053: <s>{{today | date:'shortDate'}}</s></dd>\n\t        \t<dd><b>\uFF5B\uFF5Bdata?.name\uFF5D\uFF5D</b> \u5B89\u5168\u5BFC\u822A\u64CD\u4F5C\u7B26 ( <b>?.</b> ), \u7981\u6B62\u5BF9\u8C61\u5C5E\u6027\u4E0D\u5B58\u5728\u65F6\u62A5\u9519: <s></s></dd>\n\t        \t<dd><b>\uFF5B\uFF5Bdata!.name\uFF5D\uFF5D</b> \u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26( <b>!</b> ), \u7981\u6B62\u5BF9\u8C61\u5C5E\u6027\u975E\u7A7A\u62A5\u9519 <s>{{data!.name}}</s></dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u63D2\u503C\u8868\u8FBE\u5F0F\u7981\u7528: </dt>\n\t        \t<dd>\u8D4B\u503C (=, +=, -=, ...)</dd>\n\t        \t<dd>new\u8FD0\u7B97\u7B26</dd>\n\t        \t<dd>\u4F7F\u7528;\u6216,\u7684\u94FE\u5F0F\u8868\u8FBE\u5F0F</dd>\n\t        \t<dd>\u81EA\u589E\u6216\u81EA\u51CF\u64CD\u4F5C\u7B26 (++\u548C--)</dd>\n\t        </dl>\n\t        <hr class=\"_mt10_mb10x\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u7ED1\u5B9A\u6587\u672C\u53CA html \u5185\u5BB9: </dt>\n\t        \t<dd><b>[innerText]</b> \u7ED1\u5B9A\u6587\u672C: <s [innerText]=\"title\"></s></dd>\n\t        \t<dd><b>[textContent]</b> \u7ED1\u5B9A\u6587\u672C: <s [textContent]=\"title\"></s></dd>\n\t        \t<dd><b>[innerHtml]</b> \u7ED1\u5B9A html: <s [innerHtml]=\"str\"></s></dd>\n\t        </dl>\n        \t<hr class=\"_mt10_mb10x\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u7ED9 html \u5143\u7D20\u7ED1\u5B9A\u5C5E\u6027:  </dt>\n\t        \t<dd [attr.title]=\"'this is a name'\">\n\t        \t\t<b>[attr.</b>title<b>]</b> \n\t        \t\t<b>[attr.</b>name<b>]</b>\n\t        \t\t<b>[attr.</b>id<b>]</b>\n\t        \t\t<b>[attr.</b>\u81EA\u5B9A\u4E49<b>]</b> \n\t        \t</dd>\n\t        \t<dd><b>[src]</b>\u3001<b>[attr.</b>src<b>]</b> </dd>\n\t        \t<dd><b>[href]</b>\u3001<b>[attr.</b>href<b>]</b></dd>\n\t        \t<dd><b>[disabled]</b></dd>\n\t        </dl>\n\t        <hr class=\"_mt10_mb10x\">\n\t        <dl class=\"mvvm-list\">\n\t\t        <dt>\u7ED1\u5B9Acss\u6837\u5F0F</dt>\n\t\t\t\t<dd [class.current]=\"flag\" class=\"name\">[class.current]=\"true or false\"</dd>\n\t\t\t\t\n\t\t\t\t<dd class=\"clearfix {{flag ? className : ''}}\">class=\"name \uFF5B\uFF5Bflag ? className : ''\uFF5D\uFF5D\"</dd>\n\t\t\t\t\n\t\t\t\t<dd [ngClass]=\"className\">[ngClass]=\"'str'\"\u3001[ngClass]=\"var\"</dd>\n\t\t\t\t\n\t\t\t\t<dd [ngClass]=\"{current:flag,line:flag}\">[ngClass]=\uFF5Bcurrent:flag,line:flag\uFF5D</dd>\n\t\t\t\t\n\t\t\t\t<dd [style.color]=\"flag ? 'red' : 'green'\">[style.color]=\"flag ? 'red' : 'green'\"</dd>\n\t\t\t\t\n\t\t\t\t<dd [ngStyle]=\"{'color':flag ? 'red' : 'green','background-color':'yellow'}\">[ngStyle]=\"\uFF5B'color':flag ? 'red' : 'green','background-color':'yellow'\uFF5D\"</dd>\n\t\t\t\t\n\t\t\t\t<dd [style.width.px]=\"500\" [style.background]=\"'#ccc'\">[style.width.px]=\"500\"</dd>\n\t\t\t</dl>\n\t\t\t<button class=\"btn-default\" (click)=\"changeColor()\">\u5207\u6362\u6837\u5F0F</button>\n        </div>\n    ",
            styles: ["\n    \t.current{color:blue;font-weight:bold;}\n    \t.line{text-decoration:underline;}\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], BindComponent);
    return BindComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bind_component__ = __webpack_require__("../../../../../src/app/views/ng/data/bind.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngFor_component__ = __webpack_require__("../../../../../src/app/views/ng/data/ngFor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngIf_component__ = __webpack_require__("../../../../../src/app/views/ng/data/ngIf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngSwitch_component__ = __webpack_require__("../../../../../src/app/views/ng/data/ngSwitch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hidden_component__ = __webpack_require__("../../../../../src/app/views/ng/data/hidden.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ======================================================================== 模板语法组件





// ======================================================================== NgModule
var Module = (function () {
    function Module() {
    }
    Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'bind', component: __WEBPACK_IMPORTED_MODULE_3__bind_component__["a" /* BindComponent */] },
                    { path: 'ngFor', component: __WEBPACK_IMPORTED_MODULE_4__ngFor_component__["a" /* NgForComponent */] },
                    { path: 'ngIf', component: __WEBPACK_IMPORTED_MODULE_5__ngIf_component__["a" /* NgIfComponent */] },
                    { path: 'ngSwitch', component: __WEBPACK_IMPORTED_MODULE_6__ngSwitch_component__["a" /* NgSwitchComponent */] },
                    { path: 'hidden', component: __WEBPACK_IMPORTED_MODULE_7__hidden_component__["a" /* HiddenComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bind_component__["a" /* BindComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ngFor_component__["a" /* NgForComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ngIf_component__["a" /* NgIfComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ngSwitch_component__["a" /* NgSwitchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hidden_component__["a" /* HiddenComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], Module);
    return Module;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/data/hidden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiddenComponent; });
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
// ===================================================== 

// ===================================================== 公共服务

// ===================================================== 
var HiddenComponent = (function () {
    function HiddenComponent(router) {
        this.router = router;
    }
    HiddenComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/data/hidden.component.ts';
    };
    HiddenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n    \t<hr class=\"_mt10_mb10x\">\n        <div class=\"lh30 mvvm-code\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>hidden \u5C5E\u6027\u5224\u65AD\u663E\u793A\u9690\u85CF(\u6CE8: hidden \u662F html5 \u5C5E\u6027, \u4E0D\u662F\u6307\u4EE4): </dt>\n\t        \t<dd>&lt;div <b>[hidden]=\"condition\"</b>&gt;</dd>\n\t        \t<dd>&lt;div <b>hidden</b>&gt; \u5355\u72EC\u4F7F\u7528\u65F6,\u4E3A true</dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" (click)=\"show = !show\">[hidden]</button>\n        \n        <p class=\"mt10\" [hidden]=\"show\">[hidden] \u9690\u85CF\u5143\u7D20</p>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], HiddenComponent);
    return HiddenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/data/ngFor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgForComponent; });
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
// ===================================================== 

// ===================================================== 公共服务

// ===================================================== 
var NgForComponent = (function () {
    function NgForComponent(router) {
        this.router = router;
        this.data = ['angular', 'react', 'vue', 'html5', 'css3', 'es6', 'java', 'php', 'asp.net'];
        this.list = [
            { name: 'angular', id: 0 },
            { name: 'react', id: 2 },
            { name: 'vue', id: 3 },
            { name: 'html5', id: 4 },
            { name: 'css3', id: 5 },
            { name: 'java', id: 6 },
            { name: 'php', id: 7 },
            { name: 'asp.net', id: 8 },
        ];
    }
    NgForComponent.prototype.delList = function (index) {
        this.list.splice(index, 1);
    };
    NgForComponent.prototype.delData = function (index) {
        this.data.splice(index, 1);
    };
    NgForComponent.prototype.trackByFn = function (index, value) {
        console.log(value);
        return index;
    };
    NgForComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/data/ngFor.component.ts';
    };
    NgForComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n    \t<hr class=\"_mt10_mb10x\">\n        <div class=\"lh30 mvvm-code\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u4E09\u79CD\u65B9\u5F0F\u5FAA\u73AF\u6570\u636E\u7ED1\u5B9A\u5230\u6A21\u677F: </dt>\n\t        \t<dd><b>*ngFor</b>=\"<br>\n\t        \t\t\t<b>let user of data | async as users;</b> <span class=\"ml30 mr30\">\u89E3\u6790\u6570\u636E: <i>data as users === users = data</i></span>\u5F02\u6B65\u5FAA\u73AF\uFF1A<i>| async</i><br><br>\n\t        \t\t\t<b>index as i;</b>\t\t<span class=\"ml30\">\u7D22\u5F15\u503C: <i>index: number</i></span><br>\n\t        \t\t\t<b>first as isFirst;</b> <span class=\"ml30\">\u7B2C\u4E00\u4E2A\u8282\u70B9<i>first: boolean</i></span><br>\n\t        \t\t\t<b>last as isLast;</b> \t<span class=\"ml30\">\u6700\u540E\u4E00\u4E2A\u8282\u70B9<i>last: boolean</i></span><br>\n\t        \t\t\t<b>even as isEven;</b> \t<span class=\"ml30\">\u5076\u6570\u8282\u70B9<i>even: boolean</i></span><br>\n\t        \t\t\t<b>odd as isOdd;</b>\t\t<span class=\"ml30\">\u5947\u6570\u8282\u70B9<i>odd: boolean</i></span><br> \n\t        \t\t\t<b>trackBy: trackByFn</b>\t<span class=\"ml30\">\u8FD4\u56DE\u8D44\u6E90\u88AB\u5224\u65AD\u4E3A\u6CA1\u6709\u53D8\u5316\u7684\u4F9D\u636E</span>\n\t        \t\t \"\n\t        \t</dd>\n\t\t\t\t<dd>\n\t\t\t\t\t<b>&lt;ng-template ngFor let-item [ngForOf]=\"data\" let-i=\"index\" let-first=\"first\" let-last=\"last\" let-odd=\"odd\" let-even=\"even\" [ngForTrackBy]=\"trackByFn\"&gt;</b><br>\n\t\t\t\t\t\t&lt;li&gt;...&lt;/li&gt;<br>\n\t\t\t\t\t<b>&lt;/ng-template&gt;</b>\n\t\t\t\t</dd>\n\t\t\t\t<dd><b>trackBy:trackByFn</b> trackByFn\u53EA\u80FD\u662F\u51FD\u6570,\u5FC5\u987B\u5728\u7C7B\u4E2D\u58F0\u660E,\u5426\u5219\u62A5\u9519</dd>\n\t        </dl>\n\t       \n\t        <hr class=\"_mt10_mb10x\">\n\t\t\t<h3>*ngFor \u5FAA\u73AF: </h3>\n\t   \t\t<ul>\n\t\t\t\t<li *ngFor=\"let v of list as users; \n\t\t\t\t\t\t\tindex as index; \n\t\t\t\t\t\t\tfirst as first; \n\t\t\t\t\t\t\tlast as last; \n\t\t\t\t\t\t\teven as even;\n\t\t\t\t\t\t\todd as odd;\n\t\t\t\t\t\t\ttrackBy:trackByFn\"\n\t\t\t\t\t\t\t(click)=\"delList(index)\"\n\t\t\t\t\t\t\t[ngStyle]=\"{'font-size':first && '30px',\n\t\t\t\t\t\t\t\t\t\t'font-weight':odd && 'bold',\n\t\t\t\t\t\t\t\t\t\t'color':even && 'blue',\n\t\t\t\t\t\t\t\t\t\t'background':last && '#ccc'\n\t\t\t\t\t\t\t}\"\n\t\t\t\t>{{index}} ====== {{v.name}}</li>\n\t   \t\t</ul>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t   \t\t<h3>ng-template \u5FAA\u73AF: </h3>\n\t   \t\t<ul>\n\t   \t\t\t<ng-template ngFor let-v [ngForOf]=\"data\" \n\t   \t\t\t\tlet-index = index\n\t   \t\t\t\tlet-first = first\n\t\t\t\t\tlet-last = last\n\t\t\t\t\tlet-even = even\n\t\t\t\t\tlet-odd = odd\n\t\t\t\t\t[ngForTrackBy] = \"trackByFn\"\n\t   \t\t\t>\n\t   \t\t\t\t<li\t[ngStyle]=\"{'font-size':first && '30px',\n\t\t\t\t\t\t\t\t\t'font-weight':odd && 'bold',\n\t\t\t\t\t\t\t\t\t'color':even && 'blue',\n\t\t\t\t\t\t\t\t\t'background':last && '#ccc'}\"\n\t   \t\t\t\t\t(click)=\"delData(index)\"\n\t   \t\t\t\t>{{index}} ====== {{v}}</li>\n\t   \t\t\t</ng-template>\n\t   \t\t</ul>\n        </div>\n    ",
            styles: ["\n    \t.current{color:blue;font-weight:bold;}\n    \t.line{text-decoration:underline;}\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], NgForComponent);
    return NgForComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/data/ngIf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgIfComponent; });
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
// ===================================================== 

// ===================================================== 公共服务

// ===================================================== 
var NgIfComponent = (function () {
    function NgIfComponent(router) {
        this.router = router;
        this.isActive = false;
        this.show = true;
        this.flag = true;
    }
    NgIfComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/data/ngIf.component.ts';
    };
    NgIfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n    \t<hr class=\"_mt10_mb10x\">\n        <div class=\"lh30 mvvm-code\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>*ngIf \u6761\u4EF6\u8868\u8FBE\u5F0F: </dt>\n\t        \t<dd><b>*ngIf=\"isActive | async as user\"</b></dd>\n\t        \t<dd><b>*ngIf=\"show; else id\"</b> &lt;ng-template <b>#id</b> <b>let-user</b>&gt;\uFF5B\uFF5Buser|json\uFF5D\uFF5D&lt;/ng-template&gt;</dd>\n\t        \t<dd><b>*ngIf=\"show; then id1; else id2\"</b> &lt;ng-template <b>#id1</b> &gt;&lt;/ng-template&gt;&lt;ng-template <b>#id2</b> &gt;&lt;/ng-template&gt;</dd>\n\t        \t<dd>then \u6A21\u677F\u9664\u975E\u7ED1\u5B9A\u5230\u4E0D\u540C\u7684\u503C\uFF0C\u5426\u5219\u9ED8\u8BA4\u662F ngIf \u6307\u4EE4\u5173\u8054\u7684\u5185\u8054\u6A21\u677F</dd>\n\t        \t<dd>else \u6A21\u677F\u9664\u975E\u7ED1\u5B9A\u5BF9\u5E94\u7684\u503C\uFF0C\u5426\u5219\u9ED8\u8BA4\u662F null</dd>\n\t        \t<dd>\n\t        \t\t<b>\n\t        \t\t\t&lt;ng-template [ngIf]=\"condition\"&gt;\n\t        \t\t\t&lt;/ng-template&gt;\n\t        \t\t</b>\n\t        \t</dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        <p>\n        \t<button class=\"btn-default\" (click)= \"isActive = !isActive\">*ngIf=\"isActive\"</button>\n        \t<span *ngIf=\"isActive as v\">*ngIf=\"isActive\" {{v}}</span>\n        </p>\n        <hr class=\"_mt10_mb10x\">\n        <p>\n        \t<button class=\"btn-default\" (click)= \"show = !show\">show;else id</button>\n        \t<span *ngIf=\"show;else mybook\">*ngIf=\"show\"</span>\n        \t<ng-template #mybook>else \u6A21\u677F</ng-template>\n        </p>\n        <hr class=\"_mt10_mb10x\">\n        <p>\n        \t<button class=\"btn-default\" (click)= \"flag=!flag\">show</button>\n        \t<span *ngIf=\"flag;then id1;else id2\">\u9ED8\u8BA4\u6A21\u677F {{flag}}</span>\n        \t<ng-template #id1> then \u6A21\u677F</ng-template>\n        \t<ng-template #id2> else \u6A21\u677F</ng-template>\n        </p>\n        <ng-template [ngIf]=\"flag\">[ngIf]=\"\"</ng-template>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], NgIfComponent);
    return NgIfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/data/ngSwitch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSwitchComponent; });
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
// ===================================================== 

// ===================================================== 公共服务

// ===================================================== 
var NgSwitchComponent = (function () {
    function NgSwitchComponent(router) {
        this.router = router;
        this.isActive = false;
        this.show = true;
        this.flag = true;
    }
    NgSwitchComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/data/ngSwitch.component.ts';
    };
    NgSwitchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n    \t<hr class=\"_mt10_mb10x\">\n        <div class=\"lh30 mvvm-code\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>[ngSwitch] \u6761\u4EF6\u8868\u8FBE\u5F0F: </dt>\n\t        \t<dd>\n\t        \t\t&lt;div <b>[ngSwitch]</b>=\"switch_expression\"&gt;<br>\n\t        \t\t\t&lt;p <b>*ngSwitchCase</b>=\"match_expression_1\"&gt;&lt;/p&gt;<br>\n\t        \t\t\t&lt;p <b>*ngSwitchCase</b>=\"match_expression_2\"&gt;&lt;/p&gt;<br>\n\t        \t\t\t&lt;p <b>*ngSwitchDefault</b>\"&gt;&lt;/p&gt;<br>\n\t        \t\t&lt;/div&gt;\n\t        \t</dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        <button class=\"btn-default\" (click)=\"a=1\">\u6761\u4EF6\u4E00</button>\n        <button class=\"btn-default\" (click)=\"a=2\">\u6761\u4EF6\u4E8C</button>\n        <button class=\"btn-default\" (click)=\"a=3\">\u6761\u4EF6\u4E09</button>\n        \n        <div class=\"mt20\" [ngSwitch]=\"a\">\n        \t<p *ngSwitchCase=\"1\">\u8FD9\u662F\u6761\u4EF6\u4E00</p>\n        \t<p *ngSwitchCase=\"2\">\u8FD9\u662F\u6761\u4EF6\u4E8C</p>\n        \t<p *ngSwitchCase=\"3\">\u8FD9\u662F\u6761\u4EF6\u4E09</p>\n        \t<p *ngSwitchDefault>\u8FD9\u662F\u9ED8\u8BA4\u6761\u4EF6</p>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], NgSwitchComponent);
    return NgSwitchComponent;
}());



/***/ })

});
//# sourceMappingURL=data.module.chunk.js.map