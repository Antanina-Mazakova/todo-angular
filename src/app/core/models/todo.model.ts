export interface ITodo {
  id: string;
  title: string;
  dueDate: Date;
  completed: boolean;
  expired: boolean;
}

export class Todo {
  id: string;
  title: string;
  dueDate: Date;
  completed: boolean;
  expired: boolean;

  constructor( { id = '', title = '', dueDate = new Date(), completed = false, expired = false }) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.completed = completed;
    this.expired = expired;
  }
}
