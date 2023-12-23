// Importing Angular core module and router module.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing a guard for route protection.
import { adminStrongGuard } from "../auth/guard/admin-strong.guard";

// Defining routes for product-related features.
const routes: Routes = [
  {
    // Route for listing products.
    path: "list",
    // Lazy loading the ProductListComponent.
    // This component will be loaded dynamically when the route is visited.
    loadComponent: () => import("./product-list/product-list.component")
      .then(value => value.ProductListComponent)
  },
  {
    // Route for creating or editing a product.
    path: "edit/create",
    // Lazy loading the ProductModifyComponent.
    loadComponent: () => import("./product-modify/product-modify.component")
      .then(value => value.ProductModifyComponent),
    // Protecting this route with the adminStrongGuard.
    canActivate: [adminStrongGuard]
  },
  {
    // Route for viewing product details. ':id' is a dynamic segment.
    path: "details/:id",
    // Lazy loading the ProductDetailComponent.
    loadComponent: () => import("./product-detail/product-detail.component")
      .then(value => value.ProductDetailComponent)
  }
];

// NgModule decorator to define metadata for the routing module.
@NgModule({
  imports: [RouterModule.forChild(routes)], // Configuring the router with child routes.
  exports: [RouterModule] // Exporting RouterModule to be available throughout the application.
})
export class ProductRoutingModule { }
