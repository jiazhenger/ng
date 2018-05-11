webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animation/animation.module": [
		"../../../../../src/app/views/ng/animation/animation.module.ts",
		"common",
		"animation.module"
	],
	"./case/case.module": [
		"../../../../../src/app/views/ng/case/case.module.ts",
		"common",
		"case.module"
	],
	"./component/cpt.module": [
		"../../../../../src/app/views/ng/component/cpt.module.ts",
		"cpt.module"
	],
	"./data/data.module": [
		"../../../../../src/app/views/ng/data/data.module.ts",
		"data.module"
	],
	"./directive/directive.module": [
		"../../../../../src/app/views/ng/directive/directive.module.ts",
		"common",
		"directive.module"
	],
	"./form/form.module": [
		"../../../../../src/app/views/ng/form/form.module.ts",
		"form.module",
		"common"
	],
	"./http/http.module": [
		"../../../../../src/app/views/ng/http/http.module.ts",
		"http.module"
	],
	"./pipe/pipe.module": [
		"../../../../../src/app/views/ng/pipe/pipe.module.ts",
		"pipe.module"
	],
	"./router/async/many/asyncMany.module": [
		"../../../../../src/app/views/ng/router/async/many/asyncMany.module.ts",
		"asyncMany.module"
	],
	"./router/async/one/asyncOne.module": [
		"../../../../../src/app/views/ng/router/async/one/asyncOne.module.ts",
		"asyncOne.module"
	],
	"./router/child/childAsync.module": [
		"../../../../../src/app/views/ng/router/child/childAsync.module.ts",
		"childAsync.module"
	],
	"./router/fragment/fragment.module": [
		"../../../../../src/app/views/ng/router/fragment/fragment.module.ts",
		"fragment.module"
	],
	"./router/preload/preload.module": [
		"../../../../../src/app/views/ng/router/preload/preload.module.ts",
		"preload.module"
	],
	"./service/service.module": [
		"../../../../../src/app/views/ng/service/service.module.ts",
		"service.module"
	],
	"./typescript/typescript.module": [
		"../../../../../src/app/views/ng/typescript/typescript.module.ts",
		"typescript.module"
	],
	"./views/ng/ng.module": [
		"../../../../../src/app/views/ng/ng.module.ts",
		"ng.module"
	],
	"./views/pc/pc.module": [
		"../../../../../src/app/views/pc/pc.module.ts",
		"pc.module",
		"common"
	],
	"./views/three/three.module": [
		"../../../../../src/app/views/three/three.module.ts",
		"three.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_preload_service__ = __webpack_require__("../../../../../src/app/services/preload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_index_index__ = __webpack_require__("../../../../../src/app/views/index/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_404_404__ = __webpack_require__("../../../../../src/app/views/404/404.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_code_component__ = __webpack_require__("../../../../../src/app/components/code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ======================================================================== app-routing.module.ts 根路由组



// ======================================================================== 服务


// ======================================================================== 基本路由


// ======================================================================== 公共组件

// ======================================================================== 路由守卫

// ======================================================================== 路由配置
var router = [
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_5__views_index_index__["a" /* Index */] },
    // ======================================================================== 用命名出口（outlet）显示多重路由
    { path: 'code', component: __WEBPACK_IMPORTED_MODULE_7__components_code_component__["a" /* CodeComponent */], outlet: 'popup' },
    // ======================================================================== ng 教程
    { path: 'ng', loadChildren: './views/ng/ng.module#AngularModule' },
    // ======================================================================== pc 模板
    { path: 'pc', loadChildren: './views/pc/pc.module#PcModule' },
    // ======================================================================== threejs 教程
    { path: 'three', loadChildren: './views/three/three.module#ThreeModule' },
    // ======================================================================== 路由是有顺序的
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__views_404_404__["a" /* PageNotFound */] } // 404，放倒数第一
];
// ======================================================================== 根路用 forRoot 启动
var RootRouter = __WEBPACK_IMPORTED_MODULE_2__angular_router__["i" /* RouterModule */].forRoot(router, {
    useHash: true,
});
// ======================================================================== NgModule
var AppRoutingModule = (function () {
    // 输出路由信息
    function AppRoutingModule(router) {
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                RootRouter // 标记路由
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__views_index_index__["a" /* Index */], __WEBPACK_IMPORTED_MODULE_6__views_404_404__["a" /* PageNotFound */], __WEBPACK_IMPORTED_MODULE_7__components_code_component__["a" /* CodeComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_preload_service__["a" /* PreloadService */],
                __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a" /* AuthGuard */] // 路由守卫服务
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["i" /* RouterModule */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ===================================================== app.component.ts 入口组件



// ===================================================== rxjs



// ===================================================== ngrx

// ===================================================== 
var AppComponent = (function () {
    function AppComponent(router, activatedRoute, titleService, store) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.store = store;
        this.show = false;
        // 获取 prompt
        store.select('prompt').subscribe(function (v) {
            _this.prompt = v.bool;
        });
        // 获取 loading
        store.select('loading').subscribe(function (v) {
            _this.loading = v;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 进入路由之前
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouteConfigLoadStart */]) {
                _this.show = true;
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouteConfigLoadEnd */]) {
                _this.show = false;
            }
        });
        // 设置标题
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; }).subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n        <router-outlet></router-outlet>\n        <router-outlet name=\"popup\"></router-outlet>\n        <div *ngIf=\"show || prompt || loading\" class=\"loading-wraper fxmc\">\n        \t<dl class=\"loading-circle\">\n\t        \t<dd><i></i><i></i><i></i><i></i></dd>\n\t        \t<dd><i></i><i></i><i></i><i></i></dd>\n\t        \t<dd><i></i><i></i><i></i><i></i></dd>\n\t\t\t</dl>\n        </div>\n        <div *ngIf=\"show\" class=\"loading-bar2 fix_lt\"><div></div></div>\n    ",
            styles: [__webpack_require__("../../../../../src/app/views/pc/animation/loading/loading-line/style.css"), __webpack_require__("../../../../../src/app/views/pc/animation/loading/loading-circle/style.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_reducers__ = __webpack_require__("../../../../../src/app/ngrx/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_config__ = __webpack_require__("../../../../../src/app/ngrx/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_fn_service__ = __webpack_require__("../../../../../src/app/services/fn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_localStorage_service__ = __webpack_require__("../../../../../src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sessionStorage_service__ = __webpack_require__("../../../../../src/app/services/sessionStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_checkbox_service__ = __webpack_require__("../../../../../src/app/services/checkbox.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ======================================================================== app.module.ts 入口模块
// 会自动导入CommonModule
// 该模块公开的所有组件、指令和管道
// 在其它任何模块中都不要导入BrowserModule

// NgModule 接收一个元数据对象，该对象告诉 Angular 如何编译和运行模块代码

// 动画模块

// http 模块

// ======================================================================== @ngrx
 // npm install @ngrx/core @ngrx/store --save


// ======================================================================== 自定义服务






// ======================================================================== 导入根路由

// ======================================================================== 入口组件

// ======================================================================== NgModule
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            // 导入需要的模块 xModule，BrowserModule 只在入口模块调用一次
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                /*
                HttpClientXsrfModule.withOptions({
                    cookieName: 'My-Xsrf-Cookie',	// 配置自定义 cookie
                    headerName: 'My-Xsrf-Header',	// 配置自定义 header 名称
                }),*/
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* StoreModule */].forRoot(__assign({}, __WEBPACK_IMPORTED_MODULE_5__ngrx_reducers__["a" /* default */], { initialState: __WEBPACK_IMPORTED_MODULE_6__ngrx_config__["a" /* default */] })),
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */] // 根路由
            ],
            // 声明创建的组件，（只能放三种：components, directives, pipes）
            declarations: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]],
            // 将组件、指令、管道公开给外面可使用，如果不公开，则无法使用。可以是 xComponents, xDirectives,xPipes,xModule
            exports: [],
            // 声明服务 xService,
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_fn_service__["a" /* FnService */],
                __WEBPACK_IMPORTED_MODULE_8__services_localStorage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_9__services_sessionStorage_service__["a" /* SessionStorageService */],
                __WEBPACK_IMPORTED_MODULE_11__services_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_10__services_router_service__["a" /* RouterService */],
                __WEBPACK_IMPORTED_MODULE_12__services_checkbox_service__["a" /* CheckboxService */] // 全选服,务
            ],
            // 引导根组件，插入 index.html 的根组件，可以有多个根组件，但通常只有一个。只在根组件使用
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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


// ===================================================== 公共服务

// =====================================================
var CodeComponent = (function () {
    function CodeComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    CodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getTxt(localStorage.code).then(function (data) {
            var d = data.toString();
            _this.data = d.split('\n');
        });
    };
    CodeComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    CodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'code-view',
            template: "\n        <section class=\"pop-my-wraper db\">\n            <div>\n                <div>\n                    <div class=\"pop-my-container\">\n                        <!-- content start -->\n                        <header class=\"pop-my-header\">\n                            <h3><i class=\"font-file-code-o\"></i> \u6E90\u7801</h3>\n                            <a class=\"font-close\" (click)=\"close()\"></a>\n                        </header>\n                        <section class=\"pop-my-content\">\n                        \t<div *ngIf=\"data\" class=\"code-list-container\">\n                        \t\t<dl class=\"code-number\">\n                        \t\t\t<dt *ngFor=\"let item of data;index as index;trackBy:trackByFn\">{{index+1}}</dt>\n                        \t\t</dl>\n                        \t\t<dl class=\"code-content\" contenteditable=\"true\" spellcheck=\"false\">\n                        \t\t\t<dd *ngFor=\"let v of data;trackBy:trackByFn\">{{v}}</dd>\n                        \t\t</dl>\n                        \t</div>\n                        \t<div *ngIf=\"!data\" class=\"p20\">\u6B63\u5728\u52A0\u8F7D\u4E2D......</div>\n                        </section>\n                        <!-- content end -->\n                    </div>\n                    <q (click)=\"close()\"></q>\n                </div>\n            </div>\n        </section>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */]])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngrx/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoadingOpen */
/* unused harmony export LoadingClose */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PromptOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromptClose; });
// ======================================================================== actions
var LoadingOpen = (function () {
    function LoadingOpen(msg) {
        this.msg = msg;
        this.type = 'LoadingOpen';
    }
    return LoadingOpen;
}());

var LoadingClose = (function () {
    function LoadingClose() {
        this.type = 'LoadingClose';
    }
    return LoadingClose;
}());

// ========================================================================
var PromptOpen = (function () {
    function PromptOpen(msg) {
        this.msg = msg;
        this.type = 'PromptOpen';
    }
    return PromptOpen;
}());

var PromptClose = (function () {
    function PromptClose() {
        this.type = 'PromptClose';
    }
    return PromptClose;
}());



/***/ }),

/***/ "../../../../../src/app/ngrx/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Model */
/* unused harmony export Config */
// ======================================================================== 数据模型
var Model = (function () {
    function Model(api, version, author, date) {
        this.api = api;
        this.version = version;
        this.author = author;
        this.date = date;
    }
    return Model;
}());

// ======================================================================== 初始化数据
var Config = {
    api: 'http:/www/api.com',
    version: '1.0.0',
    author: 'j+2',
    date: '2017-07-25'
};
/* harmony default export */ __webpack_exports__["a"] = (Config);


/***/ }),

/***/ "../../../../../src/app/ngrx/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* unused harmony export loading */
/* unused harmony export prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("../../../../../src/app/ngrx/config.ts");
// ======================================================================== config

// ======================================================================== 数据模型
//import { Model, Init } from './model';
// ======================================================================== reducer
// ======================================================================== 全局配置
var config = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case 'init':
            return __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */];
        default:
            return state;
    }
};
// ======================================================================== loading
var loading = function (state, action) {
    switch (action.type) {
        case 'LoadingOpen':
            return true;
        case 'LoadingClose':
            return false;
        default:
            return false;
    }
};
// ======================================================================== 提示
var prompt = function (state, action) {
    switch (action.type) {
        case 'PromptOpen':
            return { bool: true, msg: action.msg };
        case 'PromptClose':
            return { bool: false };
        default:
            return { bool: false };
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({ loading: loading, prompt: prompt, config: config });


/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// ===================================================== 获取数据

// ===================================================== 组件
var AuthGuard = (function () {
    function AuthGuard(router, tit, DS) {
        this.router = router;
        this.tit = tit;
        this.DS = DS;
    }
    AuthGuard.prototype.setTitle = function (route) {
        var title = route.data.title ? '-' + route.data.title : '';
        //this.tit.setTitle('Angular' + title);
    };
    // 在加载特性模块之前进行检查
    AuthGuard.prototype.canLoad = function (route) {
        console.log('canLoad 最先检查');
        return true;
    };
    // 进入路由时, 检查路由的访问权限, 放在一级路由上面
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log('canActivate 进入路由时检查');
        //this.setTitle(route);
        return true;
    };
    // 检查子路由的访问权限, 放在子路由上面
    AuthGuard.prototype.canActivateChild = function (route, state) {
        console.log('canActivateChild 子路由进入时检查');
        this.setTitle(route);
        return this.canActivate(route, state);
    };
    // 离开路由守卫之后, 检查子路由的访问权限, 放在子路由上面, 询问是否丢弃未保存的更改
    AuthGuard.prototype.canDeactivate = function (component) {
        console.log('canDeactivate 离开页面 ');
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    // 预先获取组件数据
    // 导航前预先加载路由信息
    AuthGuard.prototype.resolve = function (route, state) {
        var routerInfo = {
            url: state.url,
            params: route.params,
            queryParams: route.queryParams,
            data: route.data // 获取路由上的 data;
        };
        console.log(routerInfo);
        var id = route.paramMap.get('id');
        console.log(id);
        this.DS.data.then(function (data) {
            console.log(data);
        });
        return this.DS.data.then(function (data) {
            if (data) {
                return data;
            }
            else {
                return null;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]])
    ], AuthGuard);
    return AuthGuard;
}());

/*
    Resolve<Data>: 必须返回数据类型为 : export class Data { constructor(public id: number, public name: string) { } }
    
    resolve():Promise<Data>{
        // 此时必须返回一个对象 {}
        return data[0]
    }
 */
/*
    Resolve<any>: 可返回任何数据类型, 必须返回
    resolve(){
        
    }
 */ 


/***/ }),

/***/ "../../../../../src/app/services/checkbox.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ======================================================= 

// ======================================================= 全选效果
var CheckboxService = (function () {
    function CheckboxService() {
    }
    // ======================================================= 操作 data 选择数据
    // 设置默认值
    CheckboxService.prototype.setDefaultChecked = function (opt) {
        var data = opt.data;
        var model = opt.model;
        var def = opt.alldef == undefined ? false : opt.alldef; // 默认为 false
        var id = opt.id;
        var sort = opt.sortByIndex == undefined ? true : opt.sortByIndex; // 默认为 true
        data.forEach(function (v, i) {
            // 如果 checked 不存在, 则自定义是否选中, 反之, 则 == checked 值
            var index = sort ? i : v.id;
            model[index] = v.checked == undefined ? def : v.checked;
        });
        return this.checkedOneByOne({ data: data, model: model, id: id, sortByIndex: sort });
    };
    // 一选多
    CheckboxService.prototype.checkedAll = function (opt) {
        var data = opt.data;
        var model = opt.model;
        var bool = opt.all;
        var id = opt.id;
        var sort = opt.sortByIndex == undefined ? true : opt.sortByIndex; // 默认为 true
        if (bool) {
            Object.keys(model).forEach(function (v, i) {
                var index = sort ? i : v;
                model[index] = true;
            });
        }
        else {
            Object.keys(model).forEach(function (v, i) {
                var index = sort ? i : v;
                model[index] = false;
            });
        }
        return this.getCheckedDataValue(data, model, id, sort); // 获取处理后的 value 值
    };
    // 单个选
    CheckboxService.prototype.checkedOneByOne = function (opt) {
        var data = opt.data;
        var model = opt.model;
        var id = opt.id;
        var sort = opt.sortByIndex == undefined ? true : opt.sortByIndex; // 默认为 true
        var stack = [];
        var bool;
        Object.keys(model).forEach(function (v, i) {
            if (!model[v]) {
                bool = false;
                return;
            }
            stack.push(v);
        });
        if (stack.length === Object.keys(model).length) {
            bool = true;
        }
        var result = this.getCheckedDataValue(data, model, id, sort);
        return {
            all: bool,
            result: result
        };
    };
    // 获取的是 data 上的属性数据,而不是 checkbox value 的数据
    CheckboxService.prototype.getCheckedDataValue = function (data, model, id, sort) {
        if (id === void 0) { id = 'id'; }
        var arr = [];
        var obj = {};
        var json = [];
        var result = [];
        Object.keys(model).forEach(function (v, i) {
            if (model[v]) {
                if (sort) {
                    arr.push(data[v][id]); // 将选中属性组合成数组
                    var idx = data[v]['id'] != undefined ? data[v]['id'] : v;
                    obj[idx] = data[v][id]; // 将数据组合成  {index:value} 对象
                    json.push({ id: idx, value: data[v][id] }); // 将数据组合成 [{id:,value:}]
                    result.push(data[i]); // 将选中数据组合成数组
                }
                else {
                    for (var j in data) {
                        if (v == data[j]['id']) {
                            arr.push(data[j][id]); // 将数据组合成数组
                            obj[v] = data[j][id]; // 将数据组合成  {id:value} 对象
                            json.push({ id: v, value: data[j][id] }); // 将数据组合成 [{id:,value:}]
                            result.push(data[j]); // 将选中属性组合成数组
                        }
                    }
                }
            }
        });
        return {
            obj: obj,
            arr: arr,
            json: json,
            data: result
        };
    };
    // 给默认选中值设置 checked
    CheckboxService.prototype.setChecked = function (data, checkedData, id) {
        if (checkedData === void 0) { checkedData = []; }
        if (id === void 0) { id = 'id'; }
        if (checkedData.length == 0) {
            return data;
        }
        checkedData.map(function (value, index) {
            data.map(function (v, i) {
                if (value[id] == v[id]) {
                    v['checked'] = true;
                }
            });
        });
        return data;
    };
    // ======================================================= 操作 checkbox value 选择数据
    CheckboxService.prototype.removeByValue = function (arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    };
    // 将 value 拼合成一个数据,并返回对应 id 的数据, stack 为一个空数组, 不能是 ngModel
    CheckboxService.prototype.getCheckedValue = function (event, checked, data, id) {
        if (id === void 0) { id = 'id'; }
        var v = event.target.value;
        if (event.target.checked) {
            checked.push(v);
        }
        else {
            this.removeByValue(checked, v);
        }
        if (!data) {
            return checked;
        }
        else {
            var result_1 = [];
            data.map(function (value, index) {
                for (var i in checked) {
                    if (value[id] == checked[i]) {
                        result_1[i] = value;
                    }
                }
            });
            return {
                ids: checked,
                data: result_1
            };
        }
    };
    // 删除名字,并取消选择
    CheckboxService.prototype.del = function (index, id, option) {
        var opt = {
            checked: [],
            ids: [],
            data: [],
            model: [],
            all: false,
            key: 'id',
        };
        Object.assign(opt, option);
        opt.data.map(function (v, i) {
            if (v[opt.key] == id) {
                opt.model[i] = false;
            }
        });
        opt.checked.splice(index, 1);
        opt.ids.splice(index, 1);
    };
    CheckboxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CheckboxService);
    return CheckboxService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===================================================== 构造测试数据
var Data = (function () {
    function Data(id, name) {
        this.id = id;
        this.name = name;
    }
    return Data;
}());

var CRISES = [
    new Data(1, 'Dragon Burning Cities'),
    new Data(2, 'Sky Rains Great White Sharks'),
    new Data(3, 'Giant Asteroid Heading For Earth'),
    new Data(4, 'Procrastinators Meeting Delayed Again'),
];
var dataPromise = Promise.resolve(CRISES);
// ===================================================== 处理数据服务

var DataService = (function () {
    function DataService() {
        this.data = dataPromise;
    }
    DataService.prototype.getData = function () { return dataPromise; };
    DataService.prototype.searchData = function (id) {
        return dataPromise.then(function (crises) { return crises.find(function (Data) { return Data.id === +id; }); });
    };
    DataService.nextDataId = 100;
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/fn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ngrx_actions__ = __webpack_require__("../../../../../src/app/ngrx/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* ====================================== 全局方法  ====================================== */
var FnService = (function () {
    function FnService(store) {
        this.store = store;
    }
    // ========================================================================  判断数据类型
    // 判断数据是否是对象 {}
    FnService.prototype.isObject = function (obj) {
        return {}.toString.call(obj) == '[object Object]';
    };
    // 判断数据是否是对象{}，且对象长度 >0
    FnService.prototype.hasObject = function (obj) {
        return this.isObject(obj) && Object.keys(obj).length > 0;
    };
    // 判断数据是否是函数 function
    FnService.prototype.isFunction = function (obj) {
        return {}.toString.call(obj) === '[object Function]';
    };
    // 判断数据是否是数组 []
    FnService.prototype.isArray = function (obj) {
        return {}.toString.call(obj) === '[object Array]';
    };
    // 判断数据是否是数级 []，且长度>0
    FnService.prototype.hasArray = function (obj) {
        return this.isArray(obj) && obj.length > 0;
    };
    // 判断数据是否是字符串
    FnService.prototype.isString = function (obj) {
        return {}.toString.call(obj) === '[object String]';
    };
    // 判断数据是否是数字
    FnService.prototype.isNumber = function (obj) {
        return {}.toString.call(obj) === '[object Number]';
    };
    // 判断数据是否有效
    FnService.prototype.isValid = function (obj) {
        return obj != undefined && obj != '' && obj != null && obj != NaN;
    };
    // 判断数据的有效性
    FnService.prototype.isData = function (obj) {
        return this.hasArray(obj) || this.hasObject(obj) || this.isValid(obj);
    };
    // ======================================================================== 返回 ngFor 的 trakBy
    // 自动获取 index, value
    // 返回 index
    FnService.prototype.trackBy = function (index, value) {
        return index;
    };
    // 返回 value
    FnService.prototype.trackByValue = function (index, value) {
        return value;
    };
    // 返回 id
    FnService.prototype.trackById = function (index, value) {
        return value['id'];
    };
    // ======================================================================== 阻止事件冒泡
    // 阻止冒泡不阻止默认行为
    FnService.prototype.stop = function (event) {
        event.stopPropagation();
    };
    // 阻止冒泡并阻止默认行为
    FnService.prototype.prevent = function (event) {
        event.preventDefault();
    };
    // ======================================================================== 数据处理
    // 获取 json 数据的 id值
    FnService.prototype.getIds = function (data, id) {
        if (data === void 0) { data = []; }
        if (id === void 0) { id = 'id'; }
        var stack = [];
        data.map(function (v, i) {
            stack.push(v[id]);
        });
        return stack;
    };
    // ======================================================================== Store
    FnService.prototype.dispatch = function (type, param, fn) {
        this.store.dispatch({ type: type });
        if (param) {
            this.getState(param, fn);
        }
    };
    // 获取 state
    FnService.prototype.getState = function (param, fn) {
        var _this = this;
        this.store.select(param).subscribe(function (v) { return fn.call(_this, v); });
    };
    // 加载效果
    FnService.prototype.loading = function (time) {
        var _this = this;
        this.store.dispatch({ type: 'LoadingOpen' });
        setTimeout(function () { _this.store.dispatch({ type: 'LoadingClose' }); }, time || 1000);
    };
    // 加载效果
    FnService.prototype.prompt = function (msg, time) {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2_app_ngrx_actions__["b" /* PromptOpen */](msg));
        setTimeout(function () { _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2_app_ngrx_actions__["a" /* PromptClose */]()); }, time || 1000);
    };
    FnService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], FnService);
    return FnService;
}());



/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_localStorage_service__ = __webpack_require__("../../../../../src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_sessionStorage_service__ = __webpack_require__("../../../../../src/app/services/sessionStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/add/operator/shareReplay';
//import 'rxjs/add/observable/forkJoin';
//import { Observable } from 'rxjs/Observable';
// ===================================================== api
var api = 'http://jc.1919.cn:8080/genius/api/'; // 外网
// ===================================================== 服务



// ===================================================== http 服务
var HttpService = (function () {
    function HttpService(http, router, $ls, $ss) {
        this.http = http;
        this.router = router;
        this.$ls = $ls;
        this.$ss = $ss;
        this.$fn = {};
        // 封装可选参数
        this.getParam = function (data) {
            var str = '';
            for (var i in data) {
                str += i + '=' + data[i] + '&';
            }
            return '?' + encodeURI(str); // encodeURI 不对 [:, /, ;,?] 进行编码
        };
        this.$fn = $ls.fn;
        this.router = router;
        //$ls.clear();
    }
    // 错误输出
    HttpService.prototype.logError = function (msg) {
        console.log('%cj+2 错误提示：' + msg, 'color:red');
    };
    // 友情提示
    HttpService.prototype.logPromp = function (msg) {
        console.log('%cj+2 友情提示：' + msg, 'color:#ce6007');
    };
    // 错误处理
    HttpService.prototype.error = function (err, url) {
        if (err.status === 404) {
            this.router.go('404', { api: url });
            this.logError('你访问的 api 不存在，请检查: ' + url);
        }
        else if (err.status === 500) {
            this.logError('服务器内部错误: ' + url);
        }
        else if (err.status === 0) {
            this.logError('可能存在服务器拒绝 cors 跨域请求 || 访问的服务器不存在 || 访问的 api 没有返回数据 || 访问的 api 返回数据格式错误：' + url);
        }
        else {
            this.logError('服务器出错：' + url);
        }
    };
    // header 配置
    HttpService.prototype.options = function (sync) {
        if (sync === void 0) { sync = false; }
        var token = this.$ls.get('login').token;
        token = token ? token : '';
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json;charset=utf-8',
                //'Content-Type': 'multipart/form-data;boundary=AaB03x'
                //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'authorization': token
            }),
        };
    };
    // 处理请求参数
    HttpService.prototype.manageBody = function (body, promise) {
        var mbody = body;
        if (this.$fn.isFunction(mbody)) {
            mbody = body.call(promise);
            if (!this.$fn.isObject(mbody)) {
                this.logError('请求参数是 函数时，必须返回一个对象参数 {}');
                return {};
            }
            return mbody;
        }
        else if (this.$fn.isObject(body)) {
            return body;
        }
        else {
            //this.logPromp('请求参数格式有 {} 与 函数返回 {} 或不传三种, 如请求数据不正确，请确认是否需要传参');
            return {};
        }
    };
    // post 与 get 合在一起处理
    HttpService.prototype.httpRequest = function (url, body, action, sync) {
        var _this = this;
        if (action === void 0) { action = 'get'; }
        var $this = this;
        var options = sync ? this.options(true) : this.options();
        return new Promise(function (resolve, reject) {
            var promise;
            var mbody = _this.manageBody(body, _this);
            if (action == 'get') {
                var param = _this.$fn.hasObject(mbody) ? _this.getParam(mbody) : ''; // 给 get 添加 ? 可选参数
                promise = _this.http.get(api + url + param, options);
                console.log('%c' + action + ' === ' + api + url + param, 'color:blue'); // 输出 api
            }
            else {
                promise = _this.http.post(api + url, mbody, options);
                console.log('%c' + action + ' === ' + api + url, 'color:blue'); // 输出 api
            }
            promise
                .subscribe(function (data) {
                console.log(data);
                var code = data['code'];
                if (code == 0) {
                    resolve(data['data']);
                }
                else if (code == 1919) {
                    //$this.logError('未登录或登录失效');
                    //$this.token();								// 重新登录一次
                    //window.location.reload();
                }
                else {
                    reject(data);
                    _this.logError('ajax请求畅通，返回后台程序容错信息：' + data['msg']);
                }
            }, function (err) {
                console.log(err);
                $this.error(err, api + url);
                alert('服务器出错');
            });
            //.shareReplay();	// 避免重复请求
        });
    };
    // 获取 token
    HttpService.prototype.token = function () {
        var _this = this;
        var param = { "username": "admin", "password": "admin" };
        this.post('tokens', param).then(function (data) {
            _this.$ls.set('login', { token: data['token'], userId: data['userId'] });
            console.log('登录成功');
            //window.location.reload();
        }, function (data) {
            console.log(data);
            console.log('登录失败');
        });
    };
    // post 请求
    HttpService.prototype.post = function (url, body) { return this.httpRequest(url, body, 'post'); }; // 异步
    HttpService.prototype.postSync = function (url, body) { return this.httpRequest(url, body, 'post', true); }; // 同步
    // get 请求
    HttpService.prototype.get = function (url, body) { return this.httpRequest(url, body, 'get'); }; // 异步
    HttpService.prototype.getSync = function (url, body) { return this.httpRequest(url, body, 'get', true); }; // 同步
    // 并行发送多个请求
    HttpService.prototype.posts = function () {
        /*
        Observable.forkJoin(
            this.http.get('/courses/-KgVwEBq5wbFnjj7O8Fp.json'),
            this.http.get('/courses/-KgVwECOnlc-LHb_B0cQ.json')
        ).subscribe(
            values => {
                console.log("all values", values)
            }
        );*/
    };
    // 获取纯文本
    HttpService.prototype.getTxt = function (url) {
        var _this = this;
        //let api = 'http://10.1.22.15/angular/src/app/';					// 如果访问不了,查看是否配置了 MIME 类型
        //let api= 'http://127.0.0.1:8020/my-template/angular/src/app/';	// 本地访问
        var api = 'https://jiazhenger.github.io/ng/app/src/'; // github访问
        return new Promise(function (resolve, reject) {
            _this.http.get(api + url, { responseType: 'text' }).subscribe(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject(data);
                }
            });
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_3_app_services_localStorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_4_app_services_sessionStorage_service__["a" /* SessionStorageService */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/services/localStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_fn_service__ = __webpack_require__("../../../../../src/app/services/fn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// ===================================================== 公共方法服务

// ===================================================== 本地存储服务
var LocalStorageService = (function () {
    function LocalStorageService(fn) {
        this.fn = fn;
    }
    // ====================================== 设置存储
    LocalStorageService.prototype.set = function (key, value) {
        var v = this.get(key);
        var mv = value;
        // 如果 v 存在，先取再存
        if (v) {
            if (this.fn.isObject(v)) {
                mv = Object.assign({}, v, mv);
            }
            else if (this.fn.isArray(v)) {
                v.push(mv);
                mv = v;
            }
            else {
                mv = value;
            }
        }
        // 如果 v 不存在，直接存
        if (this.fn.isObject(mv) || this.fn.isArray(mv)) {
            mv = JSON.stringify(mv);
        }
        localStorage.setItem(key, mv);
    };
    // ====================================== 获取存储
    LocalStorageService.prototype.get = function (key) {
        var k = localStorage.getItem(key);
        if (this.fn.isValid(k)) {
            if ((k.substr(0, 1) === '{' && k.substr(-1, 1) === '}') || (k.substr(0, 1) === '[' && k.substr(-1, 1) === ']')) {
                return JSON.parse(k);
            }
            else {
                return k;
            }
        }
        else {
            return false;
        }
    };
    // ====================================== 输出全部信息
    LocalStorageService.prototype.output = function () {
        console.log(localStorage);
    };
    // ====================================== 列出指定 key
    LocalStorageService.prototype.remove = function (key) {
        if (this.fn.hasArray(key)) {
            key.map(function (v, i) {
                localStorage.removeItem(v);
            });
        }
        else {
            localStorage.removeItem(key);
        }
    };
    // ====================================== 清除全部
    LocalStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_fn_service__["a" /* FnService */]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/preload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// 预加载指定路由
var PreloadService = (function () {
    function PreloadService() {
        this.preloadedModules = [];
    }
    PreloadService.prototype.preload = function (route, load) {
        // { path: '', component:'', data: { preload:true }}
        // 只有 preload 为 true 时才预加载
        console.log(route.data['preload']);
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path); // 预加载
            return load();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        }
    };
    PreloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PreloadService);
    return PreloadService;
}());



/***/ }),

/***/ "../../../../../src/app/services/router.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouterService = (function () {
    function RouterService(router, route) {
        this.router = router;
        this.route = route;
    }
    // ======================================================================== 原始导航
    RouterService.prototype.Router = function () { return this.router; };
    RouterService.prototype.Route = function () { return this.route; };
    // ======================================================================== 自定义导航
    RouterService.prototype.go = function (path, queryParam, param) {
        if (path === void 0) { path = '/'; }
        if (queryParam === void 0) { queryParam = {}; }
        if (param === void 0) { param = {}; }
        if ({}.toString.call(path) === '[object Object]') {
            this.popup(path);
        }
        else {
            this.push(path, queryParam, param);
        }
    };
    // popup 跳转
    RouterService.prototype.popup = function (path) {
        var p = Object.keys(path);
        var popup = p[0];
        var name = path[popup];
        this.router.navigate([{ outlets: { popup: [name] } }]);
    };
    // 一般跳转
    RouterService.prototype.push = function (path, queryParam, param) {
        if (path === void 0) { path = '/'; }
        if (queryParam === void 0) { queryParam = {}; }
        if (param === void 0) { param = {}; }
        this.router.navigate([path, param], { queryParams: queryParam });
    };
    // 跳转无历史记录
    RouterService.prototype.replace = function (path, queryParam, param) {
        if (path === void 0) { path = '/'; }
        if (queryParam === void 0) { queryParam = {}; }
        if (param === void 0) { param = {}; }
        this.router.navigate([path, param], { queryParams: queryParam, replaceUrl: true });
    };
    // 返回历史记录
    RouterService.prototype.back = function (n) {
        var num = n || -1;
        //window.history.back(n);
        window.history.go(num);
    };
    // ======================================================================== 必选参数
    // 获取必选参数
    RouterService.prototype.param = function (v) {
        var _this = this;
        if (typeof v == 'string') {
            return this.route.snapshot.paramMap.get('id');
        }
        else if (typeof v == 'function') {
            this.route.paramMap.subscribe(function (param) { v.call(_this, param['params']); });
        }
    };
    // 判断参数是否存在
    RouterService.prototype.hasParam = function (id) {
        return this.route.snapshot.paramMap.has(id);
    };
    // ======================================================================== 可选参数
    // 获取可选参数
    RouterService.prototype.query = function (v) {
        var _this = this;
        if (typeof v == 'string') {
            return this.route.snapshot.queryParamMap.get('id');
        }
        else if (typeof v == 'function') {
            this.route.queryParams.subscribe(function (param) { v.call(_this, param); });
        }
    };
    // 判断参数是否存在
    RouterService.prototype.hasQuery = function (id) {
        return this.route.snapshot.queryParamMap.has(id);
    };
    // ======================================================================== 其它路由操作
    // 刷新页面
    RouterService.prototype.reload = function () {
        //self.location.reload();
        window.location.reload();
    };
    RouterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sessionStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_fn_service__ = __webpack_require__("../../../../../src/app/services/fn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// ===================================================== 公共方法服务

// ===================================================== 本地存储服务
var SessionStorageService = (function () {
    function SessionStorageService(fn) {
        this.fn = fn;
    }
    // ====================================== 设置存储
    SessionStorageService.prototype.set = function (key, value) {
        var v = this.get(key);
        var mv = value;
        // 如果 v 存在，先取再存
        if (v) {
            if (this.fn.isObject(v)) {
                mv = Object.assign({}, v, mv);
            }
            else if (this.fn.isArray(v)) {
                v.push(mv);
                mv = v;
            }
            else {
                mv = value;
            }
        }
        // 如果 v 不存在，直接存
        if (this.fn.isObject(mv) || this.fn.isArray(mv)) {
            mv = JSON.stringify(mv);
        }
        sessionStorage.setItem(key, mv);
    };
    // ====================================== 获取存储
    SessionStorageService.prototype.get = function (key) {
        var k = sessionStorage.getItem(key);
        if (this.fn.isValid(k)) {
            if ((k.substr(0, 1) === '{' && k.substr(-1, 1) === '}') || (k.substr(0, 1) === '[' && k.substr(-1, 1) === ']')) {
                return JSON.parse(k);
            }
            else {
                return k;
            }
        }
        else {
            return false;
        }
    };
    // ====================================== 输出全部信息
    SessionStorageService.prototype.output = function () {
        console.log(sessionStorage);
    };
    // ====================================== 列出指定 key
    SessionStorageService.prototype.remove = function (key) {
        if (this.fn.hasArray(key)) {
            key.map(function (v, i) {
                sessionStorage.removeItem(v);
            });
        }
        else {
            sessionStorage.removeItem(key);
        }
    };
    // ====================================== 清除全部
    SessionStorageService.prototype.clear = function () {
        sessionStorage.clear();
    };
    SessionStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_fn_service__["a" /* FnService */]])
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/views/404/404.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFound; });
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
// ===================================================== 


// ===================================================== 公共服务

// =====================================================
var PageNotFound = (function () {
    function PageNotFound(router, route) {
        this.router = router;
        this.route = route;
        this.title = '404';
    }
    PageNotFound.prototype.ngOnInit = function () {
        this.api = this.route.snapshot.queryParamMap.get('id');
    };
    PageNotFound = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"h100\"></div>\n\t\t<h2 *ngIf=\"!api;else id\" class=\"_tc_f24_lh40\">\u5BF9\u4E0D\u8D77,\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728</h2>\n\t\t<ng-template #id>\n\t\t\t<div class=\"_tc_f24_lh40\">\n\t\t\t\t<h2>\u5BF9\u4E0D\u8D77,\u60A8\u8BBF\u95EE\u7684\u63A5\u53E3</h2>\n\t\t\t\t<h2 style=\"color:red;\">{{api}}</h2>\n\t\t\t\t<h2>\u4E0D\u5B58\u5728</h2>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<nav class=\"_tc_mt20 ng-frame\">\n\t\t\t<a (click)=\"router.back()\" class=\"btn-default mr5\">\u8FD4\u56DE</a>\n\t\t\t<a (click)=\"router.go()\" class=\"btn-default\">\u5230\u9996\u9875</a>\n\t\t</nav>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageNotFound);
    return PageNotFound;
}());



/***/ }),

/***/ "../../../../../src/app/views/index/index.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-screen\">\r\n\t<header class=\"header\">\r\n\t\t<h1 class=\"logo\"><a routerLink=\"/ng\"><img src=\"../../assets/images/logo.png\"></a></h1>\r\n\t\t<i class=\"font-navicon small-nav\" id=\"smllNav\"></i>\r\n\t</header>\r\n\t<section class=\"container\">\r\n\t\t<aside class=\"navigation oys\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 routerLink=\"/ng\"><span>Angular 教程</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 routerLink=\"/pc\"><span>pc 端 html5 模板</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<h3 routerLink=\"/three\"><span>threeJS 教程</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</aside>\r\n\t\t<main class=\"oxys\">\r\n\t\t\t<section class=\"content\"></section>\r\n\t\t</main>\r\n\t</section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/index/index.ts":
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
        var $snav = $('#smllNav');
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
        // 刷新判断当前页面
        $nav.find('a').each(function () {
            if ($(this).hasClass('active')) {
                $(this).parents('nav').fadeIn(200).prev().addClass('active');
                $(this).parents('menu').fadeIn(200).prev().addClass('active');
            }
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
            template: __webpack_require__("../../../../../src/app/views/index/index.html"),
            styles: [__webpack_require__("../../../../../src/app/views/pc/index/style.css")]
        })
    ], Index);
    return Index;
}());



/***/ }),

/***/ "../../../../../src/app/views/pc/animation/loading/loading-circle/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-wraper{position:fixed;z-index:10;left:0;top:0;width:100%;height:100%;background-color:rgba(255,255,255,.3)}\r\n.loading-circle{width:40px;height:40px;position:relative}\r\n.loading-circle i{width:8px;height:8px;border-radius:100%;position:absolute;background-color:#ec407a;-webkit-animation:loadingCircle 1.2s infinite ease-in-out;animation:loadingCircle 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}\r\n.loading-circle i:nth-child(1){left:0;top:0}\r\n.loading-circle i:nth-child(2){right:0;top:0}\r\n.loading-circle i:nth-child(3){right:0;bottom:0}\r\n.loading-circle i:nth-child(4){left:0;bottom:0}\r\n.loading-circle dd{position:absolute;width:100%;height:100%}\r\n.loading-circle dd:nth-child(1) i:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}\r\n.loading-circle dd:nth-child(1) i:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}\r\n.loading-circle dd:nth-child(1) i:nth-child(4){-webkit-animation-delay:-.3s;animation-delay:-.3s}\r\n.loading-circle dd:nth-child(2){-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}\r\n.loading-circle dd:nth-child(2) i:nth-child(1){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}\r\n.loading-circle dd:nth-child(2) i:nth-child(2){-webkit-animation-delay:-.8s;animation-delay:-.8s}\r\n.loading-circle dd:nth-child(2) i:nth-child(3){-webkit-animation-delay:-.5s;animation-delay:-.5s}\r\n.loading-circle dd:nth-child(2) i:nth-child(4){-webkit-animation-delay:-.2s;animation-delay:-.2s}\r\n.loading-circle dd:nth-child(3){-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}\r\n.loading-circle dd:nth-child(3) i:nth-child(1){-webkit-animation-delay:-1s;animation-delay:-1s}\r\n.loading-circle dd:nth-child(3) i:nth-child(2){-webkit-animation-delay:-.7s;animation-delay:-.7s}\r\n.loading-circle dd:nth-child(3) i:nth-child(3){-webkit-animation-delay:-.4s;animation-delay:-.4s}\r\n.loading-circle dd:nth-child(3) i:nth-child(4){-webkit-animation-delay:-.1s;animation-delay:-.1s}\r\n@-webkit-keyframes loadingCircle{\r\n0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}\r\n40%{-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n@keyframes loadingCircle{\r\n0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}\r\n40%{-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n.loading-circle-2{width:90px;height:90px;position:relative;-webkit-animation:rotate 2s infinite linear;animation:rotate 2s infinite linear}\r\n.loading-circle-2 i{width:60%;height:60%;position:absolute;border-radius:100%;background-color:#ec407a;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}\r\n.loading-circle-2 i:nth-child(1){top:0}\r\n.loading-circle-2 i:nth-child(2){bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}\r\n@-webkit-keyframes rotate{\r\n100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}\r\n}\r\n@keyframes rotate{\r\n100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}\r\n}\r\n@-webkit-keyframes bounce{\r\n0%,100%{-webkit-transform:scale(0);transform:scale(0)}\r\n50%{-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n@keyframes bounce{\r\n0%,100%{-webkit-transform:scale(0);transform:scale(0)}\r\n50%{-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n.loading-circle-3{width:150px;height:150px;position:relative}\r\n.loading-circle-3 i{width:30px;height:30px;display:inline-block;border-radius:100%;background-color:#ec407a;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}\r\n.loading-circle-3 i:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}\r\n.loading-circle-3 i:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}\r\n@-webkit-keyframes bouncedelay{\r\n0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}\r\n40%{-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n@keyframes bouncedelay{\r\n0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}\r\n40%{-webkit-transform:scale(1);transform:scale(1)}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/pc/animation/loading/loading-line/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-bar{width:100%;height:3px;background-color:#ddd}\r\n.loading-bar div{height:100%;background-size:100% 3px;background-image:linear-gradient(to right,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);background-image:-webkit-linear-gradient(to right,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);-webkit-animation:loadingbar 5s infinite ease-in-out;animation:loadingbar 5s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}\r\n@-webkit-keyframes loadingbar{\r\n0%,100%{transition-timing-function:cubic-bezier(1,0,.65,.85)}\r\n0%{width:0}\r\n100%{width:100%}\r\n}\r\n@keyframes loadingbar{\r\n0%,100%{transition-timing-function:cubic-bezier(1,0,.65,.85)}\r\n0%{width:0}\r\n100%{width:100%}\r\n}\r\n.loading-bar2{width:100%;height:2px;background-color:#fff;overflow:hidden}\r\n.loading-bar2 div{width:100%;height:100%;background-size:100% 2;border-radius:5px;background-image:linear-gradient(to right,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);background-image:-webkit-linear-gradient(to right,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);-webkit-animation:loadingbar2 2s infinite ease-in-out;animation:loadingbar2 2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}\r\n@-webkit-keyframes loadingbar2{\r\n0%,100%{transition-timing-function:cubic-bezier(1,0,.65,.85)}\r\n0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}\r\n50%{-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n@keyframes loadingbar2{\r\n0%,100%{transition-timing-function:cubic-bezier(1,0,.65,.85)}\r\n0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}\r\n50%{-webkit-transform:scale(1);transform:scale(1)}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/pc/index/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation a,.navigation h3,.navigation h5,.omit{white-space:nowrap;overflow:hidden;word-wrap:normal;text-overflow:ellipsis}\r\n.linear,.navigation h3 i,.navigation h5 i{transition:all .3s linear}\r\n.font-angle-right:before{content:'\\F105'}\r\n.font-navicon:before{content:'\\F0C9';font-size:16px}\r\n.header{height:50px;border-bottom:1px solid #efefef}\r\n.logo{position:relative;top:50%;margin:-20px 0 0 20px;width:150px;height:40px;float:left}\r\n.logo a{width:100%;height:100%;display:block}\r\n.logo img{width:100%;height:100%}\r\n.small-nav{width:30px;height:30px;background-color:#4da1ff;color:#fff;text-align:center;line-height:30px;border-radius:3px;position:relative;top:50%;margin:-15px 0 0 10px;float:left;cursor:pointer;display:none}\r\n.container{width:100%;position:absolute;top:50px;bottom:0;min-width:320px}\r\n.navigation{width:200px;height:100%;float:left;border-right:1px solid #efefef;position:relative}\r\n.navigation menu,.navigation nav{margin-left:20px;display:none}\r\n.navigation h3,.navigation h5{height:32px;line-height:32px;padding:0 5px;box-sizing:content-box;border:1px solid #fff;cursor:pointer}\r\n.navigation h3 span,.navigation h5 span{float:left}\r\n.navigation h3 i,.navigation h5 i{font-size:18px;float:right;-webkit-transform:rotate(0);transform:rotate(0)}\r\n.navigation h3:hover,.navigation h5:hover{border-color:#4da1ff}\r\n.navigation h3.active,.navigation h5.active{color:#4da1ff}\r\n.navigation h3.active i,.navigation h5.active i{-webkit-transform:rotate(90deg);transform:rotate(90deg)}\r\n.navigation h3>a,.navigation h5>a{padding:0;height:32px;line-height:32px}\r\n.navigation a,.navigation h3,.navigation h5{border-radius:3px}\r\n.navigation a:hover,.navigation h3:hover,.navigation h5:hover{background-color:#eee;color:#4da1ff}\r\n.navigation a,.navigation h5{height:28px;line-height:28px}\r\n.navigation h5 i{font-size:18px}\r\n.navigation ul{padding:10px 5px}\r\n.navigation a{display:block;padding:0 5px}\r\n.navigation a.active{color:#4da1ff}\r\nmain{height:100%;margin-left:200px;background-color:#fafbfc}\r\nmain::-webkit-scrollbar{width:5px;height:5px}\r\n.content{padding:20px}\r\n@media (max-width:767px){\r\n.navigation{position:absolute;z-index:1;left:0;top:0;bottom:0;height:auto;background-color:#fff;display:none}\r\n.navigation.show{display:block}\r\nmain{margin:0}\r\n.content{padding:3% 3% 60px 3%}\r\n.small-nav{display:block}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map