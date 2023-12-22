import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CategoryControllerService, ProductControllerService} from "../../../openapi-client";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'pm-product-modify',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, RouterLink, ReactiveFormsModule],
  templateUrl: './product-modify.component.html',
  styleUrl: './product-modify.component.scss'
})
export class ProductModifyComponent {
  fromGroup = new FormGroup({
    sku: new FormControl(null, Validators.required),
    active: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    image: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    stock: new FormControl(null, Validators.required),
    categoryId: new FormControl(null, Validators.required),
  })
  submit() {
    console.log(this.fromGroup);
    if(this.fromGroup.valid) {
      this.productControllerService.createProduct({
        sku: this.fromGroup.controls.sku.value,
        active: this.fromGroup.controls.active.value,
        name: this.fromGroup.controls.name.value,
        image: this.fromGroup.controls.image.value,
        description: this.fromGroup.controls.description.value,
        price: this.fromGroup.controls.price.value,
        stock: this.fromGroup.controls.stock.value,
        categoryId: this.fromGroup.controls.categoryId.value
      }).subscribe(value => {
        this.router.navigateByUrl("/product/list")
      });
    }
  }
  constructor(
    private readonly router: Router,
    private readonly productControllerService:ProductControllerService) {
  }
}
