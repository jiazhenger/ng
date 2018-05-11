// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
import { MyService } from './service/my.service';
// ===================================================== 
@Component({
    template: `
		<div class="samebox">
			<button class="btn-default" (click) = "component()">查看本组件</button>
			<button class="btn-default" (click) = "service()">查看服务</button>
		</div>
		<div class="lh30 mvvm-code mt10">
			<dl class="mvvm-list samebox">
				<dt>服务 </dt>
				<dd><b>constructor(private router: RouterService, public my:MyService)｛｝</b> 实例化服务</dd>
			</dl>
			
			<dl class="mvvm-list samebox mt10">
				<dt>private ｜ public：</dt>
				<dd>private 声明的服务只能在  Class 类中使用，无法再 template 模块中使用</dd>
				<dd>public 声明的服务在 Class 类和模板中都可使用</dd>
			</dl>
		</div>
		<div class="samebox mt10">
			<button class="btn-default" (click) = "play()">获取服务中的属性</button>
			<button class="btn-default" (click) = "start()">使用服务中的方法</button>
		</div>
		<pre class="mvvm-pre samebox mt10">{{data | json}}</pre>
	`,
	providers:[MyService]	// 服务隔离, 只在本组件及其子组件树中可用
})

export class ServiceComponent{
	data;
	
	constructor(private router: RouterService, public my:MyService){ }
	
	pipe(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/pipe/pipe/keys.pipe.ts';
	}
	
	play(){
		this.data = this.my;
	}
	
	start(){
		this.my.play();
	}
	
	service(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/service/service/my.service.ts';
	}

	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/service/service.component.ts';
	}
}
