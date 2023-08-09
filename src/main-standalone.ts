import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';
import { loggerInterceptor, retryInterceptor } from './app/interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      appRoutes,
      withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' })
    ),

    // https://angular.io/api/core/importProvidersFrom
    // importProvidersFrom(NgModuleOne, NgModuleTwo),

    // https://angular.io/api/common/http/provideHttpClient
    provideHttpClient(
      withInterceptors([
        loggerInterceptor,
        retryInterceptor({ count: 3 }),
      ]),
    ),

    provideZoneChangeDetection({
      // https://angular.io/api/core/BootstrapOptions#ngZoneEventCoalescing
      eventCoalescing: true,

      // https://angular.io/api/core/BootstrapOptions#ngZoneRunCoalescing
      runCoalescing: true,
    }),
  ],
}).catch(error => console.error(error));
