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
	        	<dt>表单提交: </dt>
	        	<dd>在 form 元素中[(ngModel)] 所在的表单元素必须添加 <b>name=""</b></dd>
	        	<dd><b>#name="ngModel"</b> 把NgModel导出成了一个名叫name的局部变量</dd>
	        	<dd><b>f.valid</b> 控件有效</dd>
	        	<dd><b>f.pristine</b> 控件全新,即处于默认状态</dd>
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
					<h6 class="col-sm-20">单行文本框：</h6>
					<div class="col-sm-80 _fl"><input type="text" [(ngModel)]="model.name" name="username" class="_w200" placeholder="请输入文字"></div>
				</li>
				<li>
					<h6 class="col-sm-20">多选框：</h6>
					<div class="col-sm-80">
						<label class="checkbox" [ngClass]="{active:model.isYou}"><span><input type="checkbox" name="a" [(ngModel)]="model.isYou"></span></label>
					</div>
				</li>
				<li>
					<h6 class="col-sm-20">下拉框：</h6>
					<div class="col-sm-80">
						<select [(ngModel)]="model.code" name="code">
							<option>angular</option>
							<option>react</option>
							<option>vue</option>
						</select>
					</div>
				</li>
				<li>
					<h6 class="col-sm-20">单选框：</h6>
					<div class="col-sm-80">
						<label class="radio mr10" [ngClass]="{active:model.sex=='man'}"><span><input type="radio" name="sex" [(ngModel)]="model.sex"  value="man"></span></label>
						<label class="radio" [ngClass]="{active:model.sex=='woman'}"><span><input type="radio" name="sex" [(ngModel)]="model.sex"  value="woman"></span></label>
					</div>
				</li>
				<li>
					<h6 class="col-sm-20">换行文本框：</h6>
					<div class="col-sm-80 _fl"><textarea class="_w200" [(ngModel)]="model.txt" name="txt" placeholder="请输入文字"></textarea></div>
				</li>
				<li class="mt20 res-btn">
					<h6 class="col-sm-20"></h6>
					<div class="col-sm-80"><button class="btn-default">确认</button></div>
				</li>
			</ul>
		</form>
    `
})

export class FormComponent{
	data:string;
	model:any = {
		code: 'react' // 设置默认值
	}

  	constructor(private router: RouterService){ }
  	
  	onSubmit(formData,valid){
  		// 控件是有效
  		if(valid){	
  			this.data = formData;
  		}
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/form.component.ts';
	}
	
}
