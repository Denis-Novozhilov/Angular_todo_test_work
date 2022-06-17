import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  value: string = '';

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      title: this.value,
      id: Date.now(),
      complete: false
    };
    this.todosService.addTodo(todo);
    this.value = '';
  }

}
