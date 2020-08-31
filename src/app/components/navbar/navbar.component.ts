import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/helpers/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private appService: AppService,
    private authenticationService: AuthenticationService) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

  logout() {
    this.authenticationService.logout();
  }
}
