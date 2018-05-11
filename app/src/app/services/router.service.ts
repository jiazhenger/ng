import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class RouterService {
    constructor(private router: Router, private route: ActivatedRoute){ }
	// ======================================================================== 原始导航
	Router(){ return this.router;}
  	Route(){return this.route;}
  	// ======================================================================== 自定义导航
    go(path:any='/',queryParam:object={},param:object={}):void {
    	if({}.toString.call(path) === '[object Object]'){
			this.popup(path)
		}else{
			this.push(path,queryParam,param)
		}
    }
    // popup 跳转
    popup(path:object):void{
    	let p = Object.keys(path);
		let popup = p[0];
		let name = path[popup];
		this.router.navigate([{ outlets: { popup: [name] } }]);
    }
    // 一般跳转
    push(path:string='/',queryParam:object={},param:object={}):void{
    	this.router.navigate([path,param], { queryParams:queryParam })
    }
    // 跳转无历史记录
    replace(path:string='/',queryParam:object={},param:object={}):void {
        this.router.navigate([path,param], { queryParams:queryParam,replaceUrl: true })
    } 
    // 返回历史记录
    back(n?:number):void {
    	let num = n || -1;
        //window.history.back(n);
        window.history.go(num);
    }
    // ======================================================================== 必选参数
    // 获取必选参数
    param(v:any){
    	if( typeof v == 'string'){
    		return this.route.snapshot.paramMap.get('id');
    	}else if( typeof v == 'function' ){
    		this.route.paramMap.subscribe(param => { v.call(this,param['params']) })
    	}
    }
    // 判断参数是否存在
    hasParam(id:string):boolean{
    	return this.route.snapshot.paramMap.has(id);
    }
	// ======================================================================== 可选参数
    // 获取可选参数
    query(v){
		if( typeof v == 'string'){
    		return this.route.snapshot.queryParamMap.get('id');
    	}else if( typeof v == 'function' ){
    		this.route.queryParams.subscribe(param => { v.call(this,param) })
    	}
    }
    // 判断参数是否存在
    hasQuery(id:string):boolean{
    	return this.route.snapshot.queryParamMap.has(id);
    }
    // ======================================================================== 其它路由操作
    // 刷新页面
    reload(){
    	//self.location.reload();
		window.location.reload();
    }
}
