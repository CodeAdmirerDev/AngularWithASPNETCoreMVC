import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';  
import { Task } from '../../models/task.model';  

@Component({  
  selector: 'app-statistics-panel',  
  templateUrl: './statistics-panel.component.html',  
  styleUrls: ['./statistics-panel.component.scss'],  
  standalone:false
})  
export class StatisticsPanelComponent implements OnChanges {  
  @Input() tasks: Task[] = [];  
  total = 0;  
  completed = 0;  

  ngOnChanges(changes: SimpleChanges): void {  
    if (changes['tasks']) {  
      this.total = this.tasks.length;  
      this.completed = this.tasks.filter((t) => t.completed).length;  
    }  
  }  
}  

