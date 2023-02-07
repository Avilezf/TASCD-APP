import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from as fromPromise, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private sessionService: SessionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.sessionService.getToken()).pipe(
      mergeMap(token => {
        console.log(token)
        if (!token ||  req.url.includes("api/auth/")) {
          return next.handle(req);
        }

        const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });

        console.log(headers);
        return next.handle(headers);
      }));
  }

}
