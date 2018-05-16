import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
	
	constructor(){	// 可再注入其它内置的或自定义的服务
		
	}
	
	name:string = '自定义服务';
	version:string = '1.0.0';
	isBack:boolean = true;
	
	play(){
		alert('服务中的方法')
	}
}
