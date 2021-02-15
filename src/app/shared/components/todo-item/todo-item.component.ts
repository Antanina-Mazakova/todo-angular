import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { ITodo } from 'src/app/core/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: ITodo;

  @Output() toggleCompletion = new EventEmitter();
  @Output() removeTodo = new EventEmitter();

  toggleCompletionState = (id: any, state: boolean): void => {
    this.toggleCompletion.emit({ id, state });
  }

  removeItem = (id: string): void => {
    this.removeTodo.emit(id);
  }
}
