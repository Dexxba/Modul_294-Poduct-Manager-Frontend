import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {UserControllerService} from "../../../openapi-client";
import {Router} from "@angular/router";

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fromGroup = new FormGroup({
    email: new FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/), Validators.required]),
    password: new FormControl(null,Validators.required),
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    street: new FormControl(null,Validators.required),
    zip: new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required),
    country: new FormControl(null,Validators.required),
    mobilePhone: new FormControl(null,Validators.required),


  })

  submit() {
    console.log(this.fromGroup);
    if(this.fromGroup.valid) {
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
        this.router.navigateByUrl("/auth/login")
      });
    }
  }
  constructor(
    private readonly router: Router,
    private readonly userControllerService:UserControllerService) {
  }
}
