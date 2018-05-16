import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// ===================================================== 服务

// ===================================================== 同一个模块的组件
import { AnimationComponent } from './animation.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'animation', component: AnimationComponent }
			]
		)
	],
	declarations: [
		AnimationComponent
	],
	exports: [ RouterModule ]
})
export class AnimationModule { }