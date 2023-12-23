// Importing Angular core modules.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing modules for handling forms in Angular.
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

// Importing Angular Material form field module for UI components.
import { MatFormFieldModule } from "@angular/material/form-field";

// Importing Angular's Router modules for navigation.
import { Router, RouterLink } from "@angular/router";

// Importing the CategoryControllerService from a client library, presumably for API interactions.
import { CategoryControllerService } from "../../../openapi-client";

// Component decorator to define metadata for the CategoryModifyComponent.
@Component({
  selector: 'pm-category-modify', // The custom HTML tag for this component.
  standalone: true, // Indicates that the component is standalone.
  imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, RouterLink], // Modules required for this component.
  templateUrl: './category-modify.component.html', // Link to the HTML template for this component.
  styleUrl: './category-modify.component.scss' // Link to the stylesheet for this component.
})
export class CategoryModifyComponent {
  // FormGroup to handle form data.
  fromGroup = new FormGroup({
    name: new FormControl(null, Validators.required), // FormControl for the category name.
    active: new FormControl(null, Validators.required), // FormControl for the 'active' status.
  })

  // Method to handle form submission.
  submit() {
    if (this.fromGroup.valid) {
      // If the form is valid, call the createCategory method with form data.
      this.categoryControllerService.createCategory({
        name: this.fromGroup.controls.name.value,
        active: this.fromGroup.controls.active.value
      }).subscribe(value => {
        // Navigate to the category list page after successful creation.
        this.router.navigateByUrl("/category/list")
      });
    }
  }

  // Constructor for dependency injection.
  constructor(
    private readonly router: Router, // Injecting the Router for navigation.
    private readonly categoryControllerService: CategoryControllerService // Injecting the service for category management.
  ) {}
}
