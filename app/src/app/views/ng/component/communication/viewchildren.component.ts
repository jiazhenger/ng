// ===================================================== 
import { Component, ViewChildren } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 子组件
@Component({
	selector:'viewchildren',
	template: `
		<div class="mvvm-code mvvm-box-2">
			<h3>这是子组件</h3>
		</div>
	`
})
export class Child4Component{
	name = '子组件属性';
	msg = 'angular';
	doSomething(index:any) {
		let $this = this;
		// 此处需延时加载，否则，检查改变与当前改变会冲突，代码执行正确，但会导致报错
		setTimeout(()=>{
			switch(index){
				case 0:
					$this.name = '这是第一个组件的变量 name';
					break;
				case 1:
					$this.name = '这是第二个组件的变量 name';
					break;
				case 2:
					$this.name = '这是第三个组件的变量 name';
					break;
				default:
					$this.name = 'no value';
			}
		})
	}
}

// ===================================================== 
@Component({
    template: `
        <div class="samebox btn-group">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "module()">所在模块</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
        	<dl class="mvvm-list">
	        	<dt>@ViewChildren('要获取的子组件') 父取多子(同一个子组件调用多次), 在父组件中: </dt>
	        	<dd><b>@ViewChildren(Child4Component) children:Child4Component</b> 声明要通信的子组件</dd>
	        	<dd><b>@ViewChildren('child,fx') children:Child4Component;</b> #fx, ref-fx 声明</dd>
	        	<dd><b>@ViewChildren(Child4Component) children</b> 类型可省略</dd>
	        </dl>
        </div>
        
        <hr class="_mt10_mb10x">
        <div class="btn-group">
	        <button (click)="getChild()" class="btn-default">获取子组件的相同属性不同值</button>
	        <button (click)="getChild2()" class="btn-default">获取子组件的不相同属性</button>
        </div>
        
        <hr class="_mt10_mb10x">
        
        <viewchildren #child></viewchildren>
        
        <hr class="_mt10_mb10x">
        
        <viewchildren ref-fx></viewchildren>
        
        <hr class="_mt10_mb10x">
        <div class="mvvm-pre">子组件的属性: <s>{{childs | json }}</s></div>
    `
})

export class ViewChidrenComponent{
	childs = {}
	
	//@ViewChildren(Child4Component) children:Child4Component;			// 参数取：Child4Component
	@ViewChildren('child,fx') children:Child4Component;					// 参数取：#id
	
  	constructor(private router: RouterService){ }
  	
  	getChild(){
  		let arr:any = this.children; // 无法连写 this.children.map()，否则 npm start 会报错
  		this.childs = {};
		arr.map((v,i)=>{
  			this.childs[i] = v;
  		})
	}
  	
  	getChild2(){
  		let arr:any = this.children; // 无法连写 this.children.map()，否则 npm start 会报错
  		arr.map((v,i)=>{
  			v.doSomething(i);
  		})
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/component/communication/viewchildren.component.ts';
	}
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/component/cpt.module.ts';
	}
}
