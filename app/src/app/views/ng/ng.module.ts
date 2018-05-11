import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ======================================================================== 服务
import { PreloadService } from 'app/services/preload.service';
import { DataService } from 'app/services/data.service';
import { AuthGuard }	from 'app/services/auth-guard.service';
// ======================================================================== 同一个模块的组件
import { Index } from './index/index';
import { Default } from './default/component';
// ======================================================================== 同步异步路由
import { SyncOnlyComponent } from './router/sync/syncOnlyComponent';
import { SyncHasNgModuleModule } from './router/sync/syncHasNgModule.module';
import { ChildSyncModule } from './router/child/childSync.module';
// ======================================================================== 路由守卫
import { AuthGuardComponent } from './router/auth-guard/auth-guard.component';
import { AComponent } from './router/auth-guard/test-component/a.component';
import { BComponent } from './router/auth-guard/test-component/b.component';
import { CComponent } from './router/auth-guard/test-component/c.component';
// ======================================================================== 路由导航
import { RouterNavComponent } from './router/nav/router-nav.component';
import { RouterNavOrderComponent } from './router/nav/router-nav-order.component';
import { RouterEventComponent } from './router/nav/router-event.component';
import { ParamComponent } from './router/nav/param.component';
// ======================================================================== 事件绑定
import { EventComponent } from './event/event.component';
// ======================================================================== ngrx 状态管理
import { NgrxComponent } from './ngrx/ngrx.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
	
		SyncHasNgModuleModule,
		ChildSyncModule,
		RouterModule.forChild(
			[
				{ 
					path: '', 
					component: Index,
					children:[
						{ path: '', component:Default },
						// ======================================================================== 路由
						// 同步路由，需要在本  @NgModule 中标记
						{ path: 'sync-only-component',  component: SyncOnlyComponent },
						// 异步加载路由，无需在本  @NgModule 中标记
						{ path: 'async-one', loadChildren: './router/async/one/asyncOne.module#Module' },		// 惰性加载一个页面
						{ path: 'async-many', loadChildren: './router/async/many/asyncMany.module#Module' }, 	// 惰性加载一个功能模块
						// 预加载
						{ path: 'preload', loadChildren: './router/preload/preload.module#Module', data:{ preload:true } },
						// 惰性加载子组件
						{ path: 'child-async', loadChildren: './router/child/childAsync.module#ChildAsyncModule' },
						// 路由守卫
						{ 
							path: 'auth-guard',
							component: AuthGuardComponent,
							canLoad: [ AuthGuard ],
							canActivate: [ AuthGuard ],
							canDeactivate: [AuthGuard],
							data: { id:1, title:'路由守卫' },
							resolve: {data:AuthGuard },
							children:[
								{
									path:'',
									canActivateChild: [ AuthGuard ],
									children:[
										{ path: 'test-a', component: AComponent },
										{ path: 'test-b', component: BComponent },
										{ path: 'test-c', component: CComponent },
										//{ path: '', redirectTo: '/auth-guard/test-a', pathMatch: 'full' }	// 设置默认显示路由
									]
								}
							]
						},
						// 查询参数及片段
						{ path: 'fragment', loadChildren: './router/fragment/fragment.module#FragmentModule' },
						// 路由导航
						{ path: 'router-nav', component: RouterNavComponent },
						{ path: 'router-nav-order', component: RouterNavOrderComponent },
						{ path: 'router-event', component: RouterEventComponent },
						{ path: 'router-param/:id', component: ParamComponent, data: { my:'hello angular' }, },
						{ path: 'query', component: ParamComponent, data: { my:'hello angular' }, },
						// 模板指令语法
						{ path: 'data', loadChildren: './data/data.module#Module'},
						// 事件绑定
						{ path: 'event', component: EventComponent, data:{title:'事件绑定'} },
						// 表单
						{ path: 'form', loadChildren: './form/form.module#FormModule'},
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
						{ path: 'ngrx',  component: NgrxComponent },
						// typescript
						{ path: 'typescript', loadChildren: './typescript/typescript.module#TypescriptModule' },
						// 案例
						{ path: 'case', loadChildren: './case/case.module#CaseModule' },
					]
				}
			]
		)
	],
	declarations: [ 
		Index, Default, SyncOnlyComponent,
		AuthGuardComponent,AComponent,BComponent,CComponent,
		RouterNavComponent,RouterNavOrderComponent,RouterEventComponent,ParamComponent,
		EventComponent,NgrxComponent
	],
	providers: [ 			// 服务
		PreloadService,		// 预加载服务
		DataService,		// 测试数据服务
		AuthGuard			// 路由守卫服务
	],
	exports: [ RouterModule ]
})
export class AngularModule { }
