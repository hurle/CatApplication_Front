import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  // Implement api key interceptor to add the API key to the headers only wen a call to cat API is make
  if (req.url.startsWith(environment.apiCatUrl)) {
    const modifiedReq = req.clone({
      setHeaders: {
        'x-api-key': environment.apiCatkey
      }
    });
    return next(modifiedReq);
  }
  return next(req);
};