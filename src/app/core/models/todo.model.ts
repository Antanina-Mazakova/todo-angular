export interface ITodo {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  expired: boolean;
}

export class Todo {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  expired: boolean;

  constructor( { id = '', title = '', dueDate = '', completed = false, expired = false }) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.completed = completed;
    this.expired = expired;
  }
}
