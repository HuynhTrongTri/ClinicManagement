import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from './login.service';

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

  constructor(private router: Router, private authService: AuthService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async onSummit(email: string, password: string) {
    const data = {
      "email": email,
      "password": password,
    };
    console.log(data);
    const reqApi = await this.authService.login(data).toPromise();
    console.log(reqApi);
    if (reqApi.statusCode === 200) {
      if (reqApi.data.role === 9999) {
        this.router.navigateByUrl('/home-admin');
      } else {
        this.router.navigateByUrl('/home');
      }
    } else {
      this.isError = true;
      this.errorMessage = 'Invalid UserName or Password';
    }
  }
}
