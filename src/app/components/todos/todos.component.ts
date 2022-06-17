import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  editedValue: string = '';

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }
  removeTodo(id: number): void {
    this.todosService.removeTodo(id);
  }

  onEditClickHandler(id: number): void {
    const idx = this.todosService.todos.findIndex(t => t.id === id);
    const text = this.todosService.todos[idx].title;
    this.todosService.editTodoHandler(id, text);
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {

  }

}
