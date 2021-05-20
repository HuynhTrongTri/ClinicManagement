import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  readonly ROOT_URL;
  token;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.ROOT_URL = 'https://doctorcareapi.azurewebsites.net/api/Appointments';
  }
  apiAppointment(data: any): Observable<any> {
    this.token = this.authService.getAccessToken();
    const header = new HttpHeaders({
      'Authorization': this.token,
    });
    return this.httpClient.get(this.ROOT_URL + '/' + data, { headers: header });
  }

  apiUpdateAppointment(id: any, data: any): Observable<any> {
    this.token = this.authService.getAccessToken();
    const header = new HttpHeaders({
      'Authorization': this.token,
    });
    console.log(id);
    console.log(data);
    
    return this.httpClient.put(this.ROOT_URL + '/UpdateStatus/' + id, data, { headers: header });
  }
}
