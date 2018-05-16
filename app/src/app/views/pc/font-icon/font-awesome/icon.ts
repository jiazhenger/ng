import { Component } from '@angular/core';
// ===================================================== 数据
import { DataService } from './data.service';
// ===================================================== 
@Component({
	templateUrl: './icon.html',
	styleUrls:['style.css','../../pop/pop-table/style.css'],
	providers:[DataService]
})

export class FontAwesome{
	constructor(public data:DataService){}
	
	html:string = 'views/pc/font-icon/font-awesome/icon.html';
	css:string = 'views/pc/font-icon/font-awesome/style.css';
	less:string = 'views/pc/font-icon/font-awesome/style.less';
	
	show:boolean = false;
	title:string = '';
	code:string = '';
	codeCss:string = '';
	
	pop(icon,code){
		this.show = true;
		this.title = icon;
		this.code = '\\' + code;
		this.codeCss = "." + this.title + ":before{content:'" + this.code + "'}";
	}
}
