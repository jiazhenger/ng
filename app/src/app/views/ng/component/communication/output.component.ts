// ===================================================== 
import { Component, Output, EventEmitter } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 子组件
@Component({
	selector:'tests',
	template: `
		<div class="mvvm-code mvvm-box-2">
			<h3>这是子组件</h3>
			<div class="mt10"><a (click)="change1()" class="btn-default">@Output传入父组件的变量</a></div>
			<div class="mt10"><a (click)="change2()" class="btn-default">@Output绑定一个别名监听</a></div>
			<div class="mt10"><a (click)="change3()" class="btn-default">outputs : ['cick'] 绑定事件</a></div>
			<div class="mt10"><a (click)="change4()" class="btn-default">outputs : ['dick:sick'] 绑定一个别名监听</a></div>
		</div>
	`,
	outputs : ['cick','dick:sick']
})
export class Child2Component{
	@Output() aick = new EventEmitter<string>();			// 暴露事件生产者
	
	@Output('myClick') bick = new EventEmitter<string>();	// myClick 为别名
	
	cick = new EventEmitter<string>(); // 声明 outputs 事件
	dick = new EventEmitter<string>();

	change1(){
		this.aick.emit(); // 触发父组件自定义绑定事件
	}
	change2(){
		this.bick.emit('@Output("事件出发，发射参数变量给父组件函数'); // 事件出发，发射参数变量给父组件函数
	}
	change3(){
		this.cick.emit('outputs 绑定监听事件');
	}
	change4(){
		this.dick.emit('outputs 绑定别名监听事件');
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
	        	<dt>@Output('别名') 监听父组件, 在子组件中: </dt>
	        	<dd><b>this.aick.emit()</b>: 触发父组件事件</dd>
	        </dl>
        </div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mb10">{{msg}}</div>
        
        <tests
        	(aick)="show(str)" 
			(myClick)="show($event)"
			(cick)="show($event)"
			(sick)="show($event)"
        ></tests>
    `
})

export class OutputComponent{
	
	str = '发射父组件变量';
	msg = '@Output属性输出：暴露事件生产者，比如 EventEmitter 对象';
	
  	constructor(private router: RouterService){ }
  	
  	show(m:string){
		this.msg = m;
		console.log(m)
	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/communication/output.component.ts';
	}
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/cpt.module.ts';
	}
}
