import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private roleSource = new BehaviorSubject<number>(undefined);
  // currentRole = this.roleSource.asObservable();
  readonly ROOT_URL;
  constructor(private httpClient: HttpClient) {
    this.ROOT_URL = 'https://easycare-api-app.azurewebsites.net/api/Users/login';
  }
  apiLogin(data: any): Observable<any> {
    return this.httpClient.post(this.ROOT_URL, data, {responseType: 'text'});
  }
  // changeRole(role: number) {
  //   this.roleSource.next(role);
  // }
}
