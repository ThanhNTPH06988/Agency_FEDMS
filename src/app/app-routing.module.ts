import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyOrdersComponent } from './modules/modules-agency/agency-orders/agency-orders.component';
import { DashboardComponent } from './modules/modules-agency/agency-dashboard/dashboard.component';
import { ModulesLoginComponent } from './modules/modules-login/modules-login.component';
import { ModulesAgencyComponent } from './modules/modules-agency/modules-agency.component';
import { AuthGuard } from './helpers/guards/auth.guard';
import { AgencyOrdersAcceptedComponent } from './modules/modules-agency/agency-orders-accepted/agency-orders-accepted.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: ModulesLoginComponent },
  {
    path: 'agency', component: ModulesAgencyComponent, canActivate: [AuthGuard], children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'orders', component: AgencyOrdersComponent },
        { path: 'accepted/:id', component: AgencyOrdersAcceptedComponent }

      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
