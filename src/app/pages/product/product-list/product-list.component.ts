import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {
  CategoryControllerService,
  CategoryShowDto,
  ProductControllerService,
  ProductShowDto
} from "../../../openapi-client";

@Component({
  selector: 'pm-product-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productShowDto: ProductShowDto[]=[];
  constructor(private productControllerService:ProductControllerService,private router:Router) {
  }
  ngOnInit(): void {
    this.productControllerService.getAllProducts().subscribe((products)=>{
        this.productShowDto = products;
      },
      (e)=>{console.error(e)});
  }
  delete(Id:number) {
    this.productControllerService.deleteProductById(Id)
      .subscribe(value => {
        this.ngOnInit();
      });

  }
}
