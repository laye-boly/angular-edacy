import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'portail',
    // loadChildren: 'src/app/frontoffice/frontoffice.module#FrontofficeModule',
    loadChildren: () =>
      import('src/app/frontoffice/frontoffice.module').then(
        (m) => m.FrontofficeModule
      ),
  },
  {
    path: 'backoffice',
    // loadChildren: 'src/app/backoffice/backoffice.module#BackofficeModule',
    loadChildren: () =>
      import('src/app/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule
      ),
  },

  {
    path: '',
    redirectTo: 'portail',
    pathMatch: 'full',
  },
  {
    path: '*',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
