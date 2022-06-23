import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { HomeComponent } from './components/home/home.component';
import { FrontofficeComponent } from './frontoffice.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: 'todo',
        component: TodoComponent,
      },
      { path: 'todo/:id', component: TodoDetailComponent },
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
