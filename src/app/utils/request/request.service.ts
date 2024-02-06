import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private router: Router) { }

  handleError = (error: HttpErrorResponse) => {
    let errorMessage:any = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if (error.status == 400 || error.status == 500 || error.status == 413) {
        errorMessage = error.error.ResponseText;
      } else if (error.status == 401) {
        errorMessage = "Usuário não autorizado.";
        this.router.navigate(['/login']);
      } 
      else if (error.status == 409) {
        errorMessage = error;
      }
      else if (error.status == 0)
      {
          // Servidor indisponível
          return throwError('Ocorreu um erro inesperado, tente novamente. Caso o problema persista, entre em contato com o suporte.');
      }
      else {
        errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
