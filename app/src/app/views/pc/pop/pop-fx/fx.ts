import { Component } from '@angular/core';
// ===================================================== 
@Component({
	templateUrl: './fx.html',
	styleUrls:['style.css','../../button/base-button/style.css']
})

export class PopFx{
	html:string = 'views/pc/pop/pop-fx/fx.html';
	css:string = 'views/pc/pop/pop-fx/style.css';
	less:string = 'views/pc/pop/pop-fx/style.less';
	
	show:boolean = true;
}
