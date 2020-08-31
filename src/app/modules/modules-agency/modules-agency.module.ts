import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { AgencyOrdersComponent } from './agency-orders/agency-orders.component';
import { AgencyOrdersCreateComponent } from './agency-orders/agency-orders-create/agency-orders-create.component';
import { DashboardComponent } from './agency-dashboard/dashboard.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { ModulesAgencyComponent } from './modules-agency.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { AgencyOrdersDetailsComponent } from './agency-orders/agency-orders-details/agency-orders-details.component';
import { AgencyOrdersAcceptedComponent } from './agency-orders-accepted/agency-orders-accepted.component';


const MAT_MODULES = [
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule
]

@NgModule({
  declarations: [
    ModulesAgencyComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AgencyOrdersCreateComponent,
    AgencyOrdersComponent,
    LoadingComponent,
    AgencyOrdersDetailsComponent,
    AgencyOrdersAcceptedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    MatNativeDateModule ,
    // Material
    MAT_MODULES,
  ],
})
export class AgencyModule { }
