import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box">
			<button class="btn-default" (click) = "module()">@NgModule 惰性加载模块</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appRouting()">ng.module 导入惰性加载模块</button>
			<p class="mvvm-code mt10">｛ path: 'async-one', <b>loadChildren</b>: './views/router/async/one/asyncOne.module<b>#Module</b>' ｝</p>
		</nav>
	`
})

export class AsyncOne{
	
	constructor(private router: RouterService){ }
    
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/async/one/asyncOne.ts';
	}
    
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/async/one/asyncOne.module.ts';
	}
    
	appRouting(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ng.module.ts';
	}
}
