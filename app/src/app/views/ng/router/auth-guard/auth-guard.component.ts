import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box">
			<button class="btn-default" (click) = "component()">查看本组件</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "service()">auth-guard.service 路由守卫服务</button>
			<hr class="_mt10_mb10x">
			<button class="btn-default" (click) = "module()">ng.module 在路由上配置路由守卫</button>
			<hr class="_mt10_mb10x">
			<button class="btn-o mr10" routerLink="/ng/auth-guard/test-a" routerLinkActive="active">到 A 子路由</button>
			<button class="btn-o mr10" routerLink="/ng/auth-guard/test-b" routerLinkActive="active">到 B 子路由</button>
			<button class="btn-o" routerLink="/ng/auth-guard/test-c" routerLinkActive="active">到 C 子路由</button>
			<hr class="_mt10_mb10x">
			<!-- 子路由出口 -->
			<router-outlet></router-outlet>
			<hr class="_mt10_mb10x">
			<pre class="mvvm-pre">{{data}}</pre>
		</nav>
	`,
	styles:[`
		.active{border-color:#d6487e;color:#d6487e;}
	`]
})

export class AuthGuardComponent{
	data:any = [];
	
	constructor(private router: RouterService, private route:ActivatedRoute){
		
	}
	
	ngOnInit(){
		this.route.data.subscribe(data=>{	// 获取 resolve 返回的数据
			this.data = JSON.stringify(data,null,'\t');
		})
	}
	
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/auth-guard/auth-guard.component.ts';
	}
	
	service(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'services/auth-guard.service.ts';
	}
    
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ng.module.ts';
	}
}
