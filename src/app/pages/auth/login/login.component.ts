// Importing Angular core and common modules.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing form-related modules from Angular forms for handling form controls and validation.
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

// Importing Angular Material input module.
import { MatInputModule } from "@angular/material/input";

// Importing a service for user control.
import { UserControllerService } from "../../../openapi-client";

// Importing Angular router modules.
import { Router, RouterLink } from "@angular/router";

// Importing ToastrService for showing notifications.
import { ToastrService } from "ngx-toastr";

// Component Decorator to define metadata for LoginComponent.
@Component({
  selector: 'pm-login', // The custom HTML tag for this component.
  standalone: true, // Indicates that the component is standalone.
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, RouterLink], // Modules required for this component.
  templateUrl: './login.component.html', // Link to the HTML template for this component.
  styleUrl: './login.component.scss' // Link to the stylesheet for this component.
})
export class LoginComponent {

  // FormGroup to handle the login form.
  fromGroup = new FormGroup({
    email: new FormControl("", [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/), Validators.required]),
    password: new FormControl("", Validators.required)
  })

  // Method to handle form submission.
  submit(){
    console.log(this.fromGroup); // Logging the form group for debugging.
    if(this.fromGroup.valid){
      // If the form is valid, call the login method from the userControllerService.
      this.userControllerService.login({
        email: this.fromGroup.controls.email.value,
        password: this.fromGroup.controls.password.value
      }).subscribe((response) => {
        // Store the access token and navigate to the product list page on successful login.
        localStorage.setItem("ACCESS_TOKEN", response.token!);
        this.router.navigate(["/product/list"]).then(() => { this.ShowSuccess() })
      })
    }
  }

  // Constructor to inject dependencies.
  constructor(
    private readonly userControllerService: UserControllerService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  // Method to show a success notification.
  ShowSuccess(){
    this.toastr.success("Login is Successful")
  }

}
