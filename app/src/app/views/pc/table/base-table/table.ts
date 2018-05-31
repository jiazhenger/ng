import { Component } from '@angular/core';
// ===================================================== 服务
import { DataService } from 'src/app/views/pc/services/data.service';
// ===================================================== 
@Component({
	templateUrl: './table.html',
	styleUrls:['style.css'],
	providers:[DataService]
})

export class BaseTable{
	html:string = 'views/pc/table/base-table/table.html';
	css:string = 'views/pc/table/base-table/style.css';
	less:string = 'views/pc/table/base-table/style.less';
	
	constructor(public data:DataService){}
}
