import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/http.service';
// ===================================================== 公共函数
@Injectable()
export class UploadService {
	
	constructor(private http:HttpService){}
	
	getUploadFileInfo(event){
		let stack = [];
		let files = event.target.files;
		
		let group = Object.keys(files);
		
		group.map((v,i)=>{
			stack.push(files[v])
		})
	
		return {
			files : files,
			list : stack,
			length : stack.length
		}
	}
	imgType = ['jpg','png','jpeg','gif'];
	isType(fileName,mimeType?:any){
		// 拼接正则表达式
		let str = '';
		let mtype = mimeType || this.imgType
		mtype.map((v,i)=>{
			if(mtype.length-1 == i){
				str += '\\.' + v + '$'
			}else{
				str += '\\.' + v + '$|'
			}
		})
		let reg = new RegExp(str,'gi');
		return reg.test(fileName)
	}
	
	// 选择文件并做处理判断
	fileSelect(files,option?:any){
		let list = this.http.$fn.isArray(files.list) ? files.list : [];
		
		let opt = {
			maxSize: 1024*2024,
			type: this.imgType
		}
		
		Object.assign(opt,option);
		
		let yesGroup = list.filter(v => this.isType(v.name,opt.type) && v.size <= opt.maxSize );
		let uploadGroup = {}
		
		yesGroup.map((v,i)=>{
			uploadGroup[i] = v;
		})
		
		let result =  {
			yesSize :  list.filter(v => v.size <= opt.maxSize ), 		// 大小合适
			noSize :  list.filter(v => v.size > opt.maxSize ),			// 过大
			
			yesType :  list.filter(v => this.isType(v.name,opt.type) ),	// 格式正确
			noType :  list.filter(v => !this.isType(v.name,opt.type) ),	// 格式有误
			
			result :  uploadGroup,	// 符合上传条件文件
			files : files.files,
			list : list
		}

		return result;
	}
	// 验证上传文件
	validatorUploader(files,config){
		// 开始上传
		let upload = this.fileSelect(files,config);
		
		let err = {}
		if(upload.list.length == 0){
			err['errcode'] = 1;
			err['msg'] = '请选择你要上传的文件';
			console.log('请选择你要上传的文件');
			return err;
		}
		if(upload.noSize.length > 0){
			err['errcode'] = 2;
			err['msg'] = '文件超过上传限制大小';
			console.log('文件超过上传限制大小');
			return err;
		}
		if(config.img){
			if(upload.noType.length > 0){
				err['errcode'] = 3;
				err['msg'] = '文件上传格式不正确';
				console.log('文件上传格式不正确');
				return err;
			}
		}
		
		return err
	}
	// FileReader 上传数据
	fileReaderUploader(files,config){
		return new Promise((resolve,reject)=>{
			let err = this.validatorUploader(files,config);
			
			if(this.http.$fn.hasObject(err)){
				resolve({data:null,err:err});
				return;
			}
			
			let $this = this;
			let api = config.imgApi;
			let file = files.files[0];
			
			let reader = new FileReader();
			reader.onload = function (e) {
				let param:any = { base64stream : this.result };
				// 统一上传
				$this.http.post(api,param).then(data=>{
					resolve({ data:data, err:null })
				},data=>{
					reject(data)
					console.log('上传失败')
				})
	        }
			reader.readAsDataURL(file);
			//reader.readAsText(file[0]);
		})
	}
	// FormData 上传数据
	formDataUploader(files,config){
		return new Promise((resolve,reject)=>{
			let err = this.validatorUploader(files,config);
			
			if(this.http.$fn.hasObject(err)){
				resolve({data:null,err:err});
				return;
			}
			let fd = new FormData();

	        fd.append("file", files.files[0]);
	        
	        console.log(fd.get('file'))	// 获取 formData 上的隐藏数据
	      
	        this.http.post(config.url,fd).then(data=>{
				resolve({ data:data, err:null })
			},data=>{
				reject(data)
				console.log('上传失败')
			})
		})
	}
}
