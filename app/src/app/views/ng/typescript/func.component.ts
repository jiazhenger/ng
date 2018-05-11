// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        </div>
        <div class="lh30 mvvm-code mt10">
        	<dl class="mvvm-list samebox">
	        	<dt>定义函数反回值类型: 若返回值为 <b>null</b>/<b>undefined</b> 匹配任何类型</dt>
	        	<dd>my()<b>:number</b>｛｝ 返回值为<s>数字</s></dd>
	        	<dd>my()<b>:string</b>｛｝ 返回值<s>字符串</s></dd>
	        	<dd>my()<b>:boolean</b>｛｝ 返回值<s>布尔值</s></dd>
	        	<dd>my()<b>:object</b>｛｝ 返回值<s>对象 ｛｝[ ]</s></dd>
	        	<dd>my()<b>:string/string/boolean/object/any[]</b>｛｝ 返回值为<s>数组</s></dd>
	        	<dd>my()<b>:void</b>｛｝ <s>无返回值</s></dd>
	        	<dd>my()<b>:never</b>｛throw new Error();｝ 是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型</dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>定义函数参数类型: </dt>
	        	<dd>my(a<b>?:string</b>,b<b>?:number</b>,c<b>?:boolean</b>,d<b>?:object</b>,e<b>?:string[]</b>)｛｝ </dd>
	        	<dd>@Output() myclick = new EventEmitter<b>&lt;string&gt;</b>(); #myclick 函数的参数只能是字符串</dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>定义可选参数:</dt>
	        	<dd>my(x<b>?:number</b>)｛｝ </dd>
	        	<dd>my(x<b>?:number[]</b>)｛｝ </dd>
	        </dl>
        </div>
    `
})

export class FuncComponent{
	constructor(private router: RouterService){ }
	
	a1():number{ return 1 }
	a2():string{ return '1' }
	a3():boolean{ return false }
	a4():object{ return {} }
	a5():object{ return [] }
	a6():string[]{ return ['1'] }
	a7():void{ }
	a8():never{ throw new Error(); }
	
	b1(a:string,b:number,c:boolean,d:object,e:string[],f?:any[]){
		console.log(a);
		console.log(b)
		console.log(c)
		console.log(d)
		console.log(e)
	}
	
	
	
	ngOnInit(){
		this.b1('1',2,true,{a:0},['1','2'])
	}
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/typescript/func.component.ts';
	}
}
