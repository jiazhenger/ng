import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'app/services/router.service';
// =====================================================
@Component({
	selector: 'news-router',
	template: '<div class="mvvm-box-1">一往无前</div><button class="btn-default mt20" (click)="router.back()">后退</button>'
})

export class CComponent{

	constructor(public router: RouterService){ }
	
}
