// ===================================================== 处理数据服务
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	data:any[] = [
		{
	        item: '登录、注册',
	        code: [
	            {'name': 'font-user', 				'code': 'f007'},
	            {'name': 'font-user-o', 			'code': 'f2c0'},
	            {'name': 'font-user-circle', 		'code': 'f2bd'},
	            {'name': 'font-user-circle-o', 		'code': 'f2be'},
	            {'name': 'font-lock', 				'code': 'f13e'},
	            {'name': 'font-lock2', 				'code': 'f023'},
	            {'name': 'font-unlock', 			'code': 'f09c'}
	        ]
		},
		{
	        item: '设置',
	        code: [
	            {'name': 'font-power-off', 			'code': 'f011'},
	            {'name': 'font-cog', 				'code': 'f013'},
	            {'name': 'font-cogs', 				'code': 'f085'},
	            {'name': 'font-refresh', 			'code': 'f021'},
	            {'name': 'font-trash', 				'code': 'f014'},
	            {'name': 'font-pencil', 			'code': 'f040'},
	            {'name': 'font-pencil-square-o', 	'code': 'f044'},
	            {'name': 'font-pencil-square', 		'code': 'f14b'},
	            {'name': 'font-plus-square-o', 		'code': 'f196'},
	            {'name': 'font-paperclip', 			'code': 'f0c6'},
	            {'name': 'font-ellipsis-h', 		'code': 'f141'},
	            {'name': 'font-list-alt', 			'code': 'f022'},
	            {'name': 'font-copy', 				'code': 'f0c5'}
	        ]
		},
		{
	        item: '表单',
	        code: [
	            {'name': 'font-close', 				'code': 'f00d'},
	            {'name': 'font-check', 				'code': 'f00c'},
	            {'name': 'font-circle', 			'code': 'f111'},
	            {'name': 'font-plus-circle', 		'code': 'f055'},
	            {'name': 'font-dot-circle-o', 		'code': 'f192'},
	            {'name': 'font-circle-o', 			'code': 'f10c'},
	            {'name': 'font-circle-thin', 		'code': 'f1db'},
	            {'name': 'font-plus', 				'code': 'f067'},
	            {'name': 'font-minus', 				'code': 'f068'},
	            {'name': 'font-cloud-upload', 		'code': 'f0ee'},
	            {'name': 'font-cloud-download', 	'code': 'f0ed'},
	            {'name': 'font-check-square', 		'code': 'f14a'},
	            {'name': 'font-check-square-o', 	'code': 'f046'},
	            {'name': 'font-square-o', 			'code': 'f096'},
	        ]
		},
		{
	        item: '图表',
	        code: [
	            {'name': 'font-area-chart', 		'code': 'f1fe'},
	            {'name': 'font-bar-chart', 			'code': 'f080'},
	            {'name': 'font-line-chart', 		'code': 'f201'},
	            {'name': 'font-pie-chart', 			'code': 'f200'},
	            
	        ]
		},
		{
	        item: '货币',
	        code: [
	            {'name': 'font-cny', 				'code': 'f157'},
	            {'name': 'font-dollar', 			'code': 'f155'},
	            {'name': 'font-money', 				'code': 'f0d6'}
	        ]
		},
		{
	        item: '导入/导出/分享',
	        code: [
	            {'name': 'font-share-square', 		'code': 'f14d'},
	            {'name': 'font-share-square-o', 	'code': 'f045'},
	            {'name': 'font-share', 				'code': 'f064'},
	            {'name': 'font-reply-all', 			'code': 'f122'},
	            {'name': 'font-reply', 				'code': 'f112'}
	        ]
		},
		{
	        item: '消息/通知',
	        code: [
	            {'name': 'font-bullhorn', 			'code': 'f0a1'},
	            {'name': 'font-commenting', 		'code': 'f27a'},
	            {'name': 'font-commenting-no', 		'code': 'f27b'},
	            {'name': 'font-bell', 				'code': 'f0f3'},
	            {'name': 'font-bell-o', 			'code': 'f0a2'}
	        ]
		},
		{
	        item: '日历/时间',
	     	code: [
	     		{'name': 'font-calendar', 				'code': 'f073'},
	            {'name': 'font-calendar-plus-o', 		'code': 'f271'}
	     	]
		},
		{
	        item: '方向',
	        code: [
	        	{'name': 'font-angle-down', 			'code': 'f107'},
	        	{'name': 'font-angle-up', 				'code': 'f106'},
	        	{'name': 'font-angle-left', 			'code': 'f104'},
	        	{'name': 'font-angle-right', 			'code': 'f105'},
	        	{'name': 'font-angle-double-down', 		'code': 'f103'},
	        	{'name': 'font-angle-double-up', 		'code': 'f102'},
	        	{'name': 'font-angle-double-left', 		'code': 'f100'},
	        	{'name': 'font-angle-double-right', 	'code': 'f101'},
	            {'name': 'font-chevron-down', 			'code': 'f078'},
	            {'name': 'font-chevron-up', 			'code': 'f077'},
	            {'name': 'font-chevron-left', 			'code': 'f053'},
	            {'name': 'font-chevron-right', 			'code': 'f054'},
	            {'name': 'font-caret-down', 			'code': 'f0dd'},
	            {'name': 'font-caret-up', 				'code': 'f0de'},
	            {'name': 'font-caret-left', 			'code': 'f0d9'},
	            {'name': 'font-caret-right', 			'code': 'f0da'},
	            {'name': 'font-sort-amount-desc', 		'code': 'f161'},
	            {'name': 'font-sort-amount-asc', 		'code': 'f160'},
	            {'name': 'font-chevron-circle-down', 	'code': 'f13a'},
	            {'name': 'font-chevron-circle-left', 	'code': 'f137'},
	            {'name': 'font-chevron-circle-right', 	'code': 'f138'},
	            {'name': 'font-chevron-circle-up', 		'code': 'f139'},
	        ]
		},
		{
	        item: '其他',
	        code: [
	            {'name': 'font-star', 					'code': 'f005'},
	            {'name': 'font-star-half-o', 			'code': 'f123'},
	            {'name': 'font-star-o', 				'code': 'f006'},
	            {'name': 'font-thumbs-up', 				'code': 'f164'},
	            {'name': 'font-thumbs-o-up', 			'code': 'f087'},
	            {'name': 'font-hand-o-right', 			'code': 'f0a4'},
	            {'name': 'font-exclamation-triangle', 	'code': 'f071'},
	            {'name': 'font-exclamation-circle', 	'code': 'f06a'},
	            {'name': 'font-navicon', 				'code': 'f0c9'},
	            {'name': 'font-link', 					'code': 'f0c1'},
	            {'name': 'font-unlink', 				'code': 'f127'},
	            {'name': 'font-image', 					'code': 'f03e'},
	            {'name': 'font-smile-o', 				'code': 'f118'},
	            {'name': 'font-at', 					'code': 'f1fa'},
	            {'name': 'font-envelope-open-o', 		'code': 'f2b7'},
	            {'name': 'font-clock-o', 				'code': 'f017'},
	            {'name': 'font-window-close', 			'code': 'f2d3'},
	            {'name': 'font-file-code-o', 			'code': 'f1c9'},
	            {'name': 'font-code', 					'code': 'f121'},
	            {'name': 'font-home', 					'code': 'f015'},
	            {'name': 'font-volume-down',			'code': 'f027'},
	            {'name': 'font-volume-off',				'code': 'f026'},
	            {'name': 'font-volume-up', 				'code': 'f028'},
	            {'name': 'font-gavel', 					'code': 'f0e3'},
	            {'name': 'font-search', 				'code': 'f002'},
	            {'name': 'font-mobile', 				'code': 'f10b'},
	            {'name': 'font-paper-plane', 			'code': 'f1d8'},
	            {'name': 'font-paper-plane-o', 			'code': 'f1d9'},
	            {'name': 'font-paw', 					'code': 'f1b0'},
	            {'name': 'font-tag', 					'code': 'f02b'},
	            {'name': 'font-tags', 					'code': 'f02c'},
	        ]
		}
	]
}