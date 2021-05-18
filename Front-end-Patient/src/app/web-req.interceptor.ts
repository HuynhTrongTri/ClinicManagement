import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, Subject, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class WebReqInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    refreshingAccessToken: boolean;
    accessTokenRefreshed: Subject<any> = new Subject();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.addAuthHeader(req);
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                if (error.status === 401) {
                }
                return throwError(error);
            })
        );
    }
    addAuthHeader(request: HttpRequest<any>) {
        const token = this.authService.getAccessToken();
        if (token) {
            return request.clone({
                setHeaders: {
                    'Authorization': token,
                },
            });
        }
        return request;
    }
}