import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryImageService {

  constructor(private http:HttpClient) { }

  postCategoryImage(data:any){
    return this.http.post("http://localhost:3000/forImage",data)
  }

  getCategoryImageData(){
    return this.http.get("http://localhost:3000/forImage")
  }

  getCategoryImageById(id:any){
    return this.http.get(`http://localhost:3000/forImage/${id}`)
  }

  deleteCategoryImageData(id:any){
    return this.http.delete(`http://localhost:3000/forImage/${id}`)
  }
  updateCategoryImageData(id:any,data:any){
    return this.http.put(`http://localhost:3000/forImage/${id}`,data)
  }
}
