webpackJsonp(["cpt.module"],{

/***/ "../../../../../src/app/views/ng/component/communication/id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child5Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IdComponent; });
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

// ===================================================== 子组件
var Child5Component = (function () {
    function Child5Component() {
        this.name = '子组件属性';
        this.msg = 'angular';
    }
    Child5Component.prototype.dosomething = function () {
        alert('子组件的方法');
    };
    Child5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'viewid',
            template: "\n\t\t<div class=\"lh30 mvvm-code\">\n\t\t\t\u5B50\u7EC4\u4EF6\n\t\t</div>\n\t"
        })
    ], Child5Component);
    return Child5Component;
}());

// ===================================================== 
var IdComponent = (function () {
    function IdComponent(router) {
        this.router = router;
    }
    IdComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/communication/id.component.ts';
    };
    IdComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/cpt.module.ts';
    };
    IdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>\u6A21\u677F\u5F15\u7528\u53D8\u91CF\u83B7\u53D6\u5B50\u7EC4\u4EF6, \u5728\u7236\u7EC4\u4EF6\u4E2D: </dt>\n\t        \t<dd><b>#id</b></dd>\n\t        \t<dd><b>ref-id</b></dd>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        {{ child.name }}\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <button (click)=\"child.dosomething()\" class=\"btn-default\">\u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u65B9\u6CD5</button>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <viewid #child></viewid>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], IdComponent);
    return IdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/communication/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputComponent; });
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

// ===================================================== 子组件
var ChildComponent = (function () {
    function ChildComponent() {
    }
    Object.defineProperty(ChildComponent.prototype, "run", {
        set: function (v) {
            this.sex = '子组件处理父组件传递的数据: ' + v;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('girl'),
        __metadata("design:type", String)
    ], ChildComponent.prototype, "woman", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChildComponent.prototype, "run", null);
    ChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'test',
            template: "\n\t\t<div class=\"mvvm-code mvvm-box-2\">\n\t\t\t<h3>\u8FD9\u662F\u5B50\u7EC4\u4EF6</h3>\n\t\t\t<div>{{name}}</div>\n\t\t\t<div>{{parent.msg2}}</div>\n\t\t\t<div>{{user}}</div>\n\t\t\t<div>{{hello}}</div>\n\t\t\t<div>{{woman}}</div>\n\t\t\t<div>{{woman}}</div>\n\t\t\t<div>{{sex}}</div>\n\t\t</div>\n\t",
            inputs: ['user', 'hello:fuck']
        })
    ], ChildComponent);
    return ChildComponent;
}());

// ===================================================== 
var InputComponent = (function () {
    function InputComponent(router) {
        this.router = router;
        this.msg1 = '[name]="msg1" 父组件传入属性';
        this.msg2 = '[parent]="this" 将父组件 this 对象传给子组件, parent 只能获取属性,不能获取方法';
        this.msg3 = '[user]="msg3" user 在  inputs 里声明';
        this.msg4 = '[fuck]="msg4" 用别名获取父组件属性';
    }
    InputComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/communication/input.component.ts';
    };
    InputComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/cpt.module.ts';
    };
    InputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n        <div class=\"lh30 mvvm-code samebox mtb10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>@Input() \u5B50\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u6765\u7684\u5C5E\u6027\u53D8\u91CF, \u5728\u5B50\u7EC4\u4EF6\u4E2D: </dt>\n\t        \t<dd><b>@Input() hello:string</b>: \u58F0\u660E\u8F93\u5165\u5C5E\u6027 , \u5728\u7236\u7EC4\u4EF6\u4E2D \uFF0C\u5B50\u7EC4\u4EF6\u63A5\u6536\u7236\u7EA7\u7684\u7684\u53D8\u91CF, <b>[hello]=\"\u7236\u7EA7\u7684\u53D8\u91CF\"</b></dd>\n\t        \t<dd><b>@Input('sexAlias') sex:string</b>: \u522B\u540D sexAlias \u7528\u4E8E\u7236\u7EC4\u4EF6\u4E2D\u5B50\u7EC4\u4EF6\u4E0A, [sexAlias]=\"\u7236\u7EA7\u7684\u53D8\u91CF\", sex \u7528\u4E8E\u5B50\u7EC4\u4EF6 this.sex</dd>\n\t        \t<dd><b>inputs : ['name','user:userAlias','self']</b>: \u6302\u5728\u5B50\u7EC4\u4EF6\u7684 @Component</dd>\n\t        \t<dd><b>@Input() set defaultName(v:any)\uFF5B\uFF5D</b>: set \u4F7F\u7528\u51FD\u6570\u81EA\u52A8\u8FD0\u884C, \u58F0\u660E\u63A5\u6536\u7236\u7EC4\u4EF6\u53D8\u91CF\u7684\u5C5E\u6027\u540D, \u5E76\u81EA\u52A8\u5904\u7406\u63A5\u6536\u8FC7\u6765\u7684 \u53D8\u91CF</dd>\n\t        </dl>\n        </div>\n       \n        <test\n        \t[name]=\"msg1\"\n        \t[parent]=\"this\"\n        \t[user]=\"msg3\"\n        \t[fuck]=\"msg4\"\n        \t[girl]=\"'[girl]=str \u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u53D8\u91CF'\"\n        \t\n        \t[run]=\"'\u9ED8\u8BA4\u81EA\u52A8\u8FD0\u884C'\"\n        ></test>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/communication/output.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OutputComponent; });
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

// ===================================================== 子组件
var Child2Component = (function () {
    function Child2Component() {
        this.aick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // 暴露事件生产者
        this.bick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // myClick 为别名
        this.cick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // 声明 outputs 事件
        this.dick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Child2Component.prototype.change1 = function () {
        this.aick.emit(); // 触发父组件自定义绑定事件
    };
    Child2Component.prototype.change2 = function () {
        this.bick.emit('@Output("事件出发，发射参数变量给父组件函数'); // 事件出发，发射参数变量给父组件函数
    };
    Child2Component.prototype.change3 = function () {
        this.cick.emit('outputs 绑定监听事件');
    };
    Child2Component.prototype.change4 = function () {
        this.dick.emit('outputs 绑定别名监听事件');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], Child2Component.prototype, "aick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('myClick'),
        __metadata("design:type", Object)
    ], Child2Component.prototype, "bick", void 0);
    Child2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tests',
            template: "\n\t\t<div class=\"mvvm-code mvvm-box-2\">\n\t\t\t<h3>\u8FD9\u662F\u5B50\u7EC4\u4EF6</h3>\n\t\t\t<div class=\"mt10\"><a (click)=\"change1()\" class=\"btn-default\">@Output\u4F20\u5165\u7236\u7EC4\u4EF6\u7684\u53D8\u91CF</a></div>\n\t\t\t<div class=\"mt10\"><a (click)=\"change2()\" class=\"btn-default\">@Output\u7ED1\u5B9A\u4E00\u4E2A\u522B\u540D\u76D1\u542C</a></div>\n\t\t\t<div class=\"mt10\"><a (click)=\"change3()\" class=\"btn-default\">outputs : ['cick'] \u7ED1\u5B9A\u4E8B\u4EF6</a></div>\n\t\t\t<div class=\"mt10\"><a (click)=\"change4()\" class=\"btn-default\">outputs : ['dick:sick'] \u7ED1\u5B9A\u4E00\u4E2A\u522B\u540D\u76D1\u542C</a></div>\n\t\t</div>\n\t",
            outputs: ['cick', 'dick:sick']
        })
    ], Child2Component);
    return Child2Component;
}());

// ===================================================== 
var OutputComponent = (function () {
    function OutputComponent(router) {
        this.router = router;
        this.str = '发射父组件变量';
        this.msg = '@Output属性输出：暴露事件生产者，比如 EventEmitter 对象';
    }
    OutputComponent.prototype.show = function (m) {
        this.msg = m;
        console.log(m);
    };
    OutputComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/communication/output.component.ts';
    };
    OutputComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/cpt.module.ts';
    };
    OutputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>@Output('\u522B\u540D') \u76D1\u542C\u7236\u7EC4\u4EF6, \u5728\u5B50\u7EC4\u4EF6\u4E2D: </dt>\n\t        \t<dd><b>this.aick.emit()</b>: \u89E6\u53D1\u7236\u7EC4\u4EF6\u4E8B\u4EF6</dd>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mb10\">{{msg}}</div>\n        \n        <tests\n        \t(aick)=\"show(str)\" \n\t\t\t(myClick)=\"show($event)\"\n\t\t\t(cick)=\"show($event)\"\n\t\t\t(sick)=\"show($event)\"\n        ></tests>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], OutputComponent);
    return OutputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/communication/viewchild.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewChildComponent; });
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

// ===================================================== 子组件
var Child3Component = (function () {
    function Child3Component() {
        this.name = '子组件属性';
    }
    Child3Component.prototype.doSomething = function () {
        alert('子组件方法');
    };
    Child3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'test-viewchild',
            template: "\n\t\t<div class=\"mvvm-code mvvm-box-2\">\n\t\t\t<h3>\u8FD9\u662F\u5B50\u7EC4\u4EF6</h3>\n\t\t</div>\n\t"
        })
    ], Child3Component);
    return Child3Component;
}());

// ===================================================== 
var ViewChildComponent = (function () {
    //@ViewChild('fx') test:Child3Component;				// 参数取：父组件中子组件的 #id 对象
    //@ViewChild('fx') test:Child3Component;				// 参数取：父组件中子组件的 ref-fx 对象
    function ViewChildComponent(router) {
        this.router = router;
    }
    ViewChildComponent.prototype.getChild = function () {
        this.test.doSomething();
    };
    ViewChildComponent.prototype.getChild2 = function () {
        alert(this.test.name);
    };
    ViewChildComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/communication/viewchild.component.ts';
    };
    ViewChildComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/cpt.module.ts';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(Child3Component),
        __metadata("design:type", Child3Component)
    ], ViewChildComponent.prototype, "test", void 0);
    ViewChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>@ViewChild('\u8981\u83B7\u53D6\u7684\u5B50\u7EC4\u4EF6') \u7236\u53D6\u5B50, \u5728\u7236\u7EC4\u4EF6\u4E2D: </dt>\n\t        \t<dd><b>@ViewChild(Child3Component) private test:Child3Component;</b> \u58F0\u660E\u8981\u901A\u4FE1\u7684\u5B50\u7EC4\u4EF6</dd>\n\t        \t<dd><b>@ViewChild('fx') public test:Child3Component;</b> #id \u58F0\u660E</dd>\n\t        \t<dd><b>@ViewChild('fx') test:Child3Component;</b> ref-id \u58F0\u660E</dd>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n        <button (click)=\"getChild()\" class=\"btn-default\">\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u65B9\u6CD5</button>\n        <button (click)=\"getChild2()\" class=\"btn-default\">\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027</button>\n        <hr class=\"_mt10_mb10x\">\n        <test-viewchild ref-fx></test-viewchild>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], ViewChildComponent);
    return ViewChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/communication/viewchildren.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child4Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewChidrenComponent; });
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

// ===================================================== 子组件
var Child4Component = (function () {
    function Child4Component() {
        this.name = '子组件属性';
        this.msg = 'angular';
    }
    Child4Component.prototype.doSomething = function (index) {
        var $this = this;
        // 此处需延时加载，否则，检查改变与当前改变会冲突，代码执行正确，但会导致报错
        setTimeout(function () {
            switch (index) {
                case 0:
                    $this.name = '这是第一个组件的变量 name';
                    break;
                case 1:
                    $this.name = '这是第二个组件的变量 name';
                    break;
                case 2:
                    $this.name = '这是第三个组件的变量 name';
                    break;
                default:
                    $this.name = 'no value';
            }
        });
    };
    Child4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'viewchildren',
            template: "\n\t\t<div class=\"mvvm-code mvvm-box-2\">\n\t\t\t<h3>\u8FD9\u662F\u5B50\u7EC4\u4EF6</h3>\n\t\t</div>\n\t"
        })
    ], Child4Component);
    return Child4Component;
}());

// ===================================================== 
var ViewChidrenComponent = (function () {
    function ViewChidrenComponent(router) {
        this.router = router;
        this.childs = {};
    }
    ViewChidrenComponent.prototype.getChild = function () {
        var _this = this;
        var arr = this.children; // 无法连写 this.children.map()，否则 npm start 会报错
        this.childs = {};
        arr.map(function (v, i) {
            _this.childs[i] = v;
        });
    };
    ViewChidrenComponent.prototype.getChild2 = function () {
        var arr = this.children; // 无法连写 this.children.map()，否则 npm start 会报错
        arr.map(function (v, i) {
            v.doSomething(i);
        });
    };
    ViewChidrenComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/communication/viewchildren.component.ts';
    };
    ViewChidrenComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'ng/component/cpt.module.ts';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])('child,fx'),
        __metadata("design:type", Child4Component)
    ], ViewChidrenComponent.prototype, "children", void 0);
    ViewChidrenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>@ViewChildren('\u8981\u83B7\u53D6\u7684\u5B50\u7EC4\u4EF6') \u7236\u53D6\u591A\u5B50(\u540C\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u8C03\u7528\u591A\u6B21), \u5728\u7236\u7EC4\u4EF6\u4E2D: </dt>\n\t        \t<dd><b>@ViewChildren(Child4Component) children:Child4Component</b> \u58F0\u660E\u8981\u901A\u4FE1\u7684\u5B50\u7EC4\u4EF6</dd>\n\t        \t<dd><b>@ViewChildren('child,fx') children:Child4Component;</b> #fx, ref-fx \u58F0\u660E</dd>\n\t        \t<dd><b>@ViewChildren(Child4Component) children</b> \u7C7B\u578B\u53EF\u7701\u7565</dd>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n        <button (click)=\"getChild()\" class=\"btn-default\">\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u76F8\u540C\u5C5E\u6027\u4E0D\u540C\u503C</button>\n        <button (click)=\"getChild2()\" class=\"btn-default\">\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u4E0D\u76F8\u540C\u5C5E\u6027</button>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <viewchildren #child></viewchildren>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <viewchildren ref-fx></viewchildren>\n        \n        <hr class=\"_mt10_mb10x\">\n        <div class=\"mvvm-pre\">\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027: <s>{{childs | json }}</s></div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], ViewChidrenComponent);
    return ViewChidrenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/cpt-life.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CptLifeComponent; });
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
var CptLifeComponent = (function () {
    function CptLifeComponent(router) {
        this.router = router;
    }
    // 在Angular初始化数据绑定输入属性之后初始化组件/指令。在第一次ngOnChanges之后
    // 执行一次
    CptLifeComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    // 在Angular创建了组件视图之后, 显示了父组件视图之后才能访问
    // jq dom 操作
    // 执行一次
    CptLifeComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
    };
    // Angular设置数据绑定输入属性后的响应。该方法接收一个changes对象，包含当前值和变化前的值。在ngOnInit之前，当数据绑定输入属性的值发生变化时
    // 执行一次
    CptLifeComponent.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
    };
    // 每次Angular变化检测时
    // 执行多次
    CptLifeComponent.prototype.ngDoCheck = function () {
        console.log('ngDoCheck');
    };
    // 在Angular将外部内容放到视图内之后
    // 执行一次
    CptLifeComponent.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit');
    };
    // 在Angular检测放到视图内的外部内容的绑定后
    // 执行多次
    CptLifeComponent.prototype.ngAfterContentChecked = function () {
        console.log('ngAfterContentChecked');
    };
    // 在Angular检测了组件视图的绑定之后
    // 执行多次
    CptLifeComponent.prototype.ngAfterViewChecked = function () {
        console.log('ngAfterViewChecked');
    };
    // 在Angular销毁组件/指令之前的清理工作。取消订阅监控对象和取消事件处理函数，以避免内存泄漏，离开页面处理的代码
    // 执行一次
    CptLifeComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    CptLifeComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/component/cpt-life.component.ts';
    };
    CptLifeComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/component/cpt.module.ts';
    };
    CptLifeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n\n\t\t<div class=\"lh30 mvvm-code samebox mt10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>\u7EC4\u4EF6\u751F\u547D\u5468\u671F: </dt>\n\t        \t<dd><b>ngOnInit()</b>\uFF1A\u5728Angular\u521D\u59CB\u5316\u6570\u636E\u7ED1\u5B9A\u8F93\u5165\u5C5E\u6027\u4E4B\u540E\u521D\u59CB\u5316\u7EC4\u4EF6/\u6307\u4EE4\u3002\u5728\u7B2C\u4E00\u6B21ngOnChanges\u4E4B\u540E</dd>\n\t        \t<dd><b>ngAfterViewInit()</b>\uFF1A\u5728Angular\u521B\u5EFA\u4E86\u7EC4\u4EF6\u89C6\u56FE\u4E4B\u540E</dd>\n\t        \t<dd><b>ngOnChanges()</b>\uFF1AAngular\u8BBE\u7F6E\u6570\u636E\u7ED1\u5B9A\u8F93\u5165\u5C5E\u6027\u540E\u7684\u54CD\u5E94\u3002\u8BE5\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2Achanges\u5BF9\u8C61\uFF0C\u5305\u542B\u5F53\u524D\u503C\u548C\u53D8\u5316\u524D\u7684\u503C\u3002\u5728ngOnInit\u4E4B\u524D\uFF0C\u5F53\u6570\u636E\u7ED1\u5B9A\u8F93\u5165\u5C5E\u6027\u7684\u503C\u53D1\u751F\u53D8\u5316\u65F6</dd>\n\t        \t<dd><b>ngDoCheck()</b>\uFF1A\u6BCF\u6B21Angular\u53D8\u5316\u68C0\u6D4B\u65F6</dd>\n\t        \t<dd><b>ngAfterContentInit()</b>\uFF1A\u5728Angular\u5C06\u5916\u90E8\u5185\u5BB9\u653E\u5230\u89C6\u56FE\u5185\u4E4B\u540E</dd>\n\t        \t<dd><b>ngAfterContentChecked()</b>\uFF1A\u5728Angular\u68C0\u6D4B\u653E\u5230\u89C6\u56FE\u5185\u7684\u5916\u90E8\u5185\u5BB9\u7684\u7ED1\u5B9A\u540E</dd>\n\t        \t<dd><b>ngAfterViewChecked()</b>\uFF1A\u5728Angular\u68C0\u6D4B\u4E86\u7EC4\u4EF6\u89C6\u56FE\u7684\u7ED1\u5B9A\u4E4B\u540E</dd>\n\t        \t<dd><b>ngOnDestroy()</b>\uFF1A\u5728Angular\u9500\u6BC1\u7EC4\u4EF6/\u6307\u4EE4\u4E4B\u524D\u7684\u6E05\u7406\u5DE5\u4F5C\u3002\u53D6\u6D88\u8BA2\u9605\u76D1\u63A7\u5BF9\u8C61\u548C\u53D6\u6D88\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u4EE5\u907F\u514D\u5185\u5B58\u6CC4\u6F0F</dd>\n\t        </dl>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], CptLifeComponent);
    return CptLifeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/cpt.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CptModule", function() { return CptModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cpt_life_component__ = __webpack_require__("../../../../../src/app/views/ng/component/cpt-life.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_component__ = __webpack_require__("../../../../../src/app/views/ng/component/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_input_component__ = __webpack_require__("../../../../../src/app/views/ng/component/communication/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__communication_output_component__ = __webpack_require__("../../../../../src/app/views/ng/component/communication/output.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__communication_viewchild_component__ = __webpack_require__("../../../../../src/app/views/ng/component/communication/viewchild.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__communication_viewchildren_component__ = __webpack_require__("../../../../../src/app/views/ng/component/communication/viewchildren.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__communication_id_component__ = __webpack_require__("../../../../../src/app/views/ng/component/communication/id.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 同一个模块的组件


// 组件通信





// ======================================================================== NgModule
var CptModule = (function () {
    function CptModule() {
    }
    CptModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'cpt-life', component: __WEBPACK_IMPORTED_MODULE_3__cpt_life_component__["a" /* CptLifeComponent */] },
                    { path: 'layout', component: __WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */] },
                    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_5__communication_input_component__["b" /* InputComponent */] },
                    { path: 'output', component: __WEBPACK_IMPORTED_MODULE_6__communication_output_component__["b" /* OutputComponent */] },
                    { path: 'viewchild', component: __WEBPACK_IMPORTED_MODULE_7__communication_viewchild_component__["b" /* ViewChildComponent */] },
                    { path: 'viewchildren', component: __WEBPACK_IMPORTED_MODULE_8__communication_viewchildren_component__["b" /* ViewChidrenComponent */] },
                    { path: 'id', component: __WEBPACK_IMPORTED_MODULE_9__communication_id_component__["b" /* IdComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cpt_life_component__["a" /* CptLifeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__communication_input_component__["a" /* ChildComponent */],
                __WEBPACK_IMPORTED_MODULE_5__communication_input_component__["b" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_6__communication_output_component__["b" /* OutputComponent */], __WEBPACK_IMPORTED_MODULE_6__communication_output_component__["a" /* Child2Component */],
                __WEBPACK_IMPORTED_MODULE_7__communication_viewchild_component__["b" /* ViewChildComponent */], __WEBPACK_IMPORTED_MODULE_7__communication_viewchild_component__["a" /* Child3Component */],
                __WEBPACK_IMPORTED_MODULE_8__communication_viewchildren_component__["b" /* ViewChidrenComponent */], __WEBPACK_IMPORTED_MODULE_8__communication_viewchildren_component__["a" /* Child4Component */],
                __WEBPACK_IMPORTED_MODULE_9__communication_id_component__["b" /* IdComponent */], __WEBPACK_IMPORTED_MODULE_9__communication_id_component__["a" /* Child5Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], CptModule);
    return CptModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/component/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
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
var LayoutComponent = (function () {
    function LayoutComponent(router) {
        this.router = router;
    }
    LayoutComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/component/layout.component.ts';
    };
    LayoutComponent.prototype.module = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/component/cpt.module.ts';
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"module()\">\u6240\u5728\u6A21\u5757</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n        \t<dl class=\"mvvm-list\">\n\t        \t<dt>\u7EC4\u4EF6\u57FA\u672C\u683C\u5F0F: </dt>\n\t        \t<dd><b>moduleId: module.id</b>\uFF1A\u6BCF\u6B21Angular\u53D8\u5316\u68C0\u6D4B\u65F6</dd>\n\t        </dl>\n        </div>\n        \n        <pre class=\"mvvm-pre samebox mt10\">\n@Component(\uFF5B\n\t<b>moduleId: module.id</b>,\t\t\t\t# \u89E3\u6790\u6837\u5F0F\u8868\u548C\u6A21\u677F\u7684\u5728\u672C\u7EC4\u4EF6\u76F8\u5BF9\u8DEF\u5F84\n\t<b>selector</b>: 'app-root,a[a-btn],b[b-btn]',\t\t\t# \u7EC4\u4EF6\u5C42\u7684 html \u5143\u7D20\uFF0C\u53EF\u81EA\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4F7F\u7528\u5185\u7F6E html\uFF0C\u5982 div\u3002\n\t<b>exportAs</b>: 'aBtn,bBtn',\t\t\t# \u5C06\u4E00\u4E2A\u7EC4\u4EF6\u5BFC\u51FA\u591A\u4E2A\u540D\u5B57\uFF0C\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u5DF2\u4E00\u4E2A\u65B0\u540D\u5B57\u6765\u4F7F\u7528\u800C\u8FBE\u5230\u4E0D\u7834\u574F\u73B0\u6709\u4EE3\u7801\u7684\u76EE\u7684\n\t<b>template</b>: '',\t\t\t\t\t# \u5185\u90E8\u6A21\u677F\n\t<b>templateUrl</b>: '',\t\t\t\t\t# \u5916\u90E8\u6A21\u677F\n\t\n\t<b>encapsulation: ViewEncapsulation.None</b>,\t# \u5C06\u5C40\u90E8\u6837\u5F0F\u53D8\u4E3A\u5168\u5C40\u6837\u5F0F,\u53BB\u6389\u9650\u5236\n\t<b>styles</b>: [''],\t\t\t\t\t# \u5185\u90E8\u6837\u5F0F\n\t<b>styleUrls</b>: [''],\t\t\t\t\t# \u5916\u90E8\u6837\u5F0F\n\t<b>preserveWhitespace:true/false</b>,\t# \u901A\u8FC7\u7F16\u8BD1\u5668\uFF0C\u6A21\u677F\u5F00\u53D1\u4E2D\u7684\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26\u3001\u7A7A\u683C\u7B49\u662F\u5426\u539F\u6837\u7684\u4FDD\u7559\u4E0B\u6765\n\t\n\t<b>animations</b>: [Animation]\t\t\t# \u52A0\u8F7D\u52A8\u753B\u6A21\u5757\n\uFF5D)\n        </pre>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ })

});
//# sourceMappingURL=cpt.module.chunk.js.map