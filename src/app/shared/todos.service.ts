import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor() { }

  editTodoFlag: boolean = false;
  editTodoText: string = '';
  editTodoId: number = 0;

  public todos: Todo[] = [
    {
      id: 1,
      title: 'task_1',
      complete: false,
    },
    {
      id: 2,
      title: 'task_2',
      complete: true,
    },
    {
      id: 3,
      title: 'task_3',
      complete: false,
    }
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].complete = !this.todos[idx].complete;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  editTodoHandler(id: number, text: string) {
    this.editTodoFlag = true;
    this.editTodoText = text;
    this.editTodoId = id;
  }

  editTodo(id: number, value: string): void {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].title = value;

    this.editTodoFlag= false;
    this.editTodoText= '';
    this.editTodoId= 0; 
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

}
