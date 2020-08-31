import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/helpers/authentication/authentication.service';
import { Role } from 'src/app/helpers/models/role.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public currentUser = this.authenticationService.currentUserValue;
  public currentUserRole = Role[this.currentUser.role];

  constructor(private authenticationService: AuthenticationService) { }


  ngOnInit() {
  }

}
