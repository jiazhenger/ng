import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PromptOpen, PromptClose } from 'src/app/ngrx/actions';
/* ====================================== 全局方法  ====================================== */
@Injectable()
export class FnService {
	constructor(public store: Store<any>){}
	// ========================================================================  判断数据类型
	// 判断数据是否是对象 {}
	isObject(obj){
		return {}.toString.call(obj) == '[object Object]';
	}
	// 判断数据是否是对象{}，且对象长度 >0
	hasObject(obj){
		return this.isObject(obj) && Object.keys(obj).length > 0;
	}
	// 判断数据是否是函数 function
	isFunction(obj){
		return {}.toString.call(obj) === '[object Function]';
	}
	// 判断数据是否是数组 []
	isArray(obj){
		return {}.toString.call(obj) === '[object Array]';
	}
	// 判断数据是否是数级 []，且长度>0
	hasArray(obj){
		return this.isArray(obj) && obj.length > 0;
	}
	// 判断数据是否是字符串
	isString(obj){
		return {}.toString.call(obj) === '[object String]';
	}
	// 判断数据是否是数字
	isNumber(obj){
		return {}.toString.call(obj) === '[object Number]';
	}
	// 判断数据是否有效
	isValid(obj){
		return obj != undefined && obj !='' && obj != null && obj != NaN;
	}
	// 判断数据的有效性
	isData(obj){
		return this.hasArray(obj) || this.hasObject(obj) || this.isValid(obj);
	}
    // ======================================================================== 返回 ngFor 的 trakBy
    // 自动获取 index, value
    // 返回 index
    trackBy(index,value){
  		return index;
  	}
    // 返回 value
    trackByValue(index,value){
    	return value;
    }
    // 返回 id
    trackById(index,value){
    	return value['id'];
    }
    // ======================================================================== 阻止事件冒泡
    // 阻止冒泡不阻止默认行为
	stop(event){
		event.stopPropagation();
	}
	// 阻止冒泡并阻止默认行为
	prevent(event){
		event.preventDefault()
	}
	// ======================================================================== 数据处理
	// 获取 json 数据的 id值
	getIds(data=[],id='id'){
		let stack = [];
		data.map((v,i)=>{
			stack.push(v[id]);
		})
		return stack;
	}
	// ======================================================================== Store
	dispatch(type:string, param?:any, fn?:any){
		this.store.dispatch({ type:type  });
		if(param){
			this.getState(param,fn)
		}
	}
	// 获取 state
	getState(param:any,fn:any){
		this.store.select(param).subscribe(v => fn.call(this, v) );
	}
	// 加载效果
	loading(time?:number){
		this.store.dispatch({ type: 'LoadingOpen' });
		setTimeout(()=>{ this.store.dispatch({ type: 'LoadingClose' }) },time || 1000)
	}
	// 加载效果
	prompt(msg:string,time?:number){
		this.store.dispatch(new PromptOpen(msg));
		setTimeout(()=>{ this.store.dispatch(new PromptClose()) },time || 1000)
	}
}
