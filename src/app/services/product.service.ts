import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConfigs } from '../configs/app.config';
import { Product } from '../helpers/models/product.model';
import { ProductType } from '../helpers/models/productType.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getPagination(pageNumber?: number, pageSize?: number, idProductType?: number): Observable<any> {
    if (pageNumber || pageSize) {
      return this.http.get<Product[]>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.PRODUCT}/?page=${pageNumber + 1}&page_size=${pageSize}`);
    }
   else if (idProductType || pageNumber || pageSize) {
      return this.http.get<Product[]>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.PRODUCT}/?product_type_id=${idProductType}&?page=${pageNumber + 1}&page_size=${pageSize}`);
    }
    else {
      return this.http.get<Product[]>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.PRODUCT}/`);
    }
  }

  getPaginationTest(param:any): Observable<any>{
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    let url = environment.baseUrl + '/'+AppConfigs.API_ENDPOINTS.PRODUCT;
    return this.http.get<Product[]>(url,{ headers: headers, params: param, responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    return this.http.get<Product>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.PRODUCT}/${id}/`);
  }

  getAllProductType(): Observable<any> {
    return this.http.get<ProductType>(`${environment.baseUrl}/${AppConfigs.API_ENDPOINTS.PRODUCT_TYPE}/`);
  }

}
