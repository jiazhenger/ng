import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 
@Component({
	template: `
		<div class="samebox">
			<a class="btn-default mr10" href="http://techbrood.com/threejs/docs/" target="_blank">three.js 中文参考手册</a>
		</div>
	`
})

export class Default{
	constructor(private router: RouterService){ }
}
