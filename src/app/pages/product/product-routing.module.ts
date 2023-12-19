import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {adminStrongGuard} from "../auth/guard/admin-strong.guard";

const routes: Routes = [
  {
    path:"list",
    loadComponent:() => import("./product-list/product-list.component").then(value => value.ProductListComponent)
  },
  {
    path:"id",
    loadComponent:() => import("./product-modify/product-modify.component").then(value => value.ProductModifyComponent)
  },
  {
    path:"create",
    loadComponent:() => import("./product-modify/product-modify.component").then(value => value.ProductModifyComponent),
    canActivate:[adminStrongGuard]
  },
  {
    path:"details/:id",
    loadComponent:() => import("./product-detail/product-detail.component").then(value => value.ProductDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
