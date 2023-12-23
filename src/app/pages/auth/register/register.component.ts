// Importing Angular core and common modules.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing form control modules for reactive forms, along with validators.
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

// Importing Angular Material input module for UI elements.
import { MatInputModule } from "@angular/material/input";

// Importing a service for user control, possibly for handling user registration.
import { UserControllerService } from "../../../openapi-client";

// Importing Angular's Router module for navigation.
import { Router } from "@angular/router";

// Component decorator to define metadata for the RegisterComponent.
@Component({
  selector: 'pm-register', // The custom HTML tag for this component.
  standalone: true, // Indicates that the component is standalone.
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule], // Modules required for this component.
  templateUrl: './register.component.html', // Link to the HTML template for this component.
  styleUrl: './register.component.scss' // Link to the stylesheet for this component.
})
export class RegisterComponent {
  // FormGroup to manage and validate form data.
  fromGroup = new FormGroup({
    email: new FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/), Validators.required]),
    password: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    street: new FormControl(null, Validators.required),
    zip: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    mobilePhone: new FormControl(null, Validators.required),
  })

  // Method to handle form submission.
  submit() {
    console.log(this.fromGroup); // Logging the form group for debugging purposes.
    if (this.fromGroup.valid) {
      // If the form is valid, call the register method from the userControllerService.
      this.userControllerService.register({
        email: this.fromGroup.controls.email.value,
        password: this.fromGroup.controls.password.value,
        firstName: this.fromGroup.controls.firstName.value,
        lastName: this.fromGroup.controls.lastName.value,
        street: this.fromGroup.controls.street.value,
        zip: this.fromGroup.controls.zip.value,
        city: this.fromGroup.controls.city.value,
        country: this.fromGroup.controls.country.value,
        mobilePhone: this.fromGroup.controls.mobilePhone.value
      }).subscribe(value => {
        // After successful registration, navigate to the login page.
        this.router.navigateByUrl("/auth/login")
      });
    }
  }

  // Constructor for dependency injection.
  constructor(
    private readonly router: Router,
    private readonly userControllerService: UserControllerService
  ) { }
}
