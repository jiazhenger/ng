// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// =====================================================
enum Color { red=1,green=3,blue=6 }
class Data{
	constructor(id:number,name:string){}
}
// ===================================================== 
@Component({
    template: `
        <div class="samebox btn-group">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        </div>
        <div class="lh30 mvvm-code mt10">
	        <dl class="mvvm-list mvvm-list-1 samebox">
	        	<dt>简单强类型: </dt>
	        	<dd>const my<b>:boolean</b> <span>= true/false</span> <s># 布尔值</s></dd>
	        	<dd>const my<b>:number</b> <span>= 1</span> <s># 数字</s></dd>
	        	<dd>const my<b>:string</b> <span>= '字符串'</span> <s># 字符串</s></dd>
	        	<dd>const my<b>:object</b> <span>= ｛｝| [ ]</span> <s># 对象</s></dd>
	        	<dd>const my<b>:array</b> <span>= []</span> <s># 数组</s></dd>
	        	<dd>const my<b>:any</b> <span>= 1</span> <s># 以上任意数据类型</s></dd>
	        </dl>
	        <dl class="mvvm-list mvvm-list-1 samebox mt10">
	        	<dt>Array + type + []: </dt>
	        	<dd>const my<b>:number[]</b> <span>= [1,2,3]</span> <s># 数字数组</s></dd>
	        	<dd>const my<b>:string[]</b> <span>= ['1','2','3']</span> <s># 字符串数组</s></dd>
	        	<dd>const my<b>:object[]</b> <span>= [｛a:0｝,[0,1]]</span> <s># 对象数组</s></dd>
	        	<dd>const my<b>:any[]</b> <span>= []</span> <s># 以上任意数据类型数组</s></dd>
	        </dl>
	        <dl class="mvvm-list mvvm-list-1 samebox mt10">
	        	<dt>Array + 泛型的数组类型: </dt>
	        	<dd>const my<b>:Array&lt;number&gt;</b> <span>= [1,2,3]</span> <s># 数字数组</s></dd>
	        	<dd>const my<b>:Array&lt;string&gt;</b> <span>= ['1','2','3']</span> <s># 字符串数组</s></dd>
	        	<dd>const my<b>:Array&lt;object&gt;</b> <span>= [｛a:0｝,[0,1]]</span> <s># 对象数组</s></dd>
	        	<dd>const my<b>:Array&lt;any&gt;</b> <span>= []</span> <s># 以上任意数据类型数组</s></dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>Enum （枚举）: </dt>
	        	<dd><b>enum Color ｛ red=1,green=3,blue=6 ｝</b></dd>
	        	<dd><b>e1:Color = Color.green</b></dd>
	        	<dd><b>e2:number = Color.green</b></dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>联合类型: </dt>
	        	<dd>const my<b>:string[]|number|boolean</b> <span>= [1,2,3]</span> 数组字符串或数字</dd>
	        </dl>
        </div>
    `,
    styles:[`
    	.mvvm-list-1 b{display:inline-block;width:130px;margin-left:5px;}
    	.mvvm-list-1 span{display:inline-block;width:130px;color:#33691E;white-space:nowrap;}
    `]
})

export class TypeComponent{
	constructor(private router: RouterService){ }
	/* 简单类型 */
	a:boolean	= true;
	b:number	= 1;
	c:string	= 'string';
	d:object	= {};
	e:object = []
	/* 数组 */
	f:number[] = [0,1,2]
	g:string[] = ['0','1','2']
	h:object[] = [{a:0},[0,1]]
	i:any[] = [0,1,2]
	/* 泛型数组 */
	j:Array<number> = [0,1,2]
	k:Array<string> = ['0','1','2']
	l:Array<object> = [{a:0},[0,1]]
	m:Array<any> = [0,1,2]
	/* Enum （枚举） */
	e1:Color = Color.green
	e2:number = Color['red']
	/* 联合声明 */
	f1:string[] | number | boolean = true;
	ngOnInit(){
		console.log(this.e1)
		console.log(this.e2)
	}
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/typescript/type.component.ts';
	}
	
}
