import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private readonly codError: number = 499;
  private readonly msgError: string = 'Conexión fallida, intente más tarde';

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let res: any = { message: this.msgError, type: ErrorType.error };
        const error: any = err.error;

        if (error?.code) {
          res = { message: error.message, type: (error.code > this.codError ? ErrorType.error : ErrorType.warn) };
        }

        return throwError(res);
      })
    );
  }

}
