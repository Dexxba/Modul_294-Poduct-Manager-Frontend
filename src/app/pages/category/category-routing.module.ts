// Importing necessary Angular modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing the adminStrongGuard for route guarding.
import { adminStrongGuard } from "../auth/guard/admin-strong.guard";

// Defining the routes for the category features.
const routes: Routes = [
  {
    // Route for listing categories.
    path: "list",
    // Dynamically loading the CategoryListComponent when the route is visited.
    loadComponent: () => import("./category-list/category-list.component")
      .then(value => value.CategoryListComponent)
  },
  {
    // Route for viewing category details. ':id' is a route parameter.
    path: "details/:id",
    // Dynamically loading the CategoryModifyComponent for this route.
    loadComponent: () => import("./category-modify/category-modify.component")
      .then(value => value.CategoryModifyComponent)
  },
  {
    // Route for creating a new category.
    path: "edit/create",
    // Dynamically loading the CategoryModifyComponent for the creation route.
    loadComponent: () => import("./category-modify/category-modify.component")
      .then(value => value.CategoryModifyComponent),
    // Protecting this route with the adminStrongGuard.
    canActivate: [adminStrongGuard]
  }
];

// NgModule decorator to define metadata for the routing module.
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importing RouterModule with child routes.
  exports: [RouterModule] // Exporting RouterModule for use in other parts of the application.
})
export class CategoryRoutingModule { }
