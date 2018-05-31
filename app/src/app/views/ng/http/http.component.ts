// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
import { HttpService } from 'src/app/services/http.service';
// ===================================================== 
@Component({
    template: `
    	<div class="samebox btn-group">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "service()">查看服务</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
	        <dl class="mvvm-list">
	        	<dt>Http 请求数据:  </dt>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        <nav class="btn-group">
	        <button class="btn-default" (click)="service()">get 文本</button>
	        <button class="btn-default" (click)="getToken()">获取 token</button>
	        <button class="btn-default" (click)="getData()">获取获取</button>
	        <button class="btn-default" (click)="postData()">提交数据</button>
	        <button class="btn-default" (click)="router.reload()">刷新当前页面</button>
        </nav>
    `
})
export class HttpComponent{
	
	constructor(public router: RouterService, private http:HttpService){ }
	
	getToken(){
		console.log(localStorage)
	}
	
	getData(){
		
	}
	
	postData(){
		
	}

	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/http/http.component.ts';
	}
	service(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'services/http.service.ts';
	}
}