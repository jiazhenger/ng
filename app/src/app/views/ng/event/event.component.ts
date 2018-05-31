// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox btn-group">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        </div>
        <div class="lh30 mvvm-code mt10">
	        <dl class="mvvm-list samebox">
	        	<dt>一般事件: </dt>
	        	<dd><b>(click)="a='str';b='str'"</b></dd>
	        	<dd><b>(mouseover) = "change()"</b></dd>
	        	<dd><b>(mouseout) = ""</b></dd>
	        	<dd><b>(mouseenter) = ""</b></dd>
	        	<dd><b>(mouseleave) = ""</b></dd>
	        	<dd><b>(mousedown) = ""</b></dd>
	        	<dd><b>(mouseup) = ""</b></dd>
	        	<dd><b>(keydown) = ""</b></dd>
	        	<dd><b>(keyup) = ""</b></dd>
	        	<dd><b>(keypress) = ""</b></dd>
	        </dl>
			<dl class="mvvm-list samebox mt10">
	        	<dt>表单事件: </dt>
	        	<dd><b>(focus) = "a='str';b='str'"</b></dd>
	        	<dd><b>(blur) = ""</b></dd>
	        	<dd><b>(change) = "change($event)"</b></dd>
	        	<dd><b>(ngModelChange) = "change($event)"</b></dd>
	        	<dd><b>(submit) = "submit(value,valid)"</b></dd>
	        </dl>
        </div>
        
		<div class="samebox mt10">
        	<button class="btn-default" (click)="change()">click</button>
        	<button class="btn-default" (mousedown)="change()">mousedown</button>
        	<button class="btn-default" (mouseup)="change()">mouseup</button>
		</div>
        
		<div class="samebox mt10">
        	<p>(blure): <input #key (blur)="inputBlur(key)"> {{value}}</p>
        	<p class="mt10">(change): <input #obj (change)="inputChange(obj)"> {{str}}</p>
        	<p class="mt10">(keyup): <input #a (keyup)="inputEnter(a.value)"> {{some}}</p>
		</div>
    `
})

export class EventComponent{
	value;
	str;
	some;
	
  	constructor(private router: RouterService){
		
	}
  	
  	change(){
  		alert('事件执行成功');
  	}
  	
  	inputBlur(obj){
  		this.value = obj.value;
  	}
  	
  	inputChange(obj){
  		this.str = obj.value + ' 输入改变'
  	}
  	
  	inputEnter(val){
  		this.some = val;
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/event/event.component.ts';
	}
	
}
