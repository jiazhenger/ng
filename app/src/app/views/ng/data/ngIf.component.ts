// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <button class="btn-default" (click) = "component()">查看本组件</button>
    	<hr class="_mt10_mb10x">
        <div class="lh30 mvvm-code">
	        <dl class="mvvm-list">
	        	<dt>*ngIf 条件表达式: </dt>
	        	<dd><b>*ngIf="isActive | async as user"</b></dd>
	        	<dd><b>*ngIf="show; else id"</b> &lt;ng-template <b>#id</b> <b>let-user</b>&gt;｛｛user|json｝｝&lt;/ng-template&gt;</dd>
	        	<dd><b>*ngIf="show; then id1; else id2"</b> &lt;ng-template <b>#id1</b> &gt;&lt;/ng-template&gt;&lt;ng-template <b>#id2</b> &gt;&lt;/ng-template&gt;</dd>
	        	<dd>then 模板除非绑定到不同的值，否则默认是 ngIf 指令关联的内联模板</dd>
	        	<dd>else 模板除非绑定对应的值，否则默认是 null</dd>
	        	<dd>
	        		<b>
	        			&lt;ng-template [ngIf]="condition"&gt;
	        			&lt;/ng-template&gt;
	        		</b>
	        	</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        <p>
        	<button class="btn-default" (click)= "isActive = !isActive">*ngIf="isActive"</button>
        	<span *ngIf="isActive as v">*ngIf="isActive" {{v}}</span>
        </p>
        <hr class="_mt10_mb10x">
        <p>
        	<button class="btn-default" (click)= "show = !show">show;else id</button>
        	<span *ngIf="show;else mybook">*ngIf="show"</span>
        	<ng-template #mybook>else 模板</ng-template>
        </p>
        <hr class="_mt10_mb10x">
        <p>
        	<button class="btn-default" (click)= "flag=!flag">show</button>
        	<span *ngIf="flag;then id1;else id2">默认模板 {{flag}}</span>
        	<ng-template #id1> then 模板</ng-template>
        	<ng-template #id2> else 模板</ng-template>
        </p>
        <ng-template [ngIf]="flag">[ngIf]=""</ng-template>
    `
})

export class NgIfComponent{
	
	isActive:boolean = false;
	show:boolean = true;
	flag:boolean = true;
	 	
  	constructor(private router: RouterService){
		
	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/data/ngIf.component.ts';
	}
	
}
