// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
    	<button class="btn-default" (click) = "component()">查看本组件</button>
    	<hr class="_mt10_mb10x">
        <div class="lh30 mvvm-code">
        	<dl class="mvvm-list">
	        	<dt>插值表达式绑定: </dt>
	        	<dd><b>｛｛var｝｝</b> 绑定单个变量: <s>{{title}}</s></dd>
	        	<dd><b>｛｛1+1｝｝｛｛1+1+var｝｝</b> 表达式简单计算: <s>{{1 + 1}}</s></dd>
	        	<dd><b>｛｛a ? m : n｝｝</b> 三元运算: <s>{{true ? 200 : 100}}</s></dd>
	        	<dd><b>｛｛today | date:'shortDate'｝｝</b> 管道: <s>{{today | date:'shortDate'}}</s></dd>
	        	<dd><b>｛｛data?.name｝｝</b> 安全导航操作符 ( <b>?.</b> ), 禁止对象属性不存在时报错: <s></s></dd>
	        	<dd><b>｛｛data!.name｝｝</b> 非空断言操作符( <b>!</b> ), 禁止对象属性非空报错 <s>{{data!.name}}</s></dd>
	        </dl>
	        <dl class="mvvm-list">
	        	<dt>插值表达式禁用: </dt>
	        	<dd>赋值 (=, +=, -=, ...)</dd>
	        	<dd>new运算符</dd>
	        	<dd>使用;或,的链式表达式</dd>
	        	<dd>自增或自减操作符 (++和--)</dd>
	        </dl>
	        <hr class="_mt10_mb10x">
	        <dl class="mvvm-list">
	        	<dt>绑定文本及 html 内容: </dt>
	        	<dd><b>[innerText]</b> 绑定文本: <s [innerText]="title"></s></dd>
	        	<dd><b>[textContent]</b> 绑定文本: <s [textContent]="title"></s></dd>
	        	<dd><b>[innerHtml]</b> 绑定 html: <s [innerHtml]="str"></s></dd>
	        </dl>
        	<hr class="_mt10_mb10x">
	        <dl class="mvvm-list">
	        	<dt>给 html 元素绑定属性:  </dt>
	        	<dd [attr.title]="'this is a name'">
	        		<b>[attr.</b>title<b>]</b> 
	        		<b>[attr.</b>name<b>]</b>
	        		<b>[attr.</b>id<b>]</b>
	        		<b>[attr.</b>自定义<b>]</b> 
	        	</dd>
	        	<dd><b>[src]</b>、<b>[attr.</b>src<b>]</b> </dd>
	        	<dd><b>[href]</b>、<b>[attr.</b>href<b>]</b></dd>
	        	<dd><b>[disabled]</b></dd>
	        </dl>
	        <hr class="_mt10_mb10x">
	        <dl class="mvvm-list">
		        <dt>绑定css样式</dt>
				<dd [class.current]="flag" class="name">[class.current]="true or false"</dd>
				
				<dd class="clearfix {{flag ? className : ''}}">class="name ｛｛flag ? className : ''｝｝"</dd>
				
				<dd [ngClass]="className">[ngClass]="'str'"、[ngClass]="var"</dd>
				
				<dd [ngClass]="{current:flag,line:flag}">[ngClass]=｛current:flag,line:flag｝</dd>
				
				<dd [style.color]="flag ? 'red' : 'green'">[style.color]="flag ? 'red' : 'green'"</dd>
				
				<dd [ngStyle]="{'color':flag ? 'red' : 'green','background-color':'yellow'}">[ngStyle]="｛'color':flag ? 'red' : 'green','background-color':'yellow'｝"</dd>
				
				<dd [style.width.px]="500" [style.background]="'#ccc'">[style.width.px]="500"</dd>
			</dl>
			<button class="btn-default" (click)="changeColor()">切换样式</button>
        </div>
    `,
    styles:[`
    	.current{color:blue;font-weight:bold;}
    	.line{text-decoration:underline;}
    `]
})

export class BindComponent{
	title:string = 'Hello Angular';
  	str:string = '<strong>Angular</strong>';
  	
  	data:any = {}
  	
  	className:string = 'current';
  	flag:boolean = false;
  	
  	today = new Date(); 
  	
  	constructor(private router: RouterService){
		
	}
  	
  	changeColor(){
  		this.flag = !this.flag;
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/data/bind.component.ts';
	}
	
}
