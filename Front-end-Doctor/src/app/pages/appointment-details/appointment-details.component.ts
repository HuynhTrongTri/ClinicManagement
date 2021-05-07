import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {

  appoitmentID = 2931;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string){
    this.router.navigateByUrl(path);
  }

}
