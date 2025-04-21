import { Directive } from '@angular/core';  
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';  

@Directive({  
  selector: '[noSpaces]',  
  providers: [{ provide: NG_VALIDATORS, useExisting: NoSpacesValidatorDirective, multi: true }] ,
  standalone:false 
})  
export class NoSpacesValidatorDirective implements Validator {  
  validate(control: AbstractControl): ValidationErrors | null {  
    if (control.value && control.value.indexOf(' ') >= 0) {  
      return { noSpaces: true };  
    }  
    return null;  
  }  
}  