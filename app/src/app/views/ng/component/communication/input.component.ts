// ===================================================== 
import { Component, Input } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 子组件
@Component({
	selector:'test',
	template: `
		<div class="mvvm-code mvvm-box-2">
			<h3>这是子组件</h3>
			<div>{{name}}</div>
			<div>{{parent.msg2}}</div>
			<div>{{user}}</div>
			<div>{{hello}}</div>
			<div>{{woman}}</div>
			<div>{{woman}}</div>
			<div>{{sex}}</div>
		</div>
	`,
	inputs:['user','hello:fuck']
})
export class ChildComponent{
	user;
	hello;
	
	@Input() name:string;
	@Input() parent:any;
	@Input('girl') woman:string;
	
	sex;
	@Input() set run(v:any){	// 声明接收父组件变量的属性名, 并自动处理接收过来的 变量
		this.sex = '子组件处理父组件传递的数据: ' + v;
	}
}
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "module()">所在模块</button>
        </div>
        <div class="lh30 mvvm-code samebox mtb10">
        	<dl class="mvvm-list">
	        	<dt>@Input() 子取父组件传递来的属性变量, 在子组件中: </dt>
	        	<dd><b>@Input() hello:string</b>: 声明输入属性 , 在父组件中 ，子组件接收父级的的变量, <b>[hello]="父级的变量"</b></dd>
	        	<dd><b>@Input('sexAlias') sex:string</b>: 别名 sexAlias 用于父组件中子组件上, [sexAlias]="父级的变量", sex 用于子组件 this.sex</dd>
	        	<dd><b>inputs : ['name','user:userAlias','self']</b>: 挂在子组件的 @Component</dd>
	        	<dd><b>@Input() set defaultName(v:any)｛｝</b>: set 使用函数自动运行, 声明接收父组件变量的属性名, 并自动处理接收过来的 变量</dd>
	        </dl>
        </div>
       
        <test
        	[name]="msg1"
        	[parent]="this"
        	[user]="msg3"
        	[fuck]="msg4"
        	[girl]="'[girl]=str 获取父组件传入的字符串变量'"
        	
        	[run]="'默认自动运行'"
        ></test>
    `
})

export class InputComponent{
	msg1:string = '[name]="msg1" 父组件传入属性' ;
	msg2:string = '[parent]="this" 将父组件 this 对象传给子组件, parent 只能获取属性,不能获取方法';
	msg3:string = '[user]="msg3" user 在  inputs 里声明';
	msg4:string = '[fuck]="msg4" 用别名获取父组件属性';

  	constructor(private router: RouterService){ }
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/communication/input.component.ts';
	}
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ng/component/cpt.module.ts';
	}
}
