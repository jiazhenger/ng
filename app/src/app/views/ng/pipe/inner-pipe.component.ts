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
	        	<dt>格式化时间: </dt>
	        	<dd><b>｛｛date | date : 'yyyy/MM/dd'｝｝</b>: <s>{{date | date : 'yyyy/MM/dd'}}</s></dd>
	        	<dd><b>｛｛date | date : 'yyyy-MM-dd hh:mm:ss'｝｝</b>: <s>{{date | date : 'yyyy-MM-dd hh:mm:ss'}}</s></dd>
	        	<dd><b>｛｛date | date : 'fullDate' | lowercase｝｝</b>: <s>{{date | date : 'fullDate' | lowercase}}</s></dd>
	        	<dd><b>｛｛date | date : 'shortDate'｝｝</b>: <s>{{date | date : 'shortDate'}}</s></dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>格式化数字: </dt>
	        	<dd><b>｛｛14 | number:'1.2-2'｝｝</b>'1.2-2'最小整数位1，最少小数位2，最多小数数位2: <s>{{14 | number:'1.2-2'}}</s> </dd>
	        </dl>
	        
	        <dl class="mvvm-list samebox mt10">
	        	<dt>格式化钱(布尔值为是否带前缀): </dt>
	        	<!--  打包会失败
	        		<dd>美元<b>｛｛123 | currency:$:'1.2-2'｝｝</b><s>{{123 | currency:$:'1.2-2'}}</s></dd>
	        	-->
	        	<dd>美元<b>｛｛123 | currency:'USD':'3.2-2'｝｝</b><s>{{123 | currency:'USD':'3.2-2'}}</s></dd>

				<dd>人民币<b>｛｛123 | currency:'RMB':'3.2-2'｝｝</b><s>{{123 | currency:'RMB':'3.2-2'}}</s></dd>
	        	<dd>人民币<b>｛｛123 | currency:'CNY':'3.2-2'｝｝</b><s>{{123 | currency:'CNY':'3.2-2'}}</s></dd>
	        	
	        	<dd>日元<b>｛｛123 | currency:'JPY':'1.2-2'｝｝</b><s>{{123 | currency:'JPY':'1.2-2'}}</s></dd>
	        	<dd>欧元<b>｛｛123 | currency:'EUR':'3.2-2'｝｝</b><s>{{123 | currency:'EUR':'3.2-2'}}</s></dd>
	        	<dd>英镑<b>｛｛123 | currency:'GBP':'3.2-2'｝｝</b><s>{{123 | currency:'GBP':'3.2-2'}}</s></dd>
	        	<dd>德国马克<b>｛｛123 | currency:'DEM':'3.2-2'｝｝</b><s>{{123 | currency:'DEM':'3.2-2'}}</s></dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>其它: </dt>
	        	<dd>json格式化成字符串<b>｛｛｛x:'json格式化成字符串'｝ | json｝｝</b><s>{{{x:'json格式化成字符串'} | json}}</s> </dd>
	        	<dd>转换为百分数<b>｛｛1.23456 | percent:'1.2-3'｝｝</b><s>{{1.23456 | percent:'1.2-3'}}</s> </dd>
	        	<dd>截取字符串（不包含结束位置）<b>｛｛'01234567890' | slice:1:4｝｝</b><s>{{'01234567890' | slice:1:4}}</s> </dd>
	        	<dd>转大写<b>｛｛"this is a demo" | uppercase｝｝</b><s>{{"this is a demo" | uppercase}}</s> </dd>
	        	<dd>转小写<b>｛｛"WHAT A WONDERFUL WORLD" | lowercase｝｝</b><s>{{"WHAT A WONDERFUL WORLD" | lowercase | slice:0:10}}</s> </dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>可连写: </dt>
	        	<dd><b>｛｛ data | json | slice:1:4 | uppercase | ...｝｝</b> </dd>
	        </dl>
        </div>
    `
})

export class InnerPipeComponent{
	
	date = new Date();
	
	constructor(private router: RouterService){ }

	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/pipe/inner-pipe.component.ts';
	}
}
