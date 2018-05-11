import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
	template: `
		<div class="samebox">
			<button class="btn-my-default" (click) = "css()">全局公共 Css 样式</button>
		</div>
	`
})

export class Default{
	constructor(private router: RouterService){ }
	
	css(){
		this.router.go({ popup: 'code' });
		localStorage.code = '../assets/css/main.css';
	}
}
