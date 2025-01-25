import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginPageComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then((c) => c.RegisterPageComponent),
  },
];
