import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.loadToDos();
  }

  loadToDos() {
    this.todoService.getTodos().subscribe(data => this.todos = data);
  }

  addToDo() {
    if (!this.newTodo.trim())
      return;

    const newtodo: Partial<Todo> = {
      title: this.newTodo, isCompleted: false
    };

    this.todoService.addTodo(newtodo).subscribe(() => {
      this.newTodo = '';
      this.loadToDos();
    });
  }

  deleteToDo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => this.loadToDos());
  }

  toggleCompletion(id: number, isCompleted: boolean) {
    this.todoService.toggleTodoCompletion(id, isCompleted).subscribe(() => this.loadToDos());
  }

}
