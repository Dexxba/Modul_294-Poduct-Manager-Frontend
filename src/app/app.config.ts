import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {ToastrModule} from "ngx-toastr";
import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {ApiModule, Configuration} from "./openapi-client";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authorizationInterceptor} from "./pages/auth/interceptor/authorization-interceptor.interceptor";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([authorizationInterceptor])),
    importProvidersFrom(ApiModule.forRoot(() => {
    return new Configuration({basePath: 'https://product-manager.cyrotech.ch'})
  }),
      ToastrModule.forRoot(),
),
]
};
