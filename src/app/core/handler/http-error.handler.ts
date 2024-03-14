import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retryWhen, mergeMap } from 'rxjs/operators';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  private readonly codError: number = 499;
  private readonly msgError: string = 'Conexión fallida, intente más tarde';
  private readonly maxRetryAttempts: number = 3;
  private readonly retryDelay: number = 1000; // Tiempo en milisegundos

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retryWhen(errors => errors.pipe(
        mergeMap((error, count) => {
          if (count < this.maxRetryAttempts && error instanceof HttpErrorResponse) {
            return timer(this.retryDelay);
          }
          return throwError(error);
        })
      )),
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
