// ===================================================== 模拟数据
import Mock from 'mockjs';
// ===================================================== 处理数据服务
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	data:any[] = [];
	dataTitle:any[] = []
	
	constructor(){
		let datas =  Mock.mock({
			    'list|10-30': [{
			        'id|+1': 1,
			        'name|1': Mock.Random.word(),
			        'note|1': Mock.Random.word(),
			        'stock|1': Mock.Random.word(),
			        'ship|1': Mock.Random.word(),
			        'sdate|1': Mock.Random.date(),
			    }]
			})
		
		this.data = datas.list;
		this.dataTitle = Object.keys(this.data[0]);
	}
}