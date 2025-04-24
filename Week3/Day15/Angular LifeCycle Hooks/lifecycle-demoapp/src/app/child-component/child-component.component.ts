import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: false,
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{


  @Input() inputData:string ='';

  constructor(){
    console.log("Child: constructor is invoked");
  }

  ngOnInit(): void {
    console.log("Child: ngOnInt is invoked");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child: ngOnChanges is invoked");
  }
  ngDoCheck(): void {
    console.log("Child: ngDoCheck is invoked");
  }
  ngAfterContentInit(): void {
    console.log("Child: ngAfterContentInit is invoked");
  }
  ngAfterContentChecked(): void {
    console.log("Child: ngAfterContentChecked is invoked");
  }

  ngAfterViewInit(): void {
    console.log("Child: ngAfterViewInit is invoked");
  }
  ngAfterViewChecked(): void {
    console.log("Child: ngAfterViewChecked is invoked");
  }

  ngOnDestroy(): void {
    console.log("Child: ngOnDestroy is invoked");
  }

}
