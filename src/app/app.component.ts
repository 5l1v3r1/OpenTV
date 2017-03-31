import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('sidenav') sideNav;
  menu: any;
  sidenavOpened: boolean;

  constructor() {
    this.menu = [
      {
        icon: "receipt",
        title: "News",
        bottom: false
      },
      {
        icon: "live_tv",
        title: "Serie TV",
        bottom: false
      },
      {
        icon: "tv",
        title: "Show televisivi",
        bottom: false
      },
      {
        icon: "theaters",
        title: "Film",
        bottom: false
      },
      {
        icon: "add",
        title: "Aggiungi un canale",
        bottom: false
      },
      {
        icon: "extension",
        title: "Estensioni",
        bottom: true
      }
    ];

    this.sidenavOpened = false;
  }

  toggleSidenav() {
    this.sideNav.nativeElement.setAttribute('style', 'width:'+ ( this.sidenavOpened ? '60px' : '250px') +' !important');
    this.sidenavOpened = !this.sidenavOpened;
  }

  ngAfterViewInit(): void {
    
  }

}