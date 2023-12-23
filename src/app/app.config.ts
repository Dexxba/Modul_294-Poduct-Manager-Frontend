// Importing necessary Angular core functionalities and other utilities.
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {ToastrModule} from "ngx-toastr";
import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {ApiModule, Configuration} from "./openapi-client";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authorizationInterceptor} from "./pages/auth/interceptor/authorization-interceptor.interceptor";

// Defining the application configuration object.
export const appConfig: ApplicationConfig = {
  providers: [
    // Providing routing capabilities using the defined routes.
    provideRouter(routes),

    // Enabling animations throughout the application.
    provideAnimations(),

    // Setting up the HTTP client with an authorization interceptor.
    // This interceptor will be used in all HTTP requests made by the HttpClient.
    provideHttpClient(withInterceptors([authorizationInterceptor])),


    // Importing and configuring the API module.
    // The ApiModule is initialized with a configuration that sets the base path for API calls.
    importProvidersFrom(ApiModule.forRoot(() => {
        return new Configuration({basePath: 'https://product-manager.cyrotech.ch'})
      }),

    // Initializing ToastrModule for displaying toast notifications.
      ToastrModule.forRoot(),
    ),
  ]
};
