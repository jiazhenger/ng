import { Component } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// =====================================================
@Component({
	selector: 'news-router',
	template: '<div class="mvvm-box-1">天下为公</div><button class="btn-default mt20" (click)="router.back()">后退</button>'
})

export class AComponent{
	
	constructor(public router: RouterService){ }
	
}
