import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ======================================================================== 模板语法组件
import { BindComponent } from './bind.component';
import { NgForComponent } from './ngFor.component';
import { NgIfComponent } from './ngIf.component';
import { NgSwitchComponent } from './ngSwitch.component';
import { HiddenComponent } from './hidden.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,
		RouterModule.forChild(		
			[
				{ path: 'bind', component: BindComponent },
				{ path: 'ngFor', component: NgForComponent },
				{ path: 'ngIf', component: NgIfComponent },
				{ path: 'ngSwitch', component: NgSwitchComponent },
				{ path: 'hidden', component: HiddenComponent }
			]
		)
	],
	declarations: [
		BindComponent,
		NgForComponent,
		NgIfComponent,
		NgSwitchComponent,
		HiddenComponent
	],
	exports: [ RouterModule ]
})
export class Module { }