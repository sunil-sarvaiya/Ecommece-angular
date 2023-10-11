import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  adminRegistrationData(data: any) {
    const url = `${this.baseUrl}/adminRegistrationData`;
    return this.http.post(url, data);
  }
  adminLoginData() {
    const url = `${this.baseUrl}/adminRegistrationData`;
    return this.http.get(url);
  }
}
