import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postCartData(data: any): Observable<any> {
    const url = `${this.baseUrl}/cartData/`;
    return this.http.post(url, data);
  }
  getCartData(): Observable<any> {
    const url = `${this.baseUrl}/cartData`;
    return this.http.get(url);
  }
  deleteCartItem(itemId: number): Observable<any> {
    const url = `${this.baseUrl}/cartData/${itemId}`;
    return this.http.delete(url);
  }
  postOrderDetails(data: any): Observable<any> {
    const url = `${this.baseUrl}/orderDetails`;
    return this.http.post(url, data);
  }
  getOrderDetails(): Observable<any> {
    const url = `${this.baseUrl}/orderDetails`;
    return this.http.get(url);
  }
  getAddressDataById(id: any): Observable<any> {
    const url = `${this.baseUrl}/addressData/${id}`;
    return this.http.get(url);
  }
}
