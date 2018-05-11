webpackJsonp(["directive.module"],{

/***/ "../../../../../src/app/views/ng/directive/directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directive_property_directive__ = __webpack_require__("../../../../../src/app/views/ng/directive/directive/property.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directive_structure_directive__ = __webpack_require__("../../../../../src/app/views/ng/directive/directive/structure.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_directive_component__ = __webpack_require__("../../../../../src/app/views/ng/directive/property-directive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_directive_component__ = __webpack_require__("../../../../../src/app/views/ng/directive/structure-directive.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// ===================================================== 指令


// ===================================================== 同一个模块的组件


// ======================================================================== NgModule
var DirectiveModule = (function () {
    function DirectiveModule() {
    }
    DirectiveModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    { path: 'property', component: __WEBPACK_IMPORTED_MODULE_5__property_directive_component__["a" /* PropertyDirectiveComponent */] },
                    { path: 'structure', component: __WEBPACK_IMPORTED_MODULE_6__structure_directive_component__["a" /* StructureDirectiveComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__property_directive_component__["a" /* PropertyDirectiveComponent */],
                __WEBPACK_IMPORTED_MODULE_6__structure_directive_component__["a" /* StructureDirectiveComponent */],
                __WEBPACK_IMPORTED_MODULE_3__directive_property_directive__["a" /* PropertyDirective */],
                __WEBPACK_IMPORTED_MODULE_4__directive_structure_directive__["a" /* StructureDirective */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/directive/directive/property.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDirective; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// ======================================================================== NgModule
var PropertyDirective = (function () {
    function PropertyDirective(elem, attr) {
        this.elem = elem;
        this.play = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // 监听父事件
        // 绑定 style 样式到指令元素上
        this.background = "#d6487e";
        // 绑定属性到样式指令元素上
        this.title = "@HostBinding 绑定属性到样式上";
        // 绑定动画到指令元素上, 只能绑定入场动画
        this.keyFrame = true;
        this.elems = elem.nativeElement;
        this.attr = attr; // 获取指令绑定完素上的属性
    }
    // ===================================== 修改父组件的属性
    PropertyDirective.prototype.mouseenter = function () {
        this.parent.msg = '@HostListener("mouseenter") mouseenter() 绑定事件';
        this.elems.style.backgroundColor = '#ffb752'; // 修改 DOM
    };
    PropertyDirective.prototype.mouseleave = function () {
        this.parent.msg = '@HostListener("mouseleave") mouseleave() 绑定事件';
        this.parent.msg2 = '';
        this.parent.msg3 = '';
        this.parent.msg4 = '';
        this.elems.style.backgroundColor = '#d6487e';
    };
    PropertyDirective.prototype.resize = function () {
        this.parent.msg = 'window.size监听窗口变化';
    };
    // ===================================== 调用父组件的方法
    PropertyDirective.prototype.click = function () {
        this.play.emit('调用父组件的方法');
        this.parent.go();
        this.parent.msg3 = "指令带的参数";
        this.parent.msg4 = this.attr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PropertyDirective.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PropertyDirective.prototype, "play", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PropertyDirective.prototype, "ez", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('style.background'),
        __metadata("design:type", Object)
    ], PropertyDirective.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('title'),
        __metadata("design:type", Object)
    ], PropertyDirective.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('@keyFrame'),
        __metadata("design:type", Object)
    ], PropertyDirective.prototype, "keyFrame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyDirective.prototype, "mouseenter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyDirective.prototype, "mouseleave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PropertyDirective.prototype, "resize", null);
    PropertyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[ez]',
            //inputs : ['parents'],			// 此处声明，启动报错，运行不报错
            host: {
                '(click)': 'click()',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('class')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], String])
    ], PropertyDirective);
    return PropertyDirective;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/directive/directive/structure.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructureDirective; });
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

// ======================================================================== NgModule
var StructureDirective = (function () {
    function StructureDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false;
    }
    Object.defineProperty(StructureDirective.prototype, "myUnless", {
        // 自定义结构型指令
        set: function (condition) {
            if (!condition && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            }
            else if (condition && this.hasView) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], StructureDirective.prototype, "myUnless", null);
    StructureDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[myUnless]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]])
    ], StructureDirective);
    return StructureDirective;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/directive/property-directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDirectiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_views_ng_animation_animations__ = __webpack_require__("../../../../../src/app/views/ng/animation/animations.ts");
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
var PropertyDirectiveComponent = (function () {
    function PropertyDirectiveComponent(router) {
        this.router = router;
        this.msg = '将变量传入到指令中进行处理';
    }
    PropertyDirectiveComponent.prototype.start = function (v) {
        this.msg = v;
    };
    PropertyDirectiveComponent.prototype.go = function () {
        this.msg2 = '用 this.parent.go() 调用 父组件方法';
    };
    PropertyDirectiveComponent.prototype.directive = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/directive/directive/property.directive.ts';
    };
    PropertyDirectiveComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/directive/property-directive.component.ts';
    };
    PropertyDirectiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"directive()\">\u67E5\u770B\u6307\u4EE4</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code mt10\">\n        \t<dl class=\"mvvm-list samebox\">\n\t        \t<dt>\u5C5E\u6027\u578B\u6307\u4EE4( \u4E0E\u7EC4\u4EF6\u901A\u4FE1\u4E00\u6837\u5904\u7406 ): </dt>\n\t        \t<dd><b>ez</b>: \u65E0\u53C2\u6570\u7ED1\u5B9A\u6307\u4EE4</dd>\n\t        \t<dd><b>[ez]=\"this\"</b>: \u6709\u53C2\u6570\u7ED1\u5B9A\u6307\u4EE4</dd>\n\t        \t<dd><b>[parnt]=\"this\"</b>: \u7ED1\u5B9A\u5C5E\u6027</dd>\n\t        \t<dd><b>(play)=\"start($event)\"</b>: \u7ED1\u5B9A\u65B9\u6CD5, \u5982\u679C\u6709\u53C2\u6570\u4F20\u9012, \u5FC5\u987B\u6709 $event</dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u5C5E\u6027\u578B\u6307\u4EE4\u4F5C\u7528: </dt>\n\t        \t<dd>\u4FEE\u6539\u7236\u7EC4\u4EF6\u7684\u5C5E\u6027</dd>\n\t        \t<dd>\u4FEE\u6267\u884C\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5</dd>\n\t        \t<dd>\u83B7\u53D6\u7236\u7EC4\u4EF6\u5143\u7D20\u7684 DOM \u5BF9\u8C61</dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n       \n        <button ez [parent]=\"this\" class=\"btn-default\">\u4FEE\u6539\u7236\u7EC4\u4EF6\u7684\u5C5E\u6027</button>\n        <button ez [parent]=\"this\" (play)=\"start($event)\" class=\"btn-default\">\u6267\u884C\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5</button>\n        \n        <button [ez]=\"'\u8FD9\u662F\u6307\u4EE4\u5E26\u7684\u53C2\u6570'\" [parent]=\"this\" class=\"btn-default\">\u6307\u4EE4\u5E26\u53C2\u6570</button>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u4FEE\u6539\u7236\u7EC4\u4EF6\u7684\u5C5E\u6027: <s>{{msg}}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u6267\u884C\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5: <s>{{msg2}}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u6307\u4EE4\u5E26\u7684\u53C2\u6570\u662F:<s>{{msg3}}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u6307\u4EE4\u5E26\u7684\u53C2\u6570\u662F:<s>{{msg3}}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u6307\u4EE4\u83B7\u53D6\u6307\u4EE4\u7ED1\u5B9A\u5143\u7D20\u4E0A\u6307\u5B9A\u5C5E\u6027\u7684\u5C5E\u6027\u503C: class=<s>{{msg4}}</s></div>\n    ",
            animations: [__WEBPACK_IMPORTED_MODULE_2_app_views_ng_animation_animations__["a" /* Animations */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], PropertyDirectiveComponent);
    return PropertyDirectiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/directive/structure-directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructureDirectiveComponent; });
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
var StructureDirectiveComponent = (function () {
    function StructureDirectiveComponent(router) {
        this.router = router;
        this.condition = false;
    }
    StructureDirectiveComponent.prototype.directive = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/directive/directive/structure.directive.ts';
    };
    StructureDirectiveComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/directive/structure-directive.component.ts';
    };
    StructureDirectiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"directive()\">\u67E5\u770B\u6307\u4EE4</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t        <dl class=\"mvvm-list\">\n\t        \t<dt>\u7ED3\u6784\u6027\u6307\u4EE4(\u6BCF\u4E2A\u5BBF\u4E3B\u5143\u7D20\u4E0A\u53EA\u80FD\u6709\u4E00\u4E2A\u7ED3\u6784\u578B\u6307\u4EE4): </dt>\n\t        \t<dd><b>*ngIf</b></dd>\n\t        \t<dd><b>*ngFor</b></dd>\n\t        \t<dd><b>ngSwitch</b></dd>\n\t        \t<dd><b>&lt;ng-template&gt;&lt;/ng-template&gt;</b>: \u7528\u6765\u6E32\u67D3HTML, \u5B83\u6C38\u8FDC\u4E0D\u4F1A\u76F4\u63A5\u663E\u793A\u51FA\u6765</dd>\n\t        \t<dd><b>&lt;ng-container *ngFor=\"let h of heroes\"&gt;&lt;/ng-container&gt;</b>: \u628A\u4E00\u4E9B\u5144\u5F1F\u5143\u7D20\u5F52\u4E3A\u4E00\u7EC4, Angular \u4E0D\u4F1A\u628A\u5B83\u653E\u8FDB DOM \u4E2D</dd>\n\t        \t<dd><b>*myDirective='condition'</b>: \u81EA\u5B9A\u4E49\u7684\u7ED3\u6784\u578B\u6307\u4EE4</dd>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n        <button (click)=\"condition=!condition\" class=\"btn-default\">\u81EA\u5B9A\u4E49\u663E\u793A\u9690\u85CF\u7ED3\u6784\u578B\u5C5E\u6027</button>\n        <hr class=\"_mt10_mb10x\">\n        <div class=\"mvvm-pre\" *myUnless=\"condition\"><s>\u81EA\u5B9A\u4E49\u7ED3\u6784\u578B\u5C5E\u6027</s></div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], StructureDirectiveComponent);
    return StructureDirectiveComponent;
}());



/***/ })

});
//# sourceMappingURL=directive.module.chunk.js.map