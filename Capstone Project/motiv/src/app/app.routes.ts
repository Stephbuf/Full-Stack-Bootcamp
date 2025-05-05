import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./page/welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./page/sign-up/sign-up.page').then((m) => m.SignUpPage),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then((m) => m.Tab4Page),
  },

  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then((m) => m.Tab5Page),
  },
  {
    path: 'add-workout',
    loadComponent: () => import('./page/add-workout/add-workout.page').then( m => m.AddWorkoutPage)
  },
  
 
];
