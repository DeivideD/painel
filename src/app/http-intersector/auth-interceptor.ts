import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Location } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { AplicationService } from '../shared/';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private appService: AplicationService,
    private _loc: Location 
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

     const token = this.appService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if (token && !this.appService.isTokenExpired(token)) {
      // O request é imutavel, ou seja, não é possível mudar nada
      // Faço o clone para conseguir mudar as propriedades
      // Passo o token de autenticação no header
      request = req.clone({
        headers: req.headers.set('x-access-token', token)
      });
    }

    // retorno o request com o erro tratado
    return next.handle(request)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro de client-side ou de rede
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro retornando pelo backend
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`);
    }
    // retornar um observable com uma mensagem amigavel.
    return throwError(error.error );
  }
}
