import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: false
})
export class ReversePipe implements PipeTransform {

  
  transform(value:string):string {
    
    if(!value) return '';
    return value.split('').reverse().join('');
  }

  // You can accept additional arguments in transform:

  // transform(value:string, limit:number):string {
  //   return value.substring(0,limit);
  // }

}
