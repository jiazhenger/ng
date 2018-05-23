import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 惰性加载模块的组件
import { SyncHasNgModule } from './syncHasNgModule';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,	// 特性模块和惰性加载模块应该必须导入 CommonModule, 才能使用内部指令(*ngIf,*ngFor)
		
		// 重要之处: 必须标记路由
		RouterModule.forChild(		
			[{ path: 'sync-has-ngModule', component: SyncHasNgModule }]		// 在 path 内设置路由
		)
	],
	declarations: [ SyncHasNgModule ],	// 标记组件
	exports: [ RouterModule ]		// 公开路由
})
export class SyncHasNgModuleModule { }

//  也可在根路由配置惰性路由  { path: 'sync-has-ngModule', loadChildren: './views/router/sync/SyncHasNgModuleModule.module#SyncHasNgModuleModule' }
