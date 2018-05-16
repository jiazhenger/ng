import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box">
			<button class="btn-default" (click) = "component()">组件必须配置 routerOutlet</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "module()">@NgModule 子路由配置</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appRouting()">ng.module 导入子路由</button>
			<hr class="_mt10_mb10x">
			<button class="btn-o mr10" routerLink="/ng/child-async/test-a" routerLinkActive="active">到 A 子路由</button>
			<button class="btn-o mr10" routerLink="/ng/child-async/test-b" routerLinkActive="active">到 B 子路由</button>
			<button class="btn-o" routerLink="/ng/child-async/test-c" routerLinkActive="active">到 C 子路由</button>
			<hr class="_mt10_mb10x">
			<!-- 子路由出口 -->
			<router-outlet></router-outlet>
		</nav>
	`,
	styles:[`
		.active{border-color:#d6487e;color:#d6487e;}
	`]
})

export class ChildAsyncComponent{
	
	constructor(private router: RouterService){
		
	}
	
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/child/childAsync.component.ts';
	}
    
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/child/childAsync.module.ts';
	}
    
	appRouting(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ng.module.ts';
	}
}
