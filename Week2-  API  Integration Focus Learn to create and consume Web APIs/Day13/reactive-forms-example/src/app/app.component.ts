import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms-example';

  // Define the form group with form controls and validators  
  registrationForm: FormGroup;  

  constructor(){

    this.registrationForm= new FormGroup({

   username: new FormControl('', [  
        Validators.required,  
        Validators.minLength(4),  
        Validators.maxLength(20)  
      ]),  
      email: new FormControl('', [  
        Validators.required,  
        Validators.email  
      ]),  
      password: new FormControl('', [  
        Validators.required,  
        Validators.minLength(6)  
      ]),  
      confirmPassword: new FormControl('', [  
        Validators.required  
      ]),  
    }, {  
      validators: [this.passwordsMatchValidator] // Custom cross-field validator  
    });  
  }


  
  // Custom validator for password matching 
  passwordsMatchValidator(formGroup: AbstractControl): ValidationErrors | null {  
    const password = formGroup.get('password')?.value;  
    const confirmPassword = formGroup.get('confirmPassword')?.value;  
    return password === confirmPassword ? null : { passwordsMismatch: true };  
  }  

    // Convenience getters for template access  
    get username() {  
      return this.registrationForm.get('username');  
    }  
  
    get email() {  
      return this.registrationForm.get('email');  
    }  
  
    get password() {  
      return this.registrationForm.get('password');  
    }  
  
    get confirmPassword() {  
      return this.registrationForm.get('confirmPassword');  
    }  
  
    // On form submit handler  
    onSubmit(): void {  
      if (this.registrationForm.valid) {  
        console.log('Form Submitted', this.registrationForm.value);  
        alert('Registration Successful!');  
        this.registrationForm.reset();  
      } else {  
        // Trigger validation for all controls (mark touched to show errors)  
        this.registrationForm.markAllAsTouched();  
      }  
    }  
  
}
