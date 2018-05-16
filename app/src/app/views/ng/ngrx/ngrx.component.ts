import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingOpen, LoadingClose, PromptOpen, PromptClose } from 'src/app/ngrx/actions';
// ===================================================== 
@Component({
    template: `
		<div class="samebox btn-group">
			<button class="btn-default" (click) = "component()">查看本组件</button>
			<button class="btn-default" (click) = "reducers()">查看 reducers</button>
			<button class="btn-default" (click) = "actions()">查看 actions</button>
		</div>
		<div class="lh30 mvvm-code mt10">
			<dl class="mvvm-list samebox">
				<dt>rgrx 状态管理: </dt>
				<dd><b>store.select('prompt').subscribe(v => this.prompt = v )</b> 获取 reducers 中 prompt 函数返回的值：<i>{{ prompt|json }}</i></dd>
				<dd><b>store.select('loading').subscribe(v => this.loading = v )</b> 获取 reducers 中 loading 函数返回的值：<i>{{ loading }}</i></dd>
			</dl>
			<dl class="mvvm-list samebox">
				<dt>改变 reducers 值: </dt>
				<dd><button class="btn-default" (click)="change()">loading 加载效果</button></dd>
				<dd><button class="btn-default" (click)="change2()">封装调用 loading 加载效果</button></dd>
				<dd><button class="btn-default" (click)="change3()">prompt 带参数提示</button></dd>
				<dd><button class="btn-default" (click)="change4()">封装调用 prompt 带参数提示</button></dd>
			</dl>
		</div>
		<div class="samebox mt10">
			获取全局配置值: {{ config | json }}
		</div>
	`
})

export class NgrxComponent{
	prompt:object;
	loading:boolean;
	config:any;
	
	constructor(private router: RouterService, private store: Store<any>, private http:HttpService){
		
	}
	
	ngOnInit(){
		this.store.select('prompt').subscribe(v => {
			this.prompt = v;
		});
		this.store.select('loading').subscribe(v => this.loading = v );
		
		this.store.dispatch({ type: 'init' });
		this.store.select('config').subscribe(v => this.config = v );
		console.log(this.store)
		//this.http.$fn.dispatch('init','config', v => this.config = v)
	}
	
	change(){
		this.store.dispatch({ type: 'LoadingOpen' });
		setTimeout(()=>{ this.store.dispatch({ type: 'LoadingClose' }) },1000)
	}
	
	change2(){
		this.http.$fn.loading()
	}
	
	change3(){
		this.store.dispatch(new PromptOpen('加载中...'));
		setTimeout(()=>{ this.store.dispatch(new PromptClose()) },1000)
	}
	
	change4(){
		this.http.$fn.prompt('正在加载中')
	}
	
	
	reducers(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ngrx/reducers.ts';
	}
	
	actions(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'ngrx/actions.ts';
	}

	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/ngrx/ngrx.component.ts';
	}
}
