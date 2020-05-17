import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'YesNo'
})
export class YesNoPipe implements PipeTransform {

    transform(value: string, arg?: string): string {
        return value ? 'Yes' : 'No';
    }
}
