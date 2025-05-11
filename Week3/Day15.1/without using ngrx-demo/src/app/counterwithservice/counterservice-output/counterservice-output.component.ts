import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counterservice-output',
  standalone: false,
  templateUrl: './counterservice-output.component.html',
  styleUrl: './counterservice-output.component.css'
})
export class CounterserviceOutputComponent  implements OnInit{


   constructor(private counterService: CounterService){

  }

  counter!:number;


  ngOnInit(): void {

    this.counterService.counter$.subscribe(value => this.counter= value);
  }


}
