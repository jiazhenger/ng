// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 定义接口
export interface MyInterface {
	//canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean	// 定义函数反回值
	func:()=> string[],
	id:number,
	name:string
}
// ===================================================== 
@Component({
    template: `
        <div class="samebox btn-group">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        </div>
        <div class="lh30 mvvm-code mt10">
	        <dl class="mvvm-list samebox mt10">
	        	<dt>定义接口: </dt>
	        	<dd>my(a<b>?:string</b>,b<b>?:number</b>,c<b>?:boolean</b>,d<b>?:object</b>,e<b>?:string[]</b>)｛｝ </dd>
	        	<dd>@Output() myclick = new EventEmitter<b>&lt;string&gt;</b>(); #myclick 函数的参数只能是字符串</dd>
	        </dl>
        </div>
        <pre class="mvvm-pre samebox mt10">
	<b>export interface MyInterface ｛
		//canDeactivate: () => Observable&lt;boolean&gt; | Promise&lt;boolean&gt; | boolean	// 定义函数反回值
		func:()=> string[],
		id:number,
		name:string
	｝</b>
	
	<b>obj:MyInterface = ｛
		id:123,
		func()｛ return ['1'] ｝
		name: 'reactjs'
	｝</b>
		</pre>
    `
})

export class InterfaceComponent{
	constructor(private router: RouterService){ }
	
	obj:MyInterface = {
		id:123,
		func(){ return ['1'] },
		name: 'reactjs'
	}
	
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/typescript/interface.component.ts';
	}
}
