// Importing necessary Angular core modules and decorators.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing services and DTOs (Data Transfer Objects) from an OpenAPI client.
import { CategoryControllerService, CategoryShowDto } from "../../../openapi-client";

// Importing Angular Router modules for navigation.
import { Router, RouterLink } from "@angular/router";

// Component decorator to define metadata for the CategoryListComponent.
@Component({
  selector: 'pm-category-list', // The custom HTML tag for this component.
  standalone: true, // Indicates that the component is standalone.
  imports: [CommonModule, RouterLink], // Modules required for this component.
  templateUrl: './category-list.component.html', // Link to the HTML template for this component.
  styleUrl: './category-list.component.scss' // Link to the stylesheet for this component.
})
export class CategoryListComponent implements OnInit {
  // Property to hold category data.
  categoryShowDto: CategoryShowDto[] = [];

  // Constructor for dependency injection.
  constructor(
    private categoryControllerService: CategoryControllerService, // Service for category management.
    private router: Router // Angular Router for navigation.
  ) {}

  // ngOnInit lifecycle hook for component initialization.
  ngOnInit(): void {
    // Calling the getAllCategories method from the service to fetch category data.
    this.categoryControllerService.getAllCategories().subscribe(
      (categories) => {
        this.categoryShowDto = categories; // Assigning the fetched categories to the property.
      },
      (e) => { console.error(e) } // Error handling.
    );
  }

  // Method to handle category deletion.
  delete(Id: number) {
    // Calling the deleteCategoryById method from the service.
    this.categoryControllerService.deleteCategoryById(Id).subscribe(
      value => {
        this.ngOnInit(); // Re-initializing component to refresh the category list.
      }
    );
  }
}
