// ===================================================== 
import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
import { Animations } from './animations';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "animation()">查看动画组</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
	        <dl class="mvvm-list">
	        	<dt>绑定动画到元素上:  </dt>
	        	<dd>&lt;div <b>[@animationName]="stateVar"</b> &gt;&lt;/div&gt;</dd>
	        </dl>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
	        <dl class="mvvm-list">
	        	<dt>动画:  </dt>
	        	<dd><b>void => inactive</b>：非激活元素进场</dd>
	        	<dd><b>void => active</b>：激活元素进场</dd>
	        	<dd><b>inactive => void</b>：非激活元素离场</dd>
	        	<dd><b>active => void</b>：激活元素离场</dd>
	        </dl>
        </div>
        <hr class="_mt10_mb10x">
        <button class="btn-default" [@msgState]="state1" (click)="toggleState1()">基本转场动画</button>
        <hr class="_mt10_mb10x">
        <button class="btn-default" [@flyInOut]="state2" (click)="toggleState2()">void（进场与离场）</button>
        <hr class="_mt10_mb10x">
        <button class="btn-default" [@keyFrame]="state3" (click)="toggleState3()">keyframes 复杂转场动画</button>
        <hr class="_mt10_mb10x">
        <button class="btn-default" [@group]="state4" (click)="toggleState4()">group 并行动画组</button>
        <hr class="_mt10_mb10x">
        <ul class="lh30 samebox mt10">
			<li (click)="del(index)"
				*ngFor="let v of data;index as index" 
				[@ngFor]="v.state"
				[@ngFor]="state"
				[@ngFor]="'in'"
				(@ngFor.start)="animationStarted($event)"
				(@ngFor.done)="animationDone($event)"
			>{{v}}</li>
		</ul>
    `,
	animations: [ Animations ],
	// host: { '[@animationName]': '' }	// 将动画添加到组件上
})

export class AnimationComponent{
	state1 = 'active';	// 设置默认显示动画
	state2 = 'void';
	state3 = 'void';
	state4 = 'void';
	
	data = ['trigger','state','style','animate','transition','keyframes','group'];
	enter:any;
	leave:any;
	
	constructor(private router: RouterService){ }
	
	toggleState1() {
		this.state1 = this.state1 === 'active' ? 'inactive' : 'active';
	}
	
	toggleState2(){
		this.state2 = this.state2 === 'void' ? '*' : 'void';
	}
	
	toggleState3(){
		this.state3 = this.state3 === 'void' ? '*' : 'void';
	}
	
	toggleState4(){
		this.state4 = this.state4 === 'void' ? '*' : 'void';
	}
	
	animationStarted(v:any){	// 获取进入时的动画参数
		this.enter = v;
		console.log(v)
	}
	
	animationDone(v:any){		// 获取离开时的动画参数
		console.log(v)
		this.leave = v;
	}
	
	del(i:any){
		this.data.splice(i,1);	
	}
	
	animation(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/animation/animations.ts';
	}

	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/animation/animation.component.ts';
	}
}