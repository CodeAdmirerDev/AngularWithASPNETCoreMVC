import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-buttons',
  standalone: false,
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {

  constructor(private store: Store<{ counter: CounterState}>){}


  onIncrement(){

   this.store.dispatch(increment());
  }

  
  onDecrement(){
   
    this.store.dispatch(decrement());
  }

  
  onReset(){
    this.store.dispatch(reset());
  }
}
