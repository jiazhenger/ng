import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// ===================================================== 管道
import { KeysPipe } from './pipe/keys.pipe';
// ===================================================== 同一个模块的组件
import { InnerPipeComponent } from './inner-pipe.component';
import { MyPipeComponent } from './my-pipe.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'inner', component: InnerPipeComponent },
				{ path: 'my', component: MyPipeComponent }
			]
		)
	],
	declarations: [
		InnerPipeComponent,
		MyPipeComponent,
		KeysPipe 				// 管道
	],
	exports: [ RouterModule ]
})
export class PipeModule { }
