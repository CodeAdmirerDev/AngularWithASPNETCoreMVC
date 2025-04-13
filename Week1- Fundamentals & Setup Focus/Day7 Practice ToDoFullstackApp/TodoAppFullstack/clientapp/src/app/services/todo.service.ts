import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:5273/api/todo';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  addTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateTodo(id: number, todo: Partial<Todo>): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.baseUrl}/${id}`, todo);
  }
  toggleTodoCompletion(id: number, isCompleted: boolean): Observable<Todo> {
    return this.httpClient.patch<Todo>(`${this.baseUrl}/${id}`, { isCompleted });
  }

  getTodoById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.baseUrl}/${id}`);
  }


}
