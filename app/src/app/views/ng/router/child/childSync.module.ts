import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 同一个模块的组件
import { ChildSyncComponent } from './childSync.component';
import { AComponent } from './test-component2/A.component';
import { BComponent } from './test-component2/B.component';
import { CComponent } from './test-component2/C.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,	// ngIf
		
		RouterModule.forChild(	// 子路由不能使用根路由的 router-outlet
			[
				{
					path: 'child-sync', component: ChildSyncComponent,
					children : [
						{ path: 'test-a', component: AComponent },
						{ path: 'test-b', component: BComponent },
						{ path: 'test-c', component: CComponent },
						{ path: '', redirectTo: '/ng/child-sync/test-a', pathMatch: 'full' }	// 设置默认显示路由
					]
				}
			]
		)
	],
	declarations: [ 
		ChildSyncComponent,
		AComponent,
		BComponent,
		CComponent
	],
	exports: [ RouterModule ]
})
export class ChildSyncModule { }

// 可作为惰性加载加入根路由 app.routing.module.ts
// 可作为同步路由加入  app.module.ts 