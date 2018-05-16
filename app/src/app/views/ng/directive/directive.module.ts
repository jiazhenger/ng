import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// ===================================================== 指令
import { PropertyDirective } from './directive/property.directive';
import { StructureDirective } from './directive/structure.directive';
// ===================================================== 同一个模块的组件
import { PropertyDirectiveComponent } from './property-directive.component';
import { StructureDirectiveComponent } from './structure-directive.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'property', component: PropertyDirectiveComponent },
				{ path: 'structure', component: StructureDirectiveComponent }
			]
		)
	],
	declarations: [
		PropertyDirectiveComponent,		// 组件
		StructureDirectiveComponent,
		
		PropertyDirective,				// 指令
		StructureDirective,
	],
	exports: [ RouterModule ]
})
export class DirectiveModule { }
