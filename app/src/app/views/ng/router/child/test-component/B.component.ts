import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// =====================================================
@Component({
	selector: 'news-router',
	template: '<div class="mvvm-box-1">投桃报李</div><button class="btn-default mt20" (click)="router.back()">后退</button>'
})

export class BComponent{
	
	constructor(public router: RouterService){ }
	
}
