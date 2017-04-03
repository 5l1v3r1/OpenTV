import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from "app/models/menu_item";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [
    MenuService
  ]
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidenav') sideNav;
  menu: MenuItem[];
  sidenavOpened: boolean;

  constructor(menuService: MenuService) {
    this.sidenavOpened = false;
    this.menu = menuService.getMenuItems();
  }

  toggleSidenav() {
    this.sideNav.nativeElement.setAttribute('style', 'width:'+ ( this.sidenavOpened ? '60px' : '250px') +' !important');
    this.sidenavOpened = !this.sidenavOpened;
  }

  ngOnInit() {
    
  }

}
