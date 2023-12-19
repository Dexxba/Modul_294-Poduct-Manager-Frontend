import { HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  if (localStorage.getItem("ACCESS_TOKEN")) {
    return next(req.clone({
      setHeaders: {
        'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      }
    }));
  }
  return next(req);
};

