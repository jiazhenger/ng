import { Component } from '@angular/core';
// ===================================================== 
@Component({
	templateUrl: './table.html',
	styleUrls:['style.css']
})

export class PopTable{
	html:string = 'views/pc/pop/pop-table/table.html';
	css:string = 'views/pc/pop/pop-table/style.css';
	less:string = 'views/pc/pop/pop-table/style.less';
	
	show:boolean = true;
}
