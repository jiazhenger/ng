// ======================================================================== app.module.ts 入口模块
// 会自动导入CommonModule
// 该模块公开的所有组件、指令和管道
// 在其它任何模块中都不要导入BrowserModule
import { BrowserModule } from '@angular/platform-browser';
// NgModule 接收一个元数据对象，该对象告诉 Angular 如何编译和运行模块代码
import { NgModule } from '@angular/core';
// 动画模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// http 模块
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
// ======================================================================== @ngrx
import { StoreModule } from '@ngrx/store'; // npm install @ngrx/core @ngrx/store --save
import Reducers from './ngrx/reducers';
import Config from './ngrx/config';
// ======================================================================== 自定义服务
import { FnService } from './services/fn.service';
import { LocalStorageService } from './services/localStorage.service';
import { SessionStorageService } from './services/sessionStorage.service';
import { RouterService } from './services/router.service';
import { HttpService } from './services/http.service';
import { CheckboxService } from './services/checkbox.service';
// ======================================================================== 导入根路由
import { AppRoutingModule } from './app-routing.module';
// ======================================================================== 入口组件
import { AppComponent } from './app.component';
// ======================================================================== NgModule
@NgModule({
	// 导入需要的模块 xModule，BrowserModule 只在入口模块调用一次
	imports: [ 
		BrowserModule,
		HttpClientModule,
		/*
		HttpClientXsrfModule.withOptions({	
			cookieName: 'My-Xsrf-Cookie',	// 配置自定义 cookie
			headerName: 'My-Xsrf-Header',	// 配置自定义 header 名称
		}),*/
		BrowserAnimationsModule,
		StoreModule.forRoot(Reducers),	// 安装 store
		//StoreModule.forRoot({ ...Reducers, initialState:Config}),	// 安装 store
		AppRoutingModule		// 根路由
	],
	// 声明创建的组件，（只能放三种：components, directives, pipes）
	declarations: [ AppComponent ],
	// 将组件、指令、管道公开给外面可使用，如果不公开，则无法使用。可以是 xComponents, xDirectives,xPipes,xModule
	exports: [ ],
	// 声明服务 xService,
	providers: [
		FnService,
		LocalStorageService,
		SessionStorageService,
		HttpService,
		RouterService,
		
		CheckboxService		// 全选服,务
	],
	// 引导根组件，插入 index.html 的根组件，可以有多个根组件，但通常只有一个。只在根组件使用
	bootstrap: [ AppComponent ]
})

export class AppModule {
	
}
