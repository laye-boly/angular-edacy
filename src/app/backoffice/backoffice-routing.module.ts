import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { UserComponent } from './components/user/user.component';
import { BackofficeComponent } from './backoffice.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: 'user',
        component: UserComponent,
      },

      {
        path: 'actu',
        component: ActualiteComponent,
      },

      {
        path: 'dashbord',
        component: DashbordComponent,
      },

      {
        path: '',
        redirectTo: 'dashbord',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
