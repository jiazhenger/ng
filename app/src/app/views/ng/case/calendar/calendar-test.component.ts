// ===================================================== 
import { Component, ViewChild } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 
@Component({
    template: `
		<div class="samebox btn-group">
			<button class="btn-default" (click) = "component()">查看本组件</button>
			<button class="btn-default" (click) = "calendarComponent()">查看日历组件</button>
		</div>
		
		<div class="samebox mt10">
			<button class="btn-default" (click) = "html()">Html</button>
			<button class="btn-default" (click) = "css()">Css</button>
			<button class="btn-default" (click) = "less()">Less</button>
		</div>
    	
		<hr class="_mt10_mb10x">
		<input type="text" [(ngModel)]="time">
		<hr class="_mt10_mb10x">
		<calendar-component [active]="time" (clickTime)="getTime()" ref-calendar></calendar-component>
    `
})

export class CalendarTestComponent{
	@ViewChild('calendar') calendar;
	constructor(private router: RouterService){ }
	time:any = '';
	
	ngOnInit(){
		
	}
	
	getTime(){
		this.time = this.calendar.result.date;
	}
	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/case/calendar/calendar-test.component.ts';
	}
	calendarComponent(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/case/calendar/components/calendar.component.ts';
	}
	html(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/case/calendar/components/calendar.html';
	}
	css(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/case/calendar/components/style.css';
	}
	less(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/case/calendar/components/style.less';
	}
}
