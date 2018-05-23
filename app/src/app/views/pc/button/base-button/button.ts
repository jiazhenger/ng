import { Component } from '@angular/core';
// ===================================================== 
@Component({
	templateUrl: './button.html',
	styleUrls:['style.css']
})

export class BaseButton{
	html:string = 'views/pc/button/base-button/button.html';
	css:string = 'views/pc/button/base-button/style.css';
	less:string = 'views/pc/button/base-button/style.less';
}
