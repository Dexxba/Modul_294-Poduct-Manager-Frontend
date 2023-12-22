import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryControllerService, CategoryShowDto} from "../../../openapi-client";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'pm-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent  implements OnInit{
  categoryShowDto: CategoryShowDto[]=[];
  constructor(private categoryControllerService:CategoryControllerService,private router: Router,) {
  }

  ngOnInit(): void {
    this.categoryControllerService.getAllCategories().subscribe((categories)=>{
    this.categoryShowDto = categories;
    },
      (e)=>{console.error(e)});
  }
  delete(Id:number) {
      this.categoryControllerService.deleteCategoryById(Id)
      .subscribe(value => {
        this.ngOnInit();
      });
  }
}
