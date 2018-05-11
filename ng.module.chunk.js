webpackJsonp(["ng.module"],{

/***/ "../../../../../src/app/views/ng/default/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// ===================================================== 
var Default = (function () {
    function Default() {
    }
    Default = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<a class=\"btn-default mr10\" href=\"http://www.angular.cn\" target=\"_blank\">angular \u5B98\u65B9\u6587\u6863</a>\n\t\t\t<a class=\"btn-default mr10\" href=\"https://github.com/angular/angular\" target=\"_blank\">angular \u5B98\u65B9\u7248\u672C</a>\n\t\t\t<a class=\"btn-default mr10\" href=\"https://github.com/angular/angular-cli\" target=\"_blank\">@angular/cli \u5B98\u65B9\u7248\u672C</a>\n\t\t\t<a class=\"btn-default mr10\" href=\"http://www.runoob.com/js/js-tutorial.html\" target=\"_blank\">js/html \u57FA\u7840\u67E5\u8BE2\u6587\u6863</a>\n\t\t</div>\n\t\t<div class=\"samebox\">\n\t\t\t<a class=\"btn-default mr10\" href=\"https://ng.ant.design/#/docs/angular/introduce\" target=\"_blank\">ng-zorro-antd ui</a>\n\t\t\t<a class=\"btn-default mr10\" href=\"https://cipchk.github.io/ng-alain/dashboard/v1\" target=\"_blank\">ng-alain ui</a>\n\t\t</div>\n\t\t<dl class=\"mvvm-list samebox mt10\">\n\t\t\t<dt>\u73AF\u5883\u914D\u7F6E\uFF1A</dt>\n\t\t\t<dd><b>npm install -g @angular/cli</b> # \u5B89\u88C5\u811A\u624B\u67B6</dd>\n\t\t\t<dd><b>ng new project-name</b> # \u65B0\u5EFA\u9879\u76EE\u6587\u4EF6\u5939</dd>\n\t\t\t<dd><b>cd project-name</b> # \u5230\u9879\u76EE\u6587\u4EF6\u5939</dd>\n\t\t\t<dd><b>ng serve</b> # \u542F\u52A8 angular</dd>\n\t\t\t<dd><b>ng serve --host 0.0.0.0 --port 4201</b> # \u5728\u4E0D\u540C\u7684\u7AEF\u53E3\u542F\u52A8 angular</dd>\n\t\t\t<dd><b>ng build --prot --aot</b></dd>\n\t\t</dl>\n\t\t<dl class=\"mvvm-list samebox mt10\">\n\t\t\t<dt>\u5B89\u88C5\u5305\u547D\u4EE4\uFF1A</dt>\n\t\t\t<dd><b>npm install webpack</b> # \u5F53\u524D\u76EE\u5F55\u5B89\u88C5</dd>\n\t\t\t<dd><b>npm install webpack -g</b> # \u5168\u5C40\u5B89\u88C5</dd>\n\t\t\t<dd><b>npm install webpack --save</b> # \u7A0B\u5E8F\u751F\u4EA7\u73AF\u5883\u6240\u9700\u5305</dd>\n\t\t\t<dd><b>npm install webpack --only=dev</b> # \u7A0B\u5E8F\u5F00\u53D1\u73AF\u5883\u6240\u9700\u5305</dd>\n\t\t</dl>\n\t"
        })
    ], Default);
    return Default;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
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
var EventComponent = (function () {
    function EventComponent(router) {
        this.router = router;
    }
    EventComponent.prototype.change = function () {
        alert('事件执行成功');
    };
    EventComponent.prototype.inputBlur = function (obj) {
        this.value = obj.value;
    };
    EventComponent.prototype.inputChange = function (obj) {
        this.str = obj.value + ' 输入改变';
    };
    EventComponent.prototype.inputEnter = function (val) {
        this.some = val;
    };
    EventComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/event/event.component.ts';
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        <div class=\"lh30 mvvm-code mt10\">\n\t        <dl class=\"mvvm-list samebox\">\n\t        \t<dt>\u4E00\u822C\u4E8B\u4EF6: </dt>\n\t        \t<dd><b>(click)=\"a='str';b='str'\"</b></dd>\n\t        \t<dd><b>(mouseover) = \"change()\"</b></dd>\n\t        \t<dd><b>(mouseout) = \"\"</b></dd>\n\t        \t<dd><b>(mouseenter) = \"\"</b></dd>\n\t        \t<dd><b>(mouseleave) = \"\"</b></dd>\n\t        \t<dd><b>(mousedown) = \"\"</b></dd>\n\t        \t<dd><b>(mouseup) = \"\"</b></dd>\n\t        \t<dd><b>(keydown) = \"\"</b></dd>\n\t        \t<dd><b>(keyup) = \"\"</b></dd>\n\t        \t<dd><b>(keypress) = \"\"</b></dd>\n\t        </dl>\n\t\t\t<dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u8868\u5355\u4E8B\u4EF6: </dt>\n\t        \t<dd><b>(focus) = \"a='str';b='str'\"</b></dd>\n\t        \t<dd><b>(blur) = \"\"</b></dd>\n\t        \t<dd><b>(change) = \"change($event)\"</b></dd>\n\t        \t<dd><b>(ngModelChange) = \"change($event)\"</b></dd>\n\t        \t<dd><b>(submit) = \"submit(value,valid)\"</b></dd>\n\t        </dl>\n        </div>\n        \n\t\t<div class=\"samebox mt10\">\n        \t<button class=\"btn-default\" (click)=\"change()\">click</button>\n        \t<button class=\"btn-default\" (mousedown)=\"change()\">mousedown</button>\n        \t<button class=\"btn-default\" (mouseup)=\"change()\">mouseup</button>\n\t\t</div>\n        \n\t\t<div class=\"samebox mt10\">\n        \t<p>(blure): <input #key (blur)=\"inputBlur(key)\"> {{value}}</p>\n        \t<p class=\"mt10\">(change): <input #obj (change)=\"inputChange(obj)\"> {{str}}</p>\n        \t<p class=\"mt10\">(keyup): <input #a (keyup)=\"inputEnter(a.value)\"> {{some}}</p>\n\t\t</div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/index/index.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\">\r\n\t<header class=\"header\">\r\n\t\t<h1 class=\"logo\"><a routerLink=\"/ng\"><img src=\"../../../assets/images/logo.png\"></a></h1>\r\n\t\t<i class=\"font-navicon small-nav\" id=\"smallNav\"></i>\r\n\t</header>\r\n\t<section class=\"container\">\r\n\t\t<aside class=\"navigation oys\" id=\"navigation\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>路由与导航</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>同步路由</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/sync-only-component\" routerLinkActive=\"active\">只有组件</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/sync-has-ngModule\" routerLinkActive=\"active\">带 ngModule</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>异步路由</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/async-one\" routerLinkActive=\"active\">异步加载一个路由</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/async-many\" routerLinkActive=\"active\">异步加载一个模块</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/preload\" routerLinkActive=\"active\">预加载</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>子路由</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/child-sync\" routerLinkActive=\"active\">同步 tab 子路由</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/child-async\" routerLinkActive=\"active\">异步 tab 子路由</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/async-many\" routerLinkActive=\"active\">url 子路由</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/auth-guard\" routerLinkActive=\"active\">路由守卫</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/fragment\" routerLinkActive=\"active\">查询参数及片段</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>路由导航</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/router-nav\" routerLinkActive=\"active\">模板式导入</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/router-nav-order\" routerLinkActive=\"active\">命令式导入</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/router-param/22\" routerLinkActive=\"active\">获取参数</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/router-event\" routerLinkActive=\"active\">监听路由</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>模板与数据绑定</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/data/bind\" routerLinkActive=\"active\">绑定数据到模板</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/data/ngFor\" routerLinkActive=\"active\">*ngFor 循环绑定数据</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/data/ngIf\" routerLinkActive=\"active\">*ngIf 条件表达式</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/data/ngSwitch\" routerLinkActive=\"active\">[ngSwitch] 条件表达式</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/data/hidden\" routerLinkActive=\"active\">[hidden] 条件表达式</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>事件绑定</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/event\" routerLinkActive=\"active\">事件绑定</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>表单</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/form/form\" routerLinkActive=\"active\">表单提交</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/form/checkbox\" routerLinkActive=\"active\">多选框取value值</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>多选框全选取 data 上的值</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/form/checkbox-all\" routerLinkActive=\"active\">以数据索引排序多选</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/form/checkbox-all-id\" routerLinkActive=\"active\">以数据  id 排序多选</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li routerLink=\"/ng/form/template-var\" routerLinkActive=\"active\"><a>模板引用变量</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>表单验证</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/form/validate-inner\" routerLinkActive=\"active\">内置模板验证</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/form/validate-form-group\" routerLinkActive=\"active\">FormGroup函数验证</a>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/form/validate-form-builder\" routerLinkActive=\"active\">FormBuilder函数验证</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>文件上传</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/ng/form/file-upload\" routerLinkActive=\"active\">文件上传</a>\r\n\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>组件</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/component/layout\" routerLinkActive=\"active\">组件格式</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/component/cpt-life\" routerLinkActive=\"active\">组件生命周期</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<h5 class=\"js-tit\"><span>组件通信</span><i class=\"font-angle-right\"></i></h5>\r\n\t\t\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/ng/component/input\" routerLinkActive=\"active\">@Input() 子取父</a></li>\r\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/ng/component/output\" routerLinkActive=\"active\">@Output() 监听父事件</a></li>\r\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/ng/component/viewchild\" routerLinkActive=\"active\">@ViewChild() 父取子</a></li>\r\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/ng/component/viewchildren\" routerLinkActive=\"active\">@ViewChildren() 父取多子</a></li>\r\n\t\t\t\t\t\t\t\t<li><a routerLink=\"/ng/component/id\" routerLinkActive=\"active\">模板引用变量父取子</a></li>\r\n\t\t\t\t\t\t\t</menu>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>指令</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/directive/property\" routerLinkActive=\"active\">属性型指令</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/directive/structure\" routerLinkActive=\"active\">结构型指令</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>管道</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/pipe/inner\" routerLinkActive=\"active\">内置管道</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/pipe/my\" routerLinkActive=\"active\">自定义管道</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>服务</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/service/service\" routerLinkActive=\"active\">自定义服务</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>动画</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/animation/animation\" routerLinkActive=\"active\">转场动画</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>Http</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/http/http\" routerLinkActive=\"active\">Http 请求数据</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>@ngrx</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/ngrx\" routerLinkActive=\"active\">ngrx</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>Typescript</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/typescript/type\" routerLinkActive=\"active\">定义变量强类型</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/typescript/func\" routerLinkActive=\"active\">定义函数强类型</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/typescript/interface\" routerLinkActive=\"active\">定义接口</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 class=\"js-tit\"><span>案例</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t\t<menu>\r\n\t\t\t\t\t\t<li><a routerLink=\"/ng/case/calendar\" routerLinkActive=\"active\">时间组件</a></li>\r\n\t\t\t\t\t</menu>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</aside>\r\n\t\t<main class=\"oxys\">\r\n\t\t\t<section class=\"content ng-frame\">\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</section>\r\n\t\t</main>\r\n\t</section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/ng/index/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// ===================================================== 
var Index = (function () {
    function Index() {
    }
    Index.prototype.ngAfterViewInit = function () {
        var $nav = $('#navigation');
        var $snav = $('#smallNav');
        // 展开收缩目录
        $nav.find('.js-tit').click(function () {
            if ($(this).next().css('display') == 'none') {
                $(this).addClass('active').next().fadeIn(200);
            }
            else {
                $(this).removeClass('active').next().fadeOut(200);
            }
            return false;
        });
        setTimeout(function () {
            // 刷新判断当前页面
            $nav.find('a').each(function () {
                if ($(this).hasClass('active')) {
                    $(this).parents('nav').fadeIn(200).prev().addClass('active');
                    $(this).parents('menu').fadeIn(200).prev().addClass('active');
                }
            });
        });
        // 显示导航
        $snav.click(function () {
            $nav.addClass('show');
            return false;
        });
        // 隐藏导航
        $('body').click(function () {
            if ($snav.css('display') != 'none') {
                $nav.removeClass('show');
            }
        });
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'full-screen',
            template: __webpack_require__("../../../../../src/app/views/ng/index/index.html"),
            styles: [__webpack_require__("../../../../../src/app/views/pc/index/style.css")]
        })
    ], Index);
    return Index;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/ng.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularModule", function() { return AngularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_preload_service__ = __webpack_require__("../../../../../src/app/services/preload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index__ = __webpack_require__("../../../../../src/app/views/ng/index/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_component__ = __webpack_require__("../../../../../src/app/views/ng/default/component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_sync_syncOnlyComponent__ = __webpack_require__("../../../../../src/app/views/ng/router/sync/syncOnlyComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_sync_syncHasNgModule_module__ = __webpack_require__("../../../../../src/app/views/ng/router/sync/syncHasNgModule.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_child_childSync_module__ = __webpack_require__("../../../../../src/app/views/ng/router/child/childSync.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router_auth_guard_auth_guard_component__ = __webpack_require__("../../../../../src/app/views/ng/router/auth-guard/auth-guard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__router_auth_guard_test_component_a_component__ = __webpack_require__("../../../../../src/app/views/ng/router/auth-guard/test-component/a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__router_auth_guard_test_component_b_component__ = __webpack_require__("../../../../../src/app/views/ng/router/auth-guard/test-component/b.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__router_auth_guard_test_component_c_component__ = __webpack_require__("../../../../../src/app/views/ng/router/auth-guard/test-component/c.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__router_nav_router_nav_component__ = __webpack_require__("../../../../../src/app/views/ng/router/nav/router-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__router_nav_router_nav_order_component__ = __webpack_require__("../../../../../src/app/views/ng/router/nav/router-nav-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router_nav_router_event_component__ = __webpack_require__("../../../../../src/app/views/ng/router/nav/router-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__router_nav_param_component__ = __webpack_require__("../../../../../src/app/views/ng/router/nav/param.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__event_event_component__ = __webpack_require__("../../../../../src/app/views/ng/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngrx_ngrx_component__ = __webpack_require__("../../../../../src/app/views/ng/ngrx/ngrx.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ======================================================================== 服务



// ======================================================================== 同一个模块的组件


// ======================================================================== 同步异步路由



// ======================================================================== 路由守卫




// ======================================================================== 路由导航




// ======================================================================== 事件绑定

// ======================================================================== ngrx 状态管理

// ======================================================================== NgModule
var AngularModule = (function () {
    function AngularModule() {
    }
    AngularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__router_sync_syncHasNgModule_module__["a" /* SyncHasNgModuleModule */],
                __WEBPACK_IMPORTED_MODULE_10__router_child_childSync_module__["a" /* ChildSyncModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__index_index__["a" /* Index */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__default_component__["a" /* Default */] },
                            // ======================================================================== 路由
                            // 同步路由，需要在本  @NgModule 中标记
                            { path: 'sync-only-component', component: __WEBPACK_IMPORTED_MODULE_8__router_sync_syncOnlyComponent__["a" /* SyncOnlyComponent */] },
                            // 异步加载路由，无需在本  @NgModule 中标记
                            { path: 'async-one', loadChildren: './router/async/one/asyncOne.module#Module' },
                            { path: 'async-many', loadChildren: './router/async/many/asyncMany.module#Module' },
                            // 预加载
                            { path: 'preload', loadChildren: './router/preload/preload.module#Module', data: { preload: true } },
                            // 惰性加载子组件
                            { path: 'child-async', loadChildren: './router/child/childAsync.module#ChildAsyncModule' },
                            // 路由守卫
                            {
                                path: 'auth-guard',
                                component: __WEBPACK_IMPORTED_MODULE_11__router_auth_guard_auth_guard_component__["a" /* AuthGuardComponent */],
                                canLoad: [__WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__["a" /* AuthGuard */]],
                                canActivate: [__WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__["a" /* AuthGuard */]],
                                canDeactivate: [__WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__["a" /* AuthGuard */]],
                                data: { id: 1, title: '路由守卫' },
                                resolve: { data: __WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__["a" /* AuthGuard */] },
                                children: [
                                    {
                                        path: '',
                                        canActivateChild: [__WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__["a" /* AuthGuard */]],
                                        children: [
                                            { path: 'test-a', component: __WEBPACK_IMPORTED_MODULE_12__router_auth_guard_test_component_a_component__["a" /* AComponent */] },
                                            { path: 'test-b', component: __WEBPACK_IMPORTED_MODULE_13__router_auth_guard_test_component_b_component__["a" /* BComponent */] },
                                            { path: 'test-c', component: __WEBPACK_IMPORTED_MODULE_14__router_auth_guard_test_component_c_component__["a" /* CComponent */] },
                                        ]
                                    }
                                ]
                            },
                            // 查询参数及片段
                            { path: 'fragment', loadChildren: './router/fragment/fragment.module#FragmentModule' },
                            // 路由导航
                            { path: 'router-nav', component: __WEBPACK_IMPORTED_MODULE_15__router_nav_router_nav_component__["a" /* RouterNavComponent */] },
                            { path: 'router-nav-order', component: __WEBPACK_IMPORTED_MODULE_16__router_nav_router_nav_order_component__["a" /* RouterNavOrderComponent */] },
                            { path: 'router-event', component: __WEBPACK_IMPORTED_MODULE_17__router_nav_router_event_component__["a" /* RouterEventComponent */] },
                            { path: 'router-param/:id', component: __WEBPACK_IMPORTED_MODULE_18__router_nav_param_component__["a" /* ParamComponent */], data: { my: 'hello angular' }, },
                            { path: 'query', component: __WEBPACK_IMPORTED_MODULE_18__router_nav_param_component__["a" /* ParamComponent */], data: { my: 'hello angular' }, },
                            // 模板指令语法
                            { path: 'data', loadChildren: './data/data.module#Module' },
                            // 事件绑定
                            { path: 'event', component: __WEBPACK_IMPORTED_MODULE_19__event_event_component__["a" /* EventComponent */], data: { title: '事件绑定' } },
                            // 表单
                            { path: 'form', loadChildren: './form/form.module#FormModule' },
                            // 组件
                            { path: 'component', loadChildren: './component/cpt.module#CptModule' },
                            // 指令
                            { path: 'directive', loadChildren: './directive/directive.module#DirectiveModule' },
                            // 管道
                            { path: 'pipe', loadChildren: './pipe/pipe.module#PipeModule' },
                            // 服务
                            { path: 'service', loadChildren: './service/service.module#ServiceModule' },
                            // 动画
                            { path: 'animation', loadChildren: './animation/animation.module#AnimationModule' },
                            // http
                            { path: 'http', loadChildren: './http/http.module#HttpModule' },
                            // ngrx
                            { path: 'ngrx', component: __WEBPACK_IMPORTED_MODULE_20__ngrx_ngrx_component__["a" /* NgrxComponent */] },
                            // typescript
                            { path: 'typescript', loadChildren: './typescript/typescript.module#TypescriptModule' },
                            // 案例
                            { path: 'case', loadChildren: './case/case.module#CaseModule' },
                        ]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__index_index__["a" /* Index */], __WEBPACK_IMPORTED_MODULE_7__default_component__["a" /* Default */], __WEBPACK_IMPORTED_MODULE_8__router_sync_syncOnlyComponent__["a" /* SyncOnlyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__router_auth_guard_auth_guard_component__["a" /* AuthGuardComponent */], __WEBPACK_IMPORTED_MODULE_12__router_auth_guard_test_component_a_component__["a" /* AComponent */], __WEBPACK_IMPORTED_MODULE_13__router_auth_guard_test_component_b_component__["a" /* BComponent */], __WEBPACK_IMPORTED_MODULE_14__router_auth_guard_test_component_c_component__["a" /* CComponent */],
                __WEBPACK_IMPORTED_MODULE_15__router_nav_router_nav_component__["a" /* RouterNavComponent */], __WEBPACK_IMPORTED_MODULE_16__router_nav_router_nav_order_component__["a" /* RouterNavOrderComponent */], __WEBPACK_IMPORTED_MODULE_17__router_nav_router_event_component__["a" /* RouterEventComponent */], __WEBPACK_IMPORTED_MODULE_18__router_nav_param_component__["a" /* ParamComponent */],
                __WEBPACK_IMPORTED_MODULE_19__event_event_component__["a" /* EventComponent */], __WEBPACK_IMPORTED_MODULE_20__ngrx_ngrx_component__["a" /* NgrxComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_app_services_preload_service__["a" /* PreloadService */],
                __WEBPACK_IMPORTED_MODULE_4_app_services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard_service__["a" /* AuthGuard */] // 路由守卫服务
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], AngularModule);
    return AngularModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/ngrx/ngrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_ngrx_actions__ = __webpack_require__("../../../../../src/app/ngrx/actions.ts");
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
var NgrxComponent = (function () {
    function NgrxComponent(router, store, http) {
        var _this = this;
        this.router = router;
        this.store = store;
        this.http = http;
        store.select('prompt').subscribe(function (v) { return _this.prompt = v; });
        store.select('loading').subscribe(function (v) { return _this.loading = v; });
        this.store.dispatch({ type: 'init' });
        store.select('config').subscribe(function (v) { return _this.config = v; });
        //this.http.$fn.dispatch('init','config', v => this.config = v)
    }
    NgrxComponent.prototype.change = function () {
        var _this = this;
        this.store.dispatch({ type: 'LoadingOpen' });
        setTimeout(function () { _this.store.dispatch({ type: 'LoadingClose' }); }, 1000);
    };
    NgrxComponent.prototype.change2 = function () {
        this.http.$fn.loading();
    };
    NgrxComponent.prototype.change3 = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_ngrx_actions__["b" /* PromptOpen */]('加载中...'));
        setTimeout(function () { _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_ngrx_actions__["a" /* PromptClose */]()); }, 1000);
    };
    NgrxComponent.prototype.change4 = function () {
        this.http.$fn.prompt('正在加载中');
    };
    NgrxComponent.prototype.reducers = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ngrx/reducers.ts';
    };
    NgrxComponent.prototype.actions = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ngrx/actions.ts';
    };
    NgrxComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ngrx/ngrx.component.ts';
    };
    NgrxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"reducers()\">\u67E5\u770B reducers</button>\n\t\t\t<button class=\"btn-default\" (click) = \"actions()\">\u67E5\u770B actions</button>\n\t\t</div>\n\t\t<div class=\"lh30 mvvm-code mt10\">\n\t\t\t<dl class=\"mvvm-list samebox\">\n\t\t\t\t<dt>rgrx \u72B6\u6001\u7BA1\u7406: </dt>\n\t\t\t\t<dd><b>store.select('prompt').subscribe(v => this.prompt = v )</b> \u83B7\u53D6 reducers \u4E2D prompt \u51FD\u6570\u8FD4\u56DE\u7684\u503C\uFF1A<i>{{ prompt|json }}</i></dd>\n\t\t\t\t<dd><b>store.select('loading').subscribe(v => this.loading = v )</b> \u83B7\u53D6 reducers \u4E2D loading \u51FD\u6570\u8FD4\u56DE\u7684\u503C\uFF1A<i>{{ loading }}</i></dd>\n\t\t\t</dl>\n\t\t\t<dl class=\"mvvm-list samebox\">\n\t\t\t\t<dt>\u6539\u53D8 reducers \u503C: </dt>\n\t\t\t\t<dd><button class=\"btn-default\" (click)=\"change()\">loading \u52A0\u8F7D\u6548\u679C</button></dd>\n\t\t\t\t<dd><button class=\"btn-default\" (click)=\"change2()\">\u5C01\u88C5\u8C03\u7528 loading \u52A0\u8F7D\u6548\u679C</button></dd>\n\t\t\t\t<dd><button class=\"btn-default\" (click)=\"change3()\">prompt \u5E26\u53C2\u6570\u63D0\u793A</button></dd>\n\t\t\t\t<dd><button class=\"btn-default\" (click)=\"change4()\">\u5C01\u88C5\u8C03\u7528 prompt \u5E26\u53C2\u6570\u63D0\u793A</button></dd>\n\t\t\t</dl>\n\t\t</div>\n\t\t<div class=\"samebox mt10\">\n\t\t\t\u83B7\u53D6\u5168\u5C40\u914D\u7F6E\u503C: {{ config | json }}\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_3_app_services_http_service__["a" /* HttpService */]])
    ], NgrxComponent);
    return NgrxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/auth-guard/auth-guard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardComponent; });
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
var AuthGuardComponent = (function () {
    function AuthGuardComponent(router, route) {
        this.router = router;
        this.route = route;
        this.data = [];
    }
    AuthGuardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.data = JSON.stringify(data, null, '\t');
        });
    };
    AuthGuardComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/auth-guard/auth-guard.component.ts';
    };
    AuthGuardComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/auth-guard.service.ts';
    };
    AuthGuardComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    AuthGuardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"service()\">auth-guard.service \u8DEF\u7531\u5B88\u536B\u670D\u52A1</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">ng.module \u5728\u8DEF\u7531\u4E0A\u914D\u7F6E\u8DEF\u7531\u5B88\u536B</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"/ng/auth-guard/test-a\" routerLinkActive=\"active\">\u5230 A \u5B50\u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"/ng/auth-guard/test-b\" routerLinkActive=\"active\">\u5230 B \u5B50\u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o\" routerLink=\"/ng/auth-guard/test-c\" routerLinkActive=\"active\">\u5230 C \u5B50\u8DEF\u7531</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<!-- \u5B50\u8DEF\u7531\u51FA\u53E3 -->\n\t\t\t<router-outlet></router-outlet>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<pre class=\"mvvm-pre\">{{data}}</pre>\n\t\t</nav>\n\t",
            styles: ["\n\t\t.active{border-color:#d6487e;color:#d6487e;}\n\t"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AuthGuardComponent);
    return AuthGuardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/auth-guard/test-component/a.component.ts":
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

/***/ "../../../../../src/app/views/ng/router/auth-guard/test-component/b.component.ts":
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

/***/ "../../../../../src/app/views/ng/router/auth-guard/test-component/c.component.ts":
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



/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/childSync.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildSyncComponent; });
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
var ChildSyncComponent = (function () {
    function ChildSyncComponent(router) {
        this.router = router;
    }
    ChildSyncComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/child/childSync.component.ts';
    };
    ChildSyncComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/child/childSync.module.ts';
    };
    ChildSyncComponent.prototype.appModule = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    ChildSyncComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box ng-frame\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u7EC4\u4EF6\u5FC5\u987B\u914D\u7F6E routerOutlet</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">@NgModule \u5B50\u8DEF\u7531\u914D\u7F6E</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appModule()\">ng.module \u5BFC\u5165\u6A21\u5757</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"/ng/child-sync/test-a\" routerLinkActive=\"active\" replaceUrl=\"false\">\u5230 A \u5B50\u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o mr10\" routerLink=\"/ng/child-sync/test-b\" routerLinkActive=\"active\" replaceUrl=\"false\">\u5230 B \u5B50\u8DEF\u7531</button>\n\t\t\t<button class=\"btn-o\" routerLink=\"/ng/child-sync/test-c\" routerLinkActive=\"active\" replaceUrl=\"false\">\u5230 C \u5B50\u8DEF\u7531</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<!-- \u5B50\u8DEF\u7531\u51FA\u53E3 -->\n\t\t\t<router-outlet></router-outlet>\n\t\t</nav>\n\t",
            styles: ["\n\t\t.active{border-color:#d6487e;color:#d6487e;}\n\t"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], ChildSyncComponent);
    return ChildSyncComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/childSync.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildSyncModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__childSync_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/childSync.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_component2_A_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/test-component2/A.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_component2_B_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/test-component2/B.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_component2_C_component__ = __webpack_require__("../../../../../src/app/views/ng/router/child/test-component2/C.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件




// ======================================================================== NgModule
var ChildSyncModule = (function () {
    function ChildSyncModule() {
    }
    ChildSyncModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(// 子路由不能使用根路由的 router-outlet
                [
                    {
                        path: 'child-sync', component: __WEBPACK_IMPORTED_MODULE_3__childSync_component__["a" /* ChildSyncComponent */],
                        children: [
                            { path: 'test-a', component: __WEBPACK_IMPORTED_MODULE_4__test_component2_A_component__["a" /* AComponent */] },
                            { path: 'test-b', component: __WEBPACK_IMPORTED_MODULE_5__test_component2_B_component__["a" /* BComponent */] },
                            { path: 'test-c', component: __WEBPACK_IMPORTED_MODULE_6__test_component2_C_component__["a" /* CComponent */] },
                            { path: '', redirectTo: '/ng/child-sync/test-a', pathMatch: 'full' } // 设置默认显示路由
                        ]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__childSync_component__["a" /* ChildSyncComponent */],
                __WEBPACK_IMPORTED_MODULE_4__test_component2_A_component__["a" /* AComponent */],
                __WEBPACK_IMPORTED_MODULE_5__test_component2_B_component__["a" /* BComponent */],
                __WEBPACK_IMPORTED_MODULE_6__test_component2_C_component__["a" /* CComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], ChildSyncModule);
    return ChildSyncModule;
}());

// 可作为惰性加载加入根路由 app.routing.module.ts
// 可作为同步路由加入  app.module.ts  


/***/ }),

/***/ "../../../../../src/app/views/ng/router/child/test-component2/A.component.ts":
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

/***/ "../../../../../src/app/views/ng/router/child/test-component2/B.component.ts":
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

/***/ "../../../../../src/app/views/ng/router/child/test-component2/C.component.ts":
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



/***/ }),

/***/ "../../../../../src/app/views/ng/router/nav/param.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamComponent; });
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
var ParamComponent = (function () {
    function ParamComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ParamComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ====================================================== 获取必选参数 /:id 与可选参数 ;id=100;name:200:
        // obj = ｛ params: ｛ ｝ ｝
        this.route.paramMap.subscribe(function (params) {
            _this.mustParam1 = params;
        });
        // id = ""
        this.mustParam2 = this.route.snapshot.paramMap.get('id');
        // ====================================================== 获取可选参数
        // params = {}
        this.route.queryParams.subscribe(function (params) {
            _this.queryParam1 = params;
        });
        // obj = { params: {} }
        this.route.queryParamMap.subscribe(function (params) {
            _this.queryParam2 = params;
        });
        // ====================================================== 查询锚点
        this.route.fragment.subscribe(function (fragment) {
            _this.fragment = fragment;
        });
        // ====================================================== 获取其它信息
        // 获取路由( {path:'',data:{}} )上的  data
        this.route.data.subscribe(function (data) {
            _this.data = data;
        });
        // 获取 url
        this.route.url.subscribe(function (data) {
            _this.url = data;
        });
        this.router.query(function (param) {
            console.log(param);
        });
    };
    ParamComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/nav/param.component.ts';
    };
    ParamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u672C\u7EC4\u4EF6</button>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u83B7\u53D6\u5FC5\u9009\u53C2\u6570 /:id \u4E0E\u53EF\u9009\u53C2\u6570 ;id=100;name:200: </dt>\n\t\t\t\t\t<dd>this.route.<b>paramMap.subscribe(params => \uFF5B \uFF5D)</b> \u83B7\u53D6\u53C2\u6570 <s>{{ mustParam1 | json }}</s></dd>\n\t\t\t\t\t\n\t\t\t\t\t<dd>this.route.<b>snapshot.paramMap.has('id')</b> \u5224\u65AD id \u662F\u5426\u5B58\u5728 <s> {{ route.snapshot.paramMap.has('id') }} </s></dd>\n\t\t\t\t\t<dd>this.route.<b>snapshot.paramMap.get('id')</b> \u83B7\u53D6\u6307\u5B9A id <s> {{ route.snapshot.paramMap.get('id') }} </s></dd>\n\t\t\t\t\t<dd>this.route.<b>snapshot.paramMap.getAll('id')</b> \u83B7\u53D6\u6570\u7EC4\u53C2\u6570 <s> {{ route.snapshot.paramMap.getAll('id') | json }} </s></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u83B7\u53D6\u53EF\u9009\u53C2\u6570( ?id=1&name=2 ): </dt>\n\t\t\t\t\t<dd>this.route.<b>queryParams.subscribe(params => \uFF5B \uFF5D)</b> \u83B7\u53D6\u53C2\u6570 <s>{{ queryParam1 | json }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>queryParamMap.subscribe(params => \uFF5B \uFF5D)</b> \u83B7\u53D6\u53C2\u6570 <s>{{ queryParam2 | json }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>snapshot.queryParamMap.has('id')</b> \u5224\u65AD id \u662F\u5426\u5B58\u5728 <s> {{route.snapshot.queryParamMap.has('cid')}} </s></dd>\n\t\t\t\t\t<dd>this.route.<b>snapshot.queryParamMap.get('id')</b> \u83B7\u53D6\u6307\u5B9A id <s> {{route.snapshot.queryParamMap.get('cid')}} </s></dd>\n\t\t\t\t\t<dd>this.route.<b>snapshot.queryParamMap.getAll('id')</b> \u83B7\u53D6\u6570\u7EC4\u53C2\u6570 <s> {{route.snapshot.queryParamMap.getAll('cid') | json}} </s></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u67E5\u8BE2\u53C2\u6570\u7247\u6BB5 </dt>\n\t\t\t\t\t<dd>this.route.<b>fragment.subscribe(fragment => \uFF5B \uFF5D)</b> \u83B7\u53D6\u53C2\u6570\u7247\u6BB5 <s>{{ fragment }}</s></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>ActivatedRoute \u5176\u5B83\u7528\u6CD5: </dt>\n\t\t\t\t\t<dd>this.route.<b>url.subscribe(data => \uFF5B \uFF5D)</b> \u83B7\u53D6 url \u4FE1\u606F <s>{{ url | json }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>data.subscribe(data => \uFF5B \uFF5D)</b> \u83B7\u53D6\u8DEF\u7531\u4E0A\u7684 data <s>{{ data | json }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>routeConfig</b> \u83B7\u53D6\u5F53\u524D\u8DEF\u7531\u4E0A\u7684\u4FE1\u606F  <s>{{ route.routeConfig | json }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>outlet</b> \u83B7\u53D6\u8DEF\u7531\u540D\u5B57 name,\u9ED8\u8BA4 primary <s>{{ route.outlet }}</s></dd>\n\t\t\t\t\t\n\t\t\t\t\t<dd>this.route.<b>parent</b> \u5982\u679C\u6709\u7236\u7EA7\u65F6, \u83B7\u53D6\u7236\u7EA7\u8DEF\u7531  <s>{{ route.parent }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>firstChild</b> \u5982\u679C\u662F\u5B50\u7EA7\u8DEF\u7531, \u83B7\u53D6\u7B2C\u4E00\u4E2A\u8DEF\u7531  <s>{{ route.firstChild }}</s></dd>\n\t\t\t\t\t<dd>this.route.<b>children</b> \u5982\u679C\u6709\u7236\u7EA7\u65F6, \u83B7\u53D6\u6240\u6709\u5B50\u7EA7\u8DEF\u7531  <s>{{ route.children }}</s></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */]])
    ], ParamComponent);
    return ParamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/nav/router-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterEventComponent; });
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
var RouterEventComponent = (function () {
    function RouterEventComponent(router, routers) {
        this.router = router;
        this.routers = routers;
    }
    RouterEventComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
                console.log('NavigationStart == 在导航开始时触发');
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouteConfigLoadStart */]) {
                console.log('RouteConfigLoadStart == 在Router对一个路由配置进行惰性加载之前触发');
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouteConfigLoadEnd */]) {
                console.log('RouteConfigLoadEnd == 在路由被惰性加载之后触发');
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["j" /* RoutesRecognized */]) {
                console.log('RoutesRecognized == 在路由器解析完URL，并识别出了相应的路由时触发');
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                console.log('NavigationEnd == 在导航成功结束之后触发');
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */]) {
                console.log('NavigationCancel == 在导航被取消之后触发');
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */]) {
                console.log('NavigationError == 在导航由于意料之外的错误而失败时触发');
            }
        });
    };
    RouterEventComponent.prototype.component = function () {
        this.routers.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/nav/router-event.component.ts';
    };
    RouterEventComponent.prototype.app = function () {
        this.routers.go({ popup: 'code' });
        localStorage.code = 'app.component.ts';
    };
    RouterEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"app()\">\u5728\u5165\u53E3\u7EC4\u4EF6\u76D1\u542C\u8DEF\u7531</button>\n\t\t</div>\n\t\t<div class=\"lh30 mvvm-code samebox mt10\">\n\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t<dt>\u76D1\u542C\u5168\u5C40\u8DEF\u7531\u72B6\u6001: </dt>\n\t\t\t\t<dd><b>this.router.events.subscribe(event => \uFF5B\uFF5D)</b></dd>\n\t\t\t\t<dd><b>event instanceof NavigationStart</b>\uFF1A\u5728\u5BFC\u822A\u5F00\u59CB\u65F6\u89E6\u53D1</dd>\n\t\t\t\t\n\t\t\t\t<dd><b>event instanceof RouteConfigLoadStart</b>\uFF1A\u5728Router\u5BF9\u4E00\u4E2A\u8DEF\u7531\u914D\u7F6E\u8FDB\u884C\u60F0\u6027\u52A0\u8F7D\u4E4B\u524D\u89E6\u53D1</dd>\n\t\t\t\t<dd><b>event instanceof RouteConfigLoadEnd</b>\uFF1A\u5728\u8DEF\u7531\u88AB\u60F0\u6027\u52A0\u8F7D\u4E4B\u540E\u89E6\u53D1</dd>\n\t\t\t\t\n\t\t\t\t<dd><b>event instanceof RoutesRecognized</b>\uFF1A\u5728\u8DEF\u7531\u5668\u89E3\u6790\u5B8CURL\uFF0C\u5E76\u8BC6\u522B\u51FA\u4E86\u76F8\u5E94\u7684\u8DEF\u7531\u65F6\u89E6\u53D1</dd>\n\t\t\t\t\n\t\t\t\t<dd><b>event instanceof NavigationEnd</b>\uFF1A\u5728\u5BFC\u822A\u6210\u529F\u7ED3\u675F\u4E4B\u540E\u89E6\u53D1</dd>\n\t\t\t\t\n\t\t\t\t<dd><b>event instanceof NavigationCancel</b>\uFF1A\u5728\u5BFC\u822A\u88AB\u53D6\u6D88\u4E4B\u540E\u89E6\u53D1\u3002 \u8FD9\u53EF\u80FD\u662F\u56E0\u4E3A\u5728\u5BFC\u822A\u671F\u95F4\u67D0\u4E2A\u8DEF\u7531\u5B88\u536B\u8FD4\u56DE\u4E86false</dd>\n\t\t\t\t<dd><b>event instanceof NavigationError</b>\uFF1A\u5728\u5BFC\u822A\u7531\u4E8E\u610F\u6599\u4E4B\u5916\u7684\u9519\u8BEF\u800C\u5931\u8D25\u65F6\u89E6\u53D1</dd>\n\t\t\t</dl>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */]])
    ], RouterEventComponent);
    return RouterEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/nav/router-nav-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterNavOrderComponent; });
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
var RouterNavOrderComponent = (function () {
    function RouterNavOrderComponent(router, route, routers) {
        this.router = router;
        this.route = route;
        this.routers = routers;
    }
    RouterNavOrderComponent.prototype.component = function () {
        this.routers.go({ popup: 'code' }, { 'id': 10 });
        localStorage.code = 'views/ng/router/nav/router-nav-order.component.ts';
    };
    RouterNavOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u672C\u7EC4\u4EF6</button>\n\t\t</div>\n\t\t<div class=\"samebox mt10\">\t\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t    <dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>this.router.navigate(path,config): \u8DEF\u7531\u7B2C\u4E8C\u53C2\u6570 config \u914D\u7F6E </dt>\n\t\t\t    </dl>\n\t\t\t    <pre class=\"mvvm-pre\">\n\uFF5B\n\t<b>queryParams</b>: \uFF5B id:1, name:2 \uFF5D,\t// \u53EF\u9009\u53C2\u6570\u914D\u7F6E\n\t<b>fragment</b>: 'hash',\t\t\t\t// \u5E26 #hash\n\t<b>preserveFragment</b>: true,\t\t\t// \u4FDD\u7559\u4E4B\u524D\u8DEF\u7531\u4E2D\u7684\u951A\u70B9 #hash\n\t<b>skipLocationChange</b>: true,\t\t// \u9ED8\u8BA4\u503C\u4E3Afalse\uFF0C\u8BBE\u4E3Atrue\u8DEF\u7531\u8DF3\u8F6C\u65F6\u6D4F\u89C8\u5668\u4E2D\u7684url\u4F1A\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4F46\u662F\u4F20\u5165\u7684\u53C2\u6570\u4F9D\u7136\u6709\u6548\n\t<b>replaceUrl</b>: true,\t\t\t\t// \u65E0\u5386\u53F2\u8BB0\u5F55\u8DF3\u8F6C\u8DEF\u7531\n\t<b>relativeTo</b>: this.route\t\t\t// \u76F8\u5BF9\u8DEF\u7531\n\uFF5D\n\t\t\t\t</pre>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u65E0\u53C2\u6570\u547D\u4EE4\u8DEF\u7531: </dt>\n\t\t\t\t\t<dd><b>this.router.navigate(['/query'])</b></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/query'])\" routerLinkActive=\"active\" class=\"btn-o\">(click)=\"router.navigate(['/query'])\"</a></p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u5FC5\u9009\u53C2\u6570\u547D\u4EE4\u8DEF\u7531: </dt>\n\t\t\t\t\t<dd><b>this.router.navigate(['/ng/router-param/300'])</b></dd>\n\t\t\t\t\t<dd><b>this.router.navigate(['/ng/router-param', 200])</b></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/router-param/300'])\" routerLinkActive=\"active\" class=\"btn-o\">(click)=\"router.navigate(['/router-param/300'])\"</a></p>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/router-param', 200])\" routerLinkActive=\"active\" class=\"btn-o\">(click)=\"router.navigate(['/router-param', 200])\"</a>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u53EF\u9009\u53C2\u6570\u6A21\u677F\u8DEF\u7531: </dt>\n\t\t\t\t\t<dd><b>this.router.navigate(['/query', \uFF5B cid:100, name:'ng4' \uFF5D])</b> ;id=0;name=2</dd>\n\t\t\t\t\t<dd><b>this.router.navigate(['/query'],\uFF5B queryParams:\uFF5B cid:600 \uFF5D\uFF5D)</b> ?id=0&name=2</dd>\n\t\t\t\t\t<dd><b>this.router.navigate(['/query/100',\uFF5B aid: 200 \uFF5D],\uFF5B queryParams:\uFF5B cid:600 \uFF5D,fragment: 'anchor'\uFF5D)</b> /:id(\u5FC5\u9009\u53C2\u6570) + ;id=0;name=2(\u53EF\u9009\u53C2\u6570) + ?id=0&name=2(\u53EF\u9009\u53C2\u6570) + #anchor</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/query'],{ queryParams:{ cid:600 }})\" class=\"btn-o\">(click)=\"router.navigate(['/query'],\uFF5B queryParams:\uFF5B cid:600 \uFF5D\uFF5D)\"</a></p>\n\t\t\t\t\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/query', { aid:100, name:'ng4' }])\" class=\"btn-o\">(click)=\"router.navigate(['/query', \uFF5B  aid:100, name:'ng4' \uFF5D])\"</a></p>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/query', { aid:100, name:'ng4' }],{ queryParams:{ aid:100, name:'vue2' } })\" class=\"btn-o\">(click)=\"router.navigate(['/query', \uFF5B  aid:100, name:'ng4' \uFF5D],\uFF5B  queryParams:\uFF5Bcid:100,name:'vue2' \uFF5D\uFF5D)\"</a></p>\n\t\t\t\t\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/router-param', 200],{ queryParams:{ cid:100, name:'ng4' } })\" class=\"btn-o\">(click)=\"router.navigate(['/router-param', 200],\uFF5B  queryParams:\uFF5B cid:500,name:'100' \uFF5D\uFF5D)\"</a></p>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/router-param/200'],{ queryParams:{ cid:800, name:'vue2' },fragment: 'anchor' })\"class=\"btn-o\">(click)=\"router.navigate(['/router-param/200'],\uFF5B  queryParams:\uFF5B cid:800, name:'vue2', fragment: 'anchor' \uFF5D\uFF5D)\"</a></p>\n\t\t\t\t\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/router-param/200', { aid:100, name:'ng4' }],{ queryParams:{ cid:500, name:'vue2' },fragment: 'anchor' })\"class=\"btn-o\">(click)=\"router.navigate(['/router-param/200',\uFF5B aid:100, name:'ng4' \uFF5D],\uFF5B  queryParams:\uFF5B cid:500, name:'vue2', fragment: 'anchor' \uFF5D\uFF5D)\"</a></p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u76F8\u5BF9\u5BFC\u822A(\u9ED8\u8BA4\u503C\u4E3A\u6839\u8DEF\u7531\uFF0C\u8BBE\u7F6E\u540E\u76F8\u5BF9\u5F53\u524D\u8DEF\u7531\u8DF3\u8F6C): </dt>\n\t\t\t\t\t<dd><b>this.router.navigate(['./'], \uFF5B relativeTo: route \uFF5D)</b> == <b>this.router.navigate(['.'], \uFF5B relativeTo: route \uFF5D)</b> \u76F8\u5BF9\u4E8E\u5F53\u524D\u7EA7\u522B\u7684 </dd>\n\t\t\t\t\t<dd><b>this.router.navigate(['./'], \uFF5B relativeTo: route \uFF5D)</b> \u4E0A\u4E00\u7EA7 </dd>\n\t\t\t\t\t<dd><b>this.router.navigate(['/user'], \uFF5B relativeTo: route \uFF5D)</b> \u76F8\u5BF9\u8DEF\u7531 </dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['./'], { relativeTo: route })\" class=\"btn-o\">(click)=\"router.navigate(['./'], \uFF5B relativeTo: route \uFF5D)\"</a></p>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['.'], { relativeTo: route })\" class=\"btn-o\">(click)=\"router.navigate(['.'], \uFF5B relativeTo: route \uFF5D)\"</a></p>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['../'], { relativeTo: route })\" class=\"btn-o\">(click)=\"router.navigate(['../'], \uFF5B relativeTo: route \uFF5D)\"</a></p>\n\t\t\t</div>\n\t\t</div>\n    \n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u5230\u6307\u5B9A\u8DEF\u7531\u51FA\u53E3: </dt>\n\t\t\t\t\t<dd><b>this.router.navigate([\uFF5B outlets: \uFF5B popup: ['code'] \uFF5D \uFF5D,\uFF5BqueryParams:\uFF5Bid:10\uFF5D\uFF5D]</b> popup == router-outlets \u7684  name; code == \uFF5Bpath:'code'\uFF5D</dd>\n\t\t\t\t\t<dd><b>this.router.navigate([\uFF5B outlets: \uFF5B popup: null \uFF5D \uFF5D])</b> \u6E05\u9664\u6307\u5B9A\u8DEF\u7531\u51FA\u53E3</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate([{ outlets: { popup: ['code'] } }])\" class=\"btn-o\">(click)=\"router.navigate([\uFF5B outlets:\uFF5B popup: ['code'] \uFF5D \uFF5D])\"</a></p>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate([{ outlets: { popup: ['code'] } }],{queryParams:{id:10}})\" class=\"btn-o\">(click)=\"router.navigate([\uFF5B outlets:\uFF5B popup: ['code'] \uFF5D \uFF5D,\uFF5BqueryParams:\uFF5Bid:10\uFF5D\uFF5D])\"</a></p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u65E0\u5386\u53F2\u8BB0\u5F55\u8DEF\u7531: </dt>\n\t\t\t\t\t<dd><b>this.router.navigate(['/query'],\uFF5BreplaceUrl:true\uFF5D)</b></dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a (click)=\"router.navigate(['/ng/query'],{replaceUrl:true})\" routerLinkActive=\"active\" class=\"btn-o\">(click)=\"router.navigate(['/query'],\uFF5BreplaceUrl:true\uFF5D)\"</a></p>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */]])
    ], RouterNavOrderComponent);
    return RouterNavOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/nav/router-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterNavComponent; });
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
var RouterNavComponent = (function () {
    function RouterNavComponent(router, routers) {
        this.router = router;
        this.routers = routers;
    }
    RouterNavComponent.prototype.component = function () {
        this.routers.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/nav/router-nav.component.ts';
    };
    RouterNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u672C\u7EC4\u4EF6</button>\n\t\t</div>\n\t\t\t\n\t\t<div class=\"lh30 mvvm-code samebox mt10\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>routerLink \u6240\u5728\u5143\u7D20\u4E0A\u53EF\u6DFB\u52A0\u7684\u5C5E\u6027: </dt>\n\t        \t<dd><b>routerLink=\"/query\"</b> == <b>[routerLink]=\"['/query']\"</b> \u8DEF\u7531</dd>\n\t        \t<dd><b>routerLinkActive=\"active\"</b> \u94FE\u63A5\u5F53\u524D\u6837\u5F0F</dd>\n\t        \t\n\t        \t<dd><b>[queryParams]=\"\uFF5B id:100 \uFF5D\"</b>  \u53EF\u9009\u53C2\u6570\uFF08?id=100&name=1\uFF09</dd>\n\t        \t<dd><b>fragment=\"hash\"</b> \u5E26 #hash</dd>\n\t        \t<dd><b>preserveFragment = \"true\"</b> \u4FDD\u7559\u4E4B\u524D\u8DEF\u7531\u4E2D\u7684\u951A\u70B9 #hash</dd>\n\t        \t<dd><b>skipLocationChange = \"true\"</b> \u9ED8\u8BA4\u503C\u4E3Afalse\uFF0C\u8BBE\u4E3Atrue\u8DEF\u7531\u8DF3\u8F6C\u65F6\u6D4F\u89C8\u5668\u4E2D\u7684url\u4F1A\u4FDD\u6301\u4E0D\u53D8\uFF0C\u4F46\u662F\u4F20\u5165\u7684\u53C2\u6570\u4F9D\u7136\u6709\u6548</dd>\n\t        \t<dd><b>replaceUrl = \"true\"</b> \u65E0\u5386\u53F2\u8BB0\u5F55\u8DF3\u8F6C\u8DEF\u7531</dd>\n\t        \t<dd><b>relativeTo = \"route\"</b> \u76F8\u5BF9\u8DEF\u7531</dd>\n\t        \t<dd><b>[routerLinkActiveOptions]=\"\uFF5B exact: true }\"</b> \u4E25\u683C\u5339\u914D\u8DEF\u7531</dd>\n\t        </dl>\n        </div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t        <dl class=\"mvvm-list\">\n\t\t        \t<dt>\u65E0\u53C2\u6570\u6A21\u677F\u8DEF\u7531: </dt>\n\t\t        \t<dd><b>routerLink=\"/query\"</b></dd>\n\t\t        \t<dd><b>[routerLink]=\"['/query']\"</b></dd>\n\t\t        \t<dd><b>routerLink=\"/query\" fragment=\"hash\"</b> \u5E26 #hash</dd>\n\t\t        </dl>\n\t        </div>\n\t\t        \n\t        <div>\n\t        \t<p class=\"mt10\"><a routerLink=\"/ng/query\" routerLinkActive=\"active\" class=\"btn-o\">routerLink=\"/query\"</a></p>\n\t        \t<p class=\"mt10\"><a [routerLink]=\"['/ng/query']\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"['/query']\"</a></p>\n\t        \t<p class=\"mt10\"><a routerLink=\"/ng/query\" routerLinkActive=\"active\" fragment=\"hash\" class=\"btn-o\">routerLink=\"/query\" fragment=\"hash\"</a></p>\n\t        </div>\n        </div>\n\t        \n\t    <div class=\"samebox mt10\">\n\t    \t<div class=\"lh30 mvvm-code\">\n\t\t        <dl class=\"mvvm-list\">\n\t\t        \t<dt>\u5FC5\u9009\u53C2\u6570\u6A21\u677F\u8DEF\u7531: </dt>\n\t\t        \t<dd><b>routerLink=\"/router-param/10\"</b></dd>\n\t\t        \t<dd><b>[routerLink]=\"['/ng/router-param/100']\"</b> === [routerLink]=\"['/router-param', 100]</dd>\n\t\t        </dl>\n\t        </div>\n\t        <div>\n\t        \t<p class=\"mt10\"><a routerLink=\"/ng/router-param/300\" routerLinkActive=\"active\" class=\"btn-o\">routerLink=\"/router-param/300\"</a></p>\n\t        \t<p class=\"mt10\"><a [routerLink]=\"['/ng/router-param/500']\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"['/router-param/500']\"</a></p>\n\t        \t<p class=\"mt10\"><a [routerLink]=\"['/ng/router-param', 200]\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"['/router-param', 200]\"</a></p>\n\t        </div>\n\t    </div>\n\t     \n\t    <div class=\"samebox mt10\">\n\t    \t<div class=\"lh30 mvvm-code\">\n\t\t        <dl class=\"mvvm-list\">\n\t\t        \t<dt>\u53EF\u9009\u53C2\u6570\u6A21\u677F\u8DEF\u7531: </dt>\n\t\t        \t<dd><b>[routerLink]=\"['/query',\uFF5B cid:100 \uFF5D]\"</b> ;id=0;name=2</dd>\n\t\t        \t<dd><b>routerLink=\"/router-param/200\" [queryParams]=\"\uFF5B cid:100 \uFF5D\"</b> ?id=0&name=2</dd>\n\t\t        \t<dd><b>[routerLink]=\"['/router-param/100',\uFF5B aid: 200 \uFF5D],\uFF5B queryParams:\uFF5B cid:600 \uFF5D,fragment: 'anchor'\uFF5D\"</b> /:id(\u5FC5\u9009\u53C2\u6570) + ;id=0;name=2(\u53EF\u9009\u53C2\u6570) + ?id=0&name=2(\u53EF\u9009\u53C2\u6570) + #anchor</dd>\n\t\t        </dl>\n\t        </div>\n\t        <div>\n\t        \t<p class=\"mt10\"><a routerLink=\"/ng/query\" [queryParams]=\"{ cid:100 }\" routerLinkActive=\"active\" class=\"btn-o\">routerLink=\"/query\" [queryParams]=\"\uFF5B cid:100 \uFF5D\"</a></p>\n\t        \t<p class=\"mt10\"><a routerLink=\"/ng/router-param/200\" [queryParams]=\"{ cid:100 }\" routerLinkActive=\"active\" class=\"btn-o\">routerLink=\"/router-param/200\" [queryParams]=\"\uFF5B cid:100 \uFF5D\"</a></p>\n\t\t\t    <p class=\"mt10\"><a [routerLink]=\"['/ng/query', { aid:100 }]\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"['/query',\uFF5B aid:100 \uFF5D]\"</a></p>\n\t\t\t    <p class=\"mt10\"><a [routerLink]=\"['/ng/query', { aid:100 }]\" [queryParams]=\"{ aid:100 }\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"['/query',\uFF5B aid:100 \uFF5D]\" [queryParams]=\"\uFF5B aid:100 \uFF5D</a></p>\n\t\t\t\t<p class=\"mt10\"><a [routerLink]=\"['/ng/router-param/100', { aid:200 }]\" [queryParams]=\"{ cid:100 }\" fragment=\"anchor\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"['/router-param/100',\uFF5B aid:200 \uFF5D]\" [queryParams]=\"\uFF5B cid:100 \uFF5D fragment=\"anchor\"</a></p>\n\t        </div>\n\t    </div>\n\t    \n\t    <div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t        <dl class=\"mvvm-list\">\n\t\t        \t<dt>\u65E0\u5386\u53F2\u8BB0\u5F55\u8DEF\u7531: </dt>\n\t\t        \t<dd><b>routerLink=\"/query\" replaceUrl=\"true\"</b></dd>\n\t\t        </dl>\n\t        </div>\n\t\t        \n\t        <div>\n\t        \t<p class=\"mt10\"><a routerLink=\"/ng/query\" replaceUrl=\"true\" class=\"btn-o\">routerLink=\"/query\" replaceUrl=\"true\"</a></p>\n\t        </div>\n        </div>\n\t    \n\t\t<div class=\"samebox mt10\">\n\t\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\t<dl class=\"mvvm-list\">\n\t\t\t\t\t<dt>\u5230\u6307\u5B9A\u8DEF\u7531\u51FA\u53E3: </dt>\n\t\t\t\t\t<dd><b>[routerLink]=\"[\uFF5B outlets: \uFF5B popup: ['code'] \uFF5D \uFF5D]\"</b> \u4E0D\u8D77\u4F5C\u7528</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p class=\"mt10\"><a [routerLink]=\"[{ outlets: { popup: ['code'] } }]\" routerLinkActive=\"active\" class=\"btn-o\">[routerLink]=\"[\uFF5B outlets: \uFF5B popup: ['code'] \uFF5D \uFF5D]\"</a></p>\n\t\t\t</div>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */]])
    ], RouterNavComponent);
    return RouterNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/sync/syncHasNgModule.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncHasNgModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__syncHasNgModule__ = __webpack_require__("../../../../../src/app/views/ng/router/sync/syncHasNgModule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 惰性加载模块的组件

// ======================================================================== NgModule
var SyncHasNgModuleModule = (function () {
    function SyncHasNgModuleModule() {
    }
    SyncHasNgModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                // 重要之处: 必须标记路由
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([{ path: 'sync-has-ngModule', component: __WEBPACK_IMPORTED_MODULE_3__syncHasNgModule__["a" /* SyncHasNgModule */] }] // 在 path 内设置路由
                )
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__syncHasNgModule__["a" /* SyncHasNgModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]] // 公开路由
        })
    ], SyncHasNgModuleModule);
    return SyncHasNgModuleModule;
}());

//  也可在根路由配置惰性路由  { path: 'sync-has-ngModule', loadChildren: './views/router/sync/SyncHasNgModuleModule.module#SyncHasNgModuleModule' }


/***/ }),

/***/ "../../../../../src/app/views/ng/router/sync/syncHasNgModule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncHasNgModule; });
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
var SyncHasNgModule = (function () {
    function SyncHasNgModule(router) {
        this.router = router;
    }
    SyncHasNgModule.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/sync/syncHasNgModule.module.ts';
    };
    SyncHasNgModule.prototype.appRouting = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    SyncHasNgModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<nav class=\"my-box samebox ng-frame\">\n\t\t\t<button class=\"btn-default\" (click) = \"module()\">\u5E26 @NgModule \u7684\u540C\u6B65\u8DEF\u7531</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appRouting()\">\u5728\u6A21\u5757 ng.moudule \u914D\u7F6E</button>\n\t\t</nav>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], SyncHasNgModule);
    return SyncHasNgModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/router/sync/syncOnlyComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncOnlyComponent; });
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
var SyncOnlyComponent = (function () {
    function SyncOnlyComponent(router) {
        this.router = router;
    }
    SyncOnlyComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/router/sync/syncOnlyComponent.ts';
    };
    SyncOnlyComponent.prototype.appRouting = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/ng.module.ts';
    };
    SyncOnlyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'router-view',
            template: "\n\t\t<nav class=\"my-box\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u540C\u6B65\u7EC4\u4EF6</button>\n\t\t\t<hr class=\"_mt10_mb10x\">\n\t\t\t<button class=\"btn-default\" (click) = \"appRouting()\">\u5728\u6A21\u5757 ng.moudule \u914D\u7F6E</button>\n\t\t</nav>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], SyncOnlyComponent);
    return SyncOnlyComponent;
}());



/***/ })

});
//# sourceMappingURL=ng.module.chunk.js.map