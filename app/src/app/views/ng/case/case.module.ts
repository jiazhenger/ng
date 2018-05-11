import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';
// ===================================================== 同一个模块的组件
import { CalendarTestComponent } from './calendar/calendar-test.component';
import { CalendarComponent } from './calendar/components/calendar.component';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(
			[
				{ path: 'calendar', component: CalendarTestComponent }
			]
		)
	],
	declarations: [
		CalendarTestComponent,
		CalendarComponent
	],
	exports: [ RouterModule ]
})
export class CaseModule { }
