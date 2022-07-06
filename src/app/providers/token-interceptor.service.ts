import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('AuthUser')
    if (token != null) {
      const newRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        },
      })
      return next.handle(newRequest);
    } else {
      return next.handle(request)
    }
  }
}
