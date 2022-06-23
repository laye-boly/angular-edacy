import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { HomeComponent } from './components/home/home.component';
import { FrontofficeComponent } from './frontoffice.component';
import { FrontOfficeRoutingModule } from './frontoffice-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    TodoComponent,
    TodoDetailComponent,
    HomeComponent,
    FrontofficeComponent,
  ],
  imports: [CommonModule, FrontOfficeRoutingModule, SharedModule, FormsModule],
})
export class FrontofficeModule {}
