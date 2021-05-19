import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { Appointment } from '../list-appointment/appointment-model';
import { AppointmentService } from '../list-appointment/appointment.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent implements OnInit {
  appointment: Appointment;
  constructor(private appointmentService: AppointmentService, private appService: AppService, 
    private confirmMessage: ConfirmationService, private route: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.appService.appointmentId.subscribe(x => this.getAppointment(x));
  }
  async getAppointment(id) {
    this.appointment = await this.appointmentService.getAppointmentById(id).toPromise();
    if (this.appointment.feedback === undefined || this.appointment.feedback === null) {
      this.appointment.feedback = "Have not feedback yet!";
    }
  }
  backToList() {
    this.route.navigateByUrl("/list-appointment");
  }
  async cancelAppointment(id) {
    const data = {
      id: id,
      feedback: "string",
      doctorId: 4,
      isCancel: true
    };
    this.confirmMessage.confirm({
      message: 'Do you want to cancel this appointment?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        if (this.appointment.statusName === "Cancel") {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Appointment be canceled!', life: 3000 });
        } else {
          const res = await this.appointmentService.updateAppointment(id, data).toPromise();
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Cancel Successful!', life: 3000 });
          this.getAppointment(id);
        }
      }
    });

  }
}
