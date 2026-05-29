import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { apiKeyInterceptor } from './core/interceptors/api-key-interceptor';
import { withInterceptors, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // register the interceptor
    provideHttpClient(
      withInterceptors([apiKeyInterceptor])
    )
  ]
};
