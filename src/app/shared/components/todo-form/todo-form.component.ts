import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() submitTodo = new EventEmitter<{dueDate: Date, title: string }>();
  @Input() iconName: string;
  @Input() submitTitle: string;
  @Input() todo: {
    title: string;
    dueDate: Date;
  }

  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    dueDate: new FormControl(new Date(), [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {
    if (this.todo) {
      this.todoForm.patchValue({ title: this.todo?.title, dueDate: this.todo?.dueDate });
    }
  }

  submit = (formDirective: FormGroupDirective) => {
    if (this.todoForm.invalid) {
      return;
    }

    const todoData = this.todoForm.value;
    this.submitTodo.emit(todoData);

    formDirective.resetForm();
    this.todoForm.reset();
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.todoForm.controls[controlName].hasError(errorName);
  }
}
