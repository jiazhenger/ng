import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	selector: 'router-view',	// 如果是路由组件,此处可省略,默认用 <ng-component></ng-component> 包裹
	template: `
		<nav class="my-box">
			<button class="btn-default" (click) = "component()">同步组件</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appRouting()">在模块 ng.moudule 配置</button>
		</nav>
	`
})

export class SyncOnlyComponent{
	constructor(private router: RouterService){ }
    
    component(){
    	this.router.go({ popup: 'code' });
    	localStorage.code = 'views/ng/router/sync/syncOnlyComponent.ts';
    }
    
    appRouting(){
    	this.router.go({ popup: 'code' });
    	localStorage.code = 'views/ng/ng.module.ts';
    }
}
