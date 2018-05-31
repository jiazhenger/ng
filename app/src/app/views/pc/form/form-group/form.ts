import { Component } from '@angular/core';
// ===================================================== 
@Component({
	templateUrl: './form.html',
	styleUrls:['style.css','../../button/base-button/style.css','../checkbox/style.css']
})

export class FormGroup{
	html:string = 'views/pc/form/form-group/form.html';
	css:string = 'views/pc/form/form-group/style.css';
	less:string = 'views/pc/form/form-group/style.less';
}
