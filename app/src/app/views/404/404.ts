// ===================================================== 
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// =====================================================
@Component({
	template: `
		<div class="h100"></div>
		<h2 *ngIf="!api;else id" class="_tc_f24_lh40">对不起,您访问的页面不存在</h2>
		<ng-template #id>
			<div class="_tc_f24_lh40">
				<h2>对不起,您访问的接口</h2>
				<h2 style="color:red;">{{api}}</h2>
				<h2>不存在</h2>
			</div>
		</ng-template>
		<nav class="_tc_mt20 ng-frame">
			<a (click)="router.back()" class="btn-default mr5">返回</a>
			<a (click)="router.go()" class="btn-default">到首页</a>
		</nav>
	`
})
export class PageNotFound{
	title = '404';
	
	api:any;
	
	constructor(public router: RouterService, private route:ActivatedRoute){ }
	
	ngOnInit(){
		this.api = this.route.snapshot.queryParamMap.get('id');
	}
}
