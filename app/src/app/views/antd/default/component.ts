import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
	template: `
		<div class="samebox">
			<button class="btn-my-default"><a href="https://ng.ant.design">antd 官方文档</a></button>
		</div>
	`
})

export class Default{
	constructor(private router: RouterService){ }
}
