import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllProductDataaService {

  constructor(private http:HttpClient) { }

  postdata(data:any){
    return this.http.post("http://localhost:3000/productLists",data)
  }
  getData(){
    return this.http.get("http://localhost:3000/productLists");
  }

  deleteData(id:any){
    return this.http.delete(`http://localhost:3000/productLists/${id}`)
  }
  getDataById(id:any){
    return this.http.get(`http://localhost:3000/productLists/${id}`)
  }
  updateData(id:any,data:any){
    return this.http.put(`http://localhost:3000/productLists/${id}`,data)
  }
}
