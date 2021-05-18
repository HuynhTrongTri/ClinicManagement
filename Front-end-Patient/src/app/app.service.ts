import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //Global Variable Patient ID
  private patientId = new BehaviorSubject<number>(undefined);
  currentId = this.patientId.asObservable();
  //Global Variable Appointment ID

  private appmntsId = new BehaviorSubject<number>(undefined);
  appointmentId = this.appmntsId.asObservable();
  
  constructor() { }
  changeId(id: number) {
    this.patientId.next(id);
  }
  changeAppointmentId(id: number) {
    this.appmntsId.next(id);
  }
}
