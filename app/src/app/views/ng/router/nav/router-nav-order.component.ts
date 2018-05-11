import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<div class="samebox">
			<button class="btn-default" (click) = "component()">本组件</button>
		</div>
		<div class="samebox mt10">	
			<hr class="_mt10_mb10x">
			
			<div class="lh30 mvvm-code">
			    <dl class="mvvm-list">
					<dt>this.router.navigate(path,config): 路由第二参数 config 配置 </dt>
			    </dl>
			    <pre class="mvvm-pre">
｛
	<b>queryParams</b>: ｛ id:1, name:2 ｝,	// 可选参数配置
	<b>fragment</b>: 'hash',				// 带 #hash
	<b>preserveFragment</b>: true,			// 保留之前路由中的锚点 #hash
	<b>skipLocationChange</b>: true,		// 默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效
	<b>replaceUrl</b>: true,				// 无历史记录跳转路由
	<b>relativeTo</b>: this.route			// 相对路由
｝
				</pre>
			</div>
		</div>
			
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>无参数命令路由: </dt>
					<dd><b>this.router.navigate(['/query'])</b></dd>
				</dl>
			</div>
			
			<div>
				<p class="mt10"><a (click)="router.navigate(['/ng/query'])" routerLinkActive="active" class="btn-o">(click)="router.navigate(['/query'])"</a></p>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>必选参数命令路由: </dt>
					<dd><b>this.router.navigate(['/ng/router-param/300'])</b></dd>
					<dd><b>this.router.navigate(['/ng/router-param', 200])</b></dd>
				</dl>
			</div>
			<div>
				<p class="mt10"><a (click)="router.navigate(['/ng/router-param/300'])" routerLinkActive="active" class="btn-o">(click)="router.navigate(['/router-param/300'])"</a></p>
				<p class="mt10"><a (click)="router.navigate(['/ng/router-param', 200])" routerLinkActive="active" class="btn-o">(click)="router.navigate(['/router-param', 200])"</a>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>可选参数模板路由: </dt>
					<dd><b>this.router.navigate(['/query', ｛ cid:100, name:'ng4' ｝])</b> ;id=0;name=2</dd>
					<dd><b>this.router.navigate(['/query'],｛ queryParams:｛ cid:600 ｝｝)</b> ?id=0&name=2</dd>
					<dd><b>this.router.navigate(['/query/100',｛ aid: 200 ｝],｛ queryParams:｛ cid:600 ｝,fragment: 'anchor'｝)</b> /:id(必选参数) + ;id=0;name=2(可选参数) + ?id=0&name=2(可选参数) + #anchor</dd>
				</dl>
			</div>
			<div>
				<p class="mt10"><a (click)="router.navigate(['/ng/query'],{ queryParams:{ cid:600 }})" class="btn-o">(click)="router.navigate(['/query'],｛ queryParams:｛ cid:600 ｝｝)"</a></p>
				
				<p class="mt10"><a (click)="router.navigate(['/ng/query', { aid:100, name:'ng4' }])" class="btn-o">(click)="router.navigate(['/query', ｛  aid:100, name:'ng4' ｝])"</a></p>
				<p class="mt10"><a (click)="router.navigate(['/ng/query', { aid:100, name:'ng4' }],{ queryParams:{ aid:100, name:'vue2' } })" class="btn-o">(click)="router.navigate(['/query', ｛  aid:100, name:'ng4' ｝],｛  queryParams:｛cid:100,name:'vue2' ｝｝)"</a></p>
				
				<p class="mt10"><a (click)="router.navigate(['/ng/router-param', 200],{ queryParams:{ cid:100, name:'ng4' } })" class="btn-o">(click)="router.navigate(['/router-param', 200],｛  queryParams:｛ cid:500,name:'100' ｝｝)"</a></p>
				<p class="mt10"><a (click)="router.navigate(['/ng/router-param/200'],{ queryParams:{ cid:800, name:'vue2' },fragment: 'anchor' })"class="btn-o">(click)="router.navigate(['/router-param/200'],｛  queryParams:｛ cid:800, name:'vue2', fragment: 'anchor' ｝｝)"</a></p>
				
				<p class="mt10"><a (click)="router.navigate(['/ng/router-param/200', { aid:100, name:'ng4' }],{ queryParams:{ cid:500, name:'vue2' },fragment: 'anchor' })"class="btn-o">(click)="router.navigate(['/router-param/200',｛ aid:100, name:'ng4' ｝],｛  queryParams:｛ cid:500, name:'vue2', fragment: 'anchor' ｝｝)"</a></p>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>相对导航(默认值为根路由，设置后相对当前路由跳转): </dt>
					<dd><b>this.router.navigate(['./'], ｛ relativeTo: route ｝)</b> == <b>this.router.navigate(['.'], ｛ relativeTo: route ｝)</b> 相对于当前级别的 </dd>
					<dd><b>this.router.navigate(['./'], ｛ relativeTo: route ｝)</b> 上一级 </dd>
					<dd><b>this.router.navigate(['/user'], ｛ relativeTo: route ｝)</b> 相对路由 </dd>
				</dl>
			</div>
			<div>
				<p class="mt10"><a (click)="router.navigate(['./'], { relativeTo: route })" class="btn-o">(click)="router.navigate(['./'], ｛ relativeTo: route ｝)"</a></p>
				<p class="mt10"><a (click)="router.navigate(['.'], { relativeTo: route })" class="btn-o">(click)="router.navigate(['.'], ｛ relativeTo: route ｝)"</a></p>
				<p class="mt10"><a (click)="router.navigate(['../'], { relativeTo: route })" class="btn-o">(click)="router.navigate(['../'], ｛ relativeTo: route ｝)"</a></p>
			</div>
		</div>
    
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>到指定路由出口: </dt>
					<dd><b>this.router.navigate([｛ outlets: ｛ popup: ['code'] ｝ ｝,｛queryParams:｛id:10｝｝]</b> popup == router-outlets 的  name; code == ｛path:'code'｝</dd>
					<dd><b>this.router.navigate([｛ outlets: ｛ popup: null ｝ ｝])</b> 清除指定路由出口</dd>
				</dl>
			</div>
			<div>
				<p class="mt10"><a (click)="router.navigate([{ outlets: { popup: ['code'] } }])" class="btn-o">(click)="router.navigate([｛ outlets:｛ popup: ['code'] ｝ ｝])"</a></p>
				<p class="mt10"><a (click)="router.navigate([{ outlets: { popup: ['code'] } }],{queryParams:{id:10}})" class="btn-o">(click)="router.navigate([｛ outlets:｛ popup: ['code'] ｝ ｝,｛queryParams:｛id:10｝｝])"</a></p>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>无历史记录路由: </dt>
					<dd><b>this.router.navigate(['/query'],｛replaceUrl:true｝)</b></dd>
				</dl>
			</div>
			
			<div>
				<p class="mt10"><a (click)="router.navigate(['/ng/query'],{replaceUrl:true})" routerLinkActive="active" class="btn-o">(click)="router.navigate(['/query'],｛replaceUrl:true｝)"</a></p>
			</div>
		</div>
	`
})

export class RouterNavOrderComponent{
	
	constructor(public router: Router, public route:ActivatedRoute, private routers: RouterService,){ }
    
	component(){
		this.routers.go({ popup: 'code' }, { 'id': 10});
		localStorage.code = 'views/ng/router/nav/router-nav-order.component.ts';
	}
}
