import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { request } from 'node:http';
import { AppService } from 'src/app/app.service';
import { ProfileService } from './profile.service';
import { User } from './User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: number;
  currentUser: User;

  constructor(private appService: AppService, private proService: ProfileService, private router: Router) { }


  ngOnInit() {
    this.appService.currentDoctorId.subscribe(x => {
      this.id = x;
    });
    this.getDoctorInfo(this.id);
  }

  async getDoctorInfo(id: any) {
    try {
      const reqApi = await this.proService.apiProfile(id).toPromise();
      console.log(reqApi);
      this.currentUser = reqApi;
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }

  async updateDoctorInfo(id: any) {
    try {
      const reqApi = await this.proService.apiUpdateProfile(id, id).toPromise();
      console.log(reqApi);
      this.currentUser = reqApi;
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }
}
