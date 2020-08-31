import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AppConfigs } from 'src/app/configs/app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOrder } from '../helpers/models/requestOrder.model';
import { Test } from '../helpers/models/testReqOrder';
import { AuthenticationService } from '../helpers/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RequestOrderService {

  constructor(
    private http: HttpClient
  ) { }

  searchRequestOrder(param:any): Observable<any>{
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    let url = environment.baseUrl + '/'+AppConfigs.API_ENDPOINTS.REQUEST_ORDER;
    return this.http.get<RequestOrder[]>(url,{ headers: headers, params: param, responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    return this.http.get<RequestOrder>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.REQUEST_ORDER}/${id}/`);
  }

  create(product: RequestOrder): Observable<any> {
    return this.http.post<RequestOrder>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.REQUEST_ORDER}/`, product);
  }

  update(id: number, agency: RequestOrder): Observable<any> {
    return this.http.put<RequestOrder>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.REQUEST_ORDER}/${id}/`, agency);
  }

}
