import { Injectable } from '@angular/core';
import { environment } from 'src/app/Environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL=environment.base;
  registerURL=environment.register;

  constructor( private http:HttpClient) {  }

  registrationData(data:any){
    return this.http.post(this.baseURL+this.registerURL,data)
  }

  sub = new Subject()

  loginData(){
    return this.http.get(this.baseURL+this.registerURL)
  }

  getProfileDataById(id:any){
   return this.http.get(`http://localhost:3000/registrationData/${id}`)
  }

  updateProfileData(data:any){
    return this.http.put(`http://localhost:3000/registrationData/${data.id}`,data)
  }

  postAddress(data:any){
    return this.http.post("http://localhost:3000/addressData",data)
  }

// update address data 

getAddress(){
  return this.http.get("http://localhost:3000/addressData")
}

  updateAddress(id:any,data:any){
    return this.http.put<any>(`http://localhost:3000/addressData/${id}`,data)
  }

  deleteAddress(id:any){
    return this.http.delete(`http://localhost:3000/addressData/${id}`)
  }
}
