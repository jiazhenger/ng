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
	        	<dt>模板引用变量( 仅用于表单元素 , 且只能在模板中即用): </dt>
	        	<dd><b>#</b>id</dd>
	        	<dd><b>#id="ngModel"</b> 仅用于 form 包含的表单中</dd>
	        	<dd><b>ref-</b>id</dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>$event 对象取得用户输入( 靠不住的做法 ): </dt>
	        	<dd><b>event.target.value</b>id</dd>
	        </dl>
        </div>
		
		<div class="samebox mt10">
			<p class="mt10">#id: <input #obj (keyup)="change1(obj)"> {{str}}</p>
        	<p class="mt10">#ref-fx: <input ref-fx (keyup)="change2(fx.value)"> {{some}}</p>
        	<p class="mt10">$event: <input (keyup)="change3($event)"> {{msg}}</p>
		</div>

    `
})

export class TemplateVarComponent{
	str;
	some;
	msg;
	
  	constructor(private router: RouterService){
		
	}
  	
  	change1(obj){
  		let _this = this;
  		setTimeout(()=>{
  			_this.str = obj.value
  		},200)
  	}
  	
  	change2(val){
  		let _this = this;
  		setTimeout(()=>{
  			_this.some = val
  		},200)
  	}
  	change3(event){
  		let _this = this;
  		setTimeout(()=>{
  			_this.msg = event.target.value;
  		},200)
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/template-var.component.ts';
	}
	
}
