// ===================================================== 
import { Component, ViewChild } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
import { HttpService } from 'app/services/http.service';
import { UploadService } from 'app/services/upload.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
			<button class="btn-default" (click) = "service()">查看上传服务</button>
        </div>
    	
        <div class="lh30 mvvm-code samebox mt10">
			<dl class="mvvm-list">
	        	<dt>文件上传服务: </dt>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        <div>
			<button class="btn-default" (click)="fileReaderUpload()" >FileReader 上传</button>
			<button class="btn-default" (click)="formDataUpload()" >FormData 上传</button>
			<button class="btn-default" (click)="fileAllCancel();">全部取消</button>
			<button class="btn-default" (click)="fileAllDelete()" >清除列表</button>
			<button class="btn-default" (click)="http.token()" >登录</button>
			<span class="_ml20_f16 c1">{{errmsg}}</span>
        </div>
        <hr class="_mt10_mb10x">
		<div class="upload-file-btn rel">
			<a class="btn-default"><i class="font-cloud-upload"></i>ng上传文件
				<input type="file"
					#fileUpload
					(change)="selectedFileOnChanged($event)"
					multiple
				>
			</a>
		</div>
		
		<hr class="_mt10_mb10x">
		 
		<div class="mvvm-code">
			<p>选择文件个数: <i>{{fileLength}}</i></p>
			
			<dl>
				<li *ngFor="let v of uploads.list;index as index" (click)="del(index)" 
					[ngClass]="{c1:v?.size>maxSize || filters?.noType?.length > 0}"
					
				>
					<span class="mr10">名字: <i>{{v?.name}}</i></span>
					<span class="mr10">大小: <i>{{v?.size}} kb</i></span>
					<span class="mr10">类型: <i>{{v?.type}}</i></span>
					<span class="mr10">最后修改时间: <i>{{v?.lastModified |  date : 'yyyy-MM-dd hh:mm:ss'}}</i></span>
				</li>
			</dl>
		</div>
		<hr class="_mt10_mb10x">
		
		<img *ngFor="let v of uploadImg;index as i" [src]="v" (click)="delImg(i)">
		<a [href]="v" *ngFor="let v of uploadImg;index as i"  (click)="delImg(i)">文件</a>
    `,
    styles:[`
    	c1,.c1 i{color:red}
    `]
})

export class FileUploadComponent{
	constructor(private router: RouterService, public uploader:UploadService, public http:HttpService){ }
	
	@ViewChild('fileUpload') fileUpload;
	
	maxSize:number = 1024*1024;
	fileLength:number = 0;
	
	img:string='';
	errmsg:string;
	uploadImg:any = []
	
	// 选择文件
	uploads:any = {};
	// 删除上传之前的队列
	del(index){
		this.uploads.list.splice(index,1);
		console.log(this.uploads.list.length)
		if(this.uploads.list.length == 0){
			this.fileAllCancel();
		}
	}
	// 删除上传数据
	delImg(index){
		this.uploadImg.splice(index,1);
		if(this.uploadImg.length == 0){
			this.fileAllCancel();
		}
	}
	// 清空上传数据
	fileAllDelete(){
		this.uploadImg = [];
		this.fileAllCancel();
	}
	
	// 全部取消,重置 input file 框
	fileAllCancel(){
		this.fileUpload.nativeElement.value = '';	// 清空 input file
		this.uploads.list = []
		this.fileLength = 0;
	}
	// 选择文件
	selectedFileOnChanged(event){
		this.uploads = this.uploader.getUploadFileInfo(event);
		this.fileLength = this.uploads.list.length;
	}
	// FileReader 上传
	fileReaderUpload(){
		if(this.fileLength == 0){
			this.errmsg = '请先选择你要上传的文件';
			return;
		}
		this.errmsg = '正在上传中,请稍候......';
		this.uploader.fileReaderUploader(this.uploads,{
			imgApi: 'upload/streamUpload.do',
			fileApi: 'upload/fileUpload.do',
			maxSize : this.maxSize
		}).then((result:any) => {
			if(result.data){
				this.uploadImg.push(result.data)
				this.errmsg = '上传成功';
			}
			// 错误处理
			if(result.err){
				this.errmsg = result.err.msg;
			}
		})
	}
	// FormData 上传
	formDataUpload(){
		if(this.fileLength == 0){
			this.errmsg = '请先选择你要上传的文件';
			return;
		}
		this.errmsg = '正在上传中,请稍候......';
		this.uploader.formDataUploader(this.uploads,{
			url: 'upload/streamUpload.do',
			maxSize : this.maxSize
		}).then((result:any) => {
			if(result.data){
				this.uploadImg.push(result.data)
				this.errmsg = '上传成功';
			}
			// 错误处理
			if(result.err){
				this.errmsg = result.err.msg;
			}
		},(data)=>{
			this.errmsg = '上传失败';
		})
	}
	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/checkbox.component.ts';
	}
  	service(){
  		this.router.go({ popup: 'code' });
		localStorage.code = 'services/upload.service.ts';
  	}
}
