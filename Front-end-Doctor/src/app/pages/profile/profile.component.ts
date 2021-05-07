import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fullname = "Bui Trung Quan";
  address = "Ho Chi Minh City";
  yob = "1999";
  experience = "6 years";
  email = "trungquan10a10@gmail.com";
  phone = "0942740717";
  constructor() { }

  ngOnInit() {
  }

}
