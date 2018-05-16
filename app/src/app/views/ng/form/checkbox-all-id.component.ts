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
        
        <dl class="mvvm-list samebox mt10">
        	<dt>以数据  id 排序多选 </dt>
        </dl>
        
        <hr class="_mt10_mb10x">
        
        <h3>获取的是 data 数据上的指定数据 值,而不是绑定到  checkbox 上的  value 值, 默认取 id 值</h3>
        
        <hr class="_mt10_mb10x">
        
		<ul class="res-tr-tl clearfox _lh32 samebox mt10">
			<li>
				<h6 class="col-sm-20">全选：</h6>
				<div class="col-sm-10">
					<input type="checkbox" name="x" [(ngModel)]="model.all" (ngModelChange)="changeAll($event)">
				</div>
			</li>
			<li [attr.title]="'this is a name'">
				<h6 class="col-sm-20">多选框2：</h6>
				<div class="col-sm-80">
					<label *ngFor="let item of data;index as index" >
						{{item.value}} : 
						<input type="checkbox" value="angular" 
								[(ngModel)]="model.checkboxs[item.id]"
								(ngModelChange)="change($event)"
						>
					</label>
				</div>
			</li>
			<li>
				<h6 class="col-sm-20">全选：</h6>
				<div class="col-sm-10">
					<input type="checkbox" name="y" [(ngModel)]="model.all" (ngModelChange)="changeAll($event)">
				</div>
			</li>
		</ul>
		<hr class="_mt10_mb10x">
        <div class="mvvm-pre mt10">返回原始结果: <s>{{ model | json }}</s></div>
        
        <hr class="_mt10_mb10x">
        
        <h2>返回全部处理结果:</h2>
        <div class="mvvm-pre mt10"><s>{{ result | json }}</s></div>
        
        <hr class="_mt10_mb10x">
         
        <div class="mvvm-pre mt10">获取所有的 value:<s>{{ valueObj | json }}</s></div>
        <div class="mvvm-pre mt10">获取所有的 value:<s>{{ valueArr | json }}</s></div>
        
        <hr class="_mt10_mb10x">
         
        <div class="mvvm-pre mt10">获取所有的 price:<s>{{ price | json }}</s></div>
    `,
    styles:[`
    	label{float:left;margin:2px 10px 0 0}
    `]
})

export class CheckboxAllIdComponent{
	result:any = {};
	valueObj:any = {};
	valueArr = []
	price:any = [];
	
	data : Array<any> = [
		{ id:100, value: 'angular', price:600,  checked:true},	//  checked 表示默认选中
		{ id:200, value: 'react', price:500},	
		{ id:300, value: 'vue', price:800}
	]
	model:any = {
		all : false,
		checkboxs : {}
	}
	
	// 动态获取配置
	checkboxConfig(){	 
		return {
			data: this.data,				// 循环的数据值
			model: this.model.checkboxs,	// checkbox 的 ngModel 值
			all : this.model.all,			// 取全选框的 ngModel 值
			alldef : false,					// 全选框默认值, 只在 data 没有 checked 的情况下起作用
			sortByIndex: false,				// 是,取索引值排序, 默认, 否,取 id 值排序
			id : 'price'					// 要取的主要数据值
		}
	}

  	constructor(private router: RouterService, private checkbox:CheckboxService){ 
  		
  	}
  	
  	ngOnInit(){
  		let result = this.checkbox.setDefaultChecked(this.checkboxConfig());	// 默认配置
  		this.model.all = result.all;
  		this.result = result.result;
  		this.getDetail(this.result.data);
  	}
  	
  	// 全选
  	changeAll(val){
  		this.result = this.checkbox.checkedAll(this.checkboxConfig());
  		this.getDetail(this.result.data);
  	}
  	// 单选
  	change(val:any){
		let result = this.checkbox.checkedOneByOne(this.checkboxConfig());
		this.result = result.result;
		this.model.all = result.all;
		this.getDetail(this.result.data);
	}
  	// 处理数据
  	getDetail(data){
  		let price = [];
  		let valueObj = {};
  		let valueArr = [];
  		data.forEach((v,i)=>{
  			price.push(v.price);
  			
  			valueObj[v.id] = v.value;	// 返回  {id:value,id:value, ...} 形式
  			
  			valueArr.push({ id : v.id, value: v.value });	// 返回数组对象 [{},{}]
  		})
  		
  		this.price = price;
  		this.valueObj = valueObj;
  		this.valueArr = valueArr;
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/form/checkbox-all-id.component.ts';
	}
	service(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'services/checkbox.service.ts';
	}
}
