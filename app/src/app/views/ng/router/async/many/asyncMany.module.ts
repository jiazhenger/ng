import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 同一个模块的组件
import { AsyncMany } from './asyncMany';
import { AComponent } from './test-component/A.component';
import { BComponent } from './test-component/B.component';
import { CComponent } from './test-component/C.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,	// ngIf
		// 会产生包含路由		
		RouterModule.forChild(		
			[
				{ path: 'asyn-group-a', component: AComponent },
				{ path: 'asyn-group-b', component: BComponent },
				{ path: 'asyn-group-c', component: CComponent },
				{ path: '', component: AsyncMany },		// 默认进入
			]
		)
	],
	declarations: [ 
		AsyncMany,
		AComponent,
		BComponent,
		CComponent
	],
	exports: [ RouterModule ]
})
export class Module { }

//  在根路由仅使用  { path: 'async-many', loadChildren: './views/router/async/many/asyncMany.module#Module' }