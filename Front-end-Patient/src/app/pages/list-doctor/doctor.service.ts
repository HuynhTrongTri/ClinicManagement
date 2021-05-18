import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from 'src/app/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private req: WebRequestService) { }

  getListDoctor(): Observable<any> {
    return this.req.get('api/Users/Doctors');
  }
}
