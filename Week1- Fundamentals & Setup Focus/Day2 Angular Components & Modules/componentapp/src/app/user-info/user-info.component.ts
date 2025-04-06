import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {

  public UserInfoComponent(){

  }

  userName :string ="CodeAdmirer";
  city:string ="Hyderbad";

  getUserInfo(){

    alert(`${this.userName} is from ${this.city}`);
  }

}
