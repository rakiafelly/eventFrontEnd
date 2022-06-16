import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  baseUrl = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient) { }

  createTag(data: any) {
     return this.http.post(`${this.baseUrl}tag`, data);
  }

  getTag(){
    return this.http.get(`${this.baseUrl}tag`);
  }

  deleteTag(id:any){
    return this.http.delete(`${this.baseUrl}tag/`+id);
  }

  getTagById(id:any){
    return this.http.get(`${this.baseUrl}tag/`+id);
  }

  updateTag(id:any,data:any){
    return this.http.put(`${this.baseUrl}tag/`+id,data);
  }
}

