import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString'
})
export class ShortStringPipe implements PipeTransform {

  transform(value: string, limit): any {
    if (value && value.length > limit) {
      return value.slice(0, limit) + '...';
    }
    return value;
  }

}
