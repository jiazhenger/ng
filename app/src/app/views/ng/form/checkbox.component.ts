// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
import { CheckboxService } from 'src/app/services/checkbox.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox btn-group">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "service()">查看 CheckboxService 服务</button>
        </div>
    	
        <div class="lh30 mvvm-code samebox mt10">
			<dl class="mvvm-list">
	        	<dt>checkbox 多选框: </dt>
	        	<dd>[(ngModel)] 只能返回  Boolean 值</dd>
	        	<dd><b>#id</b> id.value ===  checkbox 中具体 value</dd>
	        	<dd><b>#id="ngModel"</b> id.value ===  Boolean 值</dd>
	        	<dd>在 多选框 checkbox  中,<b>id.value</b> 可以取 ngModel 导入出的值,如果只有 #id, 则  id == 表单元素的 value</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre mt10">双向绑定数据 form:<s>{{ model | json }}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre mt10">获取 checkbox 数据: <s>{{checkboxs | json}}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre mt10">提交表单后的 ngForm 数据: <s>{{data | json}}</s></div>
        
        
        <form (ngSubmit)="onSubmit(f.value,f.valid)" #f="ngForm" class="samebox mt10">
			<ul class="res-tr-tl clearfox _lh32">
				<li>
					<h6 class="col-sm-20">多选框：</h6>
					<div class="col-sm-80">
						<p class="_fl_mt10">
							<input type="checkbox" name="a" [(ngModel)]="model.checkbox.a" value="angular" (change)="change($event)">
							<input type="checkbox" name="b" [(ngModel)]="model.checkbox.b" value="react"  (change)="change($event)" class="mlr10">
							<input type="checkbox" name="c" [(ngModel)]="model.checkbox.c" value="vue"  (change)="change($event)">
						</p>
					</div>
				</li>
				<li class="mt20 res-btn">
					<h6 class="col-sm-20"></h6>
					<div class="col-sm-20"><button class="btn-default">确认</button></div>
				</li>
			</ul>
		</form>
		
    `,
})

export class CheckboxComponent{
	data:string;
	model:any = {
		checkbox : {}
	}
	checkboxs:any[] = [];

  	constructor(private router: RouterService, private checkbox:CheckboxService){ }
  	
  	ngOnInit(){
  		
  	}
  	
  	change(event){
  		this.checkboxs = this.checkbox.getCheckedValue(event,this.checkboxs);
  	}
  	
  	onSubmit(formData,valid){
  		if(valid){	// 表单通过验证
  			
  			formData.checkbox = this.checkboxs;
  			
  			this.data = formData;
  		}
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/checkbox.component.ts';
	}
	service(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'services/checkbox.service.ts';
	}
}
