// ===================================================== 构造测试数据
export class Data {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Data(1, 'Dragon Burning Cities'),
  new Data(2, 'Sky Rains Great White Sharks'),
  new Data(3, 'Giant Asteroid Heading For Earth'),
  new Data(4, 'Procrastinators Meeting Delayed Again'),
];

let dataPromise = Promise.resolve(CRISES);
// ===================================================== 处理数据服务
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	static nextDataId = 100;
	
	data = dataPromise;
	
	getData() { return dataPromise; }
	
	searchData(id: number | string) {
		return dataPromise.then(crises => crises.find(Data => Data.id === +id));
	}

}