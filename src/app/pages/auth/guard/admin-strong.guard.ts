// Importing necessary Angular Router components and jwt-decode library.
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { inject } from "@angular/core";

// Interface to describe the shape of the expected token payload.
interface TokenCheck {
  roles: string[];
}

// Defining the guard function. 'CanActivateFn' is a type that defines a route guard function in Angular.
export const adminStrongGuard: CanActivateFn = (route, state) => {
  // Injecting the Router service into the guard.
  const router = inject(Router);

  try {
    // Attempting to retrieve the access token from localStorage.
    const token = localStorage.getItem('ACCESS_TOKEN');

    // Checking if the token exists.
    if (token) {
      // Decoding the JWT token to extract its payload.
      const payload: TokenCheck = jwtDecode<TokenCheck>(token);

      // Checking if the 'roles' array in the token payload exists,
      // is an array, and includes the 'admin' role.
      if (payload.roles && Array.isArray(payload.roles) && payload.roles.includes('admin')) {
        // If the checks pass, return true to allow route activation.
        return true;
      }
    }
  } catch (error) {
    // If there's an error (like an invalid token), log the error and redirect to the login page.
    console.error('Error decoding token', error);
    router.navigate(['/auth/login']);
    return false;
  }

  // If the token doesn't exist or doesn't contain the 'admin' role, redirect to login and deny access.
  router.navigate(['/auth/login']);
  return false;
};
