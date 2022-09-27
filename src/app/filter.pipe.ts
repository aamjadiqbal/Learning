import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, toBeFiltered: string, propName: string): any {
    if(value.length === 0 || toBeFiltered === '') {
        return value;
    }
    const filteredArray = [];
    for(const item of value) {
      //  if(item.city === toBeFiltered) {
      if(item[propName] === toBeFiltered) {
        filteredArray.push(item)
      }
    }
    return filteredArray;
  }

}
