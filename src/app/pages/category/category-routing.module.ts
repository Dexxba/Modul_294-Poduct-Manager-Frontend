import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {adminStrongGuard} from "../auth/guard/admin-strong.guard";

const routes: Routes = [
  {
    path:"list",
    loadComponent: () => import("./category-list/category-list.component").then(value => value.CategoryListComponent)
  },
  {
    path:":id",
    loadComponent:() => import("./category-modify/category-modify.component").then(value => value.CategoryModifyComponent)
  },
  {
    path:"create",
    loadComponent:() => import("./category-modify/category-modify.component").then(value => value.CategoryModifyComponent),
    canActivate:[adminStrongGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
