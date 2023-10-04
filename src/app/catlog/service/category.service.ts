import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  // getProductDetails(){
  //   return this.http.get("http://localhost:3000/productList");
  // }

  // getProductDetailsById(id:any){
  //   return this.http.get(`http://localhost:3000/productList/${id}`);
  // }

  getCategoryDataById(catid:any){
    return this.http.get(`http://localhost:3000/categoryList/${catid}`);
  }



  getCategoryData(){
    return this.http.get("http://localhost:3000/categoryList");
  }

  getProductDetailsById(pid:any){
    return this.http.get(`http://localhost:3000/productLists/${pid}`);
  }

  getProductDetails(){
    return this.http.get("http://localhost:3000/productLists");
  }

  
}
