// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "pipe()">查看自定义管道</button>
        </div>
        <div class="lh30 mvvm-code samebox mt10">
	        <dl class="mvvm-list">
	        	<dt>自定义管道 </dt>
	        </dl>
        </div>
        
        <ul class="samebox mt10">
        	<li *ngFor="let item of data | keys">{{ data[item] }}</li>
        </ul>
    `
})

export class MyPipeComponent{
	
	data={
		a: 'angular',
		b: 'vue',
		c: 'react'
	}
	
	constructor(private router: RouterService){ }
	
	pipe(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/pipe/pipe/keys.pipe.ts';
	}

	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/pipe/my-pipe.component.ts';
	}
}
