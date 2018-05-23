import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// ======================================================================== NgModule
@Directive({
	selector : '[myUnless]',				// 自定义结构选择器
})
export class StructureDirective{
	private hasView = false;
	
	constructor( private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef) { }
	
	// 自定义结构型指令
	@Input() set myUnless(condition: boolean) {
	    if (!condition && !this.hasView) {
			this.viewContainer.createEmbeddedView(this.templateRef);
			this.hasView = true;
	    } else if (condition && this.hasView) {
			this.viewContainer.clear();
			this.hasView = false;
	    }
	}
}
