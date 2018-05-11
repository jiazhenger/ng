webpackJsonp(["form.module"],{

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// ===================================================== 公共函数
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
        this.imgType = ['jpg', 'png', 'jpeg', 'gif'];
    }
    UploadService.prototype.getUploadFileInfo = function (event) {
        var stack = [];
        var files = event.target.files;
        var group = Object.keys(files);
        group.map(function (v, i) {
            stack.push(files[v]);
        });
        return {
            files: files,
            list: stack,
            length: stack.length
        };
    };
    UploadService.prototype.isType = function (fileName, mimeType) {
        // 拼接正则表达式
        var str = '';
        var mtype = mimeType || this.imgType;
        mtype.map(function (v, i) {
            if (mtype.length - 1 == i) {
                str += '\\.' + v + '$';
            }
            else {
                str += '\\.' + v + '$|';
            }
        });
        var reg = new RegExp(str, 'gi');
        return reg.test(fileName);
    };
    // 选择文件并做处理判断
    UploadService.prototype.fileSelect = function (files, option) {
        var _this = this;
        var list = this.http.$fn.isArray(files.list) ? files.list : [];
        var opt = {
            maxSize: 1024 * 2024,
            type: this.imgType
        };
        Object.assign(opt, option);
        var yesGroup = list.filter(function (v) { return _this.isType(v.name, opt.type) && v.size <= opt.maxSize; });
        var uploadGroup = {};
        yesGroup.map(function (v, i) {
            uploadGroup[i] = v;
        });
        var result = {
            yesSize: list.filter(function (v) { return v.size <= opt.maxSize; }),
            noSize: list.filter(function (v) { return v.size > opt.maxSize; }),
            yesType: list.filter(function (v) { return _this.isType(v.name, opt.type); }),
            noType: list.filter(function (v) { return !_this.isType(v.name, opt.type); }),
            result: uploadGroup,
            files: files.files,
            list: list
        };
        return result;
    };
    // 验证上传文件
    UploadService.prototype.validatorUploader = function (files, config) {
        // 开始上传
        var upload = this.fileSelect(files, config);
        var err = {};
        if (upload.list.length == 0) {
            err['errcode'] = 1;
            err['msg'] = '请选择你要上传的文件';
            console.log('请选择你要上传的文件');
            return err;
        }
        if (upload.noSize.length > 0) {
            err['errcode'] = 2;
            err['msg'] = '文件超过上传限制大小';
            console.log('文件超过上传限制大小');
            return err;
        }
        if (config.img) {
            if (upload.noType.length > 0) {
                err['errcode'] = 3;
                err['msg'] = '文件上传格式不正确';
                console.log('文件上传格式不正确');
                return err;
            }
        }
        return err;
    };
    // FileReader 上传数据
    UploadService.prototype.fileReaderUploader = function (files, config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var err = _this.validatorUploader(files, config);
            if (_this.http.$fn.hasObject(err)) {
                resolve({ data: null, err: err });
                return;
            }
            var $this = _this;
            var api = config.imgApi;
            var file = files.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var param = { base64stream: this.result };
                // 统一上传
                $this.http.post(api, param).then(function (data) {
                    resolve({ data: data, err: null });
                }, function (data) {
                    reject(data);
                    console.log('上传失败');
                });
            };
            reader.readAsDataURL(file);
            //reader.readAsText(file[0]);
        });
    };
    // FormData 上传数据
    UploadService.prototype.formDataUploader = function (files, config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var err = _this.validatorUploader(files, config);
            if (_this.http.$fn.hasObject(err)) {
                resolve({ data: null, err: err });
                return;
            }
            var fd = new FormData();
            fd.append("file", files.files[0]);
            console.log(fd.get('file')); // 获取 formData 上的隐藏数据
            _this.http.post(config.url, fd).then(function (data) {
                resolve({ data: data, err: null });
            }, function (data) {
                reject(data);
                console.log('上传失败');
            });
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_http_service__["a" /* HttpService */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/checkbox-all-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxAllIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_checkbox_service__ = __webpack_require__("../../../../../src/app/services/checkbox.service.ts");
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
var CheckboxAllIdComponent = (function () {
    function CheckboxAllIdComponent(router, checkbox) {
        this.router = router;
        this.checkbox = checkbox;
        this.result = {};
        this.valueObj = {};
        this.valueArr = [];
        this.price = [];
        this.data = [
            { id: 100, value: 'angular', price: 600, checked: true },
            { id: 200, value: 'react', price: 500 },
            { id: 300, value: 'vue', price: 800 }
        ];
        this.model = {
            all: false,
            checkboxs: {}
        };
    }
    // 动态获取配置
    CheckboxAllIdComponent.prototype.checkboxConfig = function () {
        return {
            data: this.data,
            model: this.model.checkboxs,
            all: this.model.all,
            alldef: false,
            sortByIndex: false,
            id: 'price' // 要取的主要数据值
        };
    };
    CheckboxAllIdComponent.prototype.ngOnInit = function () {
        var result = this.checkbox.setDefaultChecked(this.checkboxConfig()); // 默认配置
        this.model.all = result.all;
        this.result = result.result;
        this.getDetail(this.result.data);
    };
    // 全选
    CheckboxAllIdComponent.prototype.changeAll = function (val) {
        this.result = this.checkbox.checkedAll(this.checkboxConfig());
        this.getDetail(this.result.data);
    };
    // 单选
    CheckboxAllIdComponent.prototype.change = function (val) {
        var result = this.checkbox.checkedOneByOne(this.checkboxConfig());
        this.result = result.result;
        this.model.all = result.all;
        this.getDetail(this.result.data);
    };
    // 处理数据
    CheckboxAllIdComponent.prototype.getDetail = function (data) {
        var price = [];
        var valueObj = {};
        var valueArr = [];
        data.forEach(function (v, i) {
            price.push(v.price);
            valueObj[v.id] = v.value; // 返回  {id:value,id:value, ...} 形式
            valueArr.push({ id: v.id, value: v.value }); // 返回数组对象 [{},{}]
        });
        this.price = price;
        this.valueObj = valueObj;
        this.valueArr = valueArr;
    };
    CheckboxAllIdComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/checkbox-all-id.component.ts';
    };
    CheckboxAllIdComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/checkbox.service.ts';
    };
    CheckboxAllIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"service()\">\u67E5\u770B CheckboxService \u670D\u52A1</button>\n        </div>\n        \n        <dl class=\"mvvm-list samebox mt10\">\n        \t<dt>\u4EE5\u6570\u636E  id \u6392\u5E8F\u591A\u9009 </dt>\n        </dl>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <h3>\u83B7\u53D6\u7684\u662F data \u6570\u636E\u4E0A\u7684\u6307\u5B9A\u6570\u636E \u503C,\u800C\u4E0D\u662F\u7ED1\u5B9A\u5230  checkbox \u4E0A\u7684  value \u503C, \u9ED8\u8BA4\u53D6 id \u503C</h3>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n\t\t<ul class=\"res-tr-tl clearfox _lh32 samebox mt10\">\n\t\t\t<li>\n\t\t\t\t<h6 class=\"col-sm-20\">\u5168\u9009\uFF1A</h6>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"x\" [(ngModel)]=\"model.all\" (ngModelChange)=\"changeAll($event)\">\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li [attr.title]=\"'this is a name'\">\n\t\t\t\t<h6 class=\"col-sm-20\">\u591A\u9009\u68462\uFF1A</h6>\n\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t<label *ngFor=\"let item of data;index as index\" >\n\t\t\t\t\t\t{{item.value}} : \n\t\t\t\t\t\t<input type=\"checkbox\" value=\"angular\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"model.checkboxs[item.id]\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"change($event)\"\n\t\t\t\t\t\t>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h6 class=\"col-sm-20\">\u5168\u9009\uFF1A</h6>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"y\" [(ngModel)]=\"model.all\" (ngModelChange)=\"changeAll($event)\">\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<hr class=\"_mt10_mb10x\">\n        <div class=\"mvvm-pre mt10\">\u8FD4\u56DE\u539F\u59CB\u7ED3\u679C: <s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <h2>\u8FD4\u56DE\u5168\u90E8\u5904\u7406\u7ED3\u679C:</h2>\n        <div class=\"mvvm-pre mt10\"><s>{{ result | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n         \n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6\u6240\u6709\u7684 value:<s>{{ valueObj | json }}</s></div>\n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6\u6240\u6709\u7684 value:<s>{{ valueArr | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n         \n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6\u6240\u6709\u7684 price:<s>{{ price | json }}</s></div>\n    ",
            styles: ["\n    \tlabel{float:left;margin:2px 10px 0 0}\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_2_app_services_checkbox_service__["a" /* CheckboxService */]])
    ], CheckboxAllIdComponent);
    return CheckboxAllIdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/checkbox-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_checkbox_service__ = __webpack_require__("../../../../../src/app/services/checkbox.service.ts");
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
var CheckboxAllComponent = (function () {
    function CheckboxAllComponent(router, checkbox) {
        this.router = router;
        this.checkbox = checkbox;
        this.result = {};
        this.valueObj = {};
        this.valueArr = [];
        this.price = [];
        this.data = [
            { id: 100, value: 'angular', price: 600 },
            { id: 200, value: 'react', price: 500 },
            { id: 300, value: 'vue', price: 800 }
        ];
        this.model = {
            all: false,
            checkboxs: {}
        };
    }
    // 动态获取配置
    CheckboxAllComponent.prototype.checkboxConfig = function () {
        return {
            data: this.data,
            model: this.model.checkboxs,
            all: this.model.all,
            alldef: false,
            sortByIndex: true,
            id: 'value' // 要取的主要数据值
        };
    };
    CheckboxAllComponent.prototype.ngOnInit = function () {
        var result = this.checkbox.setDefaultChecked(this.checkboxConfig()); // 默认配置
        this.model.all = result.all;
        this.result = result.result;
        this.getDetail(this.result.data);
    };
    // 全选
    CheckboxAllComponent.prototype.changeAll = function (val) {
        this.result = this.checkbox.checkedAll(this.checkboxConfig());
        this.getDetail(this.result.data);
    };
    // 单选
    CheckboxAllComponent.prototype.change = function (val) {
        var result = this.checkbox.checkedOneByOne(this.checkboxConfig());
        this.result = result.result;
        this.model.all = result.all;
        this.getDetail(this.result.data);
    };
    // 处理数据
    CheckboxAllComponent.prototype.getDetail = function (data) {
        var price = [];
        var valueObj = {};
        var valueArr = [];
        data.forEach(function (v, i) {
            price.push(v.price);
            valueObj[v.id] = v.value; // 返回  {id:value,id:value, ...} 形式
            valueArr.push({ id: v.id, value: v.value }); // 返回数组对象 [{},{}]
        });
        this.price = price;
        this.valueObj = valueObj;
        this.valueArr = valueArr;
    };
    CheckboxAllComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/checkbox-all.component.ts';
    };
    CheckboxAllComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/checkbox.service.ts';
    };
    CheckboxAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"service()\">\u67E5\u770B CheckboxService \u670D\u52A1</button>\n        </div>\n        <div class=\"lh30 mvvm-code mt10\">\n\t\t\t<dl class=\"mvvm-list samebox\">\n\t        \t<dt>checkbox \u591A\u9009\u6846: </dt>\n\t        \t<dd>[(ngModel)] \u53EA\u80FD\u8FD4\u56DE  Boolean \u503C</dd>\n\t        \t<dd><b>#id</b> id.value ===  checkbox \u4E2D\u5177\u4F53 value</dd>\n\t        \t<dd><b>#id=\"ngModel\"</b> id.value ===  Boolean \u503C</dd>\n\t        \t<dd>\u5728 \u591A\u9009\u6846 checkbox  \u4E2D,<b>id.value</b> \u53EF\u4EE5\u53D6 ngModel \u5BFC\u5165\u51FA\u7684\u503C,\u5982\u679C\u53EA\u6709 #id, \u5219  id == \u8868\u5355\u5143\u7D20\u7684 value</dd>\n\t        </dl>\n\t      \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>\u4EE5\u6570\u636E\u7D22\u5F15\u6392\u5E8F\u591A\u9009 </dt>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <h3>\u83B7\u53D6\u7684\u662F data \u6570\u636E\u4E0A\u7684\u6307\u5B9A\u6570\u636E \u503C,\u800C\u4E0D\u662F\u7ED1\u5B9A\u5230  checkbox \u4E0A\u7684  value \u503C, \u9ED8\u8BA4\u53D6 id \u503C</h3>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n\t\t<ul class=\"res-tr-tl clearfox _lh32 samebox mt10\">\n\t\t\t<li>\n\t\t\t\t<h6 class=\"col-sm-20\">\u5168\u9009\uFF1A</h6>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"x\" [(ngModel)]=\"model.all\" (ngModelChange)=\"changeAll($event)\">\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li [attr.title]=\"'this is a name'\">\n\t\t\t\t<h6 class=\"col-sm-20\">\u591A\u9009\u68462\uFF1A</h6>\n\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t<label *ngFor=\"let item of data;index as index\" >\n\t\t\t\t\t\t{{item.value}} : \n\t\t\t\t\t\t<input type=\"checkbox\" value=\"angular\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"model.checkboxs[index]\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"change($event)\"\n\t\t\t\t\t\t>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h6 class=\"col-sm-20\">\u5168\u9009\uFF1A</h6>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"y\" [(ngModel)]=\"model.all\" (ngModelChange)=\"changeAll($event)\">\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t<hr class=\"_mt10_mb10x\">\n        <div class=\"mvvm-pre mt10\">\u8FD4\u56DE\u539F\u59CB\u7ED3\u679C: <s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <h2>\u8FD4\u56DE\u5168\u90E8\u5904\u7406\u7ED3\u679C:</h2>\n        <div class=\"mvvm-pre mt10\"><s>{{ result | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n         \n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6\u6240\u6709\u7684 value:<s>{{ valueObj | json }}</s></div>\n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6\u6240\u6709\u7684 value:<s>{{ valueArr | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n         \n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6\u6240\u6709\u7684 price:<s>{{ price | json }}</s></div>\n    ",
            styles: ["\n    \tlabel{float:left;margin:2px 10px 0 0}\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_2_app_services_checkbox_service__["a" /* CheckboxService */]])
    ], CheckboxAllComponent);
    return CheckboxAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_checkbox_service__ = __webpack_require__("../../../../../src/app/services/checkbox.service.ts");
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
var CheckboxComponent = (function () {
    function CheckboxComponent(router, checkbox) {
        this.router = router;
        this.checkbox = checkbox;
        this.model = {
            checkbox: {}
        };
        this.checkboxs = [];
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.change = function (event) {
        this.checkboxs = this.checkbox.getCheckedValue(event, this.checkboxs);
    };
    CheckboxComponent.prototype.onSubmit = function (formData, valid) {
        if (valid) {
            formData.checkbox = this.checkboxs;
            this.data = formData;
        }
    };
    CheckboxComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/checkbox.component.ts';
    };
    CheckboxComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/checkbox.service.ts';
    };
    CheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        \t<button class=\"btn-default\" (click) = \"service()\">\u67E5\u770B CheckboxService \u670D\u52A1</button>\n        </div>\n    \t\n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t\t\t<dl class=\"mvvm-list\">\n\t        \t<dt>checkbox \u591A\u9009\u6846: </dt>\n\t        \t<dd>[(ngModel)] \u53EA\u80FD\u8FD4\u56DE  Boolean \u503C</dd>\n\t        \t<dd><b>#id</b> id.value ===  checkbox \u4E2D\u5177\u4F53 value</dd>\n\t        \t<dd><b>#id=\"ngModel\"</b> id.value ===  Boolean \u503C</dd>\n\t        \t<dd>\u5728 \u591A\u9009\u6846 checkbox  \u4E2D,<b>id.value</b> \u53EF\u4EE5\u53D6 ngModel \u5BFC\u5165\u51FA\u7684\u503C,\u5982\u679C\u53EA\u6709 #id, \u5219  id == \u8868\u5355\u5143\u7D20\u7684 value</dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre mt10\">\u53CC\u5411\u7ED1\u5B9A\u6570\u636E form:<s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre mt10\">\u83B7\u53D6 checkbox \u6570\u636E: <s>{{checkboxs | json}}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre mt10\">\u63D0\u4EA4\u8868\u5355\u540E\u7684 ngForm \u6570\u636E: <s>{{data | json}}</s></div>\n        \n        \n        <form (ngSubmit)=\"onSubmit(f.value,f.valid)\" #f=\"ngForm\" class=\"samebox mt10\">\n\t\t\t<ul class=\"res-tr-tl clearfox _lh32\">\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u591A\u9009\u6846\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t\t<p class=\"_fl_mt10\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"a\" [(ngModel)]=\"model.checkbox.a\" value=\"angular\" (change)=\"change($event)\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"b\" [(ngModel)]=\"model.checkbox.b\" value=\"react\"  (change)=\"change($event)\" class=\"mlr10\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"c\" [(ngModel)]=\"model.checkbox.c\" value=\"vue\"  (change)=\"change($event)\">\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt20 res-btn\">\n\t\t\t\t\t<h6 class=\"col-sm-20\"></h6>\n\t\t\t\t\t<div class=\"col-sm-20\"><button class=\"btn-default\">\u786E\u8BA4</button></div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</form>\n\t\t\n    ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_2_app_services_checkbox_service__["a" /* CheckboxService */]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_router_service__ = __webpack_require__("../../../../../src/app/services/router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
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
var FileUploadComponent = (function () {
    function FileUploadComponent(router, uploader, http) {
        this.router = router;
        this.uploader = uploader;
        this.http = http;
        this.maxSize = 1024 * 1024;
        this.fileLength = 0;
        this.img = '';
        this.uploadImg = [];
        // 选择文件
        this.uploads = {};
    }
    // 删除上传之前的队列
    FileUploadComponent.prototype.del = function (index) {
        this.uploads.list.splice(index, 1);
        console.log(this.uploads.list.length);
        if (this.uploads.list.length == 0) {
            this.fileAllCancel();
        }
    };
    // 删除上传数据
    FileUploadComponent.prototype.delImg = function (index) {
        this.uploadImg.splice(index, 1);
        if (this.uploadImg.length == 0) {
            this.fileAllCancel();
        }
    };
    // 清空上传数据
    FileUploadComponent.prototype.fileAllDelete = function () {
        this.uploadImg = [];
        this.fileAllCancel();
    };
    // 全部取消,重置 input file 框
    FileUploadComponent.prototype.fileAllCancel = function () {
        this.fileUpload.nativeElement.value = ''; // 清空 input file
        this.uploads.list = [];
        this.fileLength = 0;
    };
    // 选择文件
    FileUploadComponent.prototype.selectedFileOnChanged = function (event) {
        this.uploads = this.uploader.getUploadFileInfo(event);
        this.fileLength = this.uploads.list.length;
    };
    // FileReader 上传
    FileUploadComponent.prototype.fileReaderUpload = function () {
        var _this = this;
        if (this.fileLength == 0) {
            this.errmsg = '请先选择你要上传的文件';
            return;
        }
        this.errmsg = '正在上传中,请稍候......';
        this.uploader.fileReaderUploader(this.uploads, {
            imgApi: 'upload/streamUpload.do',
            fileApi: 'upload/fileUpload.do',
            maxSize: this.maxSize
        }).then(function (result) {
            if (result.data) {
                _this.uploadImg.push(result.data);
                _this.errmsg = '上传成功';
            }
            // 错误处理
            if (result.err) {
                _this.errmsg = result.err.msg;
            }
        });
    };
    // FormData 上传
    FileUploadComponent.prototype.formDataUpload = function () {
        var _this = this;
        if (this.fileLength == 0) {
            this.errmsg = '请先选择你要上传的文件';
            return;
        }
        this.errmsg = '正在上传中,请稍候......';
        this.uploader.formDataUploader(this.uploads, {
            url: 'upload/streamUpload.do',
            maxSize: this.maxSize
        }).then(function (result) {
            if (result.data) {
                _this.uploadImg.push(result.data);
                _this.errmsg = '上传成功';
            }
            // 错误处理
            if (result.err) {
                _this.errmsg = result.err.msg;
            }
        }, function (data) {
            _this.errmsg = '上传失败';
        });
    };
    FileUploadComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/checkbox.component.ts';
    };
    FileUploadComponent.prototype.service = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'services/upload.service.ts';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileUpload'),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "fileUpload", void 0);
    FileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t\t<button class=\"btn-default\" (click) = \"service()\">\u67E5\u770B\u4E0A\u4F20\u670D\u52A1</button>\n        </div>\n    \t\n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t\t\t<dl class=\"mvvm-list\">\n\t        \t<dt>\u6587\u4EF6\u4E0A\u4F20\u670D\u52A1: </dt>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        <div>\n\t\t\t<button class=\"btn-default\" (click)=\"fileReaderUpload()\" >FileReader \u4E0A\u4F20</button>\n\t\t\t<button class=\"btn-default\" (click)=\"formDataUpload()\" >FormData \u4E0A\u4F20</button>\n\t\t\t<button class=\"btn-default\" (click)=\"fileAllCancel();\">\u5168\u90E8\u53D6\u6D88</button>\n\t\t\t<button class=\"btn-default\" (click)=\"fileAllDelete()\" >\u6E05\u9664\u5217\u8868</button>\n\t\t\t<button class=\"btn-default\" (click)=\"http.token()\" >\u767B\u5F55</button>\n\t\t\t<span class=\"_ml20_f16 c1\">{{errmsg}}</span>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n\t\t<div class=\"upload-file-btn rel\">\n\t\t\t<a class=\"btn-default\"><i class=\"font-cloud-upload\"></i>ng\u4E0A\u4F20\u6587\u4EF6\n\t\t\t\t<input type=\"file\"\n\t\t\t\t\t#fileUpload\n\t\t\t\t\t(change)=\"selectedFileOnChanged($event)\"\n\t\t\t\t\tmultiple\n\t\t\t\t>\n\t\t\t</a>\n\t\t</div>\n\t\t\n\t\t<hr class=\"_mt10_mb10x\">\n\t\t \n\t\t<div class=\"mvvm-code\">\n\t\t\t<p>\u9009\u62E9\u6587\u4EF6\u4E2A\u6570: <i>{{fileLength}}</i></p>\n\t\t\t\n\t\t\t<dl>\n\t\t\t\t<li *ngFor=\"let v of uploads.list;index as index\" (click)=\"del(index)\" \n\t\t\t\t\t[ngClass]=\"{c1:v?.size>maxSize || filters?.noType?.length > 0}\"\n\t\t\t\t\t\n\t\t\t\t>\n\t\t\t\t\t<span class=\"mr10\">\u540D\u5B57: <i>{{v?.name}}</i></span>\n\t\t\t\t\t<span class=\"mr10\">\u5927\u5C0F: <i>{{v?.size}} kb</i></span>\n\t\t\t\t\t<span class=\"mr10\">\u7C7B\u578B: <i>{{v?.type}}</i></span>\n\t\t\t\t\t<span class=\"mr10\">\u6700\u540E\u4FEE\u6539\u65F6\u95F4: <i>{{v?.lastModified |  date : 'yyyy-MM-dd hh:mm:ss'}}</i></span>\n\t\t\t\t</li>\n\t\t\t</dl>\n\t\t</div>\n\t\t<hr class=\"_mt10_mb10x\">\n\t\t\n\t\t<img *ngFor=\"let v of uploadImg;index as i\" [src]=\"v\" (click)=\"delImg(i)\">\n\t\t<a [href]=\"v\" *ngFor=\"let v of uploadImg;index as i\"  (click)=\"delImg(i)\">\u6587\u4EF6</a>\n    ",
            styles: ["\n    \tc1,.c1 i{color:red}\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_3_app_services_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_2_app_services_http_service__["a" /* HttpService */]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
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
var FormComponent = (function () {
    function FormComponent(router) {
        this.router = router;
        this.model = {
            code: 'react' // 设置默认值
        };
    }
    FormComponent.prototype.onSubmit = function (formData, valid) {
        // 控件是有效
        if (valid) {
            this.data = formData;
        }
    };
    FormComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/form.component.ts';
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n\t\t<div class=\"samebox\">\n\t\t\t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n\t\t</div>\n    \t\n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t\t\t<dl class=\"mvvm-list\">\n\t        \t<dt>\u8868\u5355\u63D0\u4EA4: </dt>\n\t        \t<dd>\u5728 form \u5143\u7D20\u4E2D[(ngModel)] \u6240\u5728\u7684\u8868\u5355\u5143\u7D20\u5FC5\u987B\u6DFB\u52A0 <b>name=\"\"</b></dd>\n\t        \t<dd><b>#name=\"ngModel\"</b> \u628ANgModel\u5BFC\u51FA\u6210\u4E86\u4E00\u4E2A\u540D\u53EBname\u7684\u5C40\u90E8\u53D8\u91CF</dd>\n\t        \t<dd><b>f.valid</b> \u63A7\u4EF6\u6709\u6548</dd>\n\t        \t<dd><b>f.pristine</b> \u63A7\u4EF6\u5168\u65B0,\u5373\u5904\u4E8E\u9ED8\u8BA4\u72B6\u6001</dd>\n\t        </dl>\n        </div>\n        \n        <hr class=\"_mt10_mb10x\">\n       \n        <div class=\"mvvm-pre mt10\">\u53CC\u5411\u7ED1\u5B9A\u6570\u636E form: <s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre mt10\">\u63D0\u4EA4\u8868\u5355\u540E\u7684 ngForm \u6570\u636E: <s>{{ data | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <form (ngSubmit)=\"onSubmit(f.value,f.valid)\" #f=\"ngForm\" class=\"samebox mt10\">\n\t\t\t<ul class=\"res-tr-tl clearfox _lh32\">\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u5355\u884C\u6587\u672C\u6846\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\"><input type=\"text\" [(ngModel)]=\"model.name\" name=\"username\" class=\"_w200\" placeholder=\"\u8BF7\u8F93\u5165\u6587\u5B57\"></div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u591A\u9009\u6846\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t\t<label class=\"checkbox\" [ngClass]=\"{active:model.isYou}\"><span><input type=\"checkbox\" name=\"a\" [(ngModel)]=\"model.isYou\"></span></label>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u4E0B\u62C9\u6846\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t\t<select [(ngModel)]=\"model.code\" name=\"code\">\n\t\t\t\t\t\t\t<option>angular</option>\n\t\t\t\t\t\t\t<option>react</option>\n\t\t\t\t\t\t\t<option>vue</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u5355\u9009\u6846\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t\t<label class=\"radio mr10\" [ngClass]=\"{active:model.sex=='man'}\"><span><input type=\"radio\" name=\"sex\" [(ngModel)]=\"model.sex\"  value=\"man\"></span></label>\n\t\t\t\t\t\t<label class=\"radio\" [ngClass]=\"{active:model.sex=='woman'}\"><span><input type=\"radio\" name=\"sex\" [(ngModel)]=\"model.sex\"  value=\"woman\"></span></label>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u6362\u884C\u6587\u672C\u6846\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\"><textarea class=\"_w200\" [(ngModel)]=\"model.txt\" name=\"txt\" placeholder=\"\u8BF7\u8F93\u5165\u6587\u5B57\"></textarea></div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt20 res-btn\">\n\t\t\t\t\t<h6 class=\"col-sm-20\"></h6>\n\t\t\t\t\t<div class=\"col-sm-80\"><button class=\"btn-default\">\u786E\u8BA4</button></div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</form>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_component__ = __webpack_require__("../../../../../src/app/views/ng/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkbox_component__ = __webpack_require__("../../../../../src/app/views/ng/form/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkbox_all_component__ = __webpack_require__("../../../../../src/app/views/ng/form/checkbox-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkbox_all_id_component__ = __webpack_require__("../../../../../src/app/views/ng/form/checkbox-all-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__template_var_component__ = __webpack_require__("../../../../../src/app/views/ng/form/template-var.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validate_inner_component__ = __webpack_require__("../../../../../src/app/views/ng/form/validate-inner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__validate_form_group_component__ = __webpack_require__("../../../../../src/app/views/ng/form/validate-form-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__validate_form_builder_component__ = __webpack_require__("../../../../../src/app/views/ng/form/validate-form-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__file_upload_component__ = __webpack_require__("../../../../../src/app/views/ng/form/file-upload.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// ===================================================== 服务

// ===================================================== 同一个模块的组件









// ======================================================================== NgModule
var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(// 子路由不能使用根路由的 router-outlet
                [
                    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */], data: { title: '表单提交' } },
                    { path: 'checkbox', component: __WEBPACK_IMPORTED_MODULE_6__checkbox_component__["a" /* CheckboxComponent */], data: { title: '多选框取value值' } },
                    { path: 'checkbox-all', component: __WEBPACK_IMPORTED_MODULE_7__checkbox_all_component__["a" /* CheckboxAllComponent */], data: { title: '多选框以数据索引排序多选' } },
                    { path: 'checkbox-all-id', component: __WEBPACK_IMPORTED_MODULE_8__checkbox_all_id_component__["a" /* CheckboxAllIdComponent */], data: { title: '多选框以数据索引排序多选' } },
                    { path: 'template-var', component: __WEBPACK_IMPORTED_MODULE_9__template_var_component__["a" /* TemplateVarComponent */], data: { title: '模板引用变量' } },
                    { path: 'validate-inner', component: __WEBPACK_IMPORTED_MODULE_10__validate_inner_component__["a" /* ValidateInnerComponent */], data: { title: '内置模板验证' } },
                    { path: 'validate-form-group', component: __WEBPACK_IMPORTED_MODULE_11__validate_form_group_component__["a" /* ValidateFormGroupComponent */], data: { title: 'FormGroup函数验证' } },
                    { path: 'validate-form-builder', component: __WEBPACK_IMPORTED_MODULE_12__validate_form_builder_component__["a" /* ValidateFormBuilderComponent */], data: { title: 'FormBuilder函数验证' } },
                    { path: 'file-upload', component: __WEBPACK_IMPORTED_MODULE_13__file_upload_component__["a" /* FileUploadComponent */], data: { title: '文件上传' } },
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__checkbox_component__["a" /* CheckboxComponent */],
                __WEBPACK_IMPORTED_MODULE_7__checkbox_all_component__["a" /* CheckboxAllComponent */],
                __WEBPACK_IMPORTED_MODULE_8__checkbox_all_id_component__["a" /* CheckboxAllIdComponent */],
                __WEBPACK_IMPORTED_MODULE_9__template_var_component__["a" /* TemplateVarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__validate_inner_component__["a" /* ValidateInnerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__validate_form_group_component__["a" /* ValidateFormGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__validate_form_builder_component__["a" /* ValidateFormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__file_upload_component__["a" /* FileUploadComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_upload_service__["a" /* UploadService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/template-var.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateVarComponent; });
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
var TemplateVarComponent = (function () {
    function TemplateVarComponent(router) {
        this.router = router;
    }
    TemplateVarComponent.prototype.change1 = function (obj) {
        var _this = this;
        setTimeout(function () {
            _this.str = obj.value;
        }, 200);
    };
    TemplateVarComponent.prototype.change2 = function (val) {
        var _this = this;
        setTimeout(function () {
            _this.some = val;
        }, 200);
    };
    TemplateVarComponent.prototype.change3 = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.msg = event.target.value;
        }, 200);
    };
    TemplateVarComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/template-var.component.ts';
    };
    TemplateVarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n       <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code mt10\">\n\t\t\t<dl class=\"mvvm-list samebox\">\n\t        \t<dt>\u6A21\u677F\u5F15\u7528\u53D8\u91CF( \u4EC5\u7528\u4E8E\u8868\u5355\u5143\u7D20 , \u4E14\u53EA\u80FD\u5728\u6A21\u677F\u4E2D\u5373\u7528): </dt>\n\t        \t<dd><b>#</b>id</dd>\n\t        \t<dd><b>#id=\"ngModel\"</b> \u4EC5\u7528\u4E8E form \u5305\u542B\u7684\u8868\u5355\u4E2D</dd>\n\t        \t<dd><b>ref-</b>id</dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>$event \u5BF9\u8C61\u53D6\u5F97\u7528\u6237\u8F93\u5165( \u9760\u4E0D\u4F4F\u7684\u505A\u6CD5 ): </dt>\n\t        \t<dd><b>event.target.value</b>id</dd>\n\t        </dl>\n        </div>\n\t\t\n\t\t<div class=\"samebox mt10\">\n\t\t\t<p class=\"mt10\">#id: <input #obj (keyup)=\"change1(obj)\"> {{str}}</p>\n        \t<p class=\"mt10\">#ref-fx: <input ref-fx (keyup)=\"change2(fx.value)\"> {{some}}</p>\n        \t<p class=\"mt10\">$event: <input (keyup)=\"change3($event)\"> {{msg}}</p>\n\t\t</div>\n\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], TemplateVarComponent);
    return TemplateVarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/validate-form-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateFormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
var ValidateFormBuilderComponent = (function () {
    function ValidateFormBuilderComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.model = {};
    }
    ValidateFormBuilderComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            'username': ['这里设置默认值', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{6}') // 正则验证
                ]],
            'emails': ['填写邮箱', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email // 邮箱验证
                ]],
            'address': this.fb.group({
                city: ['城市', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)]],
                street: ['街道', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            })
        });
        this.model = this.myForm.value; // 获取所有表单数据
    };
    ValidateFormBuilderComponent.prototype.onSubmit = function (formData, valid) {
        if (valid) {
            this.data = formData;
        }
    };
    // 重置 form
    ValidateFormBuilderComponent.prototype.reset = function () {
        this.myForm.reset();
    };
    Object.defineProperty(ValidateFormBuilderComponent.prototype, "userame", {
        // 获取指定值
        get: function () {
            return this.myForm.get('userame');
        },
        enumerable: true,
        configurable: true
    });
    ValidateFormBuilderComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/validate-form-builder.component.ts';
    };
    ValidateFormBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n    \t\n        <div class=\"lh30 mvvm-code mt10\">\n        \t<dl class=\"mvvm-list samebox\">\n\t        \t<dt>FormBuilder \u51FD\u6570\u9A8C\u8BC1: </dt>\n\t        \t<dd><b>formControlName</b>=\"emails\"</dd>\n\t        </dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup \u5224\u65AD\u9A8C\u8BC1\u662F\u5426\u6B63\u786E: </dt>\n\t        \t<dd>\u975E\u7A7A\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.required</b>: <s>{{ myForm.controls.emails.errors?.required }}</s></dd>\n\t        \t<dd>\u6700\u5C0F\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.minLength</b>: <s>{{ myForm.controls.emails.errors?.minLength }}</s></dd>\n\t        \t<dd>\u6700\u5927\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.maxLength</b>: <s>{{ myForm.controls.emails.errors?.maxLength }}</s></dd>\n\t        \t<dd>\u90AE\u7BB1\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.email</b>: <s>{{ myForm.controls.emails.errors?.email }}</s></dd>\n\t        \t<dd>\u6B63\u5219\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.pattern</b>: <s>{{ myForm.controls.emails.errors?.pattern }}</s></dd>\n\t        </dl>\n\t        \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup \u5224\u65AD\u9A8C\u8BC1\u662F\u5426\u6B63\u786E: </dt>\n\t        \t<dd>\u975E\u7A7A\u9A8C\u8BC1: <b>myForm.get('emails').errors?.required</b>: <s>{{ myForm.get('emails').errors?.required }}</s></dd>\n\t        \t<dd>\u6700\u5C0F\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.get('emails').errors?.minLength</b>: <s>{{ myForm.get('emails').errors?.minLength }}</s></dd>\n\t        \t<dd>\u6700\u5927\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.get('emails').errors?.maxLength</b>: <s>{{ myForm.get('emails').errors?.maxLength }}</s></dd>\n\t        \t<dd>\u90AE\u7BB1\u9A8C\u8BC1: <b>myForm.get('emails').errors?.email</b>: <s>{{ myForm.get('emails').errors?.email }}</s></dd>\n\t        \t<dd>\u6B63\u5219\u9A8C\u8BC1: <b>myForm.get('emails').errors?.pattern</b>: <s>{{ myForm.get('emails').errors?.pattern }}</s></dd>\n\t        </dl>\n\t        \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup css \u5224\u65AD\u9A8C\u8BC1: </dt>\n\t        \t<dd>\u9A8C\u8BC1\u4E0D\u901A\u8FC7 : <b>myForm.get('emails').invalid</b>: <s>{{ myForm.get('emails').invalid }}</s></dd>\n\t        \t<dd>\u9A8C\u8BC1\u901A\u8FC7: <b>myForm.get('emails').valid</b>: <s>{{ myForm.get('emails').valid }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C: <b>myForm.get('emails').pristine</b>: <s>{{ myForm.get('emails').pristine }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.get('emails').dirty</b>: <s>{{ myForm.get('emails').dirty }}</s></dd>\n\t        \t<dd>\u8868\u5355\u672A\u64CD\u4F5C: <b>myForm.get('emails').untouched</b>: <s>{{ myForm.get('emails').untouched }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.get('emails').touched</b>: <s>{{ myForm.get('emails').touched }}</s></dd>\n\t        \t<dd>\u8868\u5355xx:<b>myForm.get('emails').pending</b>: <s>{{ myForm.get('emails').pending }}</s></dd>\n\t        </dl>\n\t        \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup css \u5224\u65AD\u9A8C\u8BC1: </dt>\n\t        \t<dd>\u9A8C\u8BC1\u4E0D\u901A\u8FC7 : <b>myForm.controls.emails.invalid</b>: <s>{{ myForm.controls.emails.invalid }}</s></dd>\n\t        \t<dd>\u9A8C\u8BC1\u901A\u8FC7: <b>myForm.controls.emails.valid</b>: <s>{{ myForm.controls.emails.valid }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C: <b>myForm.controls.emails.pristine</b>: <s>{{ myForm.controls.emails.pristine }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.controls.emails.dirty</b>: <s>{{ myForm.controls.emails.dirty }}</s></dd>\n\t        \t<dd>\u8868\u5355\u672A\u64CD\u4F5C: <b>myForm.controls.emails.untouched</b>: <s>{{ myForm.controls.emails.untouched }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.controls.emails.touched</b>: <s>{{ myForm.controls.emails.touched }}</s></dd>\n\t        \t<dd>\u8868\u5355xx:<b>myForm.controls.emails.pending</b>: <s>{{ myForm.controls.emails.pending }}</s></dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u53CC\u5411\u7ED1\u5B9A\u6570\u636E form: <s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u63D0\u4EA4\u8868\u5355\u540E\u7684 ngForm \u6570\u636E: <s>{{ data | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n \t\t<div class=\"mvvm-pre\">myForm.value.username: <s>{{ myForm.value.username }}</s></div>\n \t\t<hr class=\"_mt10_mb10x\">\n \t\t <div class=\"mvvm-pre\">myForm.get('username').errors : <s>{{ myForm.get('username').errors | json }}</s></div>\n \t\t<hr class=\"_mt10_mb10x\">\n \t\t\n\t\t<form (ngSubmit)=\"onSubmit(f.value,f.valid)\" novalidate #f=\"ngForm\" [formGroup]=\"myForm\" class=\"samebox mt10\">\n\t\t\t<ul class=\"res-tr-tl clearfox _lh32\" [hidden]=\"f.submitted\">\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u975E\u7A7A\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" class=\"_w200 mr10\" formControlName=\"username\">\n\t\t\t\t\t\t<span *ngIf=\"myForm.controls.username.pristine\" class=\"mr20\">\u672A\u4FEE\u6539</span>\n\t\t\t\t\t\t<span *ngIf=\"myForm.controls.username.dirty\" class=\"mr20\">\u5DF2\u4FEE\u6539</span>\n\t\t\t\t\t\t<span *ngIf=\"myForm.controls.username.valid\">\u6709\u6548</span>\n\t\t\t\t\t\t<span [hidden]=\"myForm.controls.username.valid || myForm.controls.username.pristine\" style=\"color:red\">\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.username.errors?.minlength || myForm.controls.username.errors?.maxlength\">\u957F\u5EA6\u5FC5\u987B\u4E3A4-8</b>\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.username.errors?.required\">\u975E\u7A7A</b>\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.username.errors?.pattern\">\u53EA\u80FD\u662F\u6570\u5B57,\u957F\u5EA6\u4E3A 5</b>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u90AE\u7BB1\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" class=\"_w200 mr10\" formControlName=\"emails\">\n\t\t\t\t\t\t<span [hidden]=\"myForm.controls.emails.valid || myForm.controls.emails.pristine\" style=\"color:red\">\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.emails.errors?.email\">\u5FC5\u987B\u662F\u90AE\u7BB1</b>\n\t\t\t\t\t\t\t<span *ngIf=\"myForm.get('emails').invalid\">\u5FC5\u987B\u662F\u90AE\u7BB12</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u7EC4\u5408\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<fieldset formGroupName=\"address\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"city\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"street\">\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt20 res-btn\">\n\t\t\t\t\t<h6 class=\"col-sm-20\"></h6>\n\t\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t\t<button class=\"btn-default\" [disabled]=\"myForm.invalid\">\u786E\u8BA4</button>\n\t\t\t\t\t\t<button class=\"btn-default mtb10\" type=\"button\" (click)=\"f.resetForm({})\">f.resetForm(\uFF5B\uFF5D) \u91CD\u7F6E</button>\n\t\t\t\t\t\t<button class=\"btn-default\" type=\"button\" (click)=\"reset()\">reset() \u91CD\u7F6E</button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</form>\n    ",
            styles: ["\n    \tform .ng-valid{color:green;}\t\t\t/* \u9A8C\u8BC1\u901A\u8FC7 */\n    \tform .ng-invalid{color:red}\t\t\t\t/* \u9A8C\u8BC1\u4E0D\u901A\u8FC7 */\n    \tform .ng-pending{font-weight:bold;}\n    \tform .ng-pristine{color:blue;}\t\t\t/* \u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C */\n    \tform .ng-dirty{background:#eee;}\t\t/* \u8868\u5355\u5DF2\u64CD\u4F5C */\n    \tform .ng-untouched{border-color:pink;}\t/* \u8868\u5355\u672A\u64CD\u4F5C*/\n    \tform .ng-touched{border-color:purple}\t/* \u8868\u5355\u5DF2\u64CD\u4F5C */\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ValidateFormBuilderComponent);
    return ValidateFormBuilderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/validate-form-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateFormGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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
var ValidateFormGroupComponent = (function () {
    function ValidateFormGroupComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this.model = {};
    }
    ValidateFormGroupComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('这里设置默认值', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(8),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]{6}') // 正则验证
            ]),
            'emails': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('填写邮箱', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email // 邮箱验证
            ]),
            'address': this.fb.group({
                city: ['城市', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)]],
                street: ['街道', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
            })
        });
        this.model = this.myForm.value; // 获取所有表单数据
    };
    ValidateFormGroupComponent.prototype.onSubmit = function (formData, valid) {
        if (valid) {
            this.data = formData;
        }
    };
    // 重置 form
    ValidateFormGroupComponent.prototype.reset = function () {
        this.myForm.reset();
    };
    Object.defineProperty(ValidateFormGroupComponent.prototype, "userame", {
        // 获取指定值
        get: function () {
            return this.myForm.get('userame');
        },
        enumerable: true,
        configurable: true
    });
    ValidateFormGroupComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/validate-form-group.component.ts';
    };
    ValidateFormGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code mt10\">\n        \t<dl class=\"mvvm-list samebox\">\n        \t\t<dt>FormGroup \u51FD\u6570\u9A8C\u8BC1: </dt>\n        \t\t<dd><b>formControlName</b>=\"emails\"</dd>\n        \t</dl>\n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup \u5224\u65AD\u9A8C\u8BC1\u662F\u5426\u6B63\u786E: </dt>\n\t        \t<dd>\u975E\u7A7A\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.required</b>: <s>{{ myForm.controls.emails.errors?.required }}</s></dd>\n\t        \t<dd>\u6700\u5C0F\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.minLength</b>: <s>{{ myForm.controls.emails.errors?.minLength }}</s></dd>\n\t        \t<dd>\u6700\u5927\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.maxLength</b>: <s>{{ myForm.controls.emails.errors?.maxLength }}</s></dd>\n\t        \t<dd>\u90AE\u7BB1\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.email</b>: <s>{{ myForm.controls.emails.errors?.email }}</s></dd>\n\t        \t<dd>\u6B63\u5219\u9A8C\u8BC1: <b>myForm.controls.emails.errors?.pattern</b>: <s>{{ myForm.controls.emails.errors?.pattern }}</s></dd>\n\t        </dl>\n\t        \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup \u5224\u65AD\u9A8C\u8BC1\u662F\u5426\u6B63\u786E: </dt>\n\t        \t<dd>\u975E\u7A7A\u9A8C\u8BC1: <b>myForm.get('emails').errors?.required</b>: <s>{{ myForm.get('emails').errors?.required }}</s></dd>\n\t        \t<dd>\u6700\u5C0F\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.get('emails').errors?.minLength</b>: <s>{{ myForm.get('emails').errors?.minLength }}</s></dd>\n\t        \t<dd>\u6700\u5927\u957F\u5EA6\u9A8C\u8BC1: <b>myForm.get('emails').errors?.maxLength</b>: <s>{{ myForm.get('emails').errors?.maxLength }}</s></dd>\n\t        \t<dd>\u90AE\u7BB1\u9A8C\u8BC1: <b>myForm.get('emails').errors?.email</b>: <s>{{ myForm.get('emails').errors?.email }}</s></dd>\n\t        \t<dd>\u6B63\u5219\u9A8C\u8BC1: <b>myForm.get('emails').errors?.pattern</b>: <s>{{ myForm.get('emails').errors?.pattern }}</s></dd>\n\t        </dl>\n\t        \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup css \u5224\u65AD\u9A8C\u8BC1: </dt>\n\t        \t<dd>\u9A8C\u8BC1\u4E0D\u901A\u8FC7 : <b>myForm.get('emails').invalid</b>: <s>{{ myForm.get('emails').invalid }}</s></dd>\n\t        \t<dd>\u9A8C\u8BC1\u901A\u8FC7: <b>myForm.get('emails').valid</b>: <s>{{ myForm.get('emails').valid }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C: <b>myForm.get('emails').pristine</b>: <s>{{ myForm.get('emails').pristine }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.get('emails').dirty</b>: <s>{{ myForm.get('emails').dirty }}</s></dd>\n\t        \t<dd>\u8868\u5355\u672A\u64CD\u4F5C: <b>myForm.get('emails').untouched</b>: <s>{{ myForm.get('emails').untouched }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.get('emails').touched</b>: <s>{{ myForm.get('emails').touched }}</s></dd>\n\t        \t<dd>\u8868\u5355xx:<b>myForm.get('emails').pending</b>: <s>{{ myForm.get('emails').pending }}</s></dd>\n\t        </dl>\n\t        \n\t        <dl class=\"mvvm-list samebox mt10\">\n\t        \t<dt>FormGroup css \u5224\u65AD\u9A8C\u8BC1: </dt>\n\t        \t<dd>\u9A8C\u8BC1\u4E0D\u901A\u8FC7 : <b>myForm.controls.emails.invalid</b>: <s>{{ myForm.controls.emails.invalid }}</s></dd>\n\t        \t<dd>\u9A8C\u8BC1\u901A\u8FC7: <b>myForm.controls.emails.valid</b>: <s>{{ myForm.controls.emails.valid }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C: <b>myForm.controls.emails.pristine</b>: <s>{{ myForm.controls.emails.pristine }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.controls.emails.dirty</b>: <s>{{ myForm.controls.emails.dirty }}</s></dd>\n\t        \t<dd>\u8868\u5355\u672A\u64CD\u4F5C: <b>myForm.controls.emails.untouched</b>: <s>{{ myForm.controls.emails.untouched }}</s></dd>\n\t        \t<dd>\u8868\u5355\u5DF2\u64CD\u4F5C: <b>myForm.controls.emails.touched</b>: <s>{{ myForm.controls.emails.touched }}</s></dd>\n\t        \t<dd>\u8868\u5355xx:<b>myForm.controls.emails.pending</b>: <s>{{ myForm.controls.emails.pending }}</s></dd>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u53CC\u5411\u7ED1\u5B9A\u6570\u636E form: <s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre\">\u63D0\u4EA4\u8868\u5355\u540E\u7684 ngForm \u6570\u636E: <s>{{ data | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n \t\t<div class=\"mvvm-pre\">myForm.value.username: <s>{{ myForm.value.username }}</s></div>\n \t\t<hr class=\"_mt10_mb10x\">\n\t\t<div class=\"mvvm-pre\">myForm.get('username').errors : <s>{{ myForm.get('username').errors | json }}</s></div>\n \t\t<hr class=\"_mt10_mb10x\">\n \t\t\n \t\t<form (ngSubmit)=\"onSubmit(f.value,f.valid)\" novalidate #f=\"ngForm\" [formGroup]=\"myForm\" class=\"samebox mt10\">\n\t\t\t<ul class=\"res-tr-tl clearfox _lh32\" [hidden]=\"f.submitted\">\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u975E\u7A7A\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" class=\"_w200 mr10\" formControlName=\"username\">\n\t\t\t\t\t\t<span *ngIf=\"myForm.controls.username.pristine\" class=\"mr20\">\u672A\u4FEE\u6539</span>\n\t\t\t\t\t\t<span *ngIf=\"myForm.controls.username.dirty\" class=\"mr20\">\u5DF2\u4FEE\u6539</span>\n\t\t\t\t\t\t<span *ngIf=\"myForm.controls.username.valid\">\u6709\u6548</span>\n\t\t\t\t\t\t<span [hidden]=\"myForm.controls.username.valid || myForm.controls.username.pristine\" style=\"color:red\">\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.username.errors?.minlength || myForm.controls.username.errors?.maxlength\">\u957F\u5EA6\u5FC5\u987B\u4E3A4-8</b>\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.username.errors?.required\">\u975E\u7A7A</b>\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.username.errors?.pattern\">\u53EA\u80FD\u662F\u6570\u5B57,\u957F\u5EA6\u4E3A 5</b>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u90AE\u7BB1\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" class=\"_w200 mr10\" formControlName=\"emails\">\n\t\t\t\t\t\t<span [hidden]=\"myForm.controls.emails.valid || myForm.controls.emails.pristine\" style=\"color:red\">\n\t\t\t\t\t\t\t<b *ngIf=\"myForm.controls.emails.errors?.email\">\u5FC5\u987B\u662F\u90AE\u7BB1</b>\n\t\t\t\t\t\t\t<span *ngIf=\"myForm.get('emails').invalid\">\u5FC5\u987B\u662F\u90AE\u7BB12</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u90AE\u7BB1\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<fieldset formGroupName=\"address\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"city\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"street\">\n\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt20 res-btn\">\n\t\t\t\t\t<h6 class=\"col-sm-20\"></h6>\n\t\t\t\t\t<div class=\"col-sm-80\">\n\t\t\t\t\t\t<button class=\"btn-default\" [disabled]=\"myForm.invalid\">\u786E\u8BA4</button>\n\t\t\t\t\t\t<button class=\"btn-default mtb10\" type=\"button\" (click)=\"f.resetForm({})\">f.resetForm(\uFF5B\uFF5D) \u91CD\u7F6E</button>\n\t\t\t\t\t\t<button class=\"btn-default\" type=\"button\" (click)=\"reset()\">reset() \u91CD\u7F6E</button>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</form>\n    ",
            styles: ["\n    \tform .ng-valid{color:green;}\t\t\t/* \u9A8C\u8BC1\u901A\u8FC7 */\n    \tform .ng-invalid{color:red}\t\t\t\t/* \u9A8C\u8BC1\u4E0D\u901A\u8FC7 */\n    \tform .ng-pending{font-weight:bold;}\n    \tform .ng-pristine{color:blue;}\t\t\t/* \u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C */\n    \tform .ng-dirty{background:#eee;}\t\t/* \u8868\u5355\u5DF2\u64CD\u4F5C */\n    \tform .ng-untouched{border-color:pink;}\t/* \u8868\u5355\u672A\u64CD\u4F5C*/\n    \tform .ng-touched{border-color:purple}\t/* \u8868\u5355\u5DF2\u64CD\u4F5C */\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_services_router_service__["a" /* RouterService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ValidateFormGroupComponent);
    return ValidateFormGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/ng/form/validate-inner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateInnerComponent; });
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
var ValidateInnerComponent = (function () {
    function ValidateInnerComponent(router) {
        this.router = router;
        this.model = {};
    }
    ValidateInnerComponent.prototype.onSubmit = function (formData, valid) {
        if (valid) {
            if (valid) {
                this.data = formData;
            }
        }
    };
    ValidateInnerComponent.prototype.component = function () {
        this.router.go({ popup: 'code' });
        localStorage.code = 'views/ng/form/validate-inner.component.ts';
    };
    ValidateInnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"samebox\">\n        \t<button class=\"btn-default\" (click) = \"component()\">\u67E5\u770B\u672C\u7EC4\u4EF6</button>\n        </div>\n        \n        <div class=\"lh30 mvvm-code samebox mt10\">\n\t\t\t<dl class=\"mvvm-list\">\n\t        \t<dt>\u8868\u5355\u9A8C\u8BC1: </dt>\n\t        </dl>\n        </div>\n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre mt10\">\u53CC\u5411\u7ED1\u5B9A\u6570\u636E form: <s>{{ model | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <div class=\"mvvm-pre mt10\">\u63D0\u4EA4\u8868\u5355\u540E\u7684 ngForm \u6570\u636E: <s>{{ data | json }}</s></div>\n        \n        <hr class=\"_mt10_mb10x\">\n        \n        <form (ngSubmit)=\"onSubmit(f.value,f.valid)\" #f=\"ngForm\" class=\"samebox mt10\">\n\t\t\t<ul class=\"res-tr-tl clearfox _lh32\">\n\t\t\t\t<li>\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u975E\u7A7A\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" name=\"summer\" class=\"_w200 mr10\"\n\t\t\t\t\t\t\t#summer=\"ngModel\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.summer\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"summer.invalid && (summer.dirty || summer.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"summer.errors.required\">\u975E\u7A7A </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u957F\u5EA6\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" class=\"_w200 mr10\"\n\t\t\t\t\t\t\t#name=\"ngModel\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.name\"\n\t\t\t\t\t\t\tminlength=\"6\"\n\t\t\t\t\t\t\tmaxlength=\"10\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"name.errors.minlength\">\u957F\u5EA6>= 6</p>\n\t\t\t\t\t\t\t<p *ngIf=\"name.errors.maxlength\">\u957F\u5EA6<= 10</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u90AE\u7BB1\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" name=\"email\" class=\"_w200 mr10\"\n\t\t\t\t\t\t\t#email=\"ngModel\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.email\"\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"email.errors.email\">\u5FC5\u987B\u662F\u90AE\u7BB1</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt10\">\n\t\t\t\t\t<h6 class=\"col-sm-20\">\u6B63\u5219\u9A8C\u8BC1\uFF1A</h6>\n\t\t\t\t\t<div class=\"col-sm-80 _fl\">\n\t\t\t\t\t\t<input type=\"text\" name=\"num\" class=\"_w200 mr10\"\n\t\t\t\t\t\t\t#num=\"ngModel\"\n\t\t\t\t\t\t\t[(ngModel)]=\"model.number\"\n\t\t\t\t\t\t\tpattern = \"[/0-9/]{6}\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div *ngIf=\"num.invalid && (num.dirty || num.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"num.errors.pattern\">\u5FC5\u987B\u662F\u6570\u5B57,\u4E14\u957F\u5EA6\u4E3A 6</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"mt20 res-btn\">\n\t\t\t\t\t<h6 class=\"col-sm-20\"></h6>\n\t\t\t\t\t<div class=\"col-sm-80\"><button class=\"btn-default _w200_f16_h40\">\u786E\u8BA4</button></div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</form>\n    ",
            styles: ["\n    \tform .ng-valid{color:green;}\t\t\t/* \u9A8C\u8BC1\u901A\u8FC7 */\n    \tform .ng-invalid{color:red}\t\t\t\t/* \u9A8C\u8BC1\u4E0D\u901A\u8FC7 */\n    \tform .ng-pending{font-weight:bold;}\n    \tform .ng-pristine{color:blue;}\t\t\t/* \u8868\u5355\u5168\u65B0\u672A\u64CD\u4F5C */\n    \tform .ng-dirty{background:#eee;}\t\t/* \u8868\u5355\u5DF2\u64CD\u4F5C */\n    \tform .ng-untouched{border-color:pink;}\t/* \u8868\u5355\u6B3E\u64CD\u4F5C*/\n    \tform .ng-touched{border-color:purple}\t/* \u8868\u5355\u5DF2\u64CD\u4F5C */\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_router_service__["a" /* RouterService */]])
    ], ValidateInnerComponent);
    return ValidateInnerComponent;
}());



/***/ })

});
//# sourceMappingURL=form.module.chunk.js.map