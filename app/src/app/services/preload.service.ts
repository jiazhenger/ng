import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// 预加载指定路由

@Injectable()
export class PreloadService implements PreloadingStrategy {
	
	preloadedModules: string[] = [];
	
	preload(route: Route, load: () => Observable<any>): Observable<any> {
		
		// { path: '', component:'', data: { preload:true }}
		// 只有 preload 为 true 时才预加载
		
		console.log(route.data['preload'])
		
		if (route.data && route.data['preload']) {
			
			this.preloadedModules.push(route.path);		// 预加载
		
			return load();
			
		} else {
			return Observable.of(null);
		}
	}
	
}