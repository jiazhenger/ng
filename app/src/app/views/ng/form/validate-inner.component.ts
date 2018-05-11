// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
			<dl class="mvvm-list">
	        	<dt>表单验证: </dt>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre mt10">双向绑定数据 form: <s>{{ model | json }}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre mt10">提交表单后的 ngForm 数据: <s>{{ data | json }}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <form (ngSubmit)="onSubmit(f.value,f.valid)" #f="ngForm" class="samebox mt10">
			<ul class="res-tr-tl clearfox _lh32">
				<li>
					<h6 class="col-sm-20">非空：</h6>
					<div class="col-sm-80 _fl">
						<input type="text" name="summer" class="_w200 mr10"
							#summer="ngModel"
							[(ngModel)]="model.summer"
							required
						>
						<div *ngIf="summer.invalid && (summer.dirty || summer.touched)">
							<p *ngIf="summer.errors.required">非空 </p>
						</div>
					</div>
				</li>
				<li class="mt10">
					<h6 class="col-sm-20">长度验证：</h6>
					<div class="col-sm-80 _fl">
						<input type="text" name="username" class="_w200 mr10"
							#name="ngModel"
							[(ngModel)]="model.name"
							minlength="6"
							maxlength="10"
						>
						<div *ngIf="name.invalid && (name.dirty || name.touched)">
							<p *ngIf="name.errors.minlength">长度>= 6</p>
							<p *ngIf="name.errors.maxlength">长度<= 10</p>
						</div>
					</div>
				</li>
				<li class="mt10">
					<h6 class="col-sm-20">邮箱验证：</h6>
					<div class="col-sm-80 _fl">
						<input type="text" name="email" class="_w200 mr10"
							#email="ngModel"
							[(ngModel)]="model.email"
							email
						>
						<div *ngIf="email.invalid && (email.dirty || email.touched)">
							<p *ngIf="email.errors.email">必须是邮箱</p>
						</div>
					</div>
				</li>
				<li class="mt10">
					<h6 class="col-sm-20">正则验证：</h6>
					<div class="col-sm-80 _fl">
						<input type="text" name="num" class="_w200 mr10"
							#num="ngModel"
							[(ngModel)]="model.number"
							pattern = "[/0-9/]{6}"
						>
						<div *ngIf="num.invalid && (num.dirty || num.touched)">
							<p *ngIf="num.errors.pattern">必须是数字,且长度为 6</p>
						</div>
					</div>
				</li>
				<li class="mt20 res-btn">
					<h6 class="col-sm-20"></h6>
					<div class="col-sm-80"><button class="btn-default _w200_f16_h40">确认</button></div>
				</li>
			</ul>
		</form>
    `,
    styles:[`
    	form .ng-valid{color:green;}			/* 验证通过 */
    	form .ng-invalid{color:red}				/* 验证不通过 */
    	form .ng-pending{font-weight:bold;}
    	form .ng-pristine{color:blue;}			/* 表单全新未操作 */
    	form .ng-dirty{background:#eee;}		/* 表单已操作 */
    	form .ng-untouched{border-color:pink;}	/* 表单款操作*/
    	form .ng-touched{border-color:purple}	/* 表单已操作 */
    `]
})

export class ValidateInnerComponent{
	data:string;
	model:any = {}

  	constructor(private router: RouterService){ }
  	
  	onSubmit(formData,valid){
  		if(valid){
  			if(valid){	// 控件是有效
	  			this.data = formData;
	  		}
  		}
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/validate-inner.component.ts';
	}
	
}
