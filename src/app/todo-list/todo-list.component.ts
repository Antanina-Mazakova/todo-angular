import { Component, Input } from '@angular/core';

import { ITodo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input()
  todoList: ITodo[] = [];

  constructor(private todoService: TodoService) { }

  toggleCompletion = (data: { id: string, state: boolean }) => {
    this.todoService.toggleCompletion(data);
  }

  removeTodo = (id: string): void => {
    this.todoService.removeTodo(id);
  }
}
