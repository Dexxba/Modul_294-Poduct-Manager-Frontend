import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {UserControllerService} from "../../../openapi-client";
import {Router, RouterLink} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  fromGroup = new FormGroup({
    email: new FormControl("", [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/),Validators.required]),
    password: new FormControl("",Validators.required)
  })
  submit(){
    console.log(this.fromGroup);
    if(this.fromGroup.valid){
      this.userControllerService.login({
        email: this.fromGroup.controls.email.value,
        password:this.fromGroup.controls.password.value
      }).subscribe((response) => {
      localStorage.setItem("ACCESS_TOKEN",response.token!);
      this.router.navigate(["/product/list"]).then(()=>{this.ShowSuccess()})
      })
    }
  }
  constructor(private readonly userControllerService :UserControllerService,private toastr:ToastrService,private router:Router) {
  }
  ShowSuccess(){
    this.toastr.success("Login is Successful")
  }

}
