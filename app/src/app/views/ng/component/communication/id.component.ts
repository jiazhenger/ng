// ===================================================== 
import { Component, ViewChildren } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 子组件
@Component({
	selector:'viewid',
	template: `
		<div class="lh30 mvvm-code">
			子组件
		</div>
	`
})
export class Child5Component{
	name = '子组件属性';
	msg = 'angular';
	
	dosomething(){
		alert('子组件的方法')
	}
}

// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "module()">所在模块</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
        	<dl class="mvvm-list">
	        	<dt>模板引用变量获取子组件, 在父组件中: </dt>
	        	<dd><b>#id</b></dd>
	        	<dd><b>ref-id</b></dd>
	        </dl>
        </div>
        
        <hr class="_mt10_mb10x">
        
        {{ child.name }}
        
        <hr class="_mt10_mb10x">
        
        <button (click)="child.dosomething()" class="btn-default">调用子组件的方法</button>
        
        <hr class="_mt10_mb10x">
        
        <viewid #child></viewid>
    `
})

export class IdComponent{
	
	constructor(private router: RouterService){ }
	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/communication/id.component.ts';
	}
  	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/cpt.module.ts';
	}
}
