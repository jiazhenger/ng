webpackJsonp(["three.module"],{

/***/ "../../../../../src/app/views/three/components/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
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

// =====================================================
// 兼容判断
var isWebkit = /Chrome/gi.test(navigator.userAgent);
var isIE = "ActiveXObject" in window;
var mouseWheel = isIE || isWebkit ? 'mousewheel' : 'DOMMouseScroll';
// 事件绑定
var bind = function (elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    }
    else if (elem.attachEvent) {
        elem.attachEvent("on" + type, handler);
    }
    else {
        elem["on" + type] = handler;
    }
};
// 事件解绑
var unbind = function (o, e, fn) {
    if (o.removeEventListener)
        o.removeEventListener(e, fn, false);
    else if (o.detachEvent)
        o.detachEvent("on" + e, fn);
    else if (o.click)
        o["on" + e] = null;
    else
        throw new Error("your browser not suport event");
};
// =====================================================
var FormComponent = (function () {
    function FormComponent() {
        this.parent = {};
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.camera = {
            x: 0,
            y: 0,
            z: -5
        };
        this.position = {
            x: 0,
            y: 0,
            z: 0
        };
        this.rotation = {
            x: 0,
            y: 0,
            z: 0
        };
        this.size = {
            w: 1,
            h: 1,
            z: 1
        };
    }
    FormComponent.prototype.onChange = function () {
        var _this = this;
        var clear;
        clearTimeout(clear);
        clear = setTimeout(function () {
            _this.change.emit(); // 触发父组件自定义绑定事件
        }, 500);
    };
    FormComponent.prototype.focus = function (elem, obj, x) {
        var _this = this;
        bind(elem, mouseWheel, function (e) {
            if (e.deltaY > 0) {
                _this[obj][x] -= 1;
            }
            else {
                _this[obj][x] += 1;
            }
            _this.change.emit();
        });
    };
    FormComponent.prototype.blur = function (elem) {
        unbind(elem, mouseWheel, function (e) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "change", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-component',
            template: "\n    \t<div class=\"form-group\">\n\t    \t<ul class=\"clearfox three-form lh32\">\n\t    \t\t<h2>camera\u5750\u6807\uFF1A</h2>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">x\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input  [(ngModel)]=\"camera.x\" (ngModelChange)=\"onChange()\" #cx (focus)=\"focus(cx,'camera','x')\" (blur)=\"blur(cx)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">y\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"camera.y\" (ngModelChange)=\"onChange()\" #cy (focus)=\"focus(cy,'camera','y')\" (blur)=\"blur(cy)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">z\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"camera.z\" (ngModelChange)=\"onChange()\" #cz (focus)=\"focus(cz,'camera','z')\" (blur)=\"blur(cz)\"></aside>\n\t\t\t\t</li>\n\t\t\t\t<h2>\u56FE\u50CF\u5750\u6807\uFF1A</h2>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">x\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input  [(ngModel)]=\"position.x\" (ngModelChange)=\"onChange()\" #ix (focus)=\"focus(ix,'position','x')\" (blur)=\"blur(ix)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">y\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"position.y\" (ngModelChange)=\"onChange()\" #iy (focus)=\"focus(iy,'position','y')\" (blur)=\"blur(iy)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">z\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"position.z\" (ngModelChange)=\"onChange()\" #iz (focus)=\"focus(iz,'position','z')\" (blur)=\"blur(iz)\"></aside>\n\t\t\t\t</li>\n\t\t\t\t<h2>\u56FE\u50CF\u65CB\u8F6C\u89D2\u5EA6\uFF1A</h2>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">x\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input  [(ngModel)]=\"rotation.x\" (ngModelChange)=\"onChange()\" #rx (focus)=\"focus(rx,'rotation','x')\" (blur)=\"blur(rx)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">y\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"rotation.y\" (ngModelChange)=\"onChange()\" #ry (focus)=\"focus(ry,'rotation','y')\" (blur)=\"blur(ry)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">z\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"rotation.z\" (ngModelChange)=\"onChange()\" #rz (focus)=\"focus(rz,'rotation','z')\" (blur)=\"blur(rz)\"></aside>\n\t\t\t\t</li>\n\t\t\t\t<h2>\u56FE\u50CF\u5927\u5C0F\uFF1A</h2>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">w\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input  [(ngModel)]=\"size.w\" (ngModelChange)=\"onChange()\" #w (focus)=\"focus(w,'size','w')\" (blur)=\"blur(w)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">h\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"size.h\" (ngModelChange)=\"onChange()\" #h (focus)=\"focus(h,'size','h')\" (blur)=\"blur(h)\"></aside>\n\t\t\t\t\t<h6 class=\"col-sm-4 res-tr-tl\">z\uFF1A</h6>\n\t\t\t\t\t<aside class=\"col-sm-5\"><input [(ngModel)]=\"size.z\" (ngModelChange)=\"onChange()\" #z (focus)=\"focus(z,'size','z')\" (blur)=\"blur(z)\"></aside>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n    ",
            styles: ["\n    \th2{font-weight:bold;}\n    "]
        })
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/three/default/default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Default; });
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
var Default = (function () {
    function Default(router) {
        this.router = router;
    }
    Default = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<a class=\"btn-default mr10\" href=\"http://techbrood.com/threejs/docs/\" target=\"_blank\">three.js \u4E2D\u6587\u53C2\u8003\u624B\u518C</a>\n\t\t</div>\n\t"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], Default);
    return Default;
}());



/***/ }),

/***/ "../../../../../src/app/views/three/index/index.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n\t<h1 class=\"logo\"><a routerLink=\"/three\"><img src=\"../../../assets/images/logo.png\"></a></h1>\r\n\t<i class=\"font-navicon small-nav\" id=\"smallNav\"></i>\r\n</header>\r\n<section class=\"container\">\r\n\t<aside class=\"navigation oys\" id=\"navigation\">\r\n\t\t<ul>\r\n\t\t\t<li>\r\n\t\t\t\t<h3 class=\"js-tit\"><span>Scene 场景</span><i class=\"font-angle-right\"></i></h3>\r\n\t\t\t\t<menu>\r\n\t\t\t\t\t<li><a routerLink=\"/three/scene\" routerLinkActive=\"active\">场景</a></li>\r\n\t\t\t\t</menu>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</aside>\r\n\t<main class=\"oxys\">\r\n\t\t<section class=\"content ng-frame\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</section>\r\n\t</main>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/three/index/index.ts":
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
            template: __webpack_require__("../../../../../src/app/views/three/index/index.html"),
            styles: [__webpack_require__("../../../../../src/app/views/three/index/style.css")]
        })
    ], Index);
    return Index;
}());



/***/ }),

/***/ "../../../../../src/app/views/three/index/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation a,.navigation h3,.navigation h5,.omit{white-space:nowrap;overflow:hidden;word-wrap:normal;text-overflow:ellipsis}\r\n.linear,.navigation h3 i,.navigation h5 i{transition:all .3s linear}\r\n.font-angle-right:before{content:'\\F105'}\r\n.font-navicon:before{content:'\\F0C9';font-size:16px}\r\n.header{height:50px;border-bottom:1px solid #efefef}\r\n.logo{position:relative;top:50%;margin:-20px 0 0 20px;width:150px;height:40px;float:left}\r\n.logo a{width:100%;height:100%;display:block}\r\n.logo img{width:100%;height:100%}\r\n.small-nav{width:30px;height:30px;background-color:#4da1ff;color:#fff;text-align:center;line-height:30px;border-radius:3px;position:relative;top:50%;margin:-15px 0 0 10px;float:left;cursor:pointer;display:none}\r\n.container{width:100%;position:absolute;top:50px;bottom:0;min-width:320px}\r\n.navigation{width:200px;height:100%;float:left;border-right:1px solid #efefef;position:relative}\r\n.navigation menu,.navigation nav{margin-left:20px;display:none}\r\n.navigation h3,.navigation h5{height:32px;line-height:32px;padding:0 5px;box-sizing:content-box;border:1px solid #fff;cursor:pointer}\r\n.navigation h3 span,.navigation h5 span{float:left}\r\n.navigation h3 i,.navigation h5 i{font-size:18px;float:right;-webkit-transform:rotate(0);transform:rotate(0)}\r\n.navigation h3:hover,.navigation h5:hover{border-color:#4da1ff}\r\n.navigation h3.active,.navigation h5.active{color:#4da1ff}\r\n.navigation h3.active i,.navigation h5.active i{-webkit-transform:rotate(90deg);transform:rotate(90deg)}\r\n.navigation h3>a,.navigation h5>a{padding:0;height:32px;line-height:32px}\r\n.navigation a,.navigation h3,.navigation h5{border-radius:3px}\r\n.navigation a:hover,.navigation h3:hover,.navigation h5:hover{background-color:#eee;color:#4da1ff}\r\n.navigation a,.navigation h5{height:28px;line-height:28px}\r\n.navigation h5 i{font-size:18px}\r\n.navigation ul{padding:10px 5px}\r\n.navigation a{display:block;padding:0 5px}\r\n.navigation a.active{color:#4da1ff}\r\nmain{height:100%;margin-left:200px;background-color:#fafbfc}\r\nmain::-webkit-scrollbar{width:5px;height:5px}\r\n.content{padding:20px}\r\n@media (max-width:767px){\r\n.navigation{position:absolute;z-index:1;left:0;top:0;bottom:0;height:auto;background-color:#fff;display:none}\r\n.navigation.show{display:block}\r\nmain{margin:0}\r\n.content{padding:3% 3% 60px 3%}\r\n.small-nav{display:block}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/three/scene/scene.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_three_service__ = __webpack_require__("../../../../../src/app/views/three/services/three.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_component__ = __webpack_require__("../../../../../src/app/views/three/components/form.component.ts");
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
var Scene = (function () {
    function Scene(router, three) {
        this.router = router;
        this.three = three;
    }
    Scene.prototype.ngAfterViewInit = function () {
        this.go();
    };
    Scene.prototype.go = function () {
        var _this = this;
        this.three.init({
            camera: {
                x: this.form.camera.x,
                y: this.form.camera.y,
                z: this.form.camera.z
            },
            fn: function (scene) {
                _this.three.add(scene, {
                    position: {
                        x: _this.form.position.x,
                        y: _this.form.position.y,
                        z: _this.form.position.z
                    },
                    rotation: {
                        x: _this.form.rotation.x,
                        y: _this.form.rotation.y,
                        z: _this.form.rotation.z
                    },
                    fn: function () {
                        //return new THREE.AxesHelper(20,0);
                        var geometry = new THREE.CubeGeometry(_this.form.size.w, _this.form.size.h, _this.form.size.z);
                        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                        var cube = new THREE.Mesh(geometry, material);
                        return cube;
                    }
                });
            }
        });
    };
    Scene.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/three/scene/scene.ts';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fx'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_form_component__["a" /* FormComponent */])
    ], Scene.prototype, "form", void 0);
    Scene = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    \t<div id=\"three\"></div>\n    \t<form-component (change)=\"go()\" #fx></form-component>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_2__services_three_service__["a" /* ThreeService */]])
    ], Scene);
    return Scene;
}());



/***/ }),

/***/ "../../../../../src/app/views/three/services/three.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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

/* ====================================== 全局方法  ====================================== */
var ThreeService = (function () {
    function ThreeService() {
    }
    // 初始化
    ThreeService.prototype.init = function (options) {
        var option = {
            camera: {
                x: 0,
                y: 0,
                z: 0
            },
            renderer: {
                bgcolor: 0xf0f0f0
            },
            fn: function (scene) { }
        };
        var opt = __assign({}, option, options);
        var $box = document.getElementById('three');
        var w = $box.clientWidth;
        var h = $box.clientHeight;
        // 清空 box
        $box.innerHTML = '';
        // 场景
        var scene = new THREE.Scene();
        // 照相机
        var camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        camera.position.x = opt.camera.x;
        camera.position.y = opt.camera.y;
        camera.position.z = opt.camera.z;
        camera.lookAt(scene.position);
        // 渲染器
        var renderer = new THREE.WebGLRenderer(); // 计算机显示渲染器渲染
        renderer.setClearColor(opt.renderer.bgcolor); // 设置背景色
        renderer.setSize(w, h); // 将scene渲染成多大尺寸
        // 把渲染器添加进 DOM
        $box.appendChild(renderer.domElement);
        // 添加实体图像到场景
        opt.fn && opt.fn(scene);
        // 用相机来渲染场景
        renderer.render(scene, camera);
    };
    // 添加实体图像到场景
    ThreeService.prototype.add = function (scene, options) {
        var option = {
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            fn: function () { }
        };
        var opt = __assign({}, option, options);
        var image = opt.fn();
        image.position.x = opt.position.x;
        image.position.y = opt.position.y;
        image.position.z = opt.position.z;
        image.rotation.x = opt.rotation.x;
        image.rotation.y = opt.rotation.y;
        image.rotation.z = opt.rotation.z;
        scene.add(image); // 添加图像到场景
    };
    ThreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ThreeService);
    return ThreeService;
}());



/***/ }),

/***/ "../../../../../src/app/views/three/three.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeModule", function() { return ThreeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_share_module__ = __webpack_require__("../../../../../src/app/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_three_service__ = __webpack_require__("../../../../../src/app/views/three/services/three.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_component__ = __webpack_require__("../../../../../src/app/views/three/components/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index_index__ = __webpack_require__("../../../../../src/app/views/three/index/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_default__ = __webpack_require__("../../../../../src/app/views/three/default/default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scene_scene__ = __webpack_require__("../../../../../src/app/views/three/scene/scene.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ======================================================================== 公共模块



// ======================================================================== 组件


// ======================================================================== 组件
// scene

// ======================================================================== NgModule
var ThreeModule = (function () {
    function ThreeModule() {
    }
    ThreeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_7__index_index__["a" /* Index */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__default_default__["a" /* Default */] },
                            { path: 'scene', component: __WEBPACK_IMPORTED_MODULE_9__scene_scene__["a" /* Scene */] },
                        ]
                    }
                ]),
                __WEBPACK_IMPORTED_MODULE_4_app_share_module__["a" /* ShareModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__index_index__["a" /* Index */], __WEBPACK_IMPORTED_MODULE_8__default_default__["a" /* Default */],
                __WEBPACK_IMPORTED_MODULE_9__scene_scene__["a" /* Scene */],
                __WEBPACK_IMPORTED_MODULE_6__components_form_component__["a" /* FormComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_three_service__["a" /* ThreeService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], ThreeModule);
    return ThreeModule;
}());



/***/ })

});
//# sourceMappingURL=three.module.chunk.js.map