import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'compose-email',
    loadComponent: () => import('./components/compose-email/compose-email.page').then( m => m.ComposeEmailPage)
  },
  {
    path: 'compose-email',
    loadComponent: () => import('./components/compose-email/compose-email.page').then( m => m.ComposeEmailPage)
  },
];
