import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, take } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/utils/request/request.service';
import { LoginInfo } from 'src/app/signin/signin.model';
import { SignUpInfos } from 'src/app/signup/signUp.model';
import { SolicitResetPasswordInfos } from 'src/app/solicitResetPassword/solicitResetPassword.model';
import { ResetPasswordInfos } from 'src/app/resetPassword/resetPassword.model';
import { ConfirmSignUpInfos } from 'src/app/confirmSignUp/confirm-sign-up.model';
const API_URL = 'https://localhost:7202';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private requestService: RequestService
  ) {}

  authenticate(loginInfo: LoginInfo): Observable<string> {
    return this.http.post<string>(API_URL + '/login', loginInfo).pipe(
      take(1),
      map((response: string) => {
        return response;
      }),
      catchError(this.requestService.handleError)
    );
  }

  register(signUpInfos: SignUpInfos) {
    return this.http
      .post(API_URL + '/register', signUpInfos)
      .pipe(take(1), catchError(this.requestService.handleError));
  }

  resetSolicit(solicitResetPasswordInfos: SolicitResetPasswordInfos) {
    return this.http
      .post(API_URL + '/requestPasswordReset', solicitResetPasswordInfos)
      .pipe(take(1), catchError(this.requestService.handleError));
  }

  resetPassword(resetPasswordInfos: ResetPasswordInfos) {
    return this.http
      .post(API_URL + '/passwordReset', resetPasswordInfos)
      .pipe(take(1), catchError(this.requestService.handleError));
  }

  confirmSignUp(confirmSignUpInfos: ConfirmSignUpInfos) {
    return this.http
      .post(API_URL + '/active', confirmSignUpInfos)
      .pipe(take(1), catchError(this.requestService.handleError));
  }

  teste() {
    return this.http.get('http://localhost:5014' + '/Filme');
  }
}
