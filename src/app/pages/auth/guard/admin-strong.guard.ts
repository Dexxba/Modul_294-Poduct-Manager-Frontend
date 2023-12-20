import { CanActivateFn, Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import {inject} from "@angular/core";

interface TokenCheck {
  roles: string[];

}

export const adminStrongGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  try {
    const token = localStorage.getItem('ACCESS_TOKEN');

    if (token) {
      const payload: TokenCheck = jwtDecode<TokenCheck>(token);

      if (payload.roles && Array.isArray(payload.roles) && payload.roles.includes('admin')) {
        return true;
      }
    }
  } catch (error) {
    console.error('Error decoding token', error);
    router.navigate(['/auth/login']);
    return false;
  }

  router.navigate(['/auth/login']);
  return false;
};
