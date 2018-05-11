import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 组件
@Component({
	template: `
		<div class="samebox">
			<button class="btn-default" (click) = "component()">本组件</button>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>获取必选参数 /:id 与可选参数 ;id=100;name:200: </dt>
					<dd>this.route.<b>paramMap.subscribe(params => ｛ ｝)</b> 获取参数 <s>{{ mustParam1 | json }}</s></dd>
					
					<dd>this.route.<b>snapshot.paramMap.has('id')</b> 判断 id 是否存在 <s> {{ route.snapshot.paramMap.has('id') }} </s></dd>
					<dd>this.route.<b>snapshot.paramMap.get('id')</b> 获取指定 id <s> {{ route.snapshot.paramMap.get('id') }} </s></dd>
					<dd>this.route.<b>snapshot.paramMap.getAll('id')</b> 获取数组参数 <s> {{ route.snapshot.paramMap.getAll('id') | json }} </s></dd>
				</dl>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>获取可选参数( ?id=1&name=2 ): </dt>
					<dd>this.route.<b>queryParams.subscribe(params => ｛ ｝)</b> 获取参数 <s>{{ queryParam1 | json }}</s></dd>
					<dd>this.route.<b>queryParamMap.subscribe(params => ｛ ｝)</b> 获取参数 <s>{{ queryParam2 | json }}</s></dd>
					<dd>this.route.<b>snapshot.queryParamMap.has('id')</b> 判断 id 是否存在 <s> {{route.snapshot.queryParamMap.has('cid')}} </s></dd>
					<dd>this.route.<b>snapshot.queryParamMap.get('id')</b> 获取指定 id <s> {{route.snapshot.queryParamMap.get('cid')}} </s></dd>
					<dd>this.route.<b>snapshot.queryParamMap.getAll('id')</b> 获取数组参数 <s> {{route.snapshot.queryParamMap.getAll('cid') | json}} </s></dd>
				</dl>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>查询参数片段 </dt>
					<dd>this.route.<b>fragment.subscribe(fragment => ｛ ｝)</b> 获取参数片段 <s>{{ fragment }}</s></dd>
				</dl>
			</div>
		</div>
		
		<div class="samebox mt10">
			<div class="lh30 mvvm-code">
				<dl class="mvvm-list">
					<dt>ActivatedRoute 其它用法: </dt>
					<dd>this.route.<b>url.subscribe(data => ｛ ｝)</b> 获取 url 信息 <s>{{ url | json }}</s></dd>
					<dd>this.route.<b>data.subscribe(data => ｛ ｝)</b> 获取路由上的 data <s>{{ data | json }}</s></dd>
					<dd>this.route.<b>routeConfig</b> 获取当前路由上的信息  <s>{{ route.routeConfig | json }}</s></dd>
					<dd>this.route.<b>outlet</b> 获取路由名字 name,默认 primary <s>{{ route.outlet }}</s></dd>
					
					<dd>this.route.<b>parent</b> 如果有父级时, 获取父级路由  <s>{{ route.parent }}</s></dd>
					<dd>this.route.<b>firstChild</b> 如果是子级路由, 获取第一个路由  <s>{{ route.firstChild }}</s></dd>
					<dd>this.route.<b>children</b> 如果有父级时, 获取所有子级路由  <s>{{ route.children }}</s></dd>
				</dl>
			</div>
		</div>
	`
})

export class ParamComponent{
	mustParam1:any;
	mustParam2:any;
	
	queryParam1:any;
	queryParam2:any;
	
	fragment;
	
	url;
	data;
	
	constructor(public route: ActivatedRoute,private router: RouterService,){ }
	
	ngOnInit(){
		// ====================================================== 获取必选参数 /:id 与可选参数 ;id=100;name:200:
		// obj = ｛ params: ｛ ｝ ｝
		this.route.paramMap.subscribe(params => {
			this.mustParam1 = params;
		});
		// id = ""
		this.mustParam2 = this.route.snapshot.paramMap.get('id')
		// ====================================================== 获取可选参数
		// params = {}
		this.route.queryParams.subscribe(params => {
			this.queryParam1 = params;
		} );
		// obj = { params: {} }
		this.route.queryParamMap.subscribe(params => {
			this.queryParam2 = params
		});
		// ====================================================== 查询锚点
		this.route.fragment.subscribe(fragment => {		// 查询锚点
			this.fragment = fragment;
		});
		// ====================================================== 获取其它信息
		// 获取路由( {path:'',data:{}} )上的  data
		this.route.data.subscribe(data => {
			this.data = data;
		});
		// 获取 url
		this.route.url.subscribe(data => {
			this.url = data;
		});
		
		this.router.query(param=>{
			console.log(param)
		})
	}
    
	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/router/nav/param.component.ts';
	}
}
