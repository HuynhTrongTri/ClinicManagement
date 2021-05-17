import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  items!: MenuItem[];
  constructor(private router: Router, private authSer:AuthService) { }
  userName: string = "QuanBT";
  ngOnInit(): void {
    this.items = [{
      items: [{
        label: 'View Profile',
        icon: 'pi pi-user-edit',
        routerLink: '/profile',
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        routerLink: '/',
        command: e => this.authSer.logout()
      }
      ]
    },
    ];
  }
  goToHome() {
    this.router.navigateByUrl("/home");
  }
}
