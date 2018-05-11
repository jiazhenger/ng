// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
import { Animations } from 'app/views/ng/animation/animations';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
			<button class="btn-default" (click) = "directive()">查看指令</button>
        </div>
        
        <div class="lh30 mvvm-code mt10">
        	<dl class="mvvm-list samebox">
	        	<dt>属性型指令( 与组件通信一样处理 ): </dt>
	        	<dd><b>ez</b>: 无参数绑定指令</dd>
	        	<dd><b>[ez]="this"</b>: 有参数绑定指令</dd>
	        	<dd><b>[parnt]="this"</b>: 绑定属性</dd>
	        	<dd><b>(play)="start($event)"</b>: 绑定方法, 如果有参数传递, 必须有 $event</dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>属性型指令作用: </dt>
	        	<dd>修改父组件的属性</dd>
	        	<dd>修执行父组件的方法</dd>
	        	<dd>获取父组件元素的 DOM 对象</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
       
        <button ez [parent]="this" class="btn-default">修改父组件的属性</button>
        <button ez [parent]="this" (play)="start($event)" class="btn-default">执行父组件的方法</button>
        
        <button [ez]="'这是指令带的参数'" [parent]="this" class="btn-default">指令带参数</button>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">修改父组件的属性: <s>{{msg}}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">执行父组件的方法: <s>{{msg2}}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">指令带的参数是:<s>{{msg3}}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">指令带的参数是:<s>{{msg3}}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">指令获取指令绑定元素上指定属性的属性值: class=<s>{{msg4}}</s></div>
    `,
    animations: [ Animations ]
})

export class PropertyDirectiveComponent{
	msg = '将变量传入到指令中进行处理';
	msg2;
	msg3;
	msg4;
	
	constructor(private router: RouterService){ }
	
	start(v){
		this.msg = v;
	}
	
	go(){
		this.msg2 = '用 this.parent.go() 调用 父组件方法';
	}
	
	directive(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/directive/directive/property.directive.ts';
	}
	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/directive/property-directive.component.ts';
	}
}
