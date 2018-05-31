import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// ===================================================== 服务

// ===================================================== 同一个模块的组件
import { ServiceComponent } from './service.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'service', component: ServiceComponent }
			]
		)
	],
	declarations: [
		ServiceComponent
	],
	providers:[ ],	// 公共服务
	exports: [ RouterModule ]
})
export class ServiceModule { }
