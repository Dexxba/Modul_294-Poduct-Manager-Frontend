import { CanActivateFn, Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

interface TokenCheck {
  sub: string;
  roles: string[];
  exp: number;
  iat: number;
  email: string;
}

export const adminStrongGuard: CanActivateFn = (route, state) => {
  const router = new Router();

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
  }

  router.navigate(['/auth/login']);
  return false;
};
