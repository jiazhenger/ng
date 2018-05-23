import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 同一个模块的组件
import { ChildAsyncComponent } from './childAsync.component';
import { AComponent } from './test-component/A.component';
import { BComponent } from './test-component/B.component';
import { CComponent } from './test-component/C.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,	// ngIf
		
		RouterModule.forChild(	// 子路由不能使用根路由的 router-outlet
			[
				{
					path: '', component: ChildAsyncComponent,
					children : [
						{ path: 'test-a', component: AComponent },
						{ path: 'test-b', component: BComponent },
						{ path: 'test-c', component: CComponent },
						{ path: '', redirectTo: '/ng/child-async/test-a', pathMatch: 'full' }	// 设置默认显示路由
					]
				}
			]
		)
	],
	declarations: [ 
		ChildAsyncComponent,
		AComponent,
		BComponent,
		CComponent
	],
	exports: [ RouterModule ]
})
export class ChildAsyncModule { }

// 可作为惰性加载加入根路由 app.routing.module.ts
// 可作为同步路由加入  app.module.ts 