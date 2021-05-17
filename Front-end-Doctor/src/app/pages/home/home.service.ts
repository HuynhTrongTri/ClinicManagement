import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  readonly ROOT_URL;
  token;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.ROOT_URL = 'https://doctorcareapi.azurewebsites.net/api/Appointments/Doctors';
  }
  apiAppointmentOfDoctor(data: any): Observable<any> {
    this.token = this.authService.getAccessToken();
    const header = new HttpHeaders({
      'Authorization': this.token,
    });
    return this.httpClient.get(this.ROOT_URL + '/' + data, { headers: header});
  }
}
