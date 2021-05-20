import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly ROOT_URL;
  token;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.ROOT_URL = 'https://doctorcareapi.azurewebsites.net/api/Users';

  }
  apiProfile(data: any): Observable<any> {
    this.token = this.authService.getAccessToken();
    const header = new HttpHeaders({
      'Authorization': this.token,
    });
    return this.httpClient.get(this.ROOT_URL + '/' + data, { headers: header });
  }
  apiUpdateProfile(id: any, data: any): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': this.token,
    });
    return this.httpClient.put(this.ROOT_URL + '/' + id, data, { headers: header });
  }

}
