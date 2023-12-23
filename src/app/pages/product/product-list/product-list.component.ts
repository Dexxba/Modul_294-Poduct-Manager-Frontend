// Importing necessary Angular core modules and decorators.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing Angular Router modules for navigation.
import { Router, RouterLink, RouterOutlet } from "@angular/router";

// Importing services and DTOs (Data Transfer Objects) from an OpenAPI client.
import {
  ProductControllerService,
  ProductShowDto
} from "../../../openapi-client";

// Component decorator to define metadata for the ProductListComponent.
@Component({
  selector: 'pm-product-list', // The custom HTML tag for this component.
  standalone: true, // Indicates that the component is standalone.
  imports: [CommonModule, RouterOutlet, RouterLink], // Modules required for this component.
  templateUrl: './product-list.component.html', // Link to the HTML template for this component.
  styleUrl: './product-list.component.scss' // Link to the stylesheet for this component.
})
export class ProductListComponent implements OnInit {
  // Property to hold product data.
  productShowDto: ProductShowDto[] = [];

  // Constructor for dependency injection.
  constructor(
    private productControllerService: ProductControllerService, // Service for product management.
    private router: Router // Angular Router for navigation.
  ) {}

  // ngOnInit lifecycle hook for component initialization.
  ngOnInit(): void {
    // Calling the getAllProducts method from the service to fetch product data.
    this.productControllerService.getAllProducts().subscribe(
      (products) => {
        this.productShowDto = products; // Assigning the fetched products to the property.
      },
      (e) => { console.error(e) } // Error handling.
    );
  }

  // Method to handle product deletion.
  delete(Id: number) {
    // Calling the deleteProductById method from the service.
    this.productControllerService.deleteProductById(Id).subscribe(
      value => {
        this.ngOnInit(); // Re-initializing component to refresh the product list.
      }
    );
  }
}
