import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes-demo',
  standalone: false,
  templateUrl: './builtin-pipes-demo.component.html',
  styleUrl: './builtin-pipes-demo.component.css'
})
export class BuiltinPipesDemoComponent {

  name:string ='CodeAdmirer';
  message:string ='Learning pipes usage in angular';
  today:Date =new Date();
  price:number =15000.252;
  percentage:number =0.876;
  score :number =95.794;
  users=[{id:1,name:'CodeAdmirer'}, {id:2,name:'CodeAdmirerDev'}];
  longText :string ='In this session we are learning about the pipes in angular';

}
