import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyModule } from './modules/modules-agency/modules-agency.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TokenInterceptor } from './helpers/interceptors/token.interceptor';
import { ErrorInterceptor } from './helpers/interceptors/error.interceptor';
import { LoginModule } from './modules/modules-login/modules-login.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AgencyModule,
    LoginModule,
    HttpClientModule,
    ToastrModule.forRoot()
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
