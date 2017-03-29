import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardThematique'
})
export class CardThematiquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(! args) return value;

    return value.filter(val => val.title.includes(args));
  }

}
