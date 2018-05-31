// ======================================================================== app-routing.module.ts 根路由组
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, PreloadAllModules }  from '@angular/router';
// ======================================================================== 服务
import { PreloadService } from './services/preload.service';
import { DataService } from './services/data.service';
// ======================================================================== 基本路由
import { Index } from './views/index/index';
import { PageNotFound } from './views/404/404';
// ======================================================================== 公共组件
import { CodeComponent } from './components/code.component';
// ======================================================================== 路由守卫
import { AuthGuard }	from './services/auth-guard.service';
// ======================================================================== 路由配置
const router: Routes = [
	{ path: 'index', component: Index },
	// ======================================================================== 用命名出口（outlet）显示多重路由
	{ path: 'code', component: CodeComponent, outlet:'popup' },
	// ======================================================================== ng 教程
	{ path: 'ng', loadChildren:'./views/ng/ng.module#AngularModule' },
	// ======================================================================== pc 模板
	{ path: 'pc', loadChildren:'./views/pc/pc.module#PcModule' },
	// ======================================================================== threejs 教程
	{ path: 'three', loadChildren:'./views/three/three.module#ThreeModule' },
	// ======================================================================== 路由是有顺序的
	{ path: '', redirectTo: '/index', pathMatch: 'full' },		// 重定向，放倒数第二
	{ path: '**', component: PageNotFound }						// 404，放倒数第一
]
// ======================================================================== 根路用 forRoot 启动
const RootRouter:ModuleWithProviders = RouterModule.forRoot(router, { 
	useHash: true,			// 启动 hash 路由
	//preloadingStrategy: PreloadAllModules,		// 预加载：特性区的后台加载，只有惰性路由才能预加载
													// 让Router预加载器立即加载所有惰性加载路由（带loadChildren属性的路由）
	//enableTracing: true 	// 追踪路由信息，只在调试环境下支持
});
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule, 	// 需要加载 *ngIf,*ngFor等指令时需要加载此模块, 路由模块必须加载此模块
		RootRouter		// 标记路由
	],
	declarations: [ Index, PageNotFound, CodeComponent ],
	providers: [ 			// 服务
		PreloadService,		// 预加载服务
		DataService,		// 测试数据服务
		AuthGuard			// 路由守卫服务
	],		
	exports: [ RouterModule ],			// 必须公开路由模块
})

export class AppRoutingModule {
	// 输出路由信息
	constructor(router: Router) {
		//console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
	}
}