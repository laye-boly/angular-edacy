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
import { ChatComponent } from './components/chat/chat.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    ProfileComponent,
    TodoComponent,
    TodoDetailComponent,
    HomeComponent,
    FrontofficeComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    SharedModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
})
export class FrontofficeModule {}
