import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/retry';
//import 'rxjs/add/operator/shareReplay';
//import 'rxjs/add/observable/forkJoin';
//import { Observable } from 'rxjs/Observable';
// ===================================================== api
const api = 'http://jc.1919.cn:8080/genius/api/';		// 外网
//const api = 'http://10.1.22.112:8080/genius/api/';		// 本地
// ===================================================== 定义数据类型
interface ItemsResponse {
	results: any[];
}
// ===================================================== 服务
import { LocalStorageService } from 'app/services/localStorage.service';
import { SessionStorageService } from 'app/services/sessionStorage.service';
import { RouterService } from './router.service';
// ===================================================== http 服务
@Injectable()
export class HttpService {
	$fn:any = {}
	constructor(private http:HttpClient, public router:RouterService, public $ls:LocalStorageService, public $ss:SessionStorageService){
		this.$fn = $ls.fn;
		this.router = router;
		//$ls.clear();
	}
	// 错误输出
	private logError(msg){
        console.log('%cj+2 错误提示：' + msg,'color:red');
    }
	// 友情提示
	private logPromp(msg){
        console.log('%cj+2 友情提示：' + msg,'color:#ce6007');
    }
	// 错误处理
	private error(err,url){
		if(err.status === 404){
			this.router.go('404',{api:url})
            this.logError('你访问的 api 不存在，请检查: '+  url);
        }else if(err.status === 500){
            this.logError('服务器内部错误: '+  url);
        }else if(err.status === 0){
            this.logError('可能存在服务器拒绝 cors 跨域请求 || 访问的服务器不存在 || 访问的 api 没有返回数据 || 访问的 api 返回数据格式错误：' + url);
        }else{
        	 this.logError('服务器出错：' + url);
        }
	}
	// header 配置
	private options(sync = false){
		let token = this.$ls.get('login').token;
			token = token ? token : '';
		return {
			headers: new HttpHeaders({
				'Content-Type': 'application/json;charset=utf-8',
				//'Content-Type': 'multipart/form-data;boundary=AaB03x'
				//'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'authorization' : token
			}),
			//.set("X-CustomHeader", "custom header value")
			//withCredentials : sync
		}
	}
	// 封装可选参数
	private getParam = (data) => {
		let str='';
		for(let i in data){
			str += i + '=' + data[i] + '&' 
		}
		return '?' + encodeURI(str);	// encodeURI 不对 [:, /, ;,?] 进行编码
	}
	// 处理请求参数
	private manageBody(body,promise){
		let mbody = body;
		if(this.$fn.isFunction(mbody)){
			mbody = body.call(promise);
			if(!this.$fn.isObject(mbody)){
				this.logError('请求参数是 函数时，必须返回一个对象参数 {}');
				return {}
			}
			return mbody;
		}else if(this.$fn.isObject(body)){
			return body;
		}else{
			//this.logPromp('请求参数格式有 {} 与 函数返回 {} 或不传三种, 如请求数据不正确，请确认是否需要传参');
			return {}
		}
	}
	// post 与 get 合在一起处理
	private httpRequest(url, body?:any, action = 'get', sync?:boolean){
		let $this = this;
		let options = sync ? this.options(true) : this.options();
        return new Promise((resolve, reject) => {
        	let promise;
        	let mbody =  this.manageBody(body,this);
        	if(action == 'get'){
        		let param = this.$fn.hasObject(mbody) ? this.getParam(mbody) : '';	// 给 get 添加 ? 可选参数
        		promise = this.http.get<ItemsResponse>(api + url + param, options);
        		console.log('%c' + action + ' === ' + api + url + param, 'color:blue')		// 输出 api
        	}else{
        		promise = this.http.post<ItemsResponse>(api + url, mbody, options);
        		console.log('%c' + action + ' === ' + api + url, 'color:blue')		// 输出 api
        	}
			promise
				//.retry(3)										// 遇到错误时自动重新发送这个请求3次
				.subscribe(data => { 							// 接口正确接收数据处理，{observe: 'response'} 读取完整的响应体
					console.log(data)
					let code = data['code'];
					if(code == 0){
						resolve(data['data']);
					} else if(code == 1919){	// 未登录
				    	//$this.logError('未登录或登录失效');
						//$this.token();								// 重新登录一次
						//window.location.reload();
				    }else {
						reject(data);
						this.logError('ajax请求畅通，返回后台程序容错信息：' + data['msg'])
					}
				}, (err:HttpErrorResponse) => { 					// 接口错误处理
					console.log(err)
					$this.error(err, api + url);
					alert('服务器出错')
				})
				//.shareReplay();	// 避免重复请求
		})
	}
	// 获取 token
	token(){
		let param = { "username": "admin","password": "admin" }
		this.post('tokens',param).then(data=>{
			this.$ls.set('login',{token:data['token'],userId:data['userId']});
    		console.log('登录成功');
    		//window.location.reload();
		},data=>{
			console.log(data)
			console.log('登录失败');
		})
	}
	// post 请求
	post(url,body?:any){ return this.httpRequest(url,body,'post');} // 异步
	postSync(url,body?:any){ return this.httpRequest(url,body,'post',true);} // 同步
	// get 请求
	get(url,body?:any){ return this.httpRequest(url,body,'get');} // 异步
	getSync(url,body?:any){ return this.httpRequest(url,body,'get',true);} // 同步
	// 并行发送多个请求
	posts(){
		/*
		Observable.forkJoin(
	        this.http.get('/courses/-KgVwEBq5wbFnjj7O8Fp.json'),
	        this.http.get('/courses/-KgVwECOnlc-LHb_B0cQ.json')
	    ).subscribe(
	        values => {
	            console.log("all values", values)
	        }
	    );*/
	}
	// 获取纯文本
	getTxt(url){
		//let api = 'http://10.1.22.15/angular/src/app/';					// 如果访问不了,查看是否配置了 MIME 类型
		//let api= 'http://127.0.0.1:8020/my-template/angular/src/app/';	// 本地访问
		let api= 'https://jiazhenger.github.io/ng/app/src/';				// github访问
		return new Promise((resolve, reject) => {
			this.http.get(api + url, { responseType: 'text' }).subscribe(data => {
				if(data){
					resolve(data);
				} else {
					reject(data);
				}
			})
		})
	}
}
