import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContainerComponent } from 'src/app/todo-container/todo-container.component';
import { TodoEditComponent } from 'src/app/todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoContainerComponent
  },
  {
    path: 'todos/:id/edit',
    component: TodoEditComponent,
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
