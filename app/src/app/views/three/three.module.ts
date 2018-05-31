import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// ======================================================================== 公共模块
import { ShareModule } from 'src/app/share.module';
import { ThreeService } from './services/three.service';
import { FormComponent } from './components/form.component';
// ======================================================================== 组件
import { Index } from './index/index';
import { Default } from './default/default';
// ======================================================================== 组件
// scene
import { Scene } from './scene/scene';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(
			[
				{ 
					path: '', 
					component: Index,
					children:[
						{ path: '', component:Default },
						{ path: 'scene', component:Scene },
					]
				}
			]
		),
		ShareModule
	],
	declarations: [
		Index, Default,
		Scene,
		FormComponent
	],
	providers:[ThreeService],
	exports: [ RouterModule ]
})
export class ThreeModule { }
