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

  editValue: string = '';
  editFlag: boolean = false;
  editId: number = 0;

  ngOnInit(): void {
    this.editValue = this.todosService.editTodoText;
    this.editFlag = this.todosService.editTodoFlag;
    this.editId = this.todosService.editTodoId;
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

  addEditValue(id:number) {
    this.todosService.editTodo(id, this.editValue);
    this.editValue = '';
  }

}
