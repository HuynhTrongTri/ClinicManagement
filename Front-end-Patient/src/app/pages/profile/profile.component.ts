import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ProfileService } from './profile.service';
import { Patient } from './user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  patientId: number;
  patient: Patient;
  constructor(private service: ProfileService, private appService: AppService) { }

  ngOnInit(): void {
  this.appService.currentId.subscribe(id => this.getProfile(id));
  }
  async getProfile(id) {
    const res = await this.service.getUserById(id).toPromise();
    this.patient = res;
    console.log(this.patient);
  }
}
