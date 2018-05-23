// ======================================================================== 数据模型
export class Model{
	constructor(
		public api: string,
		public version: string,
		public author: string,
		public date: string
	){}
}
// ======================================================================== 初始化数据
export const Config:Model = {
	api: 'http:/www/api.com',
	version: '1.0.0',
	author: 'j+2',
	date: '2017-07-25'
}

export default Config
