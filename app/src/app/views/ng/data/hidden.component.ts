// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <button class="btn-default" (click) = "component()">查看本组件</button>
    	<hr class="_mt10_mb10x">
        <div class="lh30 mvvm-code">
	        <dl class="mvvm-list">
	        	<dt>hidden 属性判断显示隐藏(注: hidden 是 html5 属性, 不是指令): </dt>
	        	<dd>&lt;div <b>[hidden]="condition"</b>&gt;</dd>
	        	<dd>&lt;div <b>hidden</b>&gt; 单独使用时,为 true</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        <button class="btn-default" (click)="show = !show">[hidden]</button>
        
        <p class="mt10" [hidden]="show">[hidden] 隐藏元素</p>
    `
})

export class HiddenComponent{
	
	show:boolean;
	
  	constructor(private router: RouterService){
		
	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/data/hidden.component.ts';
	}
	
}
