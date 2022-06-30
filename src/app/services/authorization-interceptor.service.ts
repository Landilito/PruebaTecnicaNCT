import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Authorization':'efbd4282-cdee-462f-be42-1ab3f9d2e28a'
    });

    const updatedHttpRequest = req.clone({
      headers: headers
    })
    
    return next.handle(updatedHttpRequest)
  }
}
