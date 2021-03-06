import { Injectable } from '@angular/core';
// ===================================================== 公共方法服务
import { FnService } from './fn.service';
// ===================================================== 本地存储服务
@Injectable()
export class LocalStorageService {
	constructor(public fn:FnService){}
	// ====================================== 设置存储
	set(key,value){
		let v = this.get(key);
		let mv = value;
		// 如果 v 存在，先取再存
		if(v){
			if(this.fn.isObject(v)){ // 如果是对象，则合并对象
				mv = Object.assign({},v,mv);
			}else if(this.fn.isArray(v)){
				v.push(mv);
				mv = v;
			}else{
				mv = value;
			}
		}
		// 如果 v 不存在，直接存
		if(this.fn.isObject(mv) || this.fn.isArray(mv)){
			mv = JSON.stringify(mv);
		}
		localStorage.setItem(key,mv);
	}
	// ====================================== 获取存储
	get(key){
		let k = localStorage.getItem(key);
		if(this.fn.isValid(k)){
			if( (k.substr(0,1) === '{' && k.substr(-1,1)==='}') || (k.substr(0,1) === '[' && k.substr(-1,1)===']')){
				return JSON.parse(k);
			}else{
				return k
			}
		}else{
			return false
		}
	}
	// ====================================== 输出全部信息
	output(){
		console.log(localStorage)
	}
	// ====================================== 列出指定 key
	remove(key?:any){
    	if(this.fn.hasArray(key)){
			key.map((v,i)=>{
				localStorage.removeItem(v);
			})
		}else{
			localStorage.removeItem(key);
		}
	}
	// ====================================== 清除全部
	clear(){
		localStorage.clear()
	}
}
