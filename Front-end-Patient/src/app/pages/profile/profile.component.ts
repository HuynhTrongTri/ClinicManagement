import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ProfileService } from './profile.service';
import { Patient } from './user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  patientId: number;
  patient: Patient;
  isEdit: boolean = false;
  isDisabled: boolean = true;
  constructor(private service: ProfileService, private appService: AppService, private route: Router) { }

  ngOnInit(): void {
  this.appService.currentId.subscribe(id => this.getProfile(id));
  }
  async getProfile(id) {
    try {
      const res = await this.service.getUserById(id).toPromise();
      this.patient = res;
    } catch (error) {
      this.route.navigateByUrl("/");
    }
   
  }
  backToHome(){
    this.route.navigateByUrl("/list-appointment");
  }
  async updateProfile(){
    const data = {
      id: this.patient.id,
      name: this.patient.name,
      address: this.patient.address,
      dateOfBirth: this.patient.dateOfBirth
    }
    await this.service.updateUser(this.patient.id,data).toPromise();
    this.getProfile(this.patient.id);
    this.isDisabled = true;
  }
  edit(){
    this.isEdit = true;
    this.isDisabled = false;
  }
  cancelUpdate() {
    this.isEdit = false;
    this.isDisabled = true;
  }
}
