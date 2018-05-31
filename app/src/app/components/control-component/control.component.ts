import { Component, Input } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// =====================================================
@Component({
	selector: 'control-component',
    template: `
        <div class="control-component">
			<button *ngIf="parent.html" class="btn-my-default" (click) = "htmlClick()">Html</button>
			<button *ngIf="parent.css" class="btn-my-default" (click) = "cssClick()">Css</button>
			<button *ngIf="parent.less" class="btn-my-default" (click) = "lessClick()">Less</button>
			<button *ngIf="parent.js" class="btn-my-default" (click) = "jsClick()">Js</button>
		</div>
    `,
    styleUrls:['style.css']
})

export class ControlComponent{
	constructor(private router: RouterService) {}

	@Input() parent:any = {};

   
    htmlClick(){
		this.router.go({ popup: 'code' });
		localStorage.code = this.parent.html;
	}
    cssClick(){
		this.router.go({ popup: 'code' });
		localStorage.code = this.parent.css;
	}
	lessClick(){
		this.router.go({ popup: 'code' });
		localStorage.code = this.parent.less;
	}
	jsClick(){
		this.router.go({ popup: 'code' });
		localStorage.code = this.parent.js;
	}
}
