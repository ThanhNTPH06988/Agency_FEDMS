import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { finalize } from 'rxjs/operators';
import { DashboardProgressBarService } from 'src/app/services/dashboard-progress-bar.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService,
    private dashboardProgressBarService: DashboardProgressBarService
    ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      this.dashboardProgressBarService.show();

      request = request.clone({
        setHeaders: {
          Authorization: `Token ${currentUser.token}`
        }
      });
    }

    return next.handle(request).pipe(
      finalize(() => this.dashboardProgressBarService.hide())
    );
  }

}
