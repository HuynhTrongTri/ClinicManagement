import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { WebRequestService } from 'src/app/web-request.service';
import jwt_decode from 'jwt-decode';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  url = '/Users/login';
  errorMessage: string = '';
  isError: boolean;

  constructor(private router: Router, private authService: AuthService, 
    private webRequest: WebRequestService, private appService:AppService) { }
    
  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  async onSummit(email: string, password: string) {
    const data = {
      'email': email,
      'password': password,
    };
    const reqApi = await this.authService.login(data).toPromise();
    this.authService.setAccessToken(reqApi);
    const decode = jwt_decode(reqApi);
    this.appService.changeId(parseInt(decode['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']));


    
    if (reqApi != null) {
        this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/login');
      this.isError = true;
      this.errorMessage = 'Invalid UserName or Password';
    }
  }


}
