import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
// ======================================================================== actions
export class LoadingOpen implements Action {	// 调用: new Open()
	readonly type = 'LoadingOpen';
	constructor(public msg: string) {}
}

export class LoadingClose implements Action {
	readonly type = 'LoadingClose';
}
// ========================================================================
export class PromptOpen implements Action {
	readonly type = 'PromptOpen';
	constructor(public msg: string) {}
}

export class PromptClose implements Action {
	readonly type = 'PromptClose';
}

export type ALL = LoadingOpen | LoadingClose | PromptOpen | PromptClose