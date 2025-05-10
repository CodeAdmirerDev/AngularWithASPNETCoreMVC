import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit  { //OnDestroy

  counterSubscription!: Subscription;

  counter!: number;

  counter$! :Observable<{counter:number}>;
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {


   this.counterSubscription = this.store.select('counter').subscribe((data: CounterState) => {
      this.counter = data.counter;
    });

    this.counter$ = this.store.select('counter');

  }

  // ngOnDestroy() {
  //   if(this.counterSubscription){
  //     this.counterSubscription.unsubscribe();
  //   }
  // }


}


