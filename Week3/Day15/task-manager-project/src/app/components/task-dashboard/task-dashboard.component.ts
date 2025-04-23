import { Component } from '@angular/core';  
import { Task } from '../../models/task.model';  

@Component({  
  selector: 'app-task-dashboard',  
  templateUrl: './task-dashboard.component.html',  
  styleUrls: ['./task-dashboard.component.scss'],  
  standalone:false
})  
export class TaskDashboardComponent {  
  taskTitle = '';  
  tasks: Task[] = [];  

  addTaskAndReset(inputElement: HTMLInputElement) {  
    if (!this.taskTitle.trim()) return;  

    const newTask: Task = {  
      id: Date.now(),  
      title: this.taskTitle.trim(),  
      completed: false,  
    };  

    this.tasks.push(newTask);  
    this.taskTitle = '';  

    // Reset input field using native ElementRef access  
    inputElement.focus();  
  }  

  updateTaskStatus(taskId: number, completed: boolean) {  
    const task = this.tasks.find((t) => t.id === taskId);  
    if (task) {  
      task.completed = completed;  
    }  
  }  
}  
