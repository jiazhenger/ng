import { Component, Input, Output, EventEmitter } from '@angular/core';
// =====================================================
// 兼容判断
var isWebkit = /Chrome/gi.test(navigator.userAgent);
var isIE = "ActiveXObject" in window;
var mouseWheel = isIE || isWebkit ? 'mousewheel' : 'DOMMouseScroll';
// 事件绑定
var bind = function (elem, type, handler) {
	if (elem.addEventListener) {
		elem.addEventListener(type, handler, false);
	} else if (elem.attachEvent) {
		elem.attachEvent("on" + type, handler);
	} else {
		elem["on" + type] = handler;
	}
}
// 事件解绑
var unbind = function(o, e, fn){
		if (o.removeEventListener) o.removeEventListener(e, fn, false);
		else if (o.detachEvent) o.detachEvent("on" + e, fn);
		else if (o.click) o["on" + e] = null;
		else throw new Error("your browser not suport event");
	}
// =====================================================
@Component({
	selector: 'form-component',
    template: `
    	<div class="form-group">
	    	<ul class="clearfox three-form lh32">
	    		<h2>camera坐标：</h2>
				<li>
					<h6 class="col-sm-4 res-tr-tl">x：</h6>
					<aside class="col-sm-5"><input  [(ngModel)]="camera.x" (ngModelChange)="onChange()" #cx (focus)="focus(cx,'camera','x')" (blur)="blur(cx)"></aside>
					<h6 class="col-sm-4 res-tr-tl">y：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="camera.y" (ngModelChange)="onChange()" #cy (focus)="focus(cy,'camera','y')" (blur)="blur(cy)"></aside>
					<h6 class="col-sm-4 res-tr-tl">z：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="camera.z" (ngModelChange)="onChange()" #cz (focus)="focus(cz,'camera','z')" (blur)="blur(cz)"></aside>
				</li>
				<h2>图像坐标：</h2>
				<li>
					<h6 class="col-sm-4 res-tr-tl">x：</h6>
					<aside class="col-sm-5"><input  [(ngModel)]="position.x" (ngModelChange)="onChange()" #ix (focus)="focus(ix,'position','x')" (blur)="blur(ix)"></aside>
					<h6 class="col-sm-4 res-tr-tl">y：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="position.y" (ngModelChange)="onChange()" #iy (focus)="focus(iy,'position','y')" (blur)="blur(iy)"></aside>
					<h6 class="col-sm-4 res-tr-tl">z：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="position.z" (ngModelChange)="onChange()" #iz (focus)="focus(iz,'position','z')" (blur)="blur(iz)"></aside>
				</li>
				<h2>图像旋转角度：</h2>
				<li>
					<h6 class="col-sm-4 res-tr-tl">x：</h6>
					<aside class="col-sm-5"><input  [(ngModel)]="rotation.x" (ngModelChange)="onChange()" #rx (focus)="focus(rx,'rotation','x')" (blur)="blur(rx)"></aside>
					<h6 class="col-sm-4 res-tr-tl">y：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="rotation.y" (ngModelChange)="onChange()" #ry (focus)="focus(ry,'rotation','y')" (blur)="blur(ry)"></aside>
					<h6 class="col-sm-4 res-tr-tl">z：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="rotation.z" (ngModelChange)="onChange()" #rz (focus)="focus(rz,'rotation','z')" (blur)="blur(rz)"></aside>
				</li>
				<h2>图像大小：</h2>
				<li>
					<h6 class="col-sm-4 res-tr-tl">w：</h6>
					<aside class="col-sm-5"><input  [(ngModel)]="size.w" (ngModelChange)="onChange()" #w (focus)="focus(w,'size','w')" (blur)="blur(w)"></aside>
					<h6 class="col-sm-4 res-tr-tl">h：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="size.h" (ngModelChange)="onChange()" #h (focus)="focus(h,'size','h')" (blur)="blur(h)"></aside>
					<h6 class="col-sm-4 res-tr-tl">z：</h6>
					<aside class="col-sm-5"><input [(ngModel)]="size.z" (ngModelChange)="onChange()" #z (focus)="focus(z,'size','z')" (blur)="blur(z)"></aside>
				</li>
			</ul>
		</div>
    `,
    styles:[`
    	h2{font-weight:bold;}
    `]
})

export class FormComponent{
	@Input() parent:any = {};
	@Output() change = new EventEmitter<string>();
	
	camera={
		x:0,
		y:0,
		z:-5
	}
	position={
		x:0,
		y:0,
		z:0
	}
	rotation={
		x:0,
		y:0,
		z:0
	}
	size={
		w:1,
		h:1,
		z:1
	}
	onChange(){
		var clear;
		clearTimeout(clear)
		clear = setTimeout(()=>{
			this.change.emit(); // 触发父组件自定义绑定事件
		},500);
		
	}
	focus(elem,obj,x){
		bind(elem, mouseWheel, (e)=> {
			if(e.deltaY > 0){
				this[obj][x]-=1;
			}else{
				this[obj][x]+=1;
			}
			this.change.emit()
		});
	}
	blur(elem){
		unbind(elem, mouseWheel, function (e) {});
	}
}
