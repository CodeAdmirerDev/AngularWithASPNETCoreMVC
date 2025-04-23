import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';  
import { Task } from '../../models/task.model';  

@Component({  
  selector: 'app-task-item',  
  templateUrl: './task-item.component.html',  
  styleUrls: ['./task-item.component.scss'],  
  standalone:false,
  changeDetection: ChangeDetectionStrategy.OnPush,  
})  
export class TaskItemComponent {  
  @Input() task!: Task;  
  @Output() statusChanged = new EventEmitter<{ taskId: number; completed: boolean }>();  

  @Input() task1!: { title: string; completed: boolean };

  ngOnInit() {  
    console.log(this.task1); // Check if task has the correct structure  
}
  toggleStatus() {  
    this.statusChanged.emit({  
      taskId: this.task.id,  
      completed: !this.task.completed,  
    });  
  }  
}  
