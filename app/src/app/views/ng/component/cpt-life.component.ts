// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "module()">所在模块</button>
        </div>

		<div class="lh30 mvvm-code samebox mt10">
        	<dl class="mvvm-list">
	        	<dt>组件生命周期: </dt>
	        	<dd><b>ngOnInit()</b>：在Angular初始化数据绑定输入属性之后初始化组件/指令。在第一次ngOnChanges之后</dd>
	        	<dd><b>ngAfterViewInit()</b>：在Angular创建了组件视图之后</dd>
	        	<dd><b>ngOnChanges()</b>：Angular设置数据绑定输入属性后的响应。该方法接收一个changes对象，包含当前值和变化前的值。在ngOnInit之前，当数据绑定输入属性的值发生变化时</dd>
	        	<dd><b>ngDoCheck()</b>：每次Angular变化检测时</dd>
	        	<dd><b>ngAfterContentInit()</b>：在Angular将外部内容放到视图内之后</dd>
	        	<dd><b>ngAfterContentChecked()</b>：在Angular检测放到视图内的外部内容的绑定后</dd>
	        	<dd><b>ngAfterViewChecked()</b>：在Angular检测了组件视图的绑定之后</dd>
	        	<dd><b>ngOnDestroy()</b>：在Angular销毁组件/指令之前的清理工作。取消订阅监控对象和取消事件处理函数，以避免内存泄漏</dd>
	        </dl>
        </div>
    `
})

export class CptLifeComponent{

  	constructor(private router: RouterService){ }
  	
  	// 在Angular初始化数据绑定输入属性之后初始化组件/指令。在第一次ngOnChanges之后
  	// 执行一次
  	ngOnInit(){
  		console.log('ngOnInit')
  	}
  	// 在Angular创建了组件视图之后, 显示了父组件视图之后才能访问
  	// jq dom 操作
  	// 执行一次
  	ngAfterViewInit(){
  		console.log('ngAfterViewInit')
  	}
  	// Angular设置数据绑定输入属性后的响应。该方法接收一个changes对象，包含当前值和变化前的值。在ngOnInit之前，当数据绑定输入属性的值发生变化时
  	// 执行一次
  	ngOnChanges(){
  		console.log('ngOnChanges')
  	}
  	// 每次Angular变化检测时
  	// 执行多次
  	ngDoCheck(){
  		console.log('ngDoCheck')
  	}
  	// 在Angular将外部内容放到视图内之后
  	// 执行一次
  	ngAfterContentInit(){
  		console.log('ngAfterContentInit')
  	}
  	// 在Angular检测放到视图内的外部内容的绑定后
  	// 执行多次
  	ngAfterContentChecked(){
  		console.log('ngAfterContentChecked')
  	}
  	// 在Angular检测了组件视图的绑定之后
  	// 执行多次
  	ngAfterViewChecked(){
  		console.log('ngAfterViewChecked')
  	}
  	// 在Angular销毁组件/指令之前的清理工作。取消订阅监控对象和取消事件处理函数，以避免内存泄漏，离开页面处理的代码
  	// 执行一次
  	ngOnDestroy(){
  		console.log('ngOnDestroy')
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/component/cpt-life.component.ts';
	}
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/component/cpt.module.ts';
	}
}
