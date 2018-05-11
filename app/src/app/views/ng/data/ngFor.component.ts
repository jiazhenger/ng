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
	        	<dt>三种方式循环数据绑定到模板: </dt>
	        	<dd><b>*ngFor</b>="<br>
	        			<b>let user of data | async as users;</b> <span class="ml30 mr30">解析数据: <i>data as users === users = data</i></span>异步循环：<i>| async</i><br><br>
	        			<b>index as i;</b>		<span class="ml30">索引值: <i>index: number</i></span><br>
	        			<b>first as isFirst;</b> <span class="ml30">第一个节点<i>first: boolean</i></span><br>
	        			<b>last as isLast;</b> 	<span class="ml30">最后一个节点<i>last: boolean</i></span><br>
	        			<b>even as isEven;</b> 	<span class="ml30">偶数节点<i>even: boolean</i></span><br>
	        			<b>odd as isOdd;</b>		<span class="ml30">奇数节点<i>odd: boolean</i></span><br> 
	        			<b>trackBy: trackByFn</b>	<span class="ml30">返回资源被判断为没有变化的依据</span>
	        		 "
	        	</dd>
				<dd>
					<b>&lt;ng-template ngFor let-item [ngForOf]="data" let-i="index" let-first="first" let-last="last" let-odd="odd" let-even="even" [ngForTrackBy]="trackByFn"&gt;</b><br>
						&lt;li&gt;...&lt;/li&gt;<br>
					<b>&lt;/ng-template&gt;</b>
				</dd>
				<dd><b>trackBy:trackByFn</b> trackByFn只能是函数,必须在类中声明,否则报错</dd>
	        </dl>
	       
	        <hr class="_mt10_mb10x">
			<h3>*ngFor 循环: </h3>
	   		<ul>
				<li *ngFor="let v of list as users; 
							index as index; 
							first as first; 
							last as last; 
							even as even;
							odd as odd;
							trackBy:trackByFn"
							(click)="delList(index)"
							[ngStyle]="{'font-size':first && '30px',
										'font-weight':odd && 'bold',
										'color':even && 'blue',
										'background':last && '#ccc'
							}"
				>{{index}} ====== {{v.name}}</li>
	   		</ul>
			<hr class="_mt10_mb10x">
	   		<h3>ng-template 循环: </h3>
	   		<ul>
	   			<ng-template ngFor let-v [ngForOf]="data" 
	   				let-index = index
	   				let-first = first
					let-last = last
					let-even = even
					let-odd = odd
					[ngForTrackBy] = "trackByFn"
	   			>
	   				<li	[ngStyle]="{'font-size':first && '30px',
									'font-weight':odd && 'bold',
									'color':even && 'blue',
									'background':last && '#ccc'}"
	   					(click)="delData(index)"
	   				>{{index}} ====== {{v}}</li>
	   			</ng-template>
	   		</ul>
        </div>
    `,
    styles:[`
    	.current{color:blue;font-weight:bold;}
    	.line{text-decoration:underline;}
    `]
})

export class NgForComponent{
	data = ['angular','react','vue','html5','css3','es6','java','php','asp.net'];
	
	list = [
		{name: 'angular',id:0},
		{name: 'react',id:2},
		{name: 'vue',id:3},
		{name: 'html5',id:4},
		{name: 'css3',id:5},
		{name: 'java',id:6},
		{name: 'php',id:7},
		{name: 'asp.net',id:8},
	]
	 	
  	constructor(private router: RouterService){
		
	}
  	
  	delList(index){
  		this.list.splice(index,1);
  	}
  	
  	delData(index){
  		this.data.splice(index,1);
  	}
  	
  	trackByFn(index,value){	// 自动获取 index, value
  		console.log(value)
  		return index;
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/data/ngFor.component.ts';
	}
	
}
