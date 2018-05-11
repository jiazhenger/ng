import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 惰性加载模块的组件
import { AsyncOne } from './asyncOne';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,	// 特性模块和惰性加载模块应该必须导入 CommonModule, 才能使用内部指令(*ngIf,*ngFor)
		
		// 重要之处: 必须标记路由
		RouterModule.forChild(		
			[
				{ path: '', component: AsyncOne } // path 必等空
			]	
		)
	],
	declarations: [ AsyncOne ],	// 标记组件
	exports: [ RouterModule ]				// 公开路由
})
export class Module { }

//  在根路由仅使用  { path: 'asyn-one', loadChildren: './views/about/module#Module' } 