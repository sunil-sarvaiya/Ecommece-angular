import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  postCartData(data:any){
    return this.http.post("http://localhost:3000/cartData/",data)
  }

  getCartData(){
    return this.http.get("http://localhost:3000/cartData")
  }


  deleteCartItem(itemId: number): Observable<any> {
    const url = `http://localhost:3000/cartData/${itemId}`;
    return this.http.delete(url);
  }

  postOrderDetails(data:any){
    return this.http.post("http://localhost:3000/orderDetails",data)
  }

 

  getOrderDetails(){
    return this.http.get("http://localhost:3000/orderDetails")
  }

  getAddressDataById(id:any){
      return this.http.get(`http://localhost:3000/addressData/${id}`);
  }
}
