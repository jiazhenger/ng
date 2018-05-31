import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box ng-frame">
			<button class="btn-default" (click) = "component()">组件必须配置 routerOutlet</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "module()">@NgModule 子路由配置</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appModule()">ng.module 导入模块</button>
			<hr class="_mt10_mb10x">
			<button class="btn-o mr10" routerLink="/ng/child-sync/test-a" routerLinkActive="active" replaceUrl="false">到 A 子路由</button>
			<button class="btn-o mr10" routerLink="/ng/child-sync/test-b" routerLinkActive="active" replaceUrl="false">到 B 子路由</button>
			<button class="btn-o" routerLink="/ng/child-sync/test-c" routerLinkActive="active" replaceUrl="false">到 C 子路由</button>
			<hr class="_mt10_mb10x">
			<!-- 子路由出口 -->
			<router-outlet></router-outlet>
		</nav>
	`,
	styles:[`
		.active{border-color:#d6487e;color:#d6487e;}
	`]
})

export class ChildSyncComponent{
	
	constructor(private router: RouterService){
		
	}
	
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/child/childSync.component.ts';
	}
    
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/child/childSync.module.ts';
	}
    
	appModule(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ng.module.ts';
	}
}
