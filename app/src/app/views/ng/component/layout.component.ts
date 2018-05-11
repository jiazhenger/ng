// ===================================================== 
import { Component, ViewEncapsulation } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// ===================================================== 
@Component({
    template: `
        <div class="samebox">
        	<button class="btn-default" (click) = "component()">查看本组件</button>
        	<button class="btn-default" (click) = "module()">所在模块</button>
        </div>
        
        <div class="lh30 mvvm-code samebox mt10">
        	<dl class="mvvm-list">
	        	<dt>组件基本格式: </dt>
	        	<dd><b>moduleId: module.id</b>：每次Angular变化检测时</dd>
	        </dl>
        </div>
        
        <pre class="mvvm-pre samebox mt10">
@Component(｛
	<b>moduleId: module.id</b>,				# 解析样式表和模板的在本组件相对路径
	<b>selector</b>: 'app-root,a[a-btn],b[b-btn]',			# 组件层的 html 元素，可自定义，也可使用内置 html，如 div。
	<b>exportAs</b>: 'aBtn,bBtn',			# 将一个组件导出多个名字，可以让组件已一个新名字来使用而达到不破坏现有代码的目的
	<b>template</b>: '',					# 内部模板
	<b>templateUrl</b>: '',					# 外部模板
	
	<b>encapsulation: ViewEncapsulation.None</b>,	# 将局部样式变为全局样式,去掉限制
	<b>styles</b>: [''],					# 内部样式
	<b>styleUrls</b>: [''],					# 外部样式
	<b>preserveWhitespace:true/false</b>,	# 通过编译器，模板开发中的制表符、换行符、空格等是否原样的保留下来
	
	<b>animations</b>: [Animation]			# 加载动画模块
｝)
        </pre>
    `
})

export class LayoutComponent{

  	constructor(private router: RouterService){ }
  	
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/component/layout.component.ts';
	}
	module(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/ng/component/cpt.module.ts';
	}
}
