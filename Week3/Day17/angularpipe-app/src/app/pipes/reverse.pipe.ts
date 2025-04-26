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

}
