import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Appointment } from './Appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {

  appointmentId;
  currentAppointment: Appointment;
  constructor(private router: Router, private appService: AppService, private appointService: AppointmentService) { }

  ngOnInit() {
    this.appService.currentAppointmentId.subscribe(x => {
      this.appointmentId = x;
    });
    this.getAppointmentById(this.appointmentId);
  }

  async getAppointmentById(aId: any) {
    try {
      console.log(aId);
      const resApi = await this.appointService.apiAppointment(aId).toPromise();
      console.log(resApi);
      this.currentAppointment = resApi;
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

}
