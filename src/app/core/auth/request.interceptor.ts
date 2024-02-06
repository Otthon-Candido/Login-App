import { Injectable } from "@angular/core";
import {  HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, firstValueFrom, from, lastValueFrom, Observable, throwError } from "rxjs";
import { TokenService } from "../token/token.service";
import { Router } from "@angular/router";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private tokenService : TokenService, private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{
        
     
     
        if(this.tokenService.hasToken()){

            this.tokenService.getTokenObservable().subscribe({
              
                next: async (token)=>{   
                  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
                  request = request.clone({ headers });

                }
             })
    }

 
    return next.handle(request);
        
    }

    handleRequestError(err:any){
        return throwError(() => new Error(err));
 }
    

}