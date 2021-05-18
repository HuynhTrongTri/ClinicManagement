import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor-model';

import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {
  Doctor : Doctor;
  requestDialog: boolean;
  listDoctor: Doctor[] = [];
  submitted: boolean;
  selectedDoctor: Doctor[] = [];
  constructor(private service: DoctorService) { }

  ngOnInit(): void {
    this.getListDoctor();
  }
  async getListDoctor() {
    const listDoctor = await this.service.getListDoctor().toPromise();
    // console.log(listDoctor);
  }
  editDoctor(appt: Doctor) {
    this.Doctor = { ...appt };
    this.requestDialog = true;
  }
  hideDialog() {
    this.requestDialog = false;
    this.submitted = false;
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
  //     this.requestDialog = false;
  //     this.request = {};
  //   }
  // }
}
