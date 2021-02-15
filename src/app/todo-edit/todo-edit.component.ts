import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from 'src/app/core/services/todo.service';
import { ITodo, ITodoInput } from '../core/models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  id: string;
  todo: ITodo;
  todoData = {
    dueDate: new Date(),
    title: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.todo = this.todoService.getTodo(params.get('id'));
      this.id = this.todo?.id;
      this.todoData = { dueDate: this.todo?.dueDate, title: this.todo?.title };
    });
  }

  updateTodo = (todoData: ITodoInput): void => {
    this.todoService.editTodo({ ...todoData, id: this.id });
    this.router.navigate(['/todos']);
  }
}


