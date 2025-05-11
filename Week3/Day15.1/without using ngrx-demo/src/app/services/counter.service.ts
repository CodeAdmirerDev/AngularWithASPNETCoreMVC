import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject<number>(0);

  counter$ = this.counter.asObservable();

  constructor() { }

  incrementCounter() {
    this.counter.next(this.counter.value + 1);
  }

  decrementCounter() {
    this.counter.next(this.counter.value - 1);
  }

  resetCounter() {
    this.counter.next(0);
  }

}
