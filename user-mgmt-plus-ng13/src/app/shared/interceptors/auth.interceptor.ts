import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // ng g interceptor shared/interceptors/auth

  constructor() {}

  // intercept all subsequent http calls and manipulate http req header with auth token
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log(request);
    // access the token
    const bearerToken = sessionStorage.getItem('authToken');
    console.log(bearerToken);

    // clone the request, in order to modify the req header.
    request = request.clone({
      // manipulate http req header with auth token
      setHeaders:{
        Authorization: 'Bearer ' + bearerToken
      }
    })
    return next.handle(request);

  }
}
