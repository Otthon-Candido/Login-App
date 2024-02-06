import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const KEY = 'authToken';
@Injectable({ providedIn: 'root' })
export class TokenService {
  hasToken() {
    return !!this.getToken();
  }

  setToken(token: any) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  getTokenObservable(): Observable<any> {
    let token = localStorage.getItem(KEY);
    return of(token);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
