import { Component } from '@angular/core';
// ===================================================== 
@Component({
	templateUrl: './position.html',
	styleUrls:['style.css']
})

export class PopPosition{
	html:string = 'views/pc/pop/pop-position/position.html';
	css:string = 'views/pc/pop/pop-position/style.css';
	less:string = 'views/pc/pop/pop-position/style.less';
	
	show:boolean = true;
}
