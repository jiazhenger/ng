import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box samebox">
			<button class="btn-default" (click) = "component()">到本组件</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "module()">@NgModule 惰性加载模块</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appRouting()">ng.module 导入惰性加载模块</button>
			<p class="mt10 mvvm-code">｛ path: 'async-many', <b>loadChildren</b>: './views/router/async/many/asyncMany.module<b>#AsyncManyModule</b>' ｝</p>
			<hr class="_mt10_mb10x">
			<button class="btn-o mr10" routerLink="asyn-group-a">到 A 路由</button>
			<button class="btn-o mr10" routerLink="asyn-group-b">到 B 路由</button>
			<button class="btn-o" routerLink="asyn-group-c">到 C 路由</button>
		</nav>
	`
})

export class AsyncMany{
	
	constructor(private router: RouterService){}
	
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/async/many/asyncMany.ts';
	}
    
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/async/many/asyncMany.module.ts';
	}
    
	appRouting(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ng.module.ts';
	}
}
