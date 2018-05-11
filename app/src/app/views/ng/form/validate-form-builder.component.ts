// ===================================================== 
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
//import { forbiddenNameValidator } from './directive/forbidden.directive';
// ===================================================== 接口
export interface myForm {
	username: string; // 必填，5-8个字符
	email: string; // 必填，有效的email格式
	password: string; // 必填，值要与confirmPassword值一样
	confirmPassword: string; // 必填，值要与password值一样
}
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        </div>
    	
        <div class="lh30 mvvm-code mt10">
        	<dl class="mvvm-list samebox">
	        	<dt>FormBuilder 函数验证: </dt>
	        	<dd><b>formControlName</b>="emails"</dd>
	        </dl>
	        <dl class="mvvm-list samebox mt10">
	        	<dt>FormGroup 判断验证是否正确: </dt>
	        	<dd>非空验证: <b>myForm.controls.emails.errors?.required</b>: <s>{{ myForm.controls.emails.errors?.required }}</s></dd>
	        	<dd>最小长度验证: <b>myForm.controls.emails.errors?.minLength</b>: <s>{{ myForm.controls.emails.errors?.minLength }}</s></dd>
	        	<dd>最大长度验证: <b>myForm.controls.emails.errors?.maxLength</b>: <s>{{ myForm.controls.emails.errors?.maxLength }}</s></dd>
	        	<dd>邮箱验证: <b>myForm.controls.emails.errors?.email</b>: <s>{{ myForm.controls.emails.errors?.email }}</s></dd>
	        	<dd>正则验证: <b>myForm.controls.emails.errors?.pattern</b>: <s>{{ myForm.controls.emails.errors?.pattern }}</s></dd>
	        </dl>
	        
	        <dl class="mvvm-list samebox mt10">
	        	<dt>FormGroup 判断验证是否正确: </dt>
	        	<dd>非空验证: <b>myForm.get('emails').errors?.required</b>: <s>{{ myForm.get('emails').errors?.required }}</s></dd>
	        	<dd>最小长度验证: <b>myForm.get('emails').errors?.minLength</b>: <s>{{ myForm.get('emails').errors?.minLength }}</s></dd>
	        	<dd>最大长度验证: <b>myForm.get('emails').errors?.maxLength</b>: <s>{{ myForm.get('emails').errors?.maxLength }}</s></dd>
	        	<dd>邮箱验证: <b>myForm.get('emails').errors?.email</b>: <s>{{ myForm.get('emails').errors?.email }}</s></dd>
	        	<dd>正则验证: <b>myForm.get('emails').errors?.pattern</b>: <s>{{ myForm.get('emails').errors?.pattern }}</s></dd>
	        </dl>
	        
	        <dl class="mvvm-list samebox mt10">
	        	<dt>FormGroup css 判断验证: </dt>
	        	<dd>验证不通过 : <b>myForm.get('emails').invalid</b>: <s>{{ myForm.get('emails').invalid }}</s></dd>
	        	<dd>验证通过: <b>myForm.get('emails').valid</b>: <s>{{ myForm.get('emails').valid }}</s></dd>
	        	<dd>表单全新未操作: <b>myForm.get('emails').pristine</b>: <s>{{ myForm.get('emails').pristine }}</s></dd>
	        	<dd>表单已操作: <b>myForm.get('emails').dirty</b>: <s>{{ myForm.get('emails').dirty }}</s></dd>
	        	<dd>表单未操作: <b>myForm.get('emails').untouched</b>: <s>{{ myForm.get('emails').untouched }}</s></dd>
	        	<dd>表单已操作: <b>myForm.get('emails').touched</b>: <s>{{ myForm.get('emails').touched }}</s></dd>
	        	<dd>表单xx:<b>myForm.get('emails').pending</b>: <s>{{ myForm.get('emails').pending }}</s></dd>
	        </dl>
	        
	        <dl class="mvvm-list samebox mt10">
	        	<dt>FormGroup css 判断验证: </dt>
	        	<dd>验证不通过 : <b>myForm.controls.emails.invalid</b>: <s>{{ myForm.controls.emails.invalid }}</s></dd>
	        	<dd>验证通过: <b>myForm.controls.emails.valid</b>: <s>{{ myForm.controls.emails.valid }}</s></dd>
	        	<dd>表单全新未操作: <b>myForm.controls.emails.pristine</b>: <s>{{ myForm.controls.emails.pristine }}</s></dd>
	        	<dd>表单已操作: <b>myForm.controls.emails.dirty</b>: <s>{{ myForm.controls.emails.dirty }}</s></dd>
	        	<dd>表单未操作: <b>myForm.controls.emails.untouched</b>: <s>{{ myForm.controls.emails.untouched }}</s></dd>
	        	<dd>表单已操作: <b>myForm.controls.emails.touched</b>: <s>{{ myForm.controls.emails.touched }}</s></dd>
	        	<dd>表单xx:<b>myForm.controls.emails.pending</b>: <s>{{ myForm.controls.emails.pending }}</s></dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">双向绑定数据 form: <s>{{ model | json }}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <div class="mvvm-pre">提交表单后的 ngForm 数据: <s>{{ data | json }}</s></div>
        
        <hr class="_mt10_mb10x">
 		<div class="mvvm-pre">myForm.value.username: <s>{{ myForm.value.username }}</s></div>
 		<hr class="_mt10_mb10x">
 		 <div class="mvvm-pre">myForm.get('username').errors : <s>{{ myForm.get('username').errors | json }}</s></div>
 		<hr class="_mt10_mb10x">
 		
		<form (ngSubmit)="onSubmit(f.value,f.valid)" novalidate #f="ngForm" [formGroup]="myForm" class="samebox mt10">
			<ul class="res-tr-tl clearfox _lh32" [hidden]="f.submitted">
				<li>
					<h6 class="col-sm-20">非空：</h6>
					<div class="col-sm-80 _fl">
						<input type="text" class="_w200 mr10" formControlName="username">
						<span *ngIf="myForm.controls.username.pristine" class="mr20">未修改</span>
						<span *ngIf="myForm.controls.username.dirty" class="mr20">已修改</span>
						<span *ngIf="myForm.controls.username.valid">有效</span>
						<span [hidden]="myForm.controls.username.valid || myForm.controls.username.pristine" style="color:red">
							<b *ngIf="myForm.controls.username.errors?.minlength || myForm.controls.username.errors?.maxlength">长度必须为4-8</b>
							<b *ngIf="myForm.controls.username.errors?.required">非空</b>
							<b *ngIf="myForm.controls.username.errors?.pattern">只能是数字,长度为 5</b>
						</span>
					</div>
				</li>
				<li class="mt10">
					<h6 class="col-sm-20">邮箱验证：</h6>
					<div class="col-sm-80 _fl">
						<input type="text" class="_w200 mr10" formControlName="emails">
						<span [hidden]="myForm.controls.emails.valid || myForm.controls.emails.pristine" style="color:red">
							<b *ngIf="myForm.controls.emails.errors?.email">必须是邮箱</b>
							<span *ngIf="myForm.get('emails').invalid">必须是邮箱2</span>
						</span>
					</div>
				</li>
				<li class="mt10">
					<h6 class="col-sm-20">组合验证：</h6>
					<div class="col-sm-80 _fl">
						<fieldset formGroupName="address">
							<input type="text" formControlName="city">
							<input type="text" formControlName="street">
						</fieldset>
					</div>
				</li>
				<li class="mt20 res-btn">
					<h6 class="col-sm-20"></h6>
					<div class="col-sm-80">
						<button class="btn-default" [disabled]="myForm.invalid">确认</button>
						<button class="btn-default mtb10" type="button" (click)="f.resetForm({})">f.resetForm(｛｝) 重置</button>
						<button class="btn-default" type="button" (click)="reset()">reset() 重置</button>
					</div>
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
    	form .ng-untouched{border-color:pink;}	/* 表单未操作*/
    	form .ng-touched{border-color:purple}	/* 表单已操作 */
    `]
})

export class ValidateFormBuilderComponent{
	data:string;
	myForm: FormGroup;
	model:any = {
		
	}

  	constructor(private router: RouterService, private fb: FormBuilder){ }
  	
  	ngOnInit(){
  		this.myForm = this.fb.group({
  			'username': ['这里设置默认值', [
				Validators.required,			// 非空验证
				Validators.minLength(4),		// 最小长度
				Validators.maxLength(8),		// 最大长度
				Validators.pattern('[0-9]{6}')	// 正则验证
      		]],
      		'emails': ['填写邮箱', [
      			Validators.required,
      			Validators.email				// 邮箱验证
      		]],
      		'address' : this.fb.group({
				  city : ['城市', [Validators.required,Validators.minLength(5)]],
				street : ['街道', Validators.required]
			})
  		})
  		
  		this.model = this.myForm.value;	// 获取所有表单数据
  	}
  	
  	onSubmit(formData,valid){
  		if(valid){
  			this.data = formData;
  		}
  	}
  	
  	// 重置 form
  	reset(){
  		this.myForm.reset();
  	}
  	// 获取指定值
  	get userame(){
  		return this.myForm.get('userame')
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/validate-form-builder.component.ts';
	}
	
}
