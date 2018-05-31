import { Component } from '@angular/core';
// =====================================================
@Component({
	selector: 'test-component',
    template: `
        <div style="font-size:30px;color:red;line-height:120%">
        	<ng-content></ng-content>
        </div>
    `
})

export class TestComponent{
   
}
