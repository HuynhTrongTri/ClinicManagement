import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-slidemenu',
  templateUrl: './slidemenu.component.html',
  styleUrls: ['./slidemenu.component.scss']
})
export class SlidemenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
