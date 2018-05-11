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
	        	<dt>[ngSwitch] 条件表达式: </dt>
	        	<dd>
	        		&lt;div <b>[ngSwitch]</b>="switch_expression"&gt;<br>
	        			&lt;p <b>*ngSwitchCase</b>="match_expression_1"&gt;&lt;/p&gt;<br>
	        			&lt;p <b>*ngSwitchCase</b>="match_expression_2"&gt;&lt;/p&gt;<br>
	        			&lt;p <b>*ngSwitchDefault</b>"&gt;&lt;/p&gt;<br>
	        		&lt;/div&gt;
	        	</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        <button class="btn-default" (click)="a=1">条件一</button>
        <button class="btn-default" (click)="a=2">条件二</button>
        <button class="btn-default" (click)="a=3">条件三</button>
        
        <div class="mt20" [ngSwitch]="a">
        	<p *ngSwitchCase="1">这是条件一</p>
        	<p *ngSwitchCase="2">这是条件二</p>
        	<p *ngSwitchCase="3">这是条件三</p>
        	<p *ngSwitchDefault>这是默认条件</p>
        </div>
    `
})

export class NgSwitchComponent{
	a;
	isActive:boolean = false;
	show:boolean = true;
	flag:boolean = true;
	 	
  	constructor(private router: RouterService){
		
	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/data/ngSwitch.component.ts';
	}
	
}
