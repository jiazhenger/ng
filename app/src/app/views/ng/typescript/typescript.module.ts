import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// ===================================================== 同一个模块的组件
import { TypeComponent } from './type.component';
import { FuncComponent } from './func.component';
import { InterfaceComponent } from './interface.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'type', component: TypeComponent },
				{ path: 'func', component: FuncComponent },
				{ path: 'interface', component: InterfaceComponent },
			]
		)
	],
	declarations: [
		TypeComponent,
		FuncComponent,
		InterfaceComponent
	],
	exports: [ RouterModule ]
})
export class TypescriptModule { }
