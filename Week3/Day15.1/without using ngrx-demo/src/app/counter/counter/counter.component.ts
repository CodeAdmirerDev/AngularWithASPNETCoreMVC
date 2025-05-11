import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{

counter:number =0;

constructor(){

}

ngOnInit(): void {
  
}

onIncrement(){

  this.counter++;
}

onDecrement(){
this.counter--;
}
onReset(){

  this.counter=0;
}



}
