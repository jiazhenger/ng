// ===================================================== 
import { Component, ViewChild } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 子组件
@Component({
	selector:'test-viewchild',
	template: `
		<div class="mvvm-code mvvm-box-2">
			<h3>这是子组件</h3>
		</div>
	`
})
export class Child3Component{
	name = '子组件属性';
	doSomething(){
		alert('子组件方法')
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
	        	<dt>@ViewChild('要获取的子组件') 父取子, 在父组件中: </dt>
	        	<dd><b>@ViewChild(Child3Component) private test:Child3Component;</b> 声明要通信的子组件</dd>
	        	<dd><b>@ViewChild('fx') public test:Child3Component;</b> #id 声明</dd>
	        	<dd><b>@ViewChild('fx') test:Child3Component;</b> ref-id 声明</dd>
	        </dl>
        </div>
        
        <hr class="_mt10_mb10x">
        <button (click)="getChild()" class="btn-default">获取子组件的方法</button>
        <button (click)="getChild2()" class="btn-default">获取子组件的属性</button>
        <hr class="_mt10_mb10x">
        <test-viewchild ref-fx></test-viewchild>
    `
})

export class ViewChildComponent{
	
	@ViewChild(Child3Component) private test:Child3Component;		// 参数取：子组件类
	//@ViewChild('fx') test:Child3Component;				// 参数取：父组件中子组件的 #id 对象
	//@ViewChild('fx') test:Child3Component;				// 参数取：父组件中子组件的 ref-fx 对象
	
  	constructor(private router: RouterService){ }
  	
  	getChild(){
		this.test.doSomething();
	}
  	getChild2(){
  		alert(this.test.name)
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/communication/viewchild.component.ts';
	}
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/cpt.module.ts';
	}
}
