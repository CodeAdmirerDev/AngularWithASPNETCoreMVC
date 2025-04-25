import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substringImpurepipe',
  standalone: false,
  pure:false
})
export class SubstringImpurepipePipe implements PipeTransform {

  // You can accept additional arguments in transform:

  transform(value:string, limit:number):string {
    return value.substring(0,limit);
  }
}
