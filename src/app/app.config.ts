import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {ApiModule, Configuration} from "./openapi-client";
import {provideHttpClient} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),provideHttpClient(), importProvidersFrom(ApiModule.forRoot(() => {
    return new Configuration({basePath: 'https://product-manager.cyrotech.ch'})
  }),),]
};
