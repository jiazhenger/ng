import { Component } from '@angular/core';
import { Router, 
	NavigationStart,
	RoutesRecognized,
	RouteConfigLoadStart,
	RouteConfigLoadEnd,
	NavigationEnd,
	NavigationCancel,
	NavigationError
} from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<div class="samebox btn-group">
			<button class="btn-default" (click) = "component()">本组件</button>
			<button class="btn-default" (click) = "app()">在入口组件监听路由</button>
		</div>
		<div class="lh30 mvvm-code samebox mt10">
			<dl class="mvvm-list">
				<dt>监听全局路由状态: </dt>
				<dd><b>this.router.events.subscribe(event => ｛｝)</b></dd>
				<dd><b>event instanceof NavigationStart</b>：在导航开始时触发</dd>
				
				<dd><b>event instanceof RouteConfigLoadStart</b>：在Router对一个路由配置进行惰性加载之前触发</dd>
				<dd><b>event instanceof RouteConfigLoadEnd</b>：在路由被惰性加载之后触发</dd>
				
				<dd><b>event instanceof RoutesRecognized</b>：在路由器解析完URL，并识别出了相应的路由时触发</dd>
				
				<dd><b>event instanceof NavigationEnd</b>：在导航成功结束之后触发</dd>
				
				<dd><b>event instanceof NavigationCancel</b>：在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了false</dd>
				<dd><b>event instanceof NavigationError</b>：在导航由于意料之外的错误而失败时触发</dd>
			</dl>
		</div>
	`
})

export class RouterEventComponent{
	
	constructor(public router: Router,private routers: RouterService,){ }
	
	ngOnInit(){
		this.router.events.subscribe(event => {
			if(event instanceof NavigationStart){
				console.log('NavigationStart == 在导航开始时触发')
			}else if(event instanceof RouteConfigLoadStart) {
				console.log('RouteConfigLoadStart == 在Router对一个路由配置进行惰性加载之前触发')
			}else if(event instanceof RouteConfigLoadEnd) {
				console.log('RouteConfigLoadEnd == 在路由被惰性加载之后触发')
			}else if(event instanceof RoutesRecognized) {
				console.log('RoutesRecognized == 在路由器解析完URL，并识别出了相应的路由时触发')
			}else if(event instanceof NavigationEnd) {
				console.log('NavigationEnd == 在导航成功结束之后触发')
			}else if(event instanceof NavigationCancel) {
				console.log('NavigationCancel == 在导航被取消之后触发')
			}else if(event instanceof NavigationError) {
				console.log('NavigationError == 在导航由于意料之外的错误而失败时触发')
			}
	    });
	}
	
	component(){
		this.routers.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/nav/router-event.component.ts';
	}
	app(){
		this.routers.go({ popup: 'code' });
		localStorage.code = 'app.component.ts';
	}
}
