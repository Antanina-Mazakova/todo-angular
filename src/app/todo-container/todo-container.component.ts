import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { ITodo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  todoList: ITodo[] = [];

  private todoListSubscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoListSubscription = this.todoService.todoList$.subscribe((todoList: ITodo[]): void => {
      this.todoList = todoList;
    });
  }

  ngOnDestroy(): void {
    this.todoListSubscription.unsubscribe();
  }
}
