import { Component } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// ===================================================== 组件
@Component({
	template: `
		<nav class="samebox">
			<div class="lh30">
				<p>查询参数片段</p>
				<p>参数: {{p | json}}</p>
				<p>锚点: {{anchor}}</p>
			</div>
			<hr class="_mt10_mb10x">
			<div style="height:800px"></div>
			<hr class="_mt10_mb10x">
			<div class="_tc_f30" style="height:100px;background:yellow;line-height:100px;">锚点处一</div>
			<hr class="_mt10_mb10x">
			<div style="height:800px"></div>
			<hr class="_mt10_mb10x">
			<div class="_tc_f30" style="height:100px;background:yellow;line-height:100px;">锚点处二</div>
			<hr class="_mt10_mb10x">
			<div style="height:800px"></div>
			<hr class="_mt10_mb10x">
			
			<a id="anchor">锚点 id</a>
			
			<div class="_tc_f30" style="height:100px;background:yellow;line-height:100px;">锚点处三</div>
			<hr class="_mt10_mb10x">
			<div style="height:1000px"></div>
		</nav>
	`,
})

export class TestComponent{
	title = '';
	p;
	anchor;
	
	constructor(private route:ActivatedRoute){
		
	}
	
	ngOnInit(){
		this.route.fragment.subscribe(fragment => {		// 查询锚点
			this.anchor = fragment;
		});
	
		this.route.queryParams.subscribe(params => {	// 查询可选参数
			this.p = params;
		})
	}
}
