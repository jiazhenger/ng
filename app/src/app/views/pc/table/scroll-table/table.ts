import { Component, ViewEncapsulation } from '@angular/core';
// ===================================================== 服务
import { DataService } from 'app/views/pc/services/data.service';

import './jquery-tableControl.js';

declare const $:any;
// ===================================================== 
@Component({
	encapsulation: ViewEncapsulation.None,
	templateUrl: './table.html',
	styleUrls:['../base-table/style.css'],
	providers:[DataService]
})

export class ScrollTable{
	html:string = 'views/pc/table/scroll-table/table.html';
	css:string = 'views/pc/table/base-table/style.css';
	less:string = 'views/pc/table/base-table/style.less';
	js:string = 'views/pc/table/scroll-table/jquery-tableControl.js';
	
	constructor(public data:DataService){}
	
	ngAfterViewInit(){
		$('.table-fixed').tableControl({
				min : 60,	// 表格最小宽度
			 resize : true,	// 是否拖动表格大小
			  fixed : false	// 是否固定表头
		});
	}
}