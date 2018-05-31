import { Component } from '@angular/core';
// ===================================================== 
@Component({
	templateUrl: './grid.html',
	styles:[`
		.clearfix{margin-bottom:10px;}
		[class^='col-']{
			height:30px;
			line-height:30px;
			background:purple;
			text-align:center;
			color:#fff;
		}
		[class^='col-']:nth-child(2n){
			background:yellow;
			color:#000
		}
	`]
})

export class Grid{
	html:string = 'views/pc/grid/grid.html';
}
