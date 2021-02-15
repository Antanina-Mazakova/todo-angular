import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Todo, ITodo } from 'src/app/core/models/todo.model';
import { getTimestamp } from 'src/app/core/helpers';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos: ITodo[] = [{
    id: uuidv4(),
    title: 'Create ToDo list',
    dueDate: '',
    completed: true,
    expired: false
  }];

  private todoList = new BehaviorSubject<ITodo[]>(this.todos);
  todoList$ = this.todoList.asObservable();

  constructor() { }

  addTodo = (todoItem: ITodo) => {
    const expired = getTimestamp() > getTimestamp(todoItem.dueDate);
    const todo = new Todo({ ...todoItem, id: uuidv4(), completed: false, expired });

    const todoList = this.todoList.getValue();
    this.todoList.next([todo, ...todoList]);
  }

  toggleCompletion = (data: { id: string, state: any }): void => {
    const { id, state } = data;

    const todoList = this.todoList.getValue()
      .map((todoItem: ITodo): ITodo => {
        if (todoItem.id === id) {
          todoItem.completed = state;
        }

        return todoItem;
      });

    this.todoList.next(todoList);
  }

  removeTodo = (id: string): void => {
    const todoList = this.todoList.getValue()
      .filter((todoItem: ITodo): boolean => todoItem.id !== id);

    this.todoList.next(todoList);
  }

  getTodo = (id: any): any => {
    return this.todoList.getValue().find((todo: ITodo): boolean => todo.id === id);
  }

  editTodo = (todoItem: ITodo): void => {
    const expired = getTimestamp() > getTimestamp(todoItem.dueDate);
    const todoList = this.todoList.getValue()
      .map((todo: ITodo): ITodo => {
        if (todo.id === todoItem.id) {
          todo = {
            ...todo,
            ...todoItem,
            expired
          };
        }
        return todo;
      });

    this.todoList.next(todoList);
  }
}
