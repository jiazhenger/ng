import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 同一个模块的组件
import { FragmentComponent } from './fragment.component';
import { TestComponent } from './test.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,	// ngIf
		
		RouterModule.forChild(	// 子路由不能使用根路由的 router-outlet
			[
				{ path: '', component: FragmentComponent },
				{ path: 'fragment-test', component: TestComponent },
			]
		)
	],
	declarations: [ 
		FragmentComponent,
		TestComponent,
	],
	exports: [ RouterModule ]
})
export class FragmentModule { }
