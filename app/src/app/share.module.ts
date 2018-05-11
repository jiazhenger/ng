import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }  from '@angular/router';
// ======================================================================== 组件
import { ControlComponent } from 'app/components/control-component/control.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ CommonModule ],
	declarations: [ ControlComponent ],
	exports: [ ControlComponent, RouterModule ]
})
export class ShareModule { }
