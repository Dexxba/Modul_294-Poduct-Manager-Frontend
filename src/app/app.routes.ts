import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'auth/login',
    loadComponent: () => import('./pages/auth/login/login.component').then(value => value.LoginComponent)

  },
  {
    path:'category',
    loadChildren: () => import("./pages/category/category.module").then((value => value.CategoryModule))
  },
  {
    path:"product",
    loadChildren:() => import("./pages/product/product.module").then(value => value.ProductModule)
  }
];
