// Importing the type definition for an HTTP interceptor from Angular's HTTP package.
import { HttpInterceptorFn } from '@angular/common/http';

// Defining the interceptor function. 'HttpInterceptorFn' is a function type for intercepting HTTP requests.
export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  // Checking if an access token exists in localStorage.
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken) {
    // If the access token is found, the request is cloned with additional headers.
    // 'req.clone' creates a copy of the outgoing request.
    return next(req.clone({
      // Setting the 'Authorization' header with the Bearer token.
      setHeaders: {
        'Authorization': `Bearer ${accessToken}`
      }
    }));
  }

  // If there's no access token, the original request is forwarded without modification.
  return next(req);
};
