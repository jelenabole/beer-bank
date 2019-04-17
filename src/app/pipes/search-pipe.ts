import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform (value, keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter(item => keys.split(',')
      .some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }

  // another way:
  /*
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        return el.toLowerCase().indexOf(input) > -1;
      })
    }
    return value;
  }
  */

}