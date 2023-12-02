import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fromGroup = new FormGroup({
    Email: new FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/), Validators.required]),
    password: new FormControl(null,Validators.required),
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    street: new FormControl(null,Validators.required),
    zip: new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required),
    country: new FormControl(null,Validators.required),
    mobilePhone: new FormControl(null,Validators.required),
    email: new FormControl(null,Validators.required),


  })

  submit() {

  }
}
