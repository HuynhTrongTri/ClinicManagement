import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  formUser: User;

  constructor(private appService: AppService, private proService: ProfileService, private router: Router, private messageService: MessageService) { }


  ngOnInit() {
    this.appService.currentDoctorId.subscribe(x => {
      this.id = x;
    });
    this.getDoctorInfo(this.id);
  }

  async getDoctorInfo(id: any) {
    try {
      const reqApi = await this.proService.apiProfile(id).toPromise();
      this.currentUser = reqApi;
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }

  async updateDoctorInfo(id: any) {
    try {
      const data = {
        "name": this.currentUser.name,
        "email": this.currentUser.email,
        "address": this.currentUser.address,
        "dateOfBirth": this.currentUser.dateOfBirth,
      };
      await this.proService.apiUpdateProfile(id, data).toPromise();
      this.showSuccess();
    } catch (error) {
      this.router.navigateByUrl('/');
    }
  }

  setFormName(name) {
    this.currentUser.name = name;
  }
  setFormEmail(email) {
    this.currentUser.email = email;
  }
  setFormAddress(address) {
    this.currentUser.address = address;
  }
  setFormDateOfBirth(dob) {
    this.currentUser.dateOfBirth = dob;
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }
}
