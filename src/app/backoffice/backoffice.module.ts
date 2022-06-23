import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BackOfficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ActualiteComponent,
    UserComponent,
    ProfileComponent,
    BackofficeComponent,
  ],
  exports: [ActualiteComponent, UserComponent, ProfileComponent],
  imports: [CommonModule, BackOfficeRoutingModule, SharedModule, FormsModule],
})
export class BackofficeModule {}
