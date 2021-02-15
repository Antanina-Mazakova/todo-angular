import { Component } from '@angular/core';

import { TodoService } from 'src/app/core/services/todo.service';
import { ITodo } from '../core/models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  constructor(private todoService: TodoService) {}

  addTodo = (todoData: ITodo) => {
    this.todoService.addTodo(todoData);
  }
}
