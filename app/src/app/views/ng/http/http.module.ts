import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// ===================================================== 同一个模块的组件
import { HttpComponent } from './http.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'http', component: HttpComponent }
			]
		)
	],
	declarations: [
		HttpComponent
	],
	exports: [ RouterModule ]
})
export class HttpModule { }