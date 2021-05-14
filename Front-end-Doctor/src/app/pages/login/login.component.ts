import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  url = "/Users/login";
  errorMessage: string = '';
  isError: boolean;
  constructor(private router: Router, private authService: AuthService, private webRequest: WebRequestService) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  async onSummit(email: string, password: string) {
    const data = {
      "email": email,
      "password": password,
    };
    console.log(data);
    const reqApi = await this.authService.login(data).toPromise();
    console.log(reqApi);
    if (reqApi != null) {
        this.router.navigateByUrl('/home');
    } else {
      this.isError = true;
      this.errorMessage = 'Invalid UserName or Password';
    }
  }


}
