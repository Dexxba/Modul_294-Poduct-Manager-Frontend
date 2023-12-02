import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path:'auth/login',
    loadComponent: () => import('./auth/login/login.component').then(value => value.LoginComponent)
  }
];
