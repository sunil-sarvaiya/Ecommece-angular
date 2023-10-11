import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getCategoryDataById(catid: any) {
    return this.http.get(`${this.baseUrl}/categoryList/${catid}`);
  }
  getCategoryData() {
    return this.http.get(`${this.baseUrl}/categoryList`);
  }
  getProductDetailsById(pid: any) {
    return this.http.get(`${this.baseUrl}/productLists/${pid}`);
  }
  getProductDetails() {
    return this.http.get(`${this.baseUrl}/productLists`);
  }
}
