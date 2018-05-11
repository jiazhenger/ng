import { Component } from '@angular/core';
import { Router } from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<div class="samebox">
			<button class="btn-default" (click) = "component()">本组件</button>
		</div>
			
		<div class="lh30 mvvm-code samebox mt10">
	        <dl class="mvvm-list">
	        	<dt>routerLink 所在元素上可添加的属性: </dt>
	        	<dd><b>routerLink="/query"</b> == <b>[routerLink]="['/query']"</b> 路由</dd>
	        	<dd><b>routerLinkActive="active"</b> 链接当前样式</dd>
	        	
	        	<dd><b>[queryParams]="｛ id:100 ｝"</b>  可选参数（?id=100&name=1）</dd>
	        	<dd><b>fragment="hash"</b> 带 #hash</dd>
	        	<dd><b>preserveFragment = "true"</b> 保留之前路由中的锚点 #hash</dd>
	        	<dd><b>skipLocationChange = "true"</b> 默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效</dd>
	        	<dd><b>replaceUrl = "true"</b> 无历史记录跳转路由</dd>
	        	<dd><b>relativeTo = "route"</b> 相对路由</dd>
	        	<dd><b>[routerLinkActiveOptions]="｛ exact: true }"</b> 严格匹配路由</dd>
	        </dl>
        </div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
		        <dl class="mvvm-list">
		        	<dt>无参数模板路由: </dt>
		        	<dd><b>routerLink="/query"</b></dd>
		        	<dd><b>[routerLink]="['/query']"</b></dd>
		        	<dd><b>routerLink="/query" fragment="hash"</b> 带 #hash</dd>
		        </dl>
	        </div>
		        
	        <div>
	        	<p class="mt10"><a routerLink="/ng/query" routerLinkActive="active" class="btn-o">routerLink="/query"</a></p>
	        	<p class="mt10"><a [routerLink]="['/ng/query']" routerLinkActive="active" class="btn-o">[routerLink]="['/query']"</a></p>
	        	<p class="mt10"><a routerLink="/ng/query" routerLinkActive="active" fragment="hash" class="btn-o">routerLink="/query" fragment="hash"</a></p>
	        </div>
        </div>
	        
	    <div class="samebox mt10">
	    	<div class="lh30 mvvm-code">
		        <dl class="mvvm-list">
		        	<dt>必选参数模板路由: </dt>
		        	<dd><b>routerLink="/router-param/10"</b></dd>
		        	<dd><b>[routerLink]="['/ng/router-param/100']"</b> === [routerLink]="['/router-param', 100]</dd>
		        </dl>
	        </div>
	        <div>
	        	<p class="mt10"><a routerLink="/ng/router-param/300" routerLinkActive="active" class="btn-o">routerLink="/router-param/300"</a></p>
	        	<p class="mt10"><a [routerLink]="['/ng/router-param/500']" routerLinkActive="active" class="btn-o">[routerLink]="['/router-param/500']"</a></p>
	        	<p class="mt10"><a [routerLink]="['/ng/router-param', 200]" routerLinkActive="active" class="btn-o">[routerLink]="['/router-param', 200]"</a></p>
	        </div>
	    </div>
	     
	    <div class="samebox mt10">
	    	<div class="lh30 mvvm-code">
		        <dl class="mvvm-list">
		        	<dt>可选参数模板路由: </dt>
		        	<dd><b>[routerLink]="['/query',｛ cid:100 ｝]"</b> ;id=0;name=2</dd>
		        	<dd><b>routerLink="/router-param/200" [queryParams]="｛ cid:100 ｝"</b> ?id=0&name=2</dd>
		        	<dd><b>[routerLink]="['/router-param/100',｛ aid: 200 ｝],｛ queryParams:｛ cid:600 ｝,fragment: 'anchor'｝"</b> /:id(必选参数) + ;id=0;name=2(可选参数) + ?id=0&name=2(可选参数) + #anchor</dd>
		        </dl>
	        </div>
	        <div>
	        	<p class="mt10"><a routerLink="/ng/query" [queryParams]="{ cid:100 }" routerLinkActive="active" class="btn-o">routerLink="/query" [queryParams]="｛ cid:100 ｝"</a></p>
	        	<p class="mt10"><a routerLink="/ng/router-param/200" [queryParams]="{ cid:100 }" routerLinkActive="active" class="btn-o">routerLink="/router-param/200" [queryParams]="｛ cid:100 ｝"</a></p>
			    <p class="mt10"><a [routerLink]="['/ng/query', { aid:100 }]" routerLinkActive="active" class="btn-o">[routerLink]="['/query',｛ aid:100 ｝]"</a></p>
			    <p class="mt10"><a [routerLink]="['/ng/query', { aid:100 }]" [queryParams]="{ aid:100 }" routerLinkActive="active" class="btn-o">[routerLink]="['/query',｛ aid:100 ｝]" [queryParams]="｛ aid:100 ｝</a></p>
				<p class="mt10"><a [routerLink]="['/ng/router-param/100', { aid:200 }]" [queryParams]="{ cid:100 }" fragment="anchor" routerLinkActive="active" class="btn-o">[routerLink]="['/router-param/100',｛ aid:200 ｝]" [queryParams]="｛ cid:100 ｝ fragment="anchor"</a></p>
	        </div>
	    </div>
	    
	    <div class="samebox mt10">
			<div class="lh30 mvvm-code">
		        <dl class="mvvm-list">
		        	<dt>无历史记录路由: </dt>
		        	<dd><b>routerLink="/query" replaceUrl="true"</b></dd>
		        </dl>
	        </div>
		        
	        <div>
	        	<p class="mt10"><a routerLink="/ng/query" replaceUrl="true" class="btn-o">routerLink="/query" replaceUrl="true"</a></p>
	        </div>
        </div>
	    
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>到指定路由出口: </dt>
					<dd><b>[routerLink]="[｛ outlets: ｛ popup: ['code'] ｝ ｝]"</b> 不起作用</dd>
				</dl>
			</div>
			<div>
				<p class="mt10"><a [routerLink]="[{ outlets: { popup: ['code'] } }]" routerLinkActive="active" class="btn-o">[routerLink]="[｛ outlets: ｛ popup: ['code'] ｝ ｝]"</a></p>
			</div>
		</div>
	`
})

export class RouterNavComponent{
	
	constructor(public router: Router,private routers: RouterService,){ }
	
	component(){
		this.routers.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/nav/router-nav.component.ts';
	}
}
