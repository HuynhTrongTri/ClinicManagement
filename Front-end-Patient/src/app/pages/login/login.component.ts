import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from './login.service';
import jwt_decode from "jwt-decode";
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtEmail: any;
  txtPassword: any;
  data: any;
  errorMessage: string = '';
  isError: boolean;
  constructor(private router: Router, private authService: AuthService, private loginService: LoginService,
    private appService: AppService) { }

  ngOnInit(): void {
  }

  async onSummit(email: string, password: string) {
    const data = {
      "email": email,
      "password": password,
    };
    const reqApi = await this.authService.login(data).toPromise();
    const decode =  await jwt_decode(reqApi);
    if (decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === "Patient") {
     this.appService.changeId(parseInt(decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]));     
     this.router.navigateByUrl("/list-appointment");
    } else {
      this.isError = true;
      this.errorMessage = 'Invalid UserName or Password';
    }
  }
}
