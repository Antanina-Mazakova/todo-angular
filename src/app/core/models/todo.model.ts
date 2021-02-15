export interface ITodoInput {
  title: string;
  dueDate: Date;
}

export interface ITodo extends ITodoInput {
  id: string;
  title: string;
  dueDate: Date;
  completed: boolean;
  expired: boolean;
}
