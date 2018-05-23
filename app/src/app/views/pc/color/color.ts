import { Component } from '@angular/core';
// ===================================================== 
﻿import { ColorService } from './color.service';
// ===================================================== 
@Component({
	templateUrl: './color.html',
	styleUrls:['style.css'],
	providers:[ColorService]
})

export class Color{
	html:string = 'views/pc/color/color.html';
	css:string = 'views/pc/color/style.css';
	less:string = 'views/pc/color/style.less';
	
	show:boolean = true;
	
	constructor(public data:ColorService){
		
	}
}
