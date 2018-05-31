import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ===================================================== 同一个模块的组件
import { CptLifeComponent } from './cpt-life.component';
import { LayoutComponent } from './layout.component';
// 组件通信
import { InputComponent, ChildComponent } from './communication/input.component';
import { OutputComponent, Child2Component } from './communication/output.component';
import { ViewChildComponent, Child3Component } from './communication/viewchild.component';
import { ViewChidrenComponent, Child4Component } from './communication/viewchildren.component';
import { IdComponent, Child5Component } from './communication/id.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: 'cpt-life', component: CptLifeComponent },
				{ path: 'layout', component: LayoutComponent },
				
				{ path: 'input', component: InputComponent },
				{ path: 'output', component: OutputComponent },
				{ path: 'viewchild', component: ViewChildComponent },
				{ path: 'viewchildren', component: ViewChidrenComponent },
				{ path: 'id', component: IdComponent }
			]
		)
	],
	declarations: [
		CptLifeComponent,
		LayoutComponent,
		
		ChildComponent,
		InputComponent,
		OutputComponent,Child2Component,
		ViewChildComponent,Child3Component,
		ViewChidrenComponent, Child4Component,
		IdComponent,Child5Component
	],
	exports: [ RouterModule ]
})
export class CptModule { }
