import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  items!: MenuItem[];
  constructor(private router: Router) { }
  userName: string = "QuanBT";
  ngOnInit(): void {
    this.items = [{
      items: [{
        label: 'View Profile',
        icon: 'pi pi-user-edit',
        routerLink: '',
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        routerLink: '/',
      }
      ]
    },
    ];
  }
  goToHome() {
    this.router.navigateByUrl("/home");
  }
}
