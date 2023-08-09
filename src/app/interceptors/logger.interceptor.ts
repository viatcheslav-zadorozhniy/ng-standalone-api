import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

import { LoggerService } from '../services';

export const loggerInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const loggerService = inject(LoggerService);

  return next(req).pipe(
    tap({
      next: () => loggerService.log('Request sent.'),
      error: () => loggerService.error('Request failed.'),
      complete: () => loggerService.log('Request completed.'),
    })
  );
};
