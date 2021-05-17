import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { HomeService } from './home.service';
import { Appointment } from './Appointment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  doctorId;
  listAppointment: Appointment[] = [];
  comingAppointment: Appointment[] = [];
  cancelAppointment: Appointment[] = [];
  sortedAppointment: Appointment[] = [];
  
  constructor(private router: Router, private appService: AppService, private homeService: HomeService) { }

  ngOnInit() {
    this.appService.currentDoctorId.subscribe(x => {
      this.doctorId = x;
    });
    this.getAllAppointment(this.doctorId);
  }

  async getAllAppointment(id: any) {
    try {
      console.log('id: ' + id);
      const resApi = await this.homeService.apiAppointmentOfDoctor(id).toPromise();
      this.listAppointment = resApi;
      console.log(this.listAppointment);
      this.listAppointment.reverse();

      for (let index = 0; index < this.listAppointment.length; index++) {
        const element = this.listAppointment[index];
        if (element.statusName == 'Cancel') {
          this.cancelAppointment.push(element);

        } else {
          this.comingAppointment.push(element);
        }
      }

    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }

  openAppointmentDetails(aId: any) {
    aId = parseInt(aId);
    console.log(aId);
    this.appService.changAppointmentId(aId);
    console.log(this.appService.currentAppointmentId);
    this.navigateTo('/details');

  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
