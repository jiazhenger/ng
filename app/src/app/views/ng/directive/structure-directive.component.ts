// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
			<button class="btn-default" (click) = "directive()">查看指令</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
	        <dl class="mvvm-list">
	        	<dt>结构性指令(每个宿主元素上只能有一个结构型指令): </dt>
	        	<dd><b>*ngIf</b></dd>
	        	<dd><b>*ngFor</b></dd>
	        	<dd><b>ngSwitch</b></dd>
	        	<dd><b>&lt;ng-template&gt;&lt;/ng-template&gt;</b>: 用来渲染HTML, 它永远不会直接显示出来</dd>
	        	<dd><b>&lt;ng-container *ngFor="let h of heroes"&gt;&lt;/ng-container&gt;</b>: 把一些兄弟元素归为一组, Angular 不会把它放进 DOM 中</dd>
	        	<dd><b>*myDirective='condition'</b>: 自定义的结构型指令</dd>
	        </dl>
        </div>
        
        <hr class="_mt10_mb10x">
        <button (click)="condition=!condition" class="btn-default">自定义显示隐藏结构型属性</button>
        <hr class="_mt10_mb10x">
        <div class="mvvm-pre" *myUnless="condition"><s>自定义结构型属性</s></div>
    `
})

export class StructureDirectiveComponent{
	
	condition:boolean = false;
	
	constructor(private router: RouterService){ }
	
	directive(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/directive/directive/structure.directive.ts';
	}
	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/directive/structure-directive.component.ts';
	}
}
