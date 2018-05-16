// ===================================================== app.component.ts 入口组件
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, keyframes, group} from '@angular/animations';
// ===================================================== rxjs
import { map, filter, mergeMap } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// ===================================================== ngrx
import { Store } from '@ngrx/store';
// ===================================================== 
@Component({
	selector: 'app-root',	// 根组件不可省略, 否则找不到位置
    template: `
        <router-outlet></router-outlet>
        <router-outlet name="popup"></router-outlet>
        <div *ngIf="show || prompt?.bool || loading" class="loading-wraper fxmc">
        	<dl class="loading-circle">
	        	<dd><i></i><i></i><i></i><i></i></dd>
	        	<dd><i></i><i></i><i></i><i></i></dd>
	        	<dd><i></i><i></i><i></i><i></i></dd>
			</dl>
        </div>
        <div *ngIf="show" class="loading-bar2 fix_lt"><div></div></div>
    `,
    styleUrls:[
    	'./views/pc/animation/loading/loading-line/style.css',
    	'./views/pc/animation/loading/loading-circle/style.css'
    ]
})

export class AppComponent{
	prompt:any;
	loading:boolean;
	constructor(
		private router: Router, 
		private activatedRoute: ActivatedRoute, 
		private titleService: Title,
		private store: Store<any>
	){
		// 获取 prompt
		store.select('prompt').subscribe(v =>{
			this.prompt = v || {}
		});
		// 获取 loading
		store.select('loading').subscribe(v =>{
			this.loading = v
		});
	}
	
	show:boolean = false;
	
	ngOnInit() {
		// 进入路由之前
		this.router.events.subscribe((event) => {
			if(event instanceof RouteConfigLoadStart){
				this.show = true;
			}else if(event instanceof RouteConfigLoadEnd){
				this.show = false;
			}
		});
		
		// 设置标题
		// rxjs5		
//		this.router.events.filter(event => event instanceof NavigationEnd)
//		.map(() => this.activatedRoute)
//		.map(route => {
//			while (route.firstChild) route = route.firstChild;
//			return route;
//		})
//		.filter(route => route.outlet === 'primary')
//		.mergeMap(route => route.data).subscribe((event) => {
//			this.titleService.setTitle(event['title'] || 'Angular 模板');
//		});

		// rxjs6
		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd), 
			map(() => this.activatedRoute),
			map(route => {
				while (route.firstChild) route = route.firstChild;
				return route;
			}),
			filter(route => route.outlet === 'primary'),
			mergeMap(route => route.data)
		).subscribe((event) => {
			this.titleService.setTitle(event['title'] ? 'Angular 模板-'+event['title'] : 'Angular 模板');
		});
	}
}
