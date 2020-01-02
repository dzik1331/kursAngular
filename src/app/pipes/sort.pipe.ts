import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], key?: string): any {
    if (!value || value.length === 0) {
      return value;
    }
    if (key !== null) {
      return value.sort((a, b) => a[key].localeCompare(b[key]));
    } else {
      return value.sort((a, b) => a.localeCompare(b));
    }
  }

}
