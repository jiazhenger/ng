// ======================================================= 
import { Injectable } from '@angular/core';
// ======================================================= 全选效果
@Injectable()
export class CheckboxService{
	// ======================================================= 操作 data 选择数据
	// 设置默认值
	setDefaultChecked(opt){
		let data:any = opt.data;
		let model:any = opt.model;
		
		
		let def:boolean = opt.alldef == undefined ?  false : opt.alldef;	// 默认为 false
		let id:any = opt.id;
		let sort:boolean = opt.sortByIndex == undefined ?  true : opt.sortByIndex;	// 默认为 true
		
		data.forEach((v,i) => { 
			// 如果 checked 不存在, 则自定义是否选中, 反之, 则 == checked 值
			let index = sort ? i : v.id;
			model[index] = v.checked == undefined ? def : v.checked;
		});
		
		return this.checkedOneByOne({data:data,model:model,id:id,sortByIndex:sort});
	}
	// 一选多
	checkedAll(opt){
		let data:any = opt.data;
		let model:any = opt.model;
		let bool:boolean = opt.all;
		let id:any = opt.id;
		let sort:boolean = opt.sortByIndex == undefined ?  true : opt.sortByIndex;	// 默认为 true
		
		if(bool){
			Object.keys(model).forEach((v,i) => {
				let index = sort ? i : v;
				model[index] = true;
			} )
		}else{
			Object.keys(model).forEach((v,i) => {
				let index = sort ? i : v;
				model[index] = false;
			} )
		}
		return this.getCheckedDataValue(data,model,id,sort);	// 获取处理后的 value 值
	}
	
	// 单个选
	checkedOneByOne(opt){
		let data:any = opt.data;
		let model:any = opt.model
		let id:any = opt.id;
		let sort:boolean = opt.sortByIndex == undefined ?  true : opt.sortByIndex;	// 默认为 true
		
		let stack: Array<any> = [];
		let bool : boolean;
		Object.keys(model).forEach((v,i) => {	// 循环 ngModel 对象
			if(!model[v]){						// 只要有个选项为 false，all 为 false;
				bool = false;
				return;
			}
			stack.push(v);
		})
		if(stack.length === Object.keys(model).length){ // 当新数组的长度与model长度一致时，返回 true;
			bool = true;
		}
		
		let result = this.getCheckedDataValue(data,model,id,sort);
		
		return {
			all : bool,			// 判断全选的真假值
			result : result
		}
	}
	
	// 获取的是 data 上的属性数据,而不是 checkbox value 的数据
	getCheckedDataValue(data:any,model:any,id:any = 'id',sort){
		let arr:Array<any> = [];
		let obj:any = {};
		let json:Array<any> = [];
		let result:Array<any> = [];
		
		Object.keys(model).forEach((v,i)=>{ // v 为 model 索引值
			if(model[v]){
				if(sort){
					arr.push(data[v][id]); 						// 将选中属性组合成数组
					let idx = data[v]['id'] != undefined ? data[v]['id'] : v;
					obj[idx] = data[v][id];						// 将数据组合成  {index:value} 对象
					json.push({ id: idx, value: data[v][id] });	// 将数据组合成 [{id:,value:}]
					result.push(data[i]);						// 将选中数据组合成数组
				}else{
					for(let j in data){		
						if(v == data[j]['id']){
							arr.push(data[j][id]); 								// 将数据组合成数组
							obj[v] = data[j][id];  						// 将数据组合成  {id:value} 对象
							json.push({ id: v, value: data[j][id] });	// 将数据组合成 [{id:,value:}]
							result.push(data[j]);						// 将选中属性组合成数组
						}
					}
				}
			}
			
		})
		
		return {
			obj : obj,
			arr : arr,
			json : json,
			data : result
		}
	}
	
	// 给默认选中值设置 checked
	setChecked(data,checkedData=[],id='id'){
		if(checkedData.length == 0){
			return data;
		}
		checkedData.map((value,index) => {
			data.map((v,i)=>{
				if(value[id] == v[id]){
					v['checked'] = true;
				}
			})
		})
		return data;
	}
	
	// ======================================================= 操作 checkbox value 选择数据
	removeByValue(arr, val) {
		for(var i=0; i<arr.length; i++) {
			if(arr[i] == val) {
				arr.splice(i, 1);
				break;
			}
		}
	}
  	
  	// 将 value 拼合成一个数据,并返回对应 id 的数据, stack 为一个空数组, 不能是 ngModel
  	getCheckedValue(event,checked,data?:any,id = 'id'){
  		let v = event.target.value
  		
  		if(event.target.checked){
  			checked.push(v)
  		}else{
  			this.removeByValue(checked,v)
  		}
  		
  		if(!data){
  			return checked
  		}else{
  			let result = []
  			data.map((value,index)=>{
  				for(let i in checked){
  					if(value[id] == checked[i]){
  						result[i] = value;
  					}
  				}
  			})
  			
  			return {
  				ids: checked,
  				data: result
  			}
  		}
  	}
  	// 删除名字,并取消选择
  	del(index,id,option){
  		let opt = {
  			checked : [],		// 选择了的数据组
  			ids:[],				// 选择了的 id 组
  			data : [],			// 数据源
  			model : [],			// 单选的 ngModel
  			all : false,			// 全选的 ngModel
  			key: 'id',			// 对比的 key
  		}
  		Object.assign(opt,option);
  		
  		opt.data.map((v,i)=>{
			if(v[opt.key] == id){
				opt.model[i] = false;
			}
		})
  		
  		opt.checked.splice(index,1);
  		opt.ids.splice(index,1);
  	}
}
