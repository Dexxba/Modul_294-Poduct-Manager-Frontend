// Importing Angular's router module.
import { Routes } from '@angular/router';

// Exporting routes for use in the application's routing system.
export const routes: Routes = [
  {
    // Route for user registration.
    path: "auth/register",
    // Dynamically loads the RegisterComponent when this route is visited.
    loadComponent: () => import("./pages/auth/register/register.component")
      .then(value => value.RegisterComponent)
  },
  {
    // Route for user login.
    path: 'auth/login',
    // Dynamically loads the LoginComponent for this route.
    loadComponent: () => import('./pages/auth/login/login.component')
      .then(value => value.LoginComponent)
  },
  {
    // Route for handling categories. This is a parent route for category-related features.
    path: 'category',
    // Lazy loading the CategoryModule.
    // The entire module is loaded dynamically, which may contain multiple components and services.
    loadChildren: () => import("./pages/category/category.module")
      .then((value => value.CategoryModule))
  },
  {
    // Route for handling products. This is a parent route for product-related features.
    path: "product",
    // Lazy loading the ProductModule.
    loadChildren: () => import("./pages/product/product.module")
      .then(value => value.ProductModule)
  }
];
