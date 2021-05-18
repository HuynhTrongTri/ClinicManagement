import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from 'src/app/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private req: WebRequestService) { }

  postAppointment(data): Observable<any> {
    return this.req.post("api/Appointments", data);
  }
  getAppointmentById(id: string): Observable<any> {
    return this.req.get("api/Appointments/"+ id)
  }
  updateAppointment(id,data) : Observable<any> {
    return this.req.put("api/Appointments/UpdateStatus/" + id, data);
  }
  getAppointmentByDoctor(id): Observable<any> {
    return this.req.get("api/Appointments/Doctors/"+ id)
  }
  getAppointmentByPatient(id): Observable<any> {
    return this.req.get("api/Appointments/Patients/"+ id)
  }
}
