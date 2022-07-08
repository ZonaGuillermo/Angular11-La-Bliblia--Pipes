import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reverse'
})
export class ReversePipe implements PipeTransform {

	transform(text: string, ...args: unknown[]): unknown {
		return text.split('').reverse().join('')
	}

}
