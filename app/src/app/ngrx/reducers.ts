//import { Action } from '@ngrx/store';
// ======================================================================== actions
import * as MyActions from './actions';
export type Action = MyActions.ALL;
// ======================================================================== config
import Config from './config';
// ======================================================================== 数据模型
//import { Model, Init } from './model';
// ======================================================================== reducer
// ======================================================================== 全局配置
export const config = (state, action) => {
	switch(action.type){
		case 'init':
			return Config
		default:
			return {};
	}
}
// ======================================================================== loading
export const loading = ( state, action) => {
	switch(action.type){
		case 'LoadingOpen':
			return true
		case 'LoadingClose':
			return false
		default:
			return false
	}
}
// ======================================================================== 提示
export const prompt = ( state, action:Action) => {
	switch(action.type){
		case 'PromptOpen':
			return { bool:true, msg:action.msg}
		case 'PromptClose':
			return { bool:false }
		default:
			return { bool:false }
	}
}

export default { loading, prompt, config }
