import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adminRegistrationData(data:any){
  return this.http.post("http://localhost:3000/adminRegistrationData",data)


  }
  adminLoginData(){
  return this.http.get("http://localhost:3000/adminRegistrationData")


  }
}
