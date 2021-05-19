import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { Doctor } from '../list-doctor/doctor-model';
import { DoctorService } from '../list-doctor/doctor.service';
import { Appointment } from './appointment-model';
import { AppointmentService } from './appointment.service';
export interface DoctorOption{
  name?: string;
  id?: number;
}
@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.scss']
})
export class ListAppointmentComponent implements OnInit {
  appointment: Appointment;
  appointmentDialog: boolean;
  appointmentId: any;
  optionDoctor: Doctor;
  listAppointment: Appointment[] = [];
  submitted: boolean;
  listDoctor: Doctor[] = [];
  selectedAppointment: Appointment[] = [];
  constructor(private service: AppointmentService,
    private appService: AppService, private route: Router, private doctorService: DoctorService,
    private messageService: MessageService) { }
  visibleSidebar;
  ngOnInit(): void {
    this.appService.currentId.subscribe(id => this.appointmentId = id );
    this.getListAppointment(this.appointmentId);
    this.getListDoctor();
  }
  async getListDoctor() {
    const listDoctor = await this.doctorService.getListDoctor().toPromise();
    listDoctor.forEach((element) => {
      this.listDoctor.push({ name: element.name, id: element.id });
    });
  }
  async getListAppointment(id) {
    try {
      this.listAppointment = await this.service.getAppointmentByPatient(id).toPromise();
    } catch (error) {
      this.route.navigateByUrl("/");
    }
  }
  editAppointment(appt: Appointment) {
    this.appointment = { ...appt };
    this.appointmentId = appt.id;
    this.appService.changeAppointmentId(this.appointmentId);
    this.route.navigateByUrl("/detail-appointment");
  }
  hideDialog() {
    this.appointmentDialog = false;
    this.submitted = false;
  }
  openNew() {
    this.appointment = {};
    this.submitted = false;
    this.appointmentDialog = true;
  }
  async createAppointment() {
    const data = {
      doctorId: this.appointment.doctor.id,
      date: this.appointment.date,
      hour: this.appointment.hour
    }
    await this.service.postAppointment(data).toPromise();
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Appointment Created', life: 3000 });
    this.getListAppointment(this.appointmentId);
    this.appointmentDialog = false;
  }
  // async saveProduct() {
  //   this.submitted = true;
  //   const data = {
  //     requestid: this.request.requestId,
  //     status: this.request.status.name
  //   };
  //   if (this.request?.status?.name?.trim()) {
  //     if (this.request.timeOT) {
  //       const res = await this.requestService.updateOTRequest(data).toPromise();
  //       if (res.statusCode === 200) {
  //         this.getAllRequest();
  //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'OT Request is updated', life: 3000 });
  //       }
  //     }
  //     else {
  //       const res = await this.requestService.updateDayOffRequest(data).toPromise();
  //       if (res.statusCode === 200) {
  //         this.getAllRequest();
  //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Day-off Request is updated', life: 3000 });
  //       }
  //     }
  //     this.listRequest = [...this.listRequest];
  //     this.appointmentDialog = false;
  //     this.request = {};
  //   }
  // }
}
