// Importing necessary Angular core modules and decorators.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing modules for handling forms in Angular.
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

// Importing Angular Router modules for navigation.
import { Router, RouterLink } from "@angular/router";

// Importing services from an OpenAPI client, presumably for API interactions.
import { ProductControllerService } from "../../../openapi-client";

// Importing Angular Material form field module for UI components.
import { MatFormFieldModule } from "@angular/material/form-field";

// Component decorator to define metadata for the ProductModifyComponent.
@Component({
  selector: 'pm-product-modify', // The custom HTML tag for this component.
  standalone: true, // Indicates that the component is standalone.
  imports: [CommonModule, FormsModule, MatFormFieldModule, RouterLink, ReactiveFormsModule], // Modules required for this component.
  templateUrl: './product-modify.component.html', // Link to the HTML template for this component.
  styleUrl: './product-modify.component.scss' // Link to the stylesheet for this component.
})
export class ProductModifyComponent {
  // FormGroup to handle form data.
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

  // Method to handle form submission.
  submit() {
    console.log(this.fromGroup); // Logging the form group for debugging.
    if (this.fromGroup.valid) {
      // If the form is valid, call the createProduct method with form data.
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
        // Navigate to the product list page after successful creation/modification.
        this.router.navigateByUrl("/product/list")
      });
    }
  }

  // Constructor for dependency injection.
  constructor(
    private readonly router: Router, // Injecting the Router for navigation.
    private readonly productControllerService: ProductControllerService // Injecting the service for product management.
  ) {}
}
