import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    getAllData(){
        return this.http.get('https://res.cloudinary.com/dj7m5tuv9/raw/upload/v1696962648/project%20data/json/projectData.json')
    }
}
