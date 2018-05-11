import { Component } from '@angular/core';
import { Router } from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<nav class="my-box">
			<button class="btn-default" (click) = "component()">本组件</button>
			<button class="btn-default" (click) = "test()">参数及片段测试组件</button>
		</nav>
		<div class="lh30 mvvm-code samebox mt10">
			<dl class="mvvm-list">
				<dt>无参数命令路由: </dt>
				<dd><b>this.router.navigate(['/fragment/'], ｛ queryParams:｛｝,fragment: 'anchor' ｝)</b></dd>
			</dl>
		</div>
		
		<div class="samebox mt10">
			<p class="mt10"><a (click)="router.navigate(['/ng/fragment/fragment-test'], { fragment: 'anchor' })" routerLinkActive="active" class="btn-o">(click)="router.navigate(['/fragment/'], ｛ fragment: 'anchor' ｝)"</a></p>
			<p class="mt10"><a (click)="router.navigate(['/ng/fragment/fragment-test'], { queryParams:{id:100,name:'summer'}, fragment: 'anchor' })" routerLinkActive="active" class="btn-o">(click)="router.navigate(['/fragment/'], ｛queryParams:｛id:100,name:'summer'｝, fragment: 'anchor' ｝)"</a></p>
		</div>
	`,
	styles:[`
		.active{border-color:#d6487e;color:#d6487e;}
	`]
})

export class FragmentComponent{
	
	constructor(public router: Router, public myRouter:RouterService){}
	
	component(){
		this.myRouter.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/fragment/fragment.component.ts';
	}
	
	test(){
		this.myRouter.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/fragment/test.component.ts';
	}
}
