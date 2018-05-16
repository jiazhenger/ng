import { Component } from '@angular/core';
// ===================================================== 
﻿import './navigation.js';
declare const $:any;
// ===================================================== 
@Component({
	templateUrl: './nav.html',
	styleUrls:['style.css']
})

export class AceNavgation{
	html:string = 'views/pc/navigation/ace/nav.html';
	css:string = 'views/pc/navigation/ace/style.css';
	less:string = 'views/pc/navigation/ace/style.less';
	js:string = 'views/pc/navigation/ace/navigation.js';
	
	ngAfterViewInit(){
		$.nav();
	}
}
