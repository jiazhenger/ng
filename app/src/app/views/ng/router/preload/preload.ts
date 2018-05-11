import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box">
			<button class="btn-default" (click) = "module()">@NgModule 只有惰性路由才能预加载</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "appRouting()">ng.module 预加载配置</button>
			<p class="mt10 mvvm-code">所有惰性路由预加载配置: <i>RouterModule.forRoot(router, ｛<b>preloadingStrategy: PreloadAllModules</b>｝)</i></p>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "service()">preload.service 按需预加载服务</button>
			<p class="mt10 mvvm-code">
				按需预加载配置:｛ path: 'preload', loadChildren: './views/router/preload/preload.module#Module', <b>data:｛ preload:true ｝</b> ｝
			</p>
		</nav>
	`
})

export class Preload{
	
	constructor(private router: RouterService){ }
    
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/preload/preload.module.ts';
	}
    
	appRouting(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ng.module.ts';
	}
	
	service(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'services/preload.service.ts';
	}
}
