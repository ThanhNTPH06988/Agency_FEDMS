import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AppConfigs } from 'src/app/configs/app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgreedOrder } from '../helpers/models/agreedOrder.model';

@Injectable({
  providedIn: 'root'
})
export class AgreedOrderService {

  constructor(
    private http: HttpClient
  ) { }

  searchAgreedOrder(param:any): Observable<any>{
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    let url = environment.baseUrl + '/'+AppConfigs.API_ENDPOINTS.AGREED_ORDER;
    return this.http.get<AgreedOrder[]>(url,{ headers: headers, params: param, responseType: 'json' });
  }
  
  accept(id: number): Observable<any> {
    return this.http.put<AgreedOrder>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.AGREED_ORDER}/${id}/agency_accept/`,"");
  }

  noAccept(id: number): Observable<any> {
    return this.http.put<AgreedOrder>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.AGREED_ORDER}/${id}/agency_reject/`,"");
  }

  complete(id: number): Observable<any> {
    return this.http.put<AgreedOrder>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.AGREED_ORDER}/${id}/agency_delivered/`,"");
  }

}
