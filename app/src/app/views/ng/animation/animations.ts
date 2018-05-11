import {
	trigger,
	state,
	style,
	animate,
	transition,
	keyframes,
	group
} from '@angular/animations';
// ======================================================================== NgModule
export const Animations = [
	trigger('msgState', [	// 自定义动画名
			state('inactive', style({	// 定义了每个状态的最终样式
				backgroundColor: 'red',
				color:'white',
				transform: 'scale(2) translateX(100px) rotate(-45deg)'
			})),
			state('active',   style({	// active 自定义名称
				backgroundColor: '#cfd8dc',
				transform: 'scale(1)'
			})),
			transition('inactive => active', animate('100ms ease-in')),	// 定义在状态之间的转场
			transition('active => inactive', animate('100ms ease-out'))
		]),
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
			transition(':enter', [							// 进场
				style({transform: 'translateX(-100%)'}),
				animate('1000ms ease-in')
			]),
			transition(':leave', [							// 离场
				animate(1000, style({transform: 'translateX(100%)'}))
			])
		]),
		trigger('keyFrame', [
			state('in', style({transform: 'translateX(0)'})),
			transition('void => *', [
				animate(1000, keyframes([
					style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
					style({opacity: 1, transform: 'translateX(15px)',  offset: 0.8}),
					style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
				]))
			]),
			transition('* => void', [
				animate(1000, keyframes([
					style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
					style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
					style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
				]))
			])
		]),
		trigger('group', [
			state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),		// 同时对两个 CSS 属性做动画，但又得为它们定义不同的缓动函数
			transition('void => *', [
				style({width: 300, transform: 'translateX(50px)', opacity: 0}),
				group([
					animate('0.5s 0.1s ease', style({
						transform: 'translateX(0)',
						width: 500
					})),
					animate('0.5s ease', style({
						opacity: 1
					}))
				])
			]),
			transition('* => void', [
				group([
					animate('0.5s ease', style({
						transform: 'translateX(50px)',
						width: 300
					})),
					animate('0.5s 0.2s ease', style({
						opacity: 0
					}))
				])
			])
		]),
		trigger('ngFor', [
			state('in', style({transform: 'translateX(0)'})),
			transition('void => *', [							// 进场
				style({transform: 'translateX(-30%)'}),
				animate('500ms 100ms ease-in')
			]),
			transition('* => void', [							// 离场
				animate(300, style({transform: 'translateX(50%)',opacity:0}))
			])
		]),
		trigger('ngFor2', [
			state('inactive', style({transform: 'translateX(0) scale(1)'})),
			state('active',   style({transform: 'translateX(0) scale(1.1)'})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out')),
			transition('void => inactive', [
				style({transform: 'translateX(-100%) scale(1)'}),
				animate(100)
			]),
			transition('inactive => void', [
				animate(100, style({transform: 'translateX(100%) scale(1)'}))
			]),
			transition('void => active', [
				style({transform: 'translateX(0) scale(0)'}),
				animate(200)
			]),
			transition('active => void', [
			animate(200, style({transform: 'translateX(0) scale(0)'}))
		])
    ])
]
/*
	animations: [
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
				transition('void => *', [
				style({transform: 'translateX(-100%)'}),
				animate(100)
			]),
			transition('* => void', [
				animate(100, style({transform: 'translateX(100%)'}))
			])
		])
	]
	// 语法：
	trigger('animationName',[
		state('状态名A',style({css})),	// 状态样式
		state('状态名B',style({css})),	// 状态样式
		transition(':enter', [			// 转场动画
			style({css}),				// 转场样式
			animate('100ms ease-in')	// 转场过渡
		])
	])
	// 定义在状态之间的转场
	transition('inactive => active', animate('100ms ease-in')),	
	transition('active => inactive', animate('100ms ease-out'))
	
	// 转场多合一
	transition('inactive => active,active => inactive', style({css}), animate('0.2s 100ms ease-out'))
	
	// 如果要对同一个转场的两个方向都使用相同的时间线，就可以使用 <=> 这种简写语法
	transition('inactive <=> active', animate('100ms ease-out')) 	
	
	// *( 通配符 ) 状态匹配任何动画状态
	transition('* => active,*=>*', animate('100ms ease-out')) 
	
	// void 状态在定义 “进场” 和 “离场” 的动画
	transition('void => *', [ style({css}),animate()])									// 进场
	transition('* => void', [ 															// 离场
		animate(1000, style({
			transform: 'translateX(100%)'
		}))
	])
	transition('void => *, * => void', animate('100ms ease-out'))
	transition(':enter', [ ... ]); // void => *
	transition(':leave', [ ... ]); // * => void
	
	// keyframes 复杂转场动画，先后运行
	transition('void => *', [
		animate(1000, keyframes([
			style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
			style({opacity: 1, transform: 'translateX(15px)',  offset: 0.8}),
			style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
		]))
	])
	// Group 并行动画组，同时运行
	transition('* => void', [
		group([
			animate('0.5s ease', style({
				transform: 'translateX(50px)',
				width: 300
			})),
			animate('0.5s 0.2s ease', style({
				opacity: 0
			}))
		])
	])
 */