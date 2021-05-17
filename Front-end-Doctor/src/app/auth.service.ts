import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './pages/login/login.service';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private loginApi: LoginService, private router: Router) { }
  login(data: any) {
    return this.loginApi.apiLogin(data).pipe(
      shareReplay(),
      tap((res) => {
        this.setSession('Bearer ' + res);
      })
    );
  }

  logout() {
    this.removeSession();
    this.router.navigate(['/']);
  }

  getAccessToken() {
    return localStorage.getItem('Authorization');
  }
  setAccessToken(accessToken: string) {
    localStorage.setItem('Authorization', "Bearer " + accessToken);
  }
  private setSession(accessToken: string) {
    localStorage.setItem('Authorization', accessToken);
  }
  private removeSession() {
    localStorage.removeItem('Authorization');
  }
}
