import { Component } from '@angular/core';

import { TodoBaseComponent } from 'src/app/todo-base/todo-base.component';
import { TodoService } from 'src/app/core/services/todo.service';
import { ITodo } from '../core/models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent extends TodoBaseComponent {
  constructor(private todoService: TodoService) {
    super();
  }

  addTodo = (todoData: ITodo) => {
    this.todoService.addTodo(todoData);
  }
}
