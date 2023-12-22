import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {Router, RouterLink} from "@angular/router";
import {CategoryControllerService, } from "../../../openapi-client";

@Component({
  selector: 'pm-category-modify',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, RouterLink],
  templateUrl: './category-modify.component.html',
  styleUrl: './category-modify.component.scss'
})
export class CategoryModifyComponent {
  fromGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    active:new FormControl(null, Validators.required),

  })
  submit() {
    console.log(this.fromGroup);
    if(this.fromGroup.valid) {
      this.categoryControllerService.createCategory({
        name: this.fromGroup.controls.name.value,
        active:this.fromGroup.controls.active.value
      }).subscribe(value => {
        this.router.navigateByUrl("/category/list")
      });
    }
  }
  constructor(
    private readonly router: Router,
    private readonly categoryControllerService:CategoryControllerService) {
  }
}
