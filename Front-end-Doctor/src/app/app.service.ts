import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private doctorId = new BehaviorSubject<number>(undefined);
  currentDoctorId = this.doctorId.asObservable();
  private appointmentId = new BehaviorSubject<number>(undefined);
  currentAppointmentId = this.appointmentId.asObservable();

  constructor() { }

  changeId(id: number) {
    this.doctorId.next(id);
  }

  changAppointmentId(aId: number) {
    this.appointmentId.next(aId);
  }

}
