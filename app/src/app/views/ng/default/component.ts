import { Component } from '@angular/core';
// ===================================================== 
@Component({
	template: `
		<div class="samebox">
			<a class="btn-default mr10" href="http://www.angular.cn" target="_blank">angular 官方文档</a>
			<a class="btn-default mr10" href="https://github.com/angular/angular" target="_blank">angular 官方版本</a>
			<a class="btn-default mr10" href="https://github.com/angular/angular-cli" target="_blank">@angular/cli 官方版本</a>
			<a class="btn-default mr10" href="http://www.runoob.com/js/js-tutorial.html" target="_blank">js/html 基础查询文档</a>
		</div>
		<div class="samebox">
			<a class="btn-default mr10" href="https://ng.ant.design/#/docs/angular/introduce" target="_blank">ng-zorro-antd ui</a>
			<a class="btn-default mr10" href="https://cipchk.github.io/ng-alain/dashboard/v1" target="_blank">ng-alain ui</a>
		</div>
		<dl class="mvvm-list samebox mt10">
			<dt>环境配置：</dt>
			<dd><b>npm install -g @angular/cli</b> # 安装脚手架</dd>
			<dd><b>ng new project-name</b> # 新建项目文件夹</dd>
			<dd><b>cd project-name</b> # 到项目文件夹</dd>
			<dd><b>ng serve</b> # 启动 angular</dd>
			<dd><b>ng serve --open|-o</b> # 启动 angular并打开浏览器</dd>
			<dd><b>ng serve --host 0.0.0.0 --port 4201</b> # 在不同的端口启动 angular</dd>
			<dd><b>ng build --prod --base-href ./ng</b> # 打包</dd>
		</dl>
		<dl class="mvvm-list samebox mt10">
			<dt>安装包命令：</dt>
			<dd><b>npm install webpack</b> # 当前目录安装</dd>
			<dd><b>npm install webpack -g</b> # 全局安装</dd>
			<dd><b>npm install webpack --save</b> # 程序生产环境所需包</dd>
			<dd><b>npm install webpack --only=dev</b> # 程序开发环境所需包</dd>
		</dl>
	`
})

export class Default{
	
}
