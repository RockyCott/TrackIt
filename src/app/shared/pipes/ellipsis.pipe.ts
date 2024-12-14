import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true,
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, limit?: number): any {
    const finalLimit = limit || 100;
    if (finalLimit && value.length > finalLimit) {
      return value.substring(0, finalLimit).concat('...');
    }
    return value;
  }
}
