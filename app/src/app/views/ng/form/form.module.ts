import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// ===================================================== 服务
import { UploadService } from 'app/services/upload.service';
// ===================================================== 同一个模块的组件
import { FormComponent } from './form.component';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxAllComponent } from './checkbox-all.component';
import { CheckboxAllIdComponent } from './checkbox-all-id.component';
import { TemplateVarComponent } from './template-var.component';
import { ValidateInnerComponent } from './validate-inner.component';
import { ValidateFormGroupComponent } from './validate-form-group.component';
import { ValidateFormBuilderComponent } from './validate-form-builder.component';
import { FileUploadComponent } from './file-upload.component';
// ======================================================================== NgModule
@NgModule({
	imports: [ 
		CommonModule,			// 指令模块
		FormsModule,			// 表单模块
		ReactiveFormsModule,	// 函数式函数模块
		RouterModule.forChild(	// 子路由不能使用根路由的 router-outlet
			[
				{ path: 'form', component: FormComponent, data:{ title: '表单提交'} },
				{ path: 'checkbox', component: CheckboxComponent, data:{ title: '多选框取value值'}  },
				{ path: 'checkbox-all', component: CheckboxAllComponent, data:{ title:'多选框以数据索引排序多选'} },
				{ path: 'checkbox-all-id', component: CheckboxAllIdComponent, data:{ title:'多选框以数据索引排序多选'} },
				{ path: 'template-var', component: TemplateVarComponent, data:{ title:'模板引用变量'} },
				{ path: 'validate-inner', component: ValidateInnerComponent, data:{ title:'内置模板验证'} },
				{ path: 'validate-form-group', component: ValidateFormGroupComponent, data:{ title:'FormGroup函数验证'} },
				{ path: 'validate-form-builder', component: ValidateFormBuilderComponent, data:{ title:'FormBuilder函数验证'} },
				{ path: 'file-upload', component: FileUploadComponent, data:{ title:'文件上传'} },
			]
		)
	],
	declarations: [
		FormComponent,
		CheckboxComponent,
		CheckboxAllComponent,
		CheckboxAllIdComponent,
		TemplateVarComponent,
		ValidateInnerComponent,
		ValidateFormGroupComponent,
		ValidateFormBuilderComponent,
		FileUploadComponent
	],
	providers:[UploadService],
	exports: [ RouterModule ]
})
export class FormModule { }
