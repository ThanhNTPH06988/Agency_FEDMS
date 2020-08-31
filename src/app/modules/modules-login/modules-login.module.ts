import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModulesLoginComponent } from './modules-login.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ModulesLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule
  ],
})
export class LoginModule { }