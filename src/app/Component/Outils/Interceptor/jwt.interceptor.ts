import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../../../Service/Auth/auth.service';

export function jwtInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const router = inject(Router);
  const tokenService = inject(AuthService);

  const securedGetEndpoints = ['/clubs/hma9', '/auth/'];

  const isPublicRequest =
    !['POST', 'PUT', 'DELETE'].includes(request.method) &&
    !(
      request.method === 'GET' &&
      securedGetEndpoints.some((endpoint) => request.url.includes(endpoint))
    );

  if (isPublicRequest) {
    return next(request);
  }

  if (request.url.includes('/auth/')) {
    return next(request);
  }

  const token = tokenService.getToken();

  if (token) {
    // console.log(token);

    return next(
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type':
            request.body instanceof FormData
              ? 'multipart/form-data'
              : 'application/json',
        },
      })
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  return next(request);
}
