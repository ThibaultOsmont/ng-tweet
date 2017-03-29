import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardUppercase'
})
export class CardUppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //if(! args) return value;

    return value.toUpperCase();
  }

}
