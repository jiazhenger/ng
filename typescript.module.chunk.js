webpackJsonp(["typescript.module"],{

/***/ "../../../../../src/app/views/ng/typescript/func.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncComponent; });
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
var FuncComponent = (function () {
    function FuncComponent(router) {
        this.router = router;
    }
    FuncComponent.prototype.a1 = function () { return 1; };
    FuncComponent.prototype.a2 = function () { return '1'; };
    FuncComponent.prototype.a3 = function () { return false; };
    FuncComponent.prototype.a4 = function () { return {}; };
    FuncComponent.prototype.a5 = function () { return []; };
    FuncComponent.prototype.a6 = function () { return ['1']; };
    FuncComponent.prototype.a7 = function () { };
    FuncComponent.prototype.a8 = function () { throw new Error(); };
    FuncComponent.prototype.b1 = function (a, b, c, d, e, f) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
    };
    FuncComponent.prototype.ngOnInit = function () {
        this.b1('1', 2, true, { a: 0 }, ['1', '2']);
    };
    FuncComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/typescript/func.component.ts';
    };
    FuncComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        <div class=\"lh30 mvvm-code mt10\">\n        \t<dl class=\"mvvm-list samebox\">\n\t        \t<dt>\u5B9A\u4E49\u51FD\u6570\u53CD\u56DE\u503C\u7C7B\u578B: \u82E5\u8FD4\u56DE\u503C\u4E3A <b>null</b>/<b>undefined</b> \u5339\u914D\u4EFB\u4F55\u7C7B\u578B</dt>\n\t        \t<dd>my()<b>:number</b>\uFF5B\uFF5D \u8FD4\u56DE\u503C\u4E3A<s>\u6570\u5B57</s></dd>\n\t        \t<dd>my()<b>:string</b>\uFF5B\uFF5D \u8FD4\u56DE\u503C<s>\u5B57\u7B26\u4E32</s></dd>\n\t        \t<dd>my()<b>:boolean</b>\uFF5B\uFF5D \u8FD4\u56DE\u503C<s>\u5E03\u5C14\u503C</s></dd>\n\t        \t<dd>my()<b>:object</b>\uFF5B\uFF5D \u8FD4\u56DE\u503C<s>\u5BF9\u8C61 \uFF5B\uFF5D[ ]</s></dd>\n\t        \t<dd>my()<b>:string/string/boolean/object/any[]</b>\uFF5B\uFF5D \u8FD4\u56DE\u503C\u4E3A<s>\u6570\u7EC4</s></dd>\n\t        \t<dd>my()<b>:void</b>\uFF5B\uFF5D <s>\u65E0\u8FD4\u56DE\u503C</s></dd>\n\t        \t<dd>my()<b>:never</b>\uFF5Bthrow new Error();\uFF5D \u662F\u90A3\u4E9B\u603B\u662F\u4F1A\u629B\u51FA\u5F02\u5E38\u6216\u6839\u672C\u5C31\u4E0D\u4F1A\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u6216\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u7C7B\u578B</dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u5B9A\u4E49\u51FD\u6570\u53C2\u6570\u7C7B\u578B: </dt>\n\t        \t<dd>my(a<b>?:string</b>,b<b>?:number</b>,c<b>?:boolean</b>,d<b>?:object</b>,e<b>?:string[]</b>)\uFF5B\uFF5D </dd>\n\t        \t<dd>@Output() myclick = new EventEmitter<b>&lt;string&gt;</b>(); #myclick \u51FD\u6570\u7684\u53C2\u6570\u53EA\u80FD\u662F\u5B57\u7B26\u4E32</dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u5B9A\u4E49\u53EF\u9009\u53C2\u6570:</dt>\n\t        \t<dd>my(x<b>?:number</b>)\uFF5B\uFF5D </dd>\n\t        \t<dd>my(x<b>?:number[]</b>)\uFF5B\uFF5D </dd>\n\t        </dl>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], FuncComponent);
    return FuncComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/typescript/interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfaceComponent; });
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
var InterfaceComponent = (function () {
    function InterfaceComponent(router) {
        this.router = router;
        this.obj = {
            id: 123,
            func: function () { return ['1']; },
            name: 'reactjs'
        };
    }
    InterfaceComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/typescript/interface.component.ts';
    };
    InterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        <div class=\"lh30 mvvm-code mt10\">\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u5B9A\u4E49\u63A5\u53E3: </dt>\n\t        \t<dd>my(a<b>?:string</b>,b<b>?:number</b>,c<b>?:boolean</b>,d<b>?:object</b>,e<b>?:string[]</b>)\uFF5B\uFF5D </dd>\n\t        \t<dd>@Output() myclick = new EventEmitter<b>&lt;string&gt;</b>(); #myclick \u51FD\u6570\u7684\u53C2\u6570\u53EA\u80FD\u662F\u5B57\u7B26\u4E32</dd>\n\t        </dl>\n        </div>\n        <pre class=\"mvvm-pre samebox mt10\">\n\t<b>export interface MyInterface \uFF5B\n\t\t//canDeactivate: () => Observable&lt;boolean&gt; | Promise&lt;boolean&gt; | boolean\t// \u5B9A\u4E49\u51FD\u6570\u53CD\u56DE\u503C\n\t\tfunc:()=> string[],\n\t\tid:number,\n\t\tname:string\n\t\uFF5D</b>\n\t\n\t<b>obj:MyInterface = \uFF5B\n\t\tid:123,\n\t\tfunc()\uFF5B return ['1'] \uFF5D\n\t\tname: 'reactjs'\n\t\uFF5D</b>\n\t\t</pre>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], InterfaceComponent);
    return InterfaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/typescript/type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeComponent; });
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
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 3] = "green";
    Color[Color["blue"] = 6] = "blue";
})(Color || (Color = {}));
var Data = (function () {
    function Data(id, name) {
    }
    return Data;
}());
// ===================================================== 
var TypeComponent = (function () {
    function TypeComponent(router) {
        this.router = router;
        /* 简单类型 */
        this.a = true;
        this.b = 1;
        this.c = 'string';
        this.d = {};
        this.e = [];
        /* 数组 */
        this.f = [0, 1, 2];
        this.g = ['0', '1', '2'];
        this.h = [{ a: 0 }, [0, 1]];
        this.i = [0, 1, 2];
        /* 泛型数组 */
        this.j = [0, 1, 2];
        this.k = ['0', '1', '2'];
        this.l = [{ a: 0 }, [0, 1]];
        this.m = [0, 1, 2];
        /* Enum （枚举） */
        this.e1 = Color.green;
        this.e2 = Color['red'];
        /* 联合声明 */
        this.f1 = true;
    }
    TypeComponent.prototype.ngOnInit = function () {
        console.log(this.e1);
        console.log(this.e2);
    };
    TypeComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/typescript/type.component.ts';
    };
    TypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        <div class=\"lh30 mvvm-code mt10\">\n\t        <dl class=\"mvvm-list mvvm-list-1 samebox\">\n\t        \t<dt>\u7B80\u5355\u5F3A\u7C7B\u578B: </dt>\n\t        \t<dd>const my<b>:boolean</b> <span>= true/false</span> <s># \u5E03\u5C14\u503C</s></dd>\n\t        \t<dd>const my<b>:number</b> <span>= 1</span> <s># \u6570\u5B57</s></dd>\n\t        \t<dd>const my<b>:string</b> <span>= '\u5B57\u7B26\u4E32'</span> <s># \u5B57\u7B26\u4E32</s></dd>\n\t        \t<dd>const my<b>:object</b> <span>= \uFF5B\uFF5D| [ ]</span> <s># \u5BF9\u8C61</s></dd>\n\t        \t<dd>const my<b>:array</b> <span>= []</span> <s># \u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:any</b> <span>= 1</span> <s># \u4EE5\u4E0A\u4EFB\u610F\u6570\u636E\u7C7B\u578B</s></dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list mvvm-list-1 samebox mt10\">\n\t        \t<dt>Array + type + []: </dt>\n\t        \t<dd>const my<b>:number[]</b> <span>= [1,2,3]</span> <s># \u6570\u5B57\u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:string[]</b> <span>= ['1','2','3']</span> <s># \u5B57\u7B26\u4E32\u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:object[]</b> <span>= [\uFF5Ba:0\uFF5D,[0,1]]</span> <s># \u5BF9\u8C61\u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:any[]</b> <span>= []</span> <s># \u4EE5\u4E0A\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u6570\u7EC4</s></dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list mvvm-list-1 samebox mt10\">\n\t        \t<dt>Array + \u6CDB\u578B\u7684\u6570\u7EC4\u7C7B\u578B: </dt>\n\t        \t<dd>const my<b>:Array&lt;number&gt;</b> <span>= [1,2,3]</span> <s># \u6570\u5B57\u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:Array&lt;string&gt;</b> <span>= ['1','2','3']</span> <s># \u5B57\u7B26\u4E32\u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:Array&lt;object&gt;</b> <span>= [\uFF5Ba:0\uFF5D,[0,1]]</span> <s># \u5BF9\u8C61\u6570\u7EC4</s></dd>\n\t        \t<dd>const my<b>:Array&lt;any&gt;</b> <span>= []</span> <s># \u4EE5\u4E0A\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u6570\u7EC4</s></dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>Enum \uFF08\u679A\u4E3E\uFF09: </dt>\n\t        \t<dd><b>enum Color \uFF5B red=1,green=3,blue=6 \uFF5D</b></dd>\n\t        \t<dd><b>e1:Color = Color.green</b></dd>\n\t        \t<dd><b>e2:number = Color.green</b></dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u8054\u5408\u7C7B\u578B: </dt>\n\t        \t<dd>const my<b>:string[]|number|boolean</b> <span>= [1,2,3]</span> \u6570\u7EC4\u5B57\u7B26\u4E32\u6216\u6570\u5B57</dd>\n\t        </dl>\n        </div>\n    ",
            styles: ["\n    \t.mvvm-list-1 b{display:inline-block;width:130px;margin-left:5px;}\n    \t.mvvm-list-1 span{display:inline-block;width:130px;color:#33691E;white-space:nowrap;}\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], TypeComponent);
    return TypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/typescript/typescript.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypescriptModule", function() { return TypescriptModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_component__ = __webpack_require__("../../../../../src/app/views/ng/typescript/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__func_component__ = __webpack_require__("../../../../../src/app/views/ng/typescript/func.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interface_component__ = __webpack_require__("../../../../../src/app/views/ng/typescript/interface.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件



// ======================================================================== NgModule
var TypescriptModule = (function () {
    function TypescriptModule() {
    }
    TypescriptModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'type', component: __WEBPACK_IMPORTED_MODULE_3__type_component__["a" /* TypeComponent */] },
                    { path: 'func', component: __WEBPACK_IMPORTED_MODULE_4__func_component__["a" /* FuncComponent */] },
                    { path: 'interface', component: __WEBPACK_IMPORTED_MODULE_5__interface_component__["a" /* InterfaceComponent */] },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__type_component__["a" /* TypeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__func_component__["a" /* FuncComponent */],
                __WEBPACK_IMPORTED_MODULE_5__interface_component__["a" /* InterfaceComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], TypescriptModule);
    return TypescriptModule;
}());



/***/ })

});
//# sourceMappingURL=typescript.module.chunk.js.map