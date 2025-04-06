import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  standalone: false,
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {

  public MyProfileComponent(){

  }
   userName:string ="CodeAdmirer";

   sayHelloToUser(){
    alert("Welcome to CodeAdmirer website!");
   }
}
