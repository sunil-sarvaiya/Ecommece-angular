import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http:HttpClient) {

   }

   searchProduct(query:any){
    return this.http.get(`http://localhost:3000/productLists?q=${query}`);
   }

   contactUsFormDetails(data:any){
    return this.http.post("http://localhost:3000/contactUsDetails",data)

   }
}
