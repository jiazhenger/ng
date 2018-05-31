import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Attribute, HostBinding } from '@angular/core';
// ======================================================================== NgModule
@Directive({
	selector : '[ez]',				// 以此选择绑定指令
						
	//inputs : ['parents'],			// 此处声明，启动报错，运行不报错
	
	host : {						// 绑定事件到组件上
		'(click)' : 'click()',
		//'(mousedown)' : 'mousedown()',
		//'(mouseover)' : 'mouseover()',
		//'(touchstart)': 'touchstart()',
		//'(touchend)' : 'touchend()',
		//'(touchmove)' : 'touchmove(),
	}
})
export class PropertyDirective{
	// 与父组件通信
	@Input() parent:any;								// 用 @Input() 声明元数据
	@Output() play:any = new EventEmitter<string>();	// 监听父事件
	@Input() ez: any;									// 给指令参数赋与参数
	
	elems:HTMLElement;
	attr;
	
	// 绑定 style 样式到指令元素上
	//@HostBinding('style.background') background="#d6487e";
	// 等于
	@HostBinding('style.background') get bg(){
		return '#d6487e'
	}
	// 绑定 class 到指令上
	//@HostBinding('class')   class="btn-default";
	@HostBinding('class') get myClass(){
		return 'btn-default'
	}
	
	// 绑定属性到样式指令元素上
	@HostBinding('title') title = "@HostBinding 绑定属性到样式上";
	// 绑定动画到指令元素上, 只能绑定入场动画
	@HostBinding('@keyFrame') keyFrame = true;
	
	constructor(private elem:ElementRef, @Attribute('class') attr: string){
		this.elems = elem.nativeElement;
		this.attr = attr;		// 获取指令绑定完素上的属性
	}
	// ===================================== 修改父组件的属性
	@HostListener('mouseenter') mouseenter(){		// 相当于 host : {}
		this.parent.msg = '@HostListener("mouseenter") mouseenter() 绑定事件';
		
		this.elems.style.backgroundColor = '#ffb752';		// 修改 DOM
	}
	
	@HostListener('mouseleave') mouseleave(){		// 相当于 host : {}
		this.parent.msg = '@HostListener("mouseleave") mouseleave() 绑定事件';
		this.parent.msg2 = '';
		this.parent.msg3 = '';
		this.parent.msg4 = '';
		this.elems.style.backgroundColor = '#d6487e';
	}
	
	@HostListener('window:resize') resize(){	
		this.parent.msg = 'window.size监听窗口变化';
	}
	// ===================================== 调用父组件的方法
	click(){
		this.play.emit('调用父组件的方法');
		this.parent.go();
		this.parent.msg3 = "指令带的参数";
		this.parent.msg4 = this.attr;
	}
}
