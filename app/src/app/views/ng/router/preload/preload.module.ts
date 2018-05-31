import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 组件
import { Preload } from './preload';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,
		RouterModule.forChild(		
			[{ path: '', component: Preload }]
		)
	],
	declarations: [ Preload ],
	exports: [ RouterModule ]
})
export class Module { }