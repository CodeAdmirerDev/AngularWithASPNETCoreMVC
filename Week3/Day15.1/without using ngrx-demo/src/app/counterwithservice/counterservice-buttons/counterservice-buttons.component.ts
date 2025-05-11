import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counterservice-buttons',
  standalone: false,
  templateUrl: './counterservice-buttons.component.html',
  styleUrl: './counterservice-buttons.component.css'
})
export class CounterserviceButtonsComponent {


  constructor(private counterService : CounterService){}

  onIncrement(){
    this.counterService.incrementCounter();
  }
  onDecrement(){
    this.counterService.decrementCounter();
  }

  onReset(){
    this.counterService.resetCounter();
  }

}
