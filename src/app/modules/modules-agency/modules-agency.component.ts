import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-modules-agency',
  templateUrl: './modules-agency.component.html',
  styleUrls: ['./modules-agency.component.css']
})
export class ModulesAgencyComponent {

  title = 'pro-dashboard-angular';

  constructor(private appService: AppService) { }
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

}
