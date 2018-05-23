import { Pipe, PipeTransform } from '@angular/core';
//import 'rxjs/add/operator/map';
// ========================================================================
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
	transform(value: any, args: string[]): string[] {
		if (value != undefined) {
			return Object.keys(value);
		}
	}
}