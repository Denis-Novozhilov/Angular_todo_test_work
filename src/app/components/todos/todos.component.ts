import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  editableFlag:boolean = false;

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }
  removeTodo(id: number): void {
    this.todosService.removeTodo(id);
  } 
  onEditEnd(event: any) {
    console.log(`onEditEnd`)
    console.log(event)
    this.editableFlag = false;
  }
  onEditTitleHandler(event: any){
    console.log(event)
    // this.editableFlag = !this.editableFlag;
    console.log(event.path[1].children[0])
    this.editableFlag = true;
    const elem = event.path[1].children[0];
    elem.focus();
    elem.setSelectionRange();
  }
  onTitleChange(event: any, id: number): void {
    console.log(event.srcElement.innerText)
    const title = event.srcElement.innerText;
    this.todosService.changeTitle(id, title);
  }
  ngOnInit(): void {

  }

}
