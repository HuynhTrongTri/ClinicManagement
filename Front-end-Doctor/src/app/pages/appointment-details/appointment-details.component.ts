import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  constructor(private router: Router, private appService: AppService, private appointService: AppointmentService, private messageService: MessageService) { }

  ngOnInit() {
    this.appService.currentAppointmentId.subscribe(x => {
      this.appointmentId = x;
    });
    this.getAppointmentById(this.appointmentId);
  }

  async getAppointmentById(aId: any) {
    try {
      const resApi = await this.appointService.apiAppointment(aId).toPromise();
      this.currentAppointment = resApi;
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }

  async updateDoctorInfo(id: any) {
    try {
      const data = {
        "feedback": this.currentAppointment.feedback,
      };
      await this.appointService.apiUpdateAppointment(id, data).toPromise();
      this.showSuccess();
    } catch (error) {
      // this.router.navigateByUrl('/');
      console.log(error);
    }
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  setFormFeedback(feedback){
    this.currentAppointment.feedback = feedback;
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }
}
