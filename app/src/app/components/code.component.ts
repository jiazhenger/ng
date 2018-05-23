import { Component } from '@angular/core';
import { Router } from '@angular/router'
// ===================================================== 公共服务
import { HttpService } from 'src/app/services/http.service';
// =====================================================
@Component({
	selector: 'code-view',
    template: `
        <section class="pop-my-wraper db">
            <div>
                <div>
                    <div class="pop-my-container">
                        <!-- content start -->
                        <header class="pop-my-header">
                            <h3><i class="font-file-code-o"></i> 源码</h3>
                            <a class="font-close" (click)="close()"></a>
                        </header>
                        <section class="pop-my-content">
                        	<div *ngIf="data" class="code-list-container">
                        		<dl class="code-number">
                        			<dt *ngFor="let item of data;index as index;trackBy:trackByFn">{{index+1}}</dt>
                        		</dl>
                        		<dl class="code-content" contenteditable="true" spellcheck="false">
                        			<dd *ngFor="let v of data;trackBy:trackByFn">{{v}}</dd>
                        		</dl>
                        	</div>
                        	<div *ngIf="!data" class="p20">正在加载中......</div>
                        </section>
                        <!-- content end -->
                    </div>
                    <q (click)="close()"></q>
                </div>
            </div>
        </section>
    `
})

export class CodeComponent{
	data:any;
    constructor(private http: HttpService,private router: Router) {
		
    }
    
    ngOnInit(){
    	this.http.getTxt(localStorage.code).then( data => {
    		let d = data.toString();
    		this.data = d.split('\n');
    	})
    }
    
    close(){
    	this.router.navigate([{ outlets: { popup: null } }])
    }
}
