import { Component } from '@angular/core';
// =====================================================
@Component({
	selector: 'test-component',
    template: `
        <div style="font-size:30px;color:red">
        	<ng-content></ng-content>
        </div>
    `
})

export class TestComponent{
   
}
