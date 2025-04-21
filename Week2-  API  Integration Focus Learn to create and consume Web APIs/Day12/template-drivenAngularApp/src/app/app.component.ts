import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-drivenAngularApp';

  // Step 1 & 2: Basic properties & validation 
  userName='';
  email ='';
  age:number | null = null;

    // Step 7: Dynamic phones list  
  phones:string[]= [''];

  //Add phone input
  addPhone(){
    this.phones.push('');
  }
  removePhone(index: number){
    this.phones.splice(index,1);
  }

  onSubmit(form:any){

    alert('form data saved!');
    this.userName = '';  
    this.email = '';  
    this.age = null;  
    this.phones = [''];  
  }

  onReset(form: any) {  
    form.reset();  
    this.userName = '';  
    this.email = '';  
    this.age = null;  
    this.phones = [''];
      
  }  

}
