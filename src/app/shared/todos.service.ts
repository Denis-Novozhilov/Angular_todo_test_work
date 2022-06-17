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

  changeTitle(id: number, newTitle: string) {
    // const item = this.todos.filter(t => t.id === id)[0];

    /*
    // начиная с индекса -1 (перед последним элементом)
    // удалить 0 элементов,
    // затем вставить числа 3 и 4
    arr.splice(-1, 0, 3, 4);
    */
    // this.todos.find(t => t.id === id).title = title;
    // console.log(`item↓`);
    // console.log(item)

    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].title = newTitle;

    // const item: any = this.todos.find(t => t.id === id);
    // console.log(`item↓`);
    // console.log(item)
    // console.log(item.title);
    // item.title = newTitle;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    // this.todos = this.todos.concat(todo);
  }

}
