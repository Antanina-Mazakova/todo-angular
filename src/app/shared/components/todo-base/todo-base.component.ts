import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {FormControl, FormControlDirective, FormGroup, FormGroupDirective, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-todo-base',
  templateUrl: './todo-base.component.html',
  styleUrls: ['./todo-base.component.scss']
})
export class TodoBaseComponent implements OnInit {
  @Output() submitData = new EventEmitter<{dueDate: Date, title: string }>();
  @Input() iconName: string;
  @Input() submitTitle: string;
  @Input() todoData: {
    title: string;
    dueDate: Date;
  }

  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    dueDate: new FormControl(new Date(), [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {
    if (this.todoData) {
      this.todoForm.patchValue({ title: this.todoData?.title, dueDate: this.todoData?.dueDate });
    }
  }

  submit = (formDirective: FormGroupDirective) => {
    if (this.todoForm.invalid) {
        return;
    }

    const todoData = this.todoForm.value;
    this.submitData.emit(todoData);

    formDirective.resetForm();
    this.todoForm.reset();
  }

  hasError = (controlName: string, errorName: string): boolean => {
    return this.todoForm.controls[controlName].hasError(errorName);
  }
}
