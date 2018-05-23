import { Injectable }       from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
	CanActivate,
	CanActivateChild,
	CanLoad,
	CanDeactivate,
	Resolve,
	
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	
	NavigationExtras,
	
	Route,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
// ===================================================== 获取数据
import { Data, DataService } from './data.service';
// ===================================================== CanDeactivate 返回值的类型
export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
// ===================================================== 组件
@Injectable()
export class AuthGuard implements CanActivate, 
								  CanActivateChild, 
								  CanLoad, 
								  CanDeactivate<CanComponentDeactivate>, // < > 中必须返回值的类型
								  Resolve<any>	// < > 中必须返回值的类型,
{
	constructor(private router: Router, private tit:Title, private DS:DataService) {}
	
	private setTitle(route){
		let title = route.data.title ? '-' + route.data.title : '';
		//this.tit.setTitle('Angular' + title);
	}
	
	// 在加载特性模块之前进行检查
	canLoad(route: Route): boolean{
		console.log('canLoad 最先检查')
		return true;
	}
	
	// 进入路由时, 检查路由的访问权限, 放在一级路由上面
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		console.log('canActivate 进入路由时检查')
		
		//this.setTitle(route);
		return true;
  	}
	// 检查子路由的访问权限, 放在子路由上面
	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('canActivateChild 子路由进入时检查')
		
		this.setTitle(route);
		return this.canActivate(route, state);
	}
	
	// 离开路由守卫之后, 检查子路由的访问权限, 放在子路由上面, 询问是否丢弃未保存的更改
	canDeactivate(component: CanComponentDeactivate) {
		console.log('canDeactivate 离开页面 ');
		return component.canDeactivate ? component.canDeactivate() : true;
	}
	
	// 预先获取组件数据
	// 导航前预先加载路由信息
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<any>{
		let routerInfo = {
			url : state.url,					// 链接路径
			params : route.params,				// 获取 /:id 参数
			queryParams : route.queryParams,	// 获取 ? 参数
			data : route.data					// 获取路由上的 data;
		}
		console.log(routerInfo)
		
		let id = route.paramMap.get('id');
		
		console.log(id)
		
		this.DS.data.then( data=> {
			console.log(data)
		})
		
		return this.DS.data.then( data=> {
			if(data){
				return data;
			}else{
				return null;
			}
		})
	}
}
/*
 	Resolve<Data>: 必须返回数据类型为 : export class Data { constructor(public id: number, public name: string) { } }
 	
 	resolve():Promise<Data>{
 		// 此时必须返回一个对象 {}
 		return data[0]
 	}
 */

/*
 	Resolve<any>: 可返回任何数据类型, 必须返回
 	resolve(){
 		
 	}
 */