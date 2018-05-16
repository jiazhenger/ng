import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box samebox ng-frame">
			<button class="btn-default" (click) = "module()">带 @NgModule 的同步路由</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appRouting()">在模块 ng.moudule 配置</button>
		</nav>
	`
})

export class SyncHasNgModule{
	constructor(private router: RouterService){ }
    
    module(){
    	this.router.go({ popup: 'code' });
    	localStorage.code = 'views/ng/router/sync/syncHasNgModule.module.ts';
    }
    
    appRouting(){
    	this.router.go({ popup: 'code' });
    	localStorage.code = 'views/ng/ng.module.ts';
    }
}
